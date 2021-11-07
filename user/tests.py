from django.test import TestCase
from django.contrib.auth.models import User
from django.contrib.auth import SESSION_KEY


# Create your tests here.

class UserModelTests(TestCase):

    def setUp(self):
        # Every test needs a client.
        self.client = Client()
        self.credentials = {
            'username': 'testuser',
            'password': 'secret'}
        User.objects.create_user(**self.credentials)
    
    def test_response(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_login(self):
        response = self.client.post('/login/', **self.credentials)      
        self.assertTrue(response.context['user'].is_active)

    def test_create_user(self):
        c = Client()
        c.login(username='fred', password='secret')
