# Generated by Django 5.2.1 on 2025-06-08 02:58

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        (
            "owasp",
            "0035_rename_total_pull_request_count_projecthealthmetrics_total_pull_requests_count",
        ),
    ]

    operations = [
        migrations.AlterField(
            model_name="projecthealthmetrics",
            name="score",
            field=models.FloatField(
                help_text="Project health score (0-100)",
                null=True,
                validators=[
                    django.core.validators.MinValueValidator(0.0),
                    django.core.validators.MaxValueValidator(100.0),
                ],
            ),
        ),
    ]
