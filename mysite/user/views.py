from django.shortcuts import render

# Create your views here.
def login(request):
	context = None
	return render(request, 'user/login.html', context)

def logout(request):
	context = None
	return render(request, 'user/logout.html', context)

def dashboard(request):
	context = None
	return render(request, 'user/dashboard.html', context)