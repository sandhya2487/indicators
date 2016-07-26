var app = angular.module('app', []);

app.controller('SidebarController', function($scope) {

   $scope.state = false;

   $scope.toggleState = function() {
       $scope.state = !$scope.state;
   };

});

app.directive('sidebarDirective', function() {
   return {
       link : function(scope, element, attr) {
           scope.$watch(attr.sidebarDirective, function(newVal) {
                 if(newVal)
                 {
                   element.addClass('show');
                   return;
                 }
                 element.removeClass('show');
           });
       }
   };
});

app.controller('mainCtrl', function ($scope, $http)
{
   $scope.message=[];
   $scope.user=[];

   //for retrieving data
 $http.get("http://localhost:3000/messages")
      .then(function mySucces(response)
      {
          $scope.message=[];
          $scope.obj={};
         for(var i=0;i<response.data.length;i++)
         {
            $scope.obj["senderName"]=response.data[i].senderName;
            $scope.obj["message"]=response.data[i].text;
            $scope.message.push($scope.obj);
            $scope.obj={};
            // console.log($scope.message);
         }
       },
       function myError(response){
         $scope.message = response.statusText;
     });


     //for posting data
     $scope.addmessage=function(nmessage){
       $scope.text={
         "channelId":3101,
         "time":"",
         "date":"7/25/2016",
         "user":"Krishna",
         "type":"text",
         "content":nmessage
       }
       console.log(nmessage);
       $http({ method: "POST", url: "http://localhost:3000/messages", data: $scope.text, cache: false });
     }
     });
