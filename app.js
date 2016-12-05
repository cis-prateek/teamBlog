var blogApp = angular.module('blogApp', ['ui.router']);

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

blogApp.controller('blogAppController', ['$scope', function($scope) {
    
}]);
