angular.module('y').controller('ClientsCtrl',['$scope','$timeout',function($scope,$timeout){
    var cl = $scope;

    cl.clientsList = [
        {id:1,url:'assets/clients/cmr_group_of_institutions.png'},
        {id:2,url:'assets/clients/hungry_hippo.png'},
        {id:3,url:'assets/clients/sunrise.png'},
        {id:4,url:'assets/clients/silly_squid.png'}
    ];

    cl.loadImages = function(){
      for(var i=0;i<cl.clientsList.length;i++){
          var desktopid = '#'+'client'+cl.clientsList[i].id;
          var mobileid = '#'+'client-small'+cl.clientsList[i].id;
          var imgurl = cl.clientsList[i].url;
          setBackgroundImage(desktopid,imgurl);
          setBackgroundImage(mobileid,imgurl);
      }
    };

    var setBackgroundImage = function(id,imgurl){
        $(id).css({"background-image": "url("+imgurl+")"});
    };

    $timeout(function(){
        cl.loadImages();
    },2000);

}]);
