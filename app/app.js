/**
 * Created by Julius Alvarado on 9/2/2017.
 */

angular
    .module('edhubJobsApp', [
        'firebase',
        'angular-md5',
        'ngRoute',
        'ngMaterial',
        'ngMdIcons',
        'smoothScroll'
    ])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyDm9xGbvRpbDtoCjjVwTnpulaoqBGdCagY",
                authDomain: "hacker-match.firebaseapp.com",
                databaseURL: "https://hacker-match.firebaseio.com",
                projectId: "hacker-match",
                storageBucket: "hacker-match.appspot.com",
                messagingSenderId: "791566696878"
            };

            firebase.initializeApp(config);
        }
    ]);