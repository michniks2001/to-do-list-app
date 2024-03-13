from django.test import TestCase
from django.urls import reverse
from django.utils import timezone
from rest_framework import status
from rest_framework.test import APIClient
from .models import Task

class TaskModelTests(TestCase):
    def setUp(self):
        self.task = Task.objects.create(
            task_name="Test Task",
            completed=False,
            deadline=timezone.now() + timezone.timedelta(days=7)
        )

    def test_task_creation(self):
        self.assertTrue(isinstance(self.task, Task))
        self.assertEqual(self.task.task_name, "Test Task")
        self.assertFalse(self.task.completed)
        self.assertIsNotNone(self.task.deadline)

    def test_task_str_method(self):
        self.assertEqual(str(self.task), "Test Task")


class TaskAPITests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.task_data = {
            'task_name': 'Test Task',
            'completed': False,
            'start_date': timezone.now() - timezone.timedelta(days=7),
            'deadline': timezone.now()
        }
        self.task = Task.objects.create(
            task_name=self.task_data['task_name'],
            start_date=self.task_data['start_date'],
            completed=self.task_data['completed'],
            deadline=self.task_data['deadline']
        )

    def test_create_task(self):
        url = reverse('create-task')
        response = self.client.post(url, self.task_data, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Task.objects.count(), 2)

    def test_list_tasks(self):
        url = reverse('list-tasks')
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), Task.objects.count())

    def test_get_task_information(self):
        url = reverse('get-task', args=[self.task.id])
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['task_name'], self.task.task_name)

    def test_delete_task(self):
        url = reverse('delete-task', args=[self.task.id])
        response = self.client.delete(url)

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Task.objects.count(), 0)  # Assuming there's only one task initially
