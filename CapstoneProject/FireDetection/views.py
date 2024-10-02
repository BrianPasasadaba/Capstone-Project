from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.contrib.auth.models import User
from .forms import RegisterForms
from django.http import FileResponse
from django.contrib import admin
from django.contrib import messages
from .models import CustomUser  
from django.core.validators import validate_email 
from .models import InitialReport
from datetime import date,  timedelta
from django.db.models.functions import TruncMonth
from django.utils.timezone import now
from django.db.models import Count
from django.shortcuts import get_object_or_404, redirect
import random
import string
from django.core.mail import send_mail
from django.conf import settings


def generate_random_password(length=10):
    """Generates a random password."""
    characters = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(characters) for i in range(length))

@login_required
def register_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        role = request.POST.get('role')
        
        if not name or not email or not role:
            messages.error(request, 'All fields are required.')
        else:
            try:
                generated_password = generate_random_password()

                new_user = CustomUser.objects.create_user(
                    name=name,
                    email=email,
                    role=role,
                    password=generated_password  
                )
                
                send_mail(
                    'Your Account Password',
                    f'Hello {name},\n\nYour account has been created. Your password is: {generated_password}\nYou can change your password after logging in.',
                    settings.DEFAULT_FROM_EMAIL,
                    [email],
                    fail_silently=False,
                )

                messages.success(request, 'Account has been added successfully, and the password has been sent to the user\'s email.')
            except Exception as e:
                messages.error(request, f'Error adding account: {str(e)}')

        return redirect('admin_home')

    accounts = CustomUser.objects.all()
    return render(request, 'admin_home.html', {'accounts': accounts})



def toggle_resolved(request, report_id):
    report = get_object_or_404(InitialReport, id=report_id)
    report.resolved = not report.resolved
    report.save()

    messages.success(request, f'Report status updated to {"Resolved" if report.resolved else "Unresolved"}.')
    return redirect('reports')

def serve_css(request):
    return FileResponse(open('staticfiles/styles/style.css', 'rb'))


def login_view(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')

        user = authenticate(request, username=email, password=password)

        if user is not None:
            if not user.verified:
                user.verified = True
                user.save()
                messages.success(request, "Your account has been verified.")

            login(request, user)

            if user.is_staff:
                return redirect('admin_home')
            elif user.is_active:
                return redirect('home')
            else:
                messages.error(request, "Your account is not active.")
        else:
            messages.error(request, "Invalid email or password.")
    
    return render(request, 'login.html')



@login_required
def logout_view(request):
    logout(request)
    response = redirect('login')
    response.set_cookie('logged_out', 'true')
    response['Cache-Control'] = 'no-store'
    response['Pragma'] = 'no-cache'
    return response

@login_required
def analytics_view(request):
    today = date.today()
    start_of_week = today - timedelta(days=today.weekday())
    start_of_month = today.replace(day=1)
    start_of_year = today.replace(month=1, day=1)

    latest_reports = InitialReport.objects.order_by('-time')[:5]

    detected_today = InitialReport.objects.filter(date=today).count()
    reported_this_week = InitialReport.objects.filter(date__gte=start_of_week).count()
    responded_this_month = InitialReport.objects.filter(date__gte=start_of_month).count()
    responded_this_year = InitialReport.objects.filter(date__gte=start_of_year).count()

    # Dynamic incident data for 2024
    incidents_per_year = {}
    incidents_per_year[2024] = InitialReport.objects.filter(date__year=2024).count()

    context = {
        'detected_today': detected_today,
        'reported_this_week': reported_this_week,
        'responded_this_month': responded_this_month,
        'responded_this_year': responded_this_year,
        'latest_reports': latest_reports,
        'incidents_per_year': incidents_per_year,
    }

    return render(request, "analytics.html", context)


@login_required
def reports_view(request):
    reports = InitialReport.objects.all() 
    context = {
        'reports': reports,
    }
    return render(request, 'reports.html', context)

@login_required
def faq_view(request):
   return render(request, "faq.html")

@login_required
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
            return redirect('reports')  
        except Exception as e:
            messages.error(request, f'Error submitting report: {str(e)}')
            return render(request, 'reports.html')

    return render(request, 'home.html')
