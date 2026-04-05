from .models import tempReports
from datetime import datetime

def temp_reports_context(request):
    try:
        # Get the current year and month
        current_year = datetime.now().year
        current_month = datetime.now().month

        # Query all tempReports
        temp_reports = tempReports.objects.all()

        # Filter tempReports for the current month
        temp_reports_this_month = tempReports.objects.filter(
            date__year=current_year,
            date__month=current_month
        )

        return {
            'temp_reports': temp_reports,
            'temp_reports_this_month': temp_reports_this_month.count(),
        }
    except Exception as e:
        return {}
