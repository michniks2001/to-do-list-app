from django.urls import path
from .views import *

urlpatterns = [
    path("sign-up/", UserCreateView.as_view()),
    path("profile/<int:pk>/", UserProfileView.as_view(), name="profile"),
]
