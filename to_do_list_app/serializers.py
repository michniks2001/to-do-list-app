from rest_framework import serializers
from . import models

class TaskSerializer(serializers.ModelSerializer):
    completed = serializers.BooleanField(default=False, required=False)
    
    class Meta:
        model = models.Task
        fields = '__all__'