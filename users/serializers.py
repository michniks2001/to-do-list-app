from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class StandardUserCreationSerializer(serializers.ModelSerializer):
    """Serializer for creating a new user

    Args:
        serializers (ModelSerializer): Inherits from this class to create the user creation serializer
    """
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = [
            "email",
            "first_name",
            "last_name",
            "password"
        ]
        
    def create(self, validated_data):
        """Creates a new user with the validated data

        Args:
            validated_data (dict[str, str]): a dictionary containing the validated data from the serializer

        Returns:
            user: a new instance of a user
        """
        user = User.objects.create_user(
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            password=validated_data["password"]
        )
        return user
    
class UserProfileSerializer(serializers.ModelSerializer):
    """Serializer to display user profile information

    Args:
        serializers (ModelSerializer): Inherits from this class to create the user profile serializer
    """
    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "first_name",
            "last_name"
        ]