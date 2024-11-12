from django.urls import path
from . import views
from .views import serve_css
from .views import login_view
from .views import logout_view,change_password
from django.conf import settings
from django.conf.urls.static import static
from .views import toggle_status, update_report, create_report_view,export_initial_report

urlpatterns = [
    path('', views.login_view, name='login'),
    path('forgot_password', views.forgot_password_view, name='forgot_password'),
    path('analytics/', views.analytics_view, name='analytics'),
    path('reports/', views.reports_view, name='reports'),
    path('reports/create', views.create_report_view, name='create_reports'),
    path('faq/', views.faq_view, name='faq'),
    path('test-css/', serve_css, name='test-css'),
    path('admin_home/', views.register_view, name='admin_home'),
    path('logout/', logout_view, name='logout'),
    path('toggle-status/<int:report_id>/', views.toggle_status, name='toggle_status'),
    path('change_password/', change_password, name='change_password'),
    path('update-report/<int:report_id>/', views.update_report, name='update_report'),
    path('api/desktop-notification/', views.desktop_notification, name='desktop-notification'),
    path('api/events/', views.event_stream, name='event-stream'),
     path('export-initial-report/', export_initial_report, name='export_initial_report'),

]
urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)