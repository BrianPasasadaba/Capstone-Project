from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.conf import settings

class tempReports(models.Model):
    where = models.CharField(max_length=255)
    date = models.DateField()
    time_detected = models.DateTimeField()
    proof = models.URLField(max_length=255)
    status = models.CharField(max_length=20, choices=[('Filed', 'Filed'), ('Dismissed', 'Dismissed')], null=True)

class InitialReport(models.Model):
    fir_number = models.CharField(max_length=10, unique=True, editable=False, null=True, blank=True)
    where = models.CharField(max_length=255, blank=True, null=True)
    team = models.CharField(max_length=255, blank=True, null=True)
    time_reported = models.DateTimeField(blank=True, null=True)
    date_reported = models.DateField(blank=True, null=True)
    involved = models.CharField(max_length=255, blank=True, null=True)
    name_of_owner = models.CharField(max_length=255, blank=True, null=True)
    alarm_status = models.CharField(max_length=255, blank=True, null=True)
    alarm_declared_by = models.CharField(max_length=255, blank=True, null=True)
    time_of_arrival = models.DateTimeField(blank=True, null=True)
    time_of_fire_under_control = models.DateTimeField(blank=True, null=True)
    date_of_fire_under_control = models.DateField(blank=True, null=True)
    fire_under_control_declared_by = models.CharField(max_length=255, blank=True, null=True)
    time_of_fire_out = models.DateTimeField(blank=True, null=True)
    date_of_fire_out = models.DateField(blank=True, null=True)
    fire_out_declared_by = models.CharField(max_length=255, blank=True, null=True)
    estimated_damages = models.CharField(max_length=255, blank=True, null=True)
    no_of_fatality = models.IntegerField(blank=True, null=True)
    no_of_injured = models.IntegerField(blank=True, null=True)
    no_of_families_affected = models.IntegerField(blank=True, null=True)
    no_of_establishments = models.IntegerField(blank=True, null=True)
    no_of_fire_trucks = models.IntegerField(blank=True, null=True)
    ground_commander = models.CharField(max_length=255, blank=True, null=True)
    commander_contact_number = models.CharField(max_length=15, blank=True, null=True)
    safety_officer = models.CharField(max_length=255, blank=True, null=True)
    officer_contact_number = models.CharField(max_length=15, blank=True, null=True)
    name_of_sender = models.CharField(max_length=255, blank=True, null=True)
    sender_contact_number = models.CharField(max_length=15, blank=True, null=True)
    proof = models.URLField(max_length=255, blank=True, null=True)
    status = models.CharField(max_length=20, choices=[('Ongoing', 'Ongoing'), ('Case Closed', 'Case Closed')], default='Ongoing')

    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)

    def save(self, *args, **kwargs):
        if not self.fir_number:
            last_report = InitialReport.objects.order_by('id').last()
            if last_report:
                last_id = int(last_report.fir_number.split('-')[1])
                new_id = last_id + 1
            else:
                new_id = 1
            self.fir_number = f"FIR-{new_id:02d}"
        super().save(*args, **kwargs)
    
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """
        Create and return a regular user with an email and password.
        """
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """
        Create and return a superuser with an email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)



class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(unique=True, max_length=100)

    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)

    role = models.CharField(
        max_length=30,
        choices=[('Admin', 'Admin'), ('Radio Operator', 'Radio Operator'), ('Responder', 'Responder')],
        default='Responder'  # Default role
    )
    name = models.CharField(max_length=100, blank=True)
    verified = models.BooleanField(default=False)

    contact_number = models.CharField(max_length=15, null=True, blank=True)  

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  

    objects = CustomUserManager()  

    def __str__(self):
        return self.email
