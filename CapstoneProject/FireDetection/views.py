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
from django.contrib import messages
from .models import CustomUser  
from django.core.validators import validate_email 
from .models import InitialReport

def serve_css(request):
    return FileResponse(open('staticfiles/styles/style.css', 'rb'))

def register_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        role = request.POST.get('role')
        
        if not name or not email or not role:
            messages.error(request, 'All fields are required.')
            return render(request, 'admin_home.html')

        try:
            new_user = CustomUser.objects.create(
                name=name,
                email=email,
                role=role
            )
            new_user.save()
            messages.success(request, 'Account has been added successfully.')
            return redirect('admin_home')
        except Exception as e:
            messages.error(request, f'Error adding account: {str(e)}')
            return render(request, 'admin_home.html')
    
    return render(request, 'admin_home.html')

def login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)  # Ensure backend is set correctly
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
    logout(request)
    response = redirect('login')
    response.set_cookie('logged_out', 'true')
    response['Cache-Control'] = 'no-store'
    response['Pragma'] = 'no-cache'
    return response

def analytics_view(request):
   return render(request, "analytics.html")

def reports_view(request):
   return render(request, "reports.html")

def faq_view(request):
   return render(request, "faq.html")

# Create your views here.
# @login_required
def home_view(request):
    if request.method == 'POST':
        location = request.POST.get('location')
        date = request.POST.get('date')
        time = request.POST.get('time')
        time_out = request.POST.get('time_out')
        occupancy = request.POST.get('occupancy')
        owner = request.POST.get('owner')
        alarm = request.POST.get('alarm')
        respondents = request.POST.get('respondents')
        damages = request.POST.get('damages')
        establishment = request.POST.get('establishment')
        casualty = request.POST.get('casualty')
        injured = request.POST.get('injured')
        proof = request.FILES.get('modal-proof')

        # Create a new report
        try:
            new_report = InitialReport.objects.create(
                where=location,
                date=date,
                time=f"{date} {time}",
                time_of_fire_out=f"{date} {time_out}",  
                occupancy_type=occupancy,
                name_of_owner=owner,
                alarm_status=alarm,
                no_of_respondents=respondents,
                estimated_damage=damages,
                no_of_establishments=establishment,
                no_of_casualties=casualty,
                no_of_injured=injured,
                proof=proof
            )
            new_report.save()
            messages.success(request, 'Report has been submitted successfully.')
            return redirect('home')  
        except Exception as e:
            messages.error(request, f'Error submitting report: {str(e)}')
            return render(request, 'home.html')

    return render(request, 'home.html')
