# Generated by Django 3.1.3 on 2020-11-19 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Academica', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='curso',
            old_name='nombres',
            new_name='nombreCurso',
        ),
        migrations.AlterField(
            model_name='curso',
            name='creditos',
            field=models.PositiveSmallIntegerField(),
        ),
        migrations.AlterField(
            model_name='curso',
            name='docente',
            field=models.CharField(max_length=100),
        ),
    ]