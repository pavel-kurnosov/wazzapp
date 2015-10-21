Meteor.methods({
  newMessage: function (message) {
    //if (! this.userId) {
    //  throw new Meteor.Error('not-logged-in',
    //    'Must be logged in to send message.');
    //}
 
    check(message, {
      text: String,
      chatId: String
    });

    message.timestamp = new Date();
    //message.userId = this.userId;
    
    var messageId = Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });

    return messageId;
  }
});