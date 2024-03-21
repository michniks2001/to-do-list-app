from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model

User = get_user_model()


class Task(models.Model):
    task_name = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    start_date = models.DateTimeField(default=timezone.now, blank=True)
    deadline = models.DateTimeField(null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.task_name
