from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from django.contrib.auth import get_user_model

from .serializers import *

User = get_user_model()

class UserCreateView(generics.CreateAPIView):
    serializer_class = StandardUserCreationSerializer
    permission_classes = [AllowAny]

class UserProfileView(generics.RetrieveAPIView):
    permsision_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer