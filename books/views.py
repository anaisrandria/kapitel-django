from django.shortcuts import render
from django.http import JsonResponse
import requests
import os

def get_book(request):
    api_key = os.getenv('API_KEY')
    url = f'https://books.googleapis.com/books/v1/volumes?q=$changer&maxResults=40&printType=books&key={api_key}'
    response = requests.get(url)
    data = response.json()
    print('🧀 Data is:', data)
    return JsonResponse(data)