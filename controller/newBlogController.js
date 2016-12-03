blogApp.controller('newBlogController', ['$scope', '$state', function($scope, $state) {
    console.log("newBlogController");
    $scope.fileNameChanged = function(t) {
        if (t.files && t.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#blogimageView').attr('src', e.target.result);
            }
            reader.readAsDataURL(t.files[0]);
        }
    }
    $scope.submitFormBlog = function() {

    }
}]);
