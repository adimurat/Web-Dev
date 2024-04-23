from django.urls import path
from .views import PhotoListCreateAPIView, PhotoRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('photos/', PhotoListCreateAPIView.as_view(), name='photo-list-create'),
    path('photos/<int:pk>/', PhotoRetrieveUpdateDestroyAPIView.as_view(), name='photo-detail'),
]