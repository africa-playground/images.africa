from django.conf.urls import url, include
from rest_framework import routers
from api.v1.profile import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'profile',views.ProfileViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]

