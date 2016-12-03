var blogApp = angular.module('blogApp', ['ui.router', 'ngStorage']);

blogApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
        url: '/home',
        templateUrl: 'view/home.html',
        data: {
            requireLogin: false
        }
    })

    // nested list with custom controller
    .state('home.postlist', {
        url: '/list',
        templateUrl: 'view/partial-home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        },
        data: {
            requireLogin: false
        }
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
            url: '/about',
            views: {
                '': {
                    templateUrl: 'view/about.html'
                },
            },
            data: {
                requireLogin: true
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'view/login.html',
            data: {
                requireLogin: false
            }
        })
        .state('sign-up', {
            url: '/sign-up',
            templateUrl: 'view/sign-up.html',
            data: {
                requireLogin: false
            }
        })
        .state('blogDetail', {
            url: '/blog/:blogId',
            templateUrl: 'view/blogDetail.html',
            data: {
                requireLogin: false
            }
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'view/dashboard.html',
            data: {
                requireLogin: true
            }
        })
        .state('my-blog', {
            url: '/my-blog',
            templateUrl: 'view/myBlogList.html',
            data: {
                requireLogin: true
            }
        })
        .state('add-blog', {
            url: '/add-blog',
            templateUrl: 'view/newBlog.html',
            data: {
                requireLogin: true
            }
        });

});

blogApp.run(['$rootScope', '$state', '$localStorage', function($rootScope, $state, $localStorage) {
    $rootScope.$on('$stateChangeStart', function(event, $stateProvider) {
        var requireLogin = $stateProvider.data.requireLogin;
        if (requireLogin && typeof $localStorage.isLogin === "undefined" && !$localStorage.isLogin) {
            event.preventDefault();
            $state.go("login");
        }
    });
}]);

blogApp.controller('blogAppController', ['$scope', '$localStorage', '$state', function($scope, $localStorage, $state) {
    console.log("isLogin", $localStorage);

    $scope.isLogin = (typeof $localStorage.isLogin !== "undefined" && $localStorage.isLogin == true) ? true : false;

    $scope.logoutUser = function() {
        delete $localStorage.isLogin;
        delete $localStorage.loginUser;
        $scope.isLogin = (typeof $localStorage.isLogin !== "undefined" && $localStorage.isLogin == true) ? true : false;
    }
    $scope.$on("sendLoginInfo", function(evt) {
        $scope.isLogin = (typeof $localStorage.isLogin !== "undefined" && $localStorage.isLogin == true) ? true : false;
    });
    console.log("isLogin", $scope.isLogin);
    
    $scope.blogList = [{
        "id": "1",
        "name": "Man must explore, and this is exploration at its greatest",
        "submittedBy": "UserName",
        "submittedAt": "September 24, 2014"
    }, {
        "id": "2",
        "name": "Man must explore, and this is exploration at its greatest",
        "submittedBy": "UserName",
        "submittedAt": "September 24, 2014"
    }, {
        "id": "3",
        "name": "Man must explore, and this is exploration at its greatest",
        "submittedBy": "UserName",
        "submittedAt": "September 24, 2014"
    }];
}]);
