from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, InitialReport

class CustomUserAdmin(UserAdmin):
    model = CustomUser

    # Define the fields to display in the list view of the admin panel
    list_display = ('email', 'name', 'role', 'verified', 'is_staff', 'is_active')
    list_filter = ('role', 'verified', 'is_staff', 'is_active')
    
    # Fields to edit in the form view of the admin panel
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'name', 'date_of_birth')}),
        ('Roles & Status', {'fields': ('role', 'verified', 'is_staff', 'is_active')}),
    )
    
    # Fields for adding new users
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'name', 'role', 'verified', 'is_staff', 'is_active')}
        ),
    )
    
    search_fields = ('email', 'name', 'role')
    ordering = ('email',)


class InitialReportAdmin(admin.ModelAdmin):
    list_display = (
        'where', 'date', 'time', 'time_of_fire_out', 'occupancy_type',
        'name_of_owner', 'alarm_status', 'no_of_respondents', 'estimated_damage',
        'no_of_establishments', 'no_of_casualties', 'no_of_injured', 'proof', 'status'
    )
    search_fields = ('where', 'occupancy_type', 'name_of_owner', 'alarm_status')
    list_filter = ('date', 'time_of_fire_out', 'alarm_status')
    readonly_fields = ('proof',)
    list_editable = ('status',)


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(InitialReport, InitialReportAdmin)
