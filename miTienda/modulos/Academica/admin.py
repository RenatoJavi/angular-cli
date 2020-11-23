from django.contrib import admin
#from Modulos.Academica.models import *

# import from (admin) / .Modulos.admin.Carrera
from .models import Carrera, Estudiante, Curso, Matricula

# Register your models here.
admin.site.register(Carrera)
admin.site.register(Estudiante)
admin.site.register(Curso)
admin.site.register(Matricula)
