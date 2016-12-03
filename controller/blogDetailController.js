blogApp.controller('blogDetailController', ['$scope', '$stateParams', function($scope, $stateParams) {
    console.log("blogDetailController", $stateParams.blogId);
    $scope.singleBlog = {
        "name": "Man must explore, and this is exploration at its greatest",
        "detail": "Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.",
        "postedBy": "UserName",
        "postedAt": "August 24, 2014"
    }
    $scope.singleBlogComment = [
       {
           "id" : "1",
           "comment": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
           "commentedBy":"UserName",
           "commentedAt":"August 25, 2014 at 9:30 PM"
       },
       {
           "id" : "2",
           "comment": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
           "commentedBy":"UserName",
           "commentedAt":"August 25, 2014 at 9:30 PM"

       }
    ]
}]);
