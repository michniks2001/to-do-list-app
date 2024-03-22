"""Registers the model Task to the admin panel."""

from django.contrib import admin
from .models import Task

admin.site.register(Task)
