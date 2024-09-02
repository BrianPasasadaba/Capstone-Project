from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
# For class-based views [CBV]
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
# Import the User class (model)
from django.contrib.auth.models import User
# Import the User class (model)
from .forms import RegisterForms
from django.http import FileResponse
from django.contrib import admin

def serve_css(request):
    return FileResponse(open('static/styles/style.css', 'rb'))

def register_view(request):
    if request.method == 'POST':
        form = RegisterForms(request.POST)
        if form.is_valid():
            # Extract the cleaned data
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')
            
            # Create the new user
            user = User.objects.create_user(username=email, email=email, password=password)
            
            # Log the user in after registration
            login(request, user)
            
            # Redirect to a success page (e.g., home or dashboard)
            return redirect('home')  # Replace 'home' with your desired redirect URL name
    else:
        form = RegisterForms()
    
    return render(request, 'login.html', {'form': form})  # Updated to render login.html directly


def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            next_url = request.POST.get('next') or request.GET.get('next') or 'home'
            return redirect(next_url)
        else:
            error_message = "Invalid Credentials"
            return render(request, 'login.html', {'error': error_message})
    return render(request, 'login.html')


# Logout view
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return redirect('login')  # Redirect to login page after logout
    else:
        return redirect('home')

def analytics_view(request):
   return render(request, "analytics.html")

<<<<<<< HEAD
=======
def reports_view(request):
   return render(request, "reports.html")
>>>>>>> d4b3e2ed0c7ef0179fb9ecd7602a43ff8676c466

# Create your views here.
@login_required
def home_view(request):
    return render(request, "home.html")  # Corrected to render home.html


class ProtectedView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'

    def get(self, request):
        return render(request, 'protected.html')  # Corrected to render protected.html
