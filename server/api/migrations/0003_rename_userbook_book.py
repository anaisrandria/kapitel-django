# Generated by Django 5.1.4 on 2025-01-06 13:30

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_user_id_userbook_user'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserBook',
            new_name='Book',
        ),
    ]
