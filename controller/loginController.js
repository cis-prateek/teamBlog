blogApp.controller('loginController', ['$scope', '$localStorage', '$state', function($scope, $localStorage, $state) {
   console.log("loginController");
   $scope.submitForm = function() {
      
      // call api for login 
      alert("Api Call");
      
      var loginUser = {
      	 "id":"1",
      	 "email":"cisdev101@cisinlabs.com"
      }
      $localStorage.isLogin = true;
      $localStorage.loginUser = loginUser;  

      //change the menu
      $scope.$emit("sendLoginInfo");
      // $scope.isLogin = (typeof $localStorage.isLogin !== "undefined" && $localStorage.isLogin == true) ? true : false;
      console.log("isLogin", $scope.isLogin);
      $state.go("dashboard");
   }
}]);