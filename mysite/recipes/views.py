from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader



# Create your views here.

def index(request):
	context = None
	return render(request, 'recipes/index.html', context)

def search(request):
	context = None
	return render(request, 'recipes/search.html', context)

def results(request):
	context = None
	return render(request, 'recipes/results.html', context)

def about(request):
	context = None
	return render(request, 'recipes/about.html', context)


