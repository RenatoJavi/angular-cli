from django.db import models

# Create your models here.


class Carrera(models.Model):
    codigo = models.CharField(max_length=3, primary_key=True)
    nombre = models.CharField(max_length=50)
    duracion = models.PositiveIntegerField(default=5)

    def __str__(self):
        txt = "{0}(Duración:{1} año(s))"
        return txt.format(self.nombre,  self.duracion, self.codigo)


class Estudiante(models.Model):
    dni = models.CharField(max_length=8, primary_key=True)
    apellitoPaterno = models.CharField(max_length=30)
    apellitoMaterno = models.CharField(max_length=30)
    nombres = models.CharField(max_length=35)
    fechaNacimiento = models.DateField()
    sexos = [('F', 'Femenino'), ('M', 'Masculino')]
    sexo = models.CharField(max_length=1, choices=sexos, default='F')
    carrera = models.ForeignKey(
        Carrera, null=False, blank=False, on_delete=models.CASCADE)
    vigencia = models.BooleanField(default=True)

    def nombreCompleto(self):  # nombreCompleto es un metodo
        txt = "{0}{1}{2}"
        return txt.format(self.apellitoPaterno, self.apellitoMaterno, self.nombres)

    def __str__(self):  # sobre escribo el metodo str
        txt = "{0} / Carrera:{1} / {2}"
        if self.vigencia:
            estadoEstudiante = "Vigente"
        else:
            estadoEstudiante = "de baja"
        return txt.format(self.nombreCompleto(), self.carrera, estadoEstudiante)


class Curso(models.Model):
    codigo = models.CharField(max_length=6, primary_key=True)
    nombreCurso = models.CharField(max_length=30)
    creditos = models.PositiveSmallIntegerField()
    docente = models.CharField(max_length=100)

    def __str__(self):
        txt = "Nombre del curso :{0} (Código :{1}) / Docente :{2}"
        return txt.format(self.nombreCurso, self.codigo, self.docente)


class Matricula (models.Model):
    idMatricula = models.AutoField(primary_key=True)
    estudiante = models.ForeignKey(
        Estudiante, null=False, blank=False, on_delete=models.CASCADE)
    curso = models.ForeignKey(
        Curso, null=False, blank=False, on_delete=models.CASCADE)
    fechaMatricula = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        txt = "{0} | {1} | Fecha : {2}"
       # fecMat = self.fechaMatricula.strftime("%A %d/%m/%Y %H:%M:%S")
        return txt.format(self.estudiante, self.curso, self.fechaMatricula)
