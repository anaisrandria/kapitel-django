from django.shortcuts import render
from django.http import JsonResponse
import requests

def get_book(request):
    url = f'https://books.googleapis.com/books/v1/volumes?q=$changer&maxResults=40&printType=books&key=AIzaSyAMkR99i88RXvSuDZ3CmZdbk5-zt8znpGE'
    response = requests.get(url)
    data = response.json()
    print('🧀 Data is:', data)
    # return render(request, 'books/home.html', {'data': data})
    return JsonResponse(data)