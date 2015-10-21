angular
  .module('wazzapp')
  .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $state, $ionicLoading, $ionicPopup, $log) {
  $scope.data = {};
  $scope.login = login;

  ////////////

  function login() {
    if (_.isEmpty($scope.data)) {
      return;
    }
    Accounts.createUser($scope.data, function () {
      $state.go('tab.chats');
    });
  }
}