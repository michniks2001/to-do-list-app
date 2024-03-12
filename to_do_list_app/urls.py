from django.urls import path
from .views import CreateTask, ListTasks, GetTaskInformation, DeleteTask, MarkAsCompleted

urlpatterns = [
    path('tasks/create/', CreateTask.as_view(), name='create-task'),
    path('tasks/list/', ListTasks.as_view(), name='list-tasks'),
    path('tasks/get/<int:pk>/', GetTaskInformation.as_view(), name='get-task'),
    path('tasks/delete/<int:pk>/', DeleteTask.as_view(), name='delete-task'),
    path('tasks/<int:pk>/complete/', MarkAsCompleted.as_view(), name='mark-as-completed'),
]
