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

LinkModel = Graviton.Model.extend({
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
    var recips = this.recipients.all();
    //var listText = recips[0].username + ', ' + recips[1].username;
    console.log(recips);
    console.log('  ');
    console.log('  ');
    return recips;
  },
  recipCount: function() {
    return this.recipients.find().count();
  }
  //TOFIX : get a sender display name here
});

Links = Graviton.define("links", {
  modelCls: LinkModel
});

