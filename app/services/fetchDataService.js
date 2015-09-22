gmailApp.service('fetchDataService', function($http,$q){
	this.getData = function() {
        var deferred = $q.defer();
        $http.get('assets/json/mails.json').success(function(data) {
            deferred.resolve(data);
        }).error(function() {
            deferred.reject();
        });
        return deferred.promise;
    }
});