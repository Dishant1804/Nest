# Generated by Django 5.1 on 2024-08-25 02:45

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("github", "0026_repository_commits_count"),
        ("owasp", "0012_remove_project_owasp_leaders_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="project",
            name="owasp_repository",
        ),
        migrations.AddField(
            model_name="project",
            name="repositories",
            field=models.ManyToManyField(to="github.repository", verbose_name="Repositories"),
        ),
    ]