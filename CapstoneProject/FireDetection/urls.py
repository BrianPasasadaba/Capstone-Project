from django.urls import path
from . import views
from .views import serve_css

urlpatterns = [
    path('', views.home_view, name='home'),
    path('login/', views.login_view, name='login'),
    path('analytics/', views.analytics_view, name='analytics'),
    path('reports/', views.reports_view, name='reports'),
    path('test-css/', serve_css, name='test-css'),
]