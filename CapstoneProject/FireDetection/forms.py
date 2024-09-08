from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('email', 'first_name', 'last_name', 'date_of_birth')

class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ('email', 'first_name', 'last_name', 'date_of_birth')
from django import forms
from .models import CustomUser

class RegisterForms(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = ['name', 'email', 'role']  # Add any other fields you want to include
        widgets = {
            'role': forms.Select(choices=[('role1', 'One'), ('role2', 'Two'), ('role3', 'Three')]),
        }

    name = forms.CharField(max_length=100, widget=forms.TextInput(attrs={
        'class': 'form-control',
        'placeholder': 'e.g. Juan Dela Cruz',
        'id': 'modal-name',
    }))
    
    email = forms.EmailField(widget=forms.EmailInput(attrs={
        'class': 'form-control',
        'placeholder': 'e.g. juandc@gmail.com',
        'id': 'modal-email',
    }))
    
    role = forms.ChoiceField(choices=[('role1', 'One'), ('role2', 'Two'), ('role3', 'Three')], widget=forms.Select(attrs={
        'class': 'form-select',
        'id': 'modal-role',
    }))
