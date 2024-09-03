from django.urls import path
from . import views
from .views import serve_css
from .views import login_view

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('home/', views.home_view, name='home'),
    
    path('analytics/', views.analytics_view, name='analytics'),
    path('reports/', views.reports_view, name='reports'),
    path('test-css/', serve_css, name='test-css'),
]