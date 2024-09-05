from django.contrib import admin
from .models import InitialReport, CustomUser
from django.utils.translation import gettext_lazy as _

class CustomUserAdmin(admin.ModelAdmin):
    # Define fieldsets to organize fields in the admin interface
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
        # Note: date_joined is not included here
    )

    # Define readonly fields if needed
    readonly_fields = ('last_login',)

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(InitialReport)
