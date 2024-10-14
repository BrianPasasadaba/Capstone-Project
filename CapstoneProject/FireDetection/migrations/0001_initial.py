# Generated by Django 5.1 on 2024-10-10 23:49

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='InitialReport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('where', models.CharField(max_length=255)),
                ('date', models.DateField()),
                ('time', models.DateTimeField()),
                ('time_of_fire_out', models.DateTimeField()),
                ('occupancy_type', models.CharField(max_length=255)),
                ('name_of_owner', models.CharField(max_length=255)),
                ('alarm_status', models.CharField(max_length=255)),
                ('no_of_respondents', models.IntegerField()),
                ('estimated_damage', models.CharField(max_length=255)),
                ('no_of_establishments', models.IntegerField()),
                ('no_of_casualties', models.IntegerField()),
                ('no_of_injured', models.IntegerField()),
                ('proof', models.ImageField(blank=True, null=True, upload_to='proofs/')),
                ('status', models.CharField(choices=[('Ongoing', 'Ongoing'), ('Case Closed', 'Case Closed')], default='Ongoing', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('first_name', models.CharField(blank=True, max_length=30)),
                ('last_name', models.CharField(blank=True, max_length=30)),
                ('date_of_birth', models.DateField(blank=True, null=True)),
                ('role', models.CharField(choices=[('role1', 'Role 1'), ('role2', 'Role 2'), ('role3', 'Role 3')], default='role1', max_length=30)),
                ('name', models.CharField(blank=True, max_length=100)),
                ('verified', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
        ),
    ]
