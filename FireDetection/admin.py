from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, InitialReport
from .models import tempReports  

class TempReportsAdmin(admin.ModelAdmin):
    list_display = ('where', 'date', 'time_detected', 'status','proof')  # Customize the columns displayed in the list view
    search_fields = ('where', 'status')  # Enable searching by location or status
    list_filter = ('status', 'date')  # Add filters for status and date
    
    fieldsets = (
        (None, {
            'fields': ('where', 'date', 'time_detected', 'proof', 'status'),
        }),
    )

admin.site.register(tempReports, TempReportsAdmin)

class CustomUserAdmin(UserAdmin):
    model = CustomUser


    list_display = ('email', 'name', 'role', 'verified', 'is_staff', 'is_active')
    list_filter = ('role', 'verified', 'is_staff', 'is_active')
    
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'name', 'date_of_birth')}),
        ('Roles & Status', {'fields': ('role', 'verified', 'is_staff', 'is_active')}),
    )
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'name', 'role', 'verified', 'is_staff', 'is_active')}
        ),
    )
    
    search_fields = ('email', 'name', 'role')
    ordering = ('email',)


def mark_case_closed(modeladmin, request, queryset):
    updated_count = queryset.update(status='Case Closed')
    modeladmin.message_user(request, f'{updated_count} report(s) have been marked as Case Closed.')
mark_case_closed.short_description = "Mark selected reports as Case Closed"

# Define the action for changing the status to "Ongoing"
def mark_ongoing(modeladmin, request, queryset):
    updated_count = queryset.update(status='Ongoing')
    modeladmin.message_user(request, f'{updated_count} report(s) have been marked as Ongoing.')
mark_ongoing.short_description = "Mark selected reports as Ongoing"

class InitialReportAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'team', 'date_reported', 'time_reported', 'name_of_owner', 'status', 'alarm_status', 'estimated_damages'
    )
    list_filter = ('status',)

    # Add the custom actions to the admin interface
    actions = [mark_case_closed, mark_ongoing]

admin.site.register(InitialReport, InitialReportAdmin)
admin.site.register(CustomUser, CustomUserAdmin)
