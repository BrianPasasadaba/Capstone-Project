from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.conf import settings

class InitialReport(models.Model):
    where = models.CharField(max_length=255)
    date = models.DateField()
    time = models.DateTimeField()  
    time_of_fire_out = models.DateTimeField()
    occupancy_type = models.CharField(max_length=255)
    name_of_owner = models.CharField(max_length=255)
    alarm_status = models.CharField(max_length=255)
    no_of_respondents = models.IntegerField()
    estimated_damage = models.CharField(max_length=255)
    no_of_establishments = models.IntegerField()
    no_of_casualties = models.IntegerField()
    no_of_injured = models.IntegerField()
    proof = models.ImageField(upload_to='proofs/', blank=True, null=True)
    status = models.CharField(max_length=20, choices=[('Ongoing', 'Ongoing'), ('Case Closed', 'Case Closed')], default='Ongoing')
    
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"Report {self.id} - {self.where} on {self.date}"
    
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
    
    role = models.CharField(max_length=30, choices=[('role1', 'Role 1'), ('role2', 'Role 2'), ('role3', 'Role 3')], default='role1')
    name = models.CharField(max_length=100, blank=True)
    verified = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  

    objects = CustomUserManager()  
    def __str__(self):
        return self.email
