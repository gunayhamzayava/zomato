# Generated by Django 3.2 on 2023-07-31 09:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contactblog', '0012_blog_ordering'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='ordering',
        ),
    ]
