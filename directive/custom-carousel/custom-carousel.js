angular.module('y').directive('customCarousel', ['$timeout','$sce','videoPlayerPopup',function($timeout, $sce, videoPlayerPopup) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            totalVideos: '=',
            itemsPerPage: '='
		},
		templateUrl: 'directive/custom-carousel/custom-carousel.html',
		link: function(scope, element, attrs, fn) {
            scope.slidesPerPage = 0;
            scope.totalslides = 0;
            scope.nestedArray = [];

            scope.caroselIconClick = function(type){
                $('.carousel').carousel(type);
            };

            scope.setProperties = function(){
                scope.slidesPerPage = 3;
                scope.totalslides = Math.ceil(scope.totalVideos.length/scope.slidesPerPage);
                scope.nestedArray = [];
                var videos = angular.copy(scope.totalVideos);
                var count = 0;
                for(var i=0;i<scope.totalslides;i++){
                    var start = i*scope.slidesPerPage;
                    var end = (i*scope.slidesPerPage)+scope.slidesPerPage;
                    var arr = videos.slice(start,end);
                    scope.nestedArray.push(arr);
                }
                console.log(scope.nestedArray);
            };

            scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            };

            scope.videoClick = function(obj){
                //Opens Video Popup
                obj.vid = 'youtube'+obj.id;
                var url = obj.url;
                videoPlayerPopup.show(obj).then(function(data) {
                    //do nothing
                });
            };

            scope.loadImages = function(){
                for(var i=0;i<scope.totalVideos.length;i++){
                    var desktopid = '#'+scope.totalVideos[i].id;
                    var imgurl = getScreenShots( scope.totalVideos[i], "big" );
                    setBackgroundImage(desktopid,imgurl);
                }
            };

            var setBackgroundImage = function(id,imgurl){
                $(id).css({"background-image": "url("+imgurl+")"});
            };

            var getScreenShots = function( obj, size ){
                var url = obj.url;
                if(url === null){
                    return "";
                }
                size = (size === null) ? "big" : size;
                var vid;
                var results;
                results = url.match("[\\?&]v=([^&#]*)");
                vid = ( results === null ) ? url : results[1];
                obj.videoid = vid;
                if(size === "small"){
                    return "http://img.youtube.com/vi/"+vid+"/2.jpg";
                }else {
                    return "http://img.youtube.com/vi/"+vid+"/0.jpg";
                }
            };

            $timeout(function(){
                scope.loadImages();
            },2000);

            scope.setProperties();
		}
	};
}]);
