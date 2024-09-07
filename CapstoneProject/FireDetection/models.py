from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

class InitialReport(models.Model):
    where = models.CharField(max_length=255)
    date = models.DateField()
    time = models.DateTimeField()  # You can use DateTimeField for better control of date and time
    time_of_fire_out = models.DateTimeField()
    occupancy_type = models.CharField(max_length=255)
    name_of_owner = models.CharField(max_length=255)
    alarm_status = models.CharField(max_length=255)
    no_of_respondents = models.IntegerField()
    estimated_damage = models.CharField(max_length=255)  # Consider using DecimalField for monetary values
    no_of_establishments = models.IntegerField()
    no_of_casualties = models.IntegerField()
    no_of_injured = models.IntegerField()
    proof = models.ImageField(upload_to='proofs/', blank=True, null=True)  # ImageField will handle images

    def __str__(self):
        return f"Report {self.id} - {self.where} on {self.date}"


class CustomUser(AbstractUser):
    # Override the username field to use email as the unique identifier
    username = None
    email = models.EmailField(unique=True)

    # Add additional fields here
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    # Add more fields as needed

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  # Fields required when creating a superuser

    def __str__(self):
        return self.email