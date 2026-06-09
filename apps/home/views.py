from django.shortcuts import render
from apps.contact.models import Contact
from apps.projects.models import Project

def home(request):

    projects = Project.objects.all()

    if request.method == "POST":
        Contact.objects.create(
            name=request.POST.get("name"),
            email=request.POST.get("email"),
            subject=request.POST.get("subject"),
            message=request.POST.get("message")
        )

    return render(
        request,
        "home/index.html",
        {"projects": projects}
    )