blogApp.controller('dashboardController', ['$scope', function($scope) {
    console.log("dashboardController");
    $scope.data = [];
    $scope.data[1] = "active";

    $scope.setActiveTab = function(tabNum) {
        $scope.data = [];
        $scope.data[tabNum] = "active";
    };

}]);
