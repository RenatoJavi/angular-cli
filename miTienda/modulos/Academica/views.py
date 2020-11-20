from django.shortcuts import render
import datetime

# Create your views here.


def tag_lookup(request):
    return render(request, "template.htm")


def formularioContacto(request):  # una vista recive una peticiones
    return render(request, "formularioContacto.html")
    # retorna "un render" a partir de una peticion/ DEVUELVE LA PLANTILLA html conrespondiente

    # Creating a dictionary of key-value pairs

    # Calling the render() method to render the request from template_ex.htm page by using the dictionary, dic


def contactar(request):
    if request.method == "POST":  # AQUI SE captura el asunto, el mensaje y el email
        asunto = request.POST["txtAsunto"]
