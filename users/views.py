from rest_framework import generics
from rest_framework.permissions import AllowAny

from django.contrib.auth import get_user_model

from .serializers import *

User = get_user_model()

class UserCreateView(generics.CreateAPIView):
    serializer_class = StandardUserCreationSerializer
    permission_classes = [AllowAny]
