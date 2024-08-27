from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
# For class-based views [CBV]
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
# Import the User class (model)
from django.contrib.auth.models import User
# Import the User class (model)
from django.http import FileResponse

def serve_css(request):
    return FileResponse(open('static/styles/style.css', 'rb'))

def login_view(request):
   return render(request, "login.html")

# Create your views here.
def home_view(request):
    return render(request, "home.html")