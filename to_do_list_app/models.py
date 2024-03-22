"""Models.py file for the to_do_list_app app."""

from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model

User = get_user_model()


class Task(models.Model):
    """Task model for the to_do_list_app app.

    Args:
        models (Model): Inherits from this class to provide fields to create model structure.
    """
    task_name = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    start_date = models.DateTimeField(default=timezone.now, blank=True)
    deadline = models.DateTimeField(null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.task_name
