from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_book, name='book_list'),
    # path('books/<str:search_input>/', views.get_book, name='book_detail'),
]