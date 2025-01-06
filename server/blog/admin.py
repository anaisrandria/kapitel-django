from django.contrib import admin
from .models import Post

# Pour que le modèle Post soit visible dans l'interface d'administration
admin.site.register(Post)