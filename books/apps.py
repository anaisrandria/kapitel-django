from django.apps import AppConfig
from django.conf import settings
from .utils import StatusLabel

class BooksConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'books'
