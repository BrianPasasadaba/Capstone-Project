from django import forms
from django.contrib.auth.models import User

class RegisterForms(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    password_confirm = forms.CharField(widget=forms.PasswordInput, label="Confirm Password")

class Meta:
    model = User
    fields = ['email', 'password', 'password_confirm']

    def clean():
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        password_confirm = cleaned_data.get('password_confirm')

        #check if pass and con pass matched
        if password and password_confirm and password != password_confirm:
            raise forms.ValidationError("Password Unmatched")
        return cleaned_data