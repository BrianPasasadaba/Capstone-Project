# Generated by Django 5.1 on 2024-11-09 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FireDetection', '0004_tempreports'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='initialreport',
            name='date',
        ),
        migrations.RemoveField(
            model_name='initialreport',
            name='estimated_damage',
        ),
        migrations.RemoveField(
            model_name='initialreport',
            name='no_of_casualties',
        ),
        migrations.RemoveField(
            model_name='initialreport',
            name='no_of_respondents',
        ),
        migrations.RemoveField(
            model_name='initialreport',
            name='occupancy_type',
        ),
        migrations.RemoveField(
            model_name='initialreport',
            name='time',
        ),
        migrations.AddField(
            model_name='initialreport',
            name='alarm_declared_by',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='commander_contact_number',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='date_of_fire_out',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='date_of_fire_under_control',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='date_reported',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='estimated_damages',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='fire_out_declared_by',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='fire_under_control_declared_by',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='ground_commander',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='involved',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='name_of_sender',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='no_of_families_affected',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='no_of_fatality',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='no_of_fire_trucks',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='officer_contact_number',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='safety_officer',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='sender_contact_number',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='team',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='time_of_arrival',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='time_of_fire_under_control',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='initialreport',
            name='time_reported',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='initialreport',
            name='alarm_status',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='initialreport',
            name='name_of_owner',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='initialreport',
            name='no_of_establishments',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='initialreport',
            name='no_of_injured',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='initialreport',
            name='time_of_fire_out',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='initialreport',
            name='where',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
