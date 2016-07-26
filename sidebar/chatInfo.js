var app=angular.module('app',[]);
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
     $scope.addmessage=function () {
          $scope.message.push({'text':$scope.txt});
       var texts={ text: $scope.txt};
       var res= $http.post("http://localhost:3000/messages", texts);
       res.success(function(data, status, headers, config) {
             $scope.message = data;
         });
         res.error(function(data, status, headers, config) {
             alert( "failure message: " + JSON.stringify({data: data}));
         });
     }


});
