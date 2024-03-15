from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

from .managers import StandardUserManager

class StandardUser(AbstractUser):
    """Custom User model that uses email as username field instead of a username

    Args:
        AbstractUser: Inherits from this class to modify base user model
    """
    username = None
    email = models.EmailField(_("email address"), unique=True)
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    
    objects = StandardUserManager()
    
    def __str__(self) -> str:
        """__str__ method for the StandardUser model

        Returns:
            str: returns the email when viewing user information
        """
        return self.email
