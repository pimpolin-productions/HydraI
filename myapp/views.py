from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request, "index.html")

import os
import random

def filefetch(request):
    
    folder_path = 'myapp/static/presets/'

    file_list = os.listdir(folder_path)

    if not file_list:
        response = "The folder is empty"
    else:
        random_file = random.choice(file_list)

        sfp = os.path.join(folder_path, random_file)

        with open(sfp, 'r') as file:
            fetchedcontent = file.read()
        
        response = HttpResponse(fetchedcontent, content_type="text/plain")
    return response

