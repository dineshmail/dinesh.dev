from django.shortcuts import render
from apps.projects.models import Project

def home(request):
    projects = Project.objects.all()

    return render(
        request,
        "home/index.html",
        {"projects": projects}
    )