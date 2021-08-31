from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('index.html', views.index),
    path('about.html', views.about),
    path('search.html', views.search),
    path('results.html', views.results),
    path('login.html', views.login),
    path('signup.html', views.signup),
    path('activate/<uidb64>/<str:token>/', views.activate, name='activate'),
    path('account_activation_sent.html', views.account_activation_sent, name='account_activation_sent'),
    path('account_activation_email.html', views.signup),
]