from django.urls import path
from . import views
from .views import serve_css
from .views import login_view
from .views import logout_view,change_password
from django.conf import settings
from django.conf.urls.static import static
from .views import toggle_status

urlpatterns = [
    path('', views.login_view, name='login'),
    path('forgot_password', views.forgot_password_view, name='forgot_password'),
    path('analytics/', views.analytics_view, name='analytics'),
    path('reports/', views.reports_view, name='reports'),
    path('faq/', views.faq_view, name='faq'),
    path('test-css/', serve_css, name='test-css'),
    path('admin_home/', views.register_view, name='admin_home'),
    path('logout/', logout_view, name='logout'),
    path('toggle-status/<int:report_id>/', views.toggle_status, name='toggle_status'),
    path('change_password/', change_password, name='change_password'),

]
urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)