//Links = new Mongo.Collection("links");

//Link = Astro.Class({
  //name: 'Link',
  //collection: Links,
  //fields: {'url':'string', 'recipients':'array', 'title':'string', 'createdOn':'date', 'sender':'string'},
    //relations: {
      //recipients: {
          //type: 'many',
          //class: 'Users',
          //local: 'recipients',
          //foreign: '_id'
        //}
      //}
//});
//


Graviton.registerCollection(Meteor.users);

const LinkModel = Graviton.Model.extend({
  belongsToMany: {
    recipients: {
      collectionName: 'users',
      field: 'recipients'
    }
  }
},{
  url : function() {
    return this.get('url');
  },
  title: function() {
    return this.get('title');
  },
  createdOn: function() {
    return this.get('createdOn');
  },
  recipientsDisplay: function() {
    // TOFIX: It's terrible to have display logic, fix later
    var recips = this.recipients.all();
    var displayText = '';
    var i = 0;
    while (i < recips.length) {
      displayText = displayText + recips[i].username + ', ';
      i++;
      if (i > 2) break;
    }
    if (displayText.length > 1) {
      displayText = displayText.substr(0, displayText.length - 2);
    }
    return displayText;
  },
  recipCount: function() {
    return this.recipients.find().count();
  }
  //TOFIX : get a sender display name here
});

const Links = Graviton.define("links", {
  modelCls: LinkModel
});

export default Links;
