from django.urls import path
from .views import CreateTask, ListTasks, GetTaskInformation, DeleteTask

urlpatterns = [
    path('tasks/create/', CreateTask.as_view(), name='create-task'),
    path('tasks/list/', ListTasks.as_view(), name='list-tasks'),
    path('tasks/get/<int:pk>/', GetTaskInformation.as_view(), name='get-task'),
    path('tasks/delete/<int:pk>/', DeleteTask.as_view(), name='delete-task'),
]
