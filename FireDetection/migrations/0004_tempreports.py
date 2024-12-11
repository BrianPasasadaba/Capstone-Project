# Generated by Django 5.1 on 2024-10-27 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FireDetection', '0003_initialreport_created_by'),
    ]

    operations = [
        migrations.CreateModel(
            name='tempReports',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('where', models.CharField(max_length=255)),
                ('date', models.DateField()),
                ('time_detected', models.DateTimeField()),
                ('proof', models.ImageField(blank=True, null=True, upload_to='proofs/')),
                ('status', models.CharField(choices=[('Filed', 'Filed'), ('Dismissed', 'Dismissed')], max_length=20, null=True)),
            ],
        ),
    ]