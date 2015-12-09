angular.module('y').controller('AboutusCtrl',['$scope',function($scope){
    var au = $scope;
    //au.aboutUsContent = "A group that love to create. We are  a small team with creative skill set that can surely help you make your product/ your brand stand-out from the mob. We possess an immense urge to our customer satisfaction. We re-live your thoughts and make them into creative ads that boost-up your business. We have started out our passionate journey in 2015 with a firm understanding of the need for advertising for any product and in any market, with a firm belief in “making you grow,will let us grow ourselves”";
    au.aboutUsContent = "We are a group of professionals who love to create. Our team comprise of talented individuals with unique skill set, confidence and beliefs. We strive to work with our customers closely to enhance their product and brand because we understand that it is their dream and that it means a lot to them. We operate on principles of Customer Satisfaction, Quick to Market and Transparency. Customer satisfaction is of utmost importance to us. Happy customers make a happy organization which in turn keeps us happy. Quick to market helps our customer save money and reduce our costs. This doesn't mean we hurry things out, but we ensure that everything we deliver is of utmost quality. Transparency is followed within the group and also with our customers. We expect the same from our customers as well. We believe we can deliver best when we know what the customers know and vice versa. We re-live your thoughts and convert them into creative ads that will boost-up your business. We have started out our passionate journey with a firm understanding of the need for advertising and a belief that “in making you grow, we grow ourselves“.";

    $('#yourIframe').load(function(){
        $(this).contents().find('body')[0].bgColor="#ffffff";
    });

}]);
