# Views are all our endpoints.

import requests
import os
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import UserBook
from .serializer import UserBookSerializer

#get books from google books api
def book_list(request):
    api_key = os.getenv('API_KEY')
    url = f'https://books.googleapis.com/books/v1/volumes?q=$changer&maxResults=40&langRestrict=fr&printType=books&key={api_key}'
    response = requests.get(url)
    data = response.json()
    print('🧀 Data is:', data)
    return JsonResponse(data)
    # return render(request, 'books/home.html', {'data': data})

@api_view(['GET']) #to define if it is a get request
def get_books_by_user(request, user_id): #define endpoint function)
    user_books = UserBook.objects.filter(user_id=user_id)  
    serialized_books = UserBookSerializer(user_books, many=True)  # many=True car il y a plusieurs objets
    
    return Response(serialized_books.data)

@api_view(['POST'])
def add_book(request):
    serializer = UserBookSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)