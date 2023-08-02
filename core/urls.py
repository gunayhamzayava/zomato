from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from contactblog.views import *
from restaurant import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('contacts/', contact_view, name='contact'),
    path("", TemplateView.as_view(template_name="base.html")),
    path('api/', include('restaurant.urls')),
    path("blogs/", BlogListView.as_view(), name="blog"),
    re_path(r'^article/(?P<id>\d+)/$', get_article, name='get_article'),
    path('delivery/', views.get_delivery_data, name='get_delivery_data'),
    re_path(r'^(?P<path>.*)/$', TemplateView.as_view(template_name='base.html')),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
