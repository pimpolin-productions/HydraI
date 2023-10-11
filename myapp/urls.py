from django.urls import path
from . import views

urlpatterns = [
        path('', views.home, name='home'),
        path('fetch_file/', views.filefetch, name='file fetch')
        ]

