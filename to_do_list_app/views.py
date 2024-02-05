from rest_framework import generics
from .serializers import *
from .models import *

class CreateTask(generics.CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class ListTasks(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class GetTaskInformation(generics.RetrieveAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class DeleteTask(generics.DestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
