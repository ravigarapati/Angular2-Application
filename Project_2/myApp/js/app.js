var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider) {
   $routeProvider
    .when("/ravi", {
       // template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
    })
    .when("/mounika", {
       // template : "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
    })
    .when("/narasimha", {
    	//controller: narasimhaController,
    	//controllerAs: 'nc',
    	templateUrl: 'views/pages/narasimha.html',
    	controller: 'narasimhaController',
    	controllerAs: 'nc'
       //template : "<h1>Welcome</h1><p>Narasimha</p>"
    })
    .otherwise({
        redirectTo: '/narasimha'
    });
});




