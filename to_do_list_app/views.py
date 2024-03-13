from rest_framework import generics
from .serializers import *
from .models import *


class CreateTask(generics.CreateAPIView):
    """Task Create View

    Args:
        generics (CreateAPIView): Inherits from this generic view to allow for task creation
    """ 
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class ListTasks(generics.ListAPIView):
    """Task List View

    Args:
        generics (ListAPIView): Inherits from this generic view to allow for viewing of tasks
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class GetTaskInformation(generics.RetrieveAPIView):
    """Get Task View

    Args:
        generics (RetrieveAPIView): Inherits from this generic view to get specific task information
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class DeleteTask(generics.DestroyAPIView):
    """Delete Task View

    Args:
        generics (DestroyAPIView): Inherits from this generic view to allow user to delete unwanted tasks
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    

class MarkAsCompleted(generics.UpdateAPIView):
    """Mark Task as Completed View

    Args:
        generics (UpdateAPIView): Inherits from this generic view to allow user to mark tasks as completed
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    
    def update(self, request, *args, **kwargs):
        """Update method to mark task as completed

        Args:
            request (Any): HTTP Request

        Returns:
            JSON Response: Returns a JSON response with the updated task information
        """
        instance = self.get_object()
        instance.completed = True
        instance.save()
        return super().update(request, *args, **kwargs)
