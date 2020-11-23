from django.shortcuts import render
from django.conf import settings
from django.core.mail import send_mail


# Create your views here.


def tag_lookup(request):
    return render(request, "template.htm")


def formularioContacto(request):  # una vista recive una peticiones
    return render(request, "formularioContacto.html")
    # retorna "un render" a partir de una peticion/ DEVUELVE LA PLANTILLA html conrespondiente

    # Calling the render() method to render the request from template_ex.htm page by using the dictionary, dic


def contactar(request):
    if request.method == "POST":  # AQUI SE captura el asunto, el mensaje y el email
        asunto = request.POST["txtAsunto"]
        mensaje = request.POST["txtMensaje"] + \
            "/Email : " + request.POST["txtEmail"]
        email_desde = settings.EMAIL_HOST_USER
        email_para = ["epnfis2018@gmail.com"]
        send_mail(asunto, mensaje, email_desde,
                  email_para, fail_silently=False)
    return render(request, "contactar.html")
    return render(request, "formularioContacto.html")


def mensajeEntregado(request):
    return render(request, "mensajeEntregado.html")
