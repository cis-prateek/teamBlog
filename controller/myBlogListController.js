blogApp.controller('myBlogListController', ['$scope', '$state', function($scope, $state) {
    console.log("myBlogListController");
    $scope.fileNameChanged = function(t) {
        if (t.files && t.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#blogimageView').attr('src', e.target.result);
            }
            reader.readAsDataURL(t.files[0]);
        }
    }
    $scope.blogList = [
       {
        "id" : "1",
        "name" : "Man must explore, and this is exploration at its greatest",
        "submittedBy" : "UserName",
        "submittedAt" : "September 24, 2014"
       },
       {
        "id" : "2",
        "name" : "Man must explore, and this is exploration at its greatest",
        "submittedBy" : "UserName",
        "submittedAt" : "September 24, 2014"
       },
       {
        "id" : "3",
        "name" : "Man must explore, and this is exploration at its greatest",
        "submittedBy" : "UserName",
        "submittedAt" : "September 24, 2014"
       }
    ];
}]);
