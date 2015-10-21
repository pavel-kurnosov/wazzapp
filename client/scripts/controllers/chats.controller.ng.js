angular
  .module('wazzapp')
  .controller('ChatsCtrl', ChatsCtrl);

function ChatsCtrl($scope, $ionicModal, $meteor) {

  $scope.chats = $scope.$meteorCollection(Chats, false);

  $scope.remove = function(chat) {
    //$meteor.call('removeChat', chat._id);
    $scope.chats.remove(chat);
  };
  //
  //$ionicModal.fromTemplateUrl('client/templates/new-chat.ng.html', {
  //  scope: $scope
  //}).then(function (modal) {
  //  $scope.modal = modal;
  //});
  //
  //$scope.$on('$destroy', function () {
  //  $scope.modal.remove();
  //});
  //
  //$scope.openNewChatModal = function () {
  //  $scope.modal.show();
  //}
}