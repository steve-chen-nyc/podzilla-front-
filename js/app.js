angular
  .module('Podcasts', ['ui.router'])
  .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: "/",
      })
      .state('sports',  {
          url: '/',
          templateUrl: "sports.html"
      })
      .state('comedy',  {
          url: '/',
          templateUrl: "comedy.html"
      })
      .state('technology',  {
          url: '/',
          templateUrl: "technology.html"
      })
      .state('feelinglucky',  {
          url: '/',
          templateUrl: "feelinglucky.html"
      })
      .state('ted',  {
          url: '/',
          templateUrl: "ted.html"
      })
      .state('business',  {
          url: '/',
          templateUrl: "business.html"
      })
      .state('twitter',  {
          url: '/',
          templateUrl: "twitter.html"
      })
      .state('category',  {
          url: '/',
          templateUrl: "category.html"
      })
   $urlRouterProvider.otherwise("/");
  }
