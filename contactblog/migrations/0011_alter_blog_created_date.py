# Generated by Django 3.2 on 2023-07-30 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactblog', '0010_alter_blog_created_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='created_date',
            field=models.DateField(),
        ),
    ]
