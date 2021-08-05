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
]