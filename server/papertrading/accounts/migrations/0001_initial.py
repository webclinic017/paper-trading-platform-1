# Generated by Django 3.2.5 on 2022-03-01 22:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('name', models.CharField(max_length=50, null=True)),
                ('email', models.CharField(max_length=50, null=True, unique=True)),
                ('google_user_id', models.CharField(max_length=50, primary_key=True, serialize=False, unique=True)),
                ('balance', models.DecimalField(decimal_places=2, default=5000.0, max_digits=10000000000000)),
                ('portfolio_value', models.DecimalField(decimal_places=2, default=0.0, max_digits=10000000000000)),
                ('ownedStocks', models.JSONField(null=True)),
                ('start_date', models.CharField(max_length=50, null=True)),
                ('transaction_history', models.JSONField(null=True)),
                ('watchList', models.JSONField(null=True)),
                ('portfolio_value_history', models.JSONField(null=True)),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
