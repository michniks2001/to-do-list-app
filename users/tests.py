from django.test import TestCase
from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model

StandardUser = get_user_model()

class StandardUserModelTest(TestCase):
    """Test the Standard User model

    Args:
        TestCase: Inherits from this class to create the test case
    """
    def setUp(self) -> None:
        self.user1 = StandardUser.objects.create(email='test1@example.com', password='password123')
        self.user2 = StandardUser.objects.create(email='test2@example.com', password='password123')

    def test_create_user(self):
        self.assertEqual(StandardUser.objects.count(), 2)

    def test_email_unique(self) -> None:
        with self.assertRaises(ValidationError):
            user = StandardUser(email='test1@example.com', password='password123')
            user.full_clean()

    def test_str_representation(self) -> None:
        self.assertEqual(str(self.user1), 'test1@example.com')
        self.assertEqual(str(self.user2), 'test2@example.com')