from django.urls import path
from . import views

urlpatterns = [
    path('', views.book_list, name='book_list'),
    # path('books/<str:search_input>/', views.book_list, name='book_detail'),
]