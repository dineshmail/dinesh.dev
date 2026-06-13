from django.shortcuts import render, redirect
from django.contrib import messages

from apps.projects.models import Project
from apps.contact.models import Contact
from apps.resume.models import Resume


def home(request):

    projects = Project.objects.all().order_by('-created_at')

    if request.method == "POST":

        Contact.objects.create(
            name=request.POST.get("name"),
            email=request.POST.get("email"),
            subject=request.POST.get("subject"),
            message=request.POST.get("message")
        )

        messages.success(
            request,
            "📧 Thank you for contacting me. Your message has been received successfully. I will respond as soon as possible."
        )

        return redirect("apps.home")

    resume = Resume.objects.first()

    return render(
        request,
        "home/index.html",
        {
            "projects": projects,
            "resume": resume,
        }
    )


def error_404(request, exception):

    return render(
        request,
        "errors/404.html",
        status=404
    )


def error_500(request):

    return render(
        request,
        "errors/500.html",
        status=500
    )