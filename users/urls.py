from django.urls import include, path
from . import views
# from .views import UserListView

urlpatterns = [
    # path('', UserListView.as_view()),
    path('home/', views.home, name='home'), 
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls'))
]
