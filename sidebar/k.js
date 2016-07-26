var app= angular.module('app',["infinite-scroll"]);
app.controller('control1',function($scope,$http){

$http.get("http://localhost:3000/messages").then(function(result){
$scope.messages=[];
$scope.obj={};
for(var i=0;i<result.data.length;i++){
  $scope.obj["name"]=result.data[i].senderName;
  $scope.obj["message"]=result.data[i].txt;
  $scope.messages.push($scope.obj);
  $scope.obj={};

  $scope.loadMore=function () {
    var last=$scope.messages[$scope.messages.length-1];
    console.log(last);
    for (var i = 1; i < $scope.messages.length; i++) {
      $scope.messages.push(last+i);
    }
  };
}
$scope.sendmessage=function(nmessage){
  $scope.text={
    "channelId":3101,
    "senderName":"Krishna",
    "type":"text",
    "txt":nmessage
  }
  // console.log(nmessage);
  $http({ method: "POST", url: "http://localhost:3000/messages", data: $scope.text, cache: false });
}

});


});
