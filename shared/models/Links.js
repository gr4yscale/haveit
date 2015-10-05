Links = new Mongo.Collection("links");

Link = Astro.Class({
  name: 'Link',
  collection: Links,
  fields: {'url':'string', 'recipients':'array', 'title':'string', 'createdOn':'date'}
});