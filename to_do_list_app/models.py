from django.db import models
from django.utils import timezone

class Task(models.Model):
    task_name = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    deadline = models.DateTimeField(null=True, blank=True)
