# Generated by Django 4.0.4 on 2022-05-12 00:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_dessert_price'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='charge',
            new_name='amount',
        ),
    ]