from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader



# Create your views here.

def index(request):
	context = None
	return render(request, 'index.html', context)

def search(request):
	context = None
	return render(request, 'search.html', context)

def results(request):
	context = None
	return render(request, 'results.html', context)

def about(request):
	context = None
	return render(request, 'about.html', context)

def login(request):
	context = None
	return render(request, 'login.html', context)

def signup(request):
	context = None
	return render(request, 'signup.html', context)

