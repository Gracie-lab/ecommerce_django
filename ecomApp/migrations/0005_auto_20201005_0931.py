# Generated by Django 3.1 on 2020-10-05 08:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ecomApp', '0004_auto_20201004_1505'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Login',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
