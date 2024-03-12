from django.db import models
from django.utils import timezone


class Task(models.Model):
    task_name = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    start_date = models.DateTimeField(default=timezone.now, blank=True)
    deadline = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.task_name
