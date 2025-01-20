# Views are all our endpoints.

import requests
import os
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Book
from .serializer import BookSerializer

#get books from google books api
# def get_books(request):
#     api_key = os.getenv('API_KEY')
#     url = f'https://books.googleapis.com/books/v1/volumes?q=$changer&maxResults=40&langRestrict=fr&printType=books&key={api_key}'
#     response = requests.get(url)
#     data = response.json()
#     print('🧀 Data is:', data)
#     return JsonResponse(data)
    # return render(request, 'books/home.html', {'data': data})

@api_view(['GET']) #to define if it is a get request
def get_books_by_user(request): #define endpoint function)
    books = Book.objects.all()  
    serialized_books = BookSerializer(books, many=True)  # many=True car il y a plusieurs objets
    return Response(serialized_books.data)

@api_view(['POST'])
def add_book(request):
    data = request.data
    serializer = BookSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def book_detail(request, pk):
    try:
        book = Book.objects.get(pk=pk)
    except Book.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        data = request.data
        serializer = BookSerializer(book, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)