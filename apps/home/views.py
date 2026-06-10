from django.shortcuts import render
from apps.projects.models import Project
from apps.contact.models import Contact
from apps.resume.models import Resume

def home(request):
    projects = Project.objects.all().order_by('-created_at')
    success = False

    if request.method == "POST":
        Contact.objects.create(
            name=request.POST.get("name"),
            email=request.POST.get("email"),
            subject=request.POST.get("subject"),
            message=request.POST.get("message")
        )
        success = True

    resume = Resume.objects.first()
    return render(request,"home/index.html",
    {
        "projects": projects,
        "success": success,
        "resume": resume,
    }
)