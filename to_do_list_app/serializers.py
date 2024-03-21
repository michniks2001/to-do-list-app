from rest_framework import serializers
from . import models

class TaskSerializer(serializers.ModelSerializer):
    completed = serializers.BooleanField(default=False, required=False)
    
    class Meta:
        model = models.Task
        fields = '__all__'
        
    def to_representation(self, instance):
        cookies = self.context.get('cookies')
        
        user_id = cookies.get('user_id')
        
        serialized_data = super().to_representation(instance)
        serialized_data['author'] = user_id
        return serialized_data