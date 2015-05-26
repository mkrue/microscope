Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function(userId, doc) {
    rturn !! userId;
  }
});
