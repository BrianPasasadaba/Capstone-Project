
from django.db import models


# Create your models here.
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


    
