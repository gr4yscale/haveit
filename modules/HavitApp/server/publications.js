import Links from 'HavitApp/collections/Links';

Meteor.publish('links', function () {
  return Links.find({
    $or: [
      { private: {$ne: true} },
      { sender: this.userId },
      { recipient: this.userId }
    ]
  });
});
