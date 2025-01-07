from django.db import models
from django.conf import settings
from .utils import StatusLabel
from django.contrib.auth.models import User

class Book(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    google_book_id = models.IntegerField()
    title = models.CharField(max_length=280)
    authors = models.CharField(max_length=280)
    release_year = models.IntegerField()
    status = models.IntegerField(choices=StatusLabel.choices(), default=StatusLabel.QUEUED)
    comments = models.CharField(max_length=500, blank=True, null=True)
    current_page = models.IntegerField(blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)

    def get_book_status_label(self):
        return StatusLabel(self.status)
    
    def __str__(self):
        return self.title
        