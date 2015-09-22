gmailApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/inbox');

    $stateProvider
        .state('inbox', {
            url:'/inbox',
            templateUrl:'app/views/inbox.html',
            controller: 'inboxController',
            resolve: {
                data: function(fetchDataService) {
                    return fetchDataService.getData()
                }
            }
        })
        .state('starred', {
            url:'/starred',
            templateUrl:'app/views/starred.html'
        })
        .state('sent', {
            url: '/sent',
            templateUrl: 'app/views/sent.html'
        })
        .state('drafts', {
            url: '/drafts',
            templateUrl: 'app/views/drafts.html'
    });
});
