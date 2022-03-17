from sys import api_version
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAdminUser
from rest_framework.decorators import api_view
from .models import CustomUser
from .serializers import UserSerializer
from rest_framework import status
from rest_framework.response import Response

# class UserListView(ListAPIView):
#     queryset = CustomUser.objects.all()
#     serializer_class = UserSerializer
    # permission_classes = [IsAdminUser]
@api_view(['GET']) 
def home(request): 
    if request.method == 'GET':
        # try:
            user = CustomUser.objects.all()
            user_serializer = UserSerializer(user, many = True)
            return Response(user_serializer.data, status=status.HTTP_200_OK)
        # except:
        #     return Response({"Error": "Somthing went wrong!"}, status=status.HTTP_403_FORBIDDEN) 

