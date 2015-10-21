angular
  .module('wazzapp')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.ng.html',
      resolve: {
        user: ['$meteor', function ($meteor) {
          return $meteor.requireUser();
        tep}]
        //,
        //chats: ['$meteor', function ($meteor) {
        //  return $meteor.subscribe('chats');
        //}]
      }
    })
    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/chats.ng.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/chat-detail.ng.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'client/templates/login.ng.html',
      controller: 'LoginCtrl'
    });

  $urlRouterProvider.otherwise('tab/chats');
}