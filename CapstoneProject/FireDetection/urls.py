from django.urls import path
from . import views
from .views import serve_css

urlpatterns = [
    path('', views.home_view, name='home'),
    path('login/', views.login_view, name='login'),
    path('test-css/', serve_css, name='test-css'),
]