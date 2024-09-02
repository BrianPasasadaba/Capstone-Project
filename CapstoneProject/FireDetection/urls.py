from django.urls import path
from . import views
from .views import serve_css
from .views import login_view

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('', views.home_view, name='home'),
    
    path('analytics/', views.analytics_view, name='analytics'),
    path('test-css/', serve_css, name='test-css'),
]