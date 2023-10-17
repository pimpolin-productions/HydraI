import openai, os, random
from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse
from dotenv import load_dotenv
load_dotenv()
# Create your views here.
#def home(request):
#    return render(request, "index.html")


def filefetch(request):
    print(settings.BASE_DIR) 
    folder_path = os.path.join(settings.BASE_DIR, 'myapp/static/presets/')

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

api_key = os.getenv("OPENAI_KEY", None)
openai.api_key = api_key

def home(request):
    ai_response = None
    response = 101
    if api_key is not None and request.method == 'POST':
        print('form submitted')
        text_input = request.POST.get('text_input')
        prompt = text_input 
        if text_input != '':
            response = openai.Completion.create(
                    engine = 'gpt-3.5-turbo',
                    prompt = prompt,
                    temperature = 1
                    )
        else:
            print('empty form')
            response = 101
        print(response)
    return render(request, "index.html", {'response': response})

