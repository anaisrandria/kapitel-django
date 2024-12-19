from django.db import models
from django.conf import settings
from .utils import StatusLabel

class Book(models.Model):
    google_book_id = models.IntegerField()

class UserBook(models.Model):
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    book_id = models.ForeignKey(Book, related_name='book_id', on_delete=models.CASCADE)
    status = models.IntegerField(choices=StatusLabel.choices(), default=StatusLabel.QUEUED)

    def get_book_status_label(self):
        return StatusLabel(self.status)