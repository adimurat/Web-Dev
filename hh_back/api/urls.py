from django.urls import path
from . import views 
from .views import get_json_data

urlpatterns = [
    path('api/companies/', views.CompanyList.as_view(), name='company-list'),
    path('api/companies/<int:pk>/', views.CompanyDetail.as_view(), name='company-detail'),
    path('api/companies/<int:pk>/vacancies/', views.CompanyVacancies.as_view(), name='company-vacancies'),
    path('api/vacancies/', views.VacancyList.as_view(), name='vacancy-list'),
    path('api/vacancies/<int:pk>/', views.VacancyDetail.as_view(), name='vacancy-detail'),
    path('api/vacancies/top_ten/', views.TopTenVacancies.as_view(), name='top-ten-vacancies'),
]