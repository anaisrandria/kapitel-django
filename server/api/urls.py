from django.urls import path
from . import views

urlpatterns = [
    path('books/', views.get_books_details, name='books_details'), # Affiche le résultat de la requête au format JSON 
    path('books-user/<int:user_id>/', views.get_books_by_user, name='get_book'),
    path('books-user/add/', views.add_book, name="add_book"),
    # path('books/<str:search_input>/', views.book_list, name='book_detail'),
]