"""Serializers for the to_do_list_app app."""

from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    """Serializer for the Task model.

    Args:
        serializers (Serializer): Inherits from this class to provide fields to create serializer structure.
    """
    completed = serializers.BooleanField(default=False, required=False)
    
    class Meta:
        """Contains the metadata for the serializer
        """
        model = Task
        fields = '__all__'
        