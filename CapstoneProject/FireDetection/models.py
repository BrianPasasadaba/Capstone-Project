from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
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

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError(_("The Email field must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True, max_length=255)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    # Removed date_joined field

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
