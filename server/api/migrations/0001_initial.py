# Generated by Django 5.1.4 on 2024-12-20 15:25

import api.utils
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserBook',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('google_book_id', models.IntegerField()),
                ('status', models.IntegerField(choices=[(1, 'READING'), (2, 'QUEUED'), (3, 'COMPLETED'), (4, 'PAUSED'), (5, 'ARCHIVED')], default=api.utils.StatusLabel['QUEUED'])),
                ('comments', models.CharField(blank=True, max_length=500, null=True)),
                ('current_page', models.IntegerField(blank=True, null=True)),
                ('start_date', models.DateField(blank=True, null=True)),
                ('end_date', models.DateField(blank=True, null=True)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_id', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
