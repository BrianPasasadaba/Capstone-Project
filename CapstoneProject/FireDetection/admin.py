from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, InitialReport

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'date_of_birth')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'first_name', 'last_name', 'date_of_birth'),
        }),
    )

class InitialReportAdmin(admin.ModelAdmin):
    list_display = (
        'where', 'date', 'time', 'time_of_fire_out', 'occupancy_type',
        'name_of_owner', 'alarm_status', 'no_of_respondents', 'estimated_damage',
        'no_of_establishments', 'no_of_casualties', 'no_of_injured', 'proof'
    )
    search_fields = ('where', 'occupancy_type', 'name_of_owner', 'alarm_status')
    list_filter = ('date', 'time_of_fire_out', 'alarm_status')
    readonly_fields = ('proof',)

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(InitialReport, InitialReportAdmin)
