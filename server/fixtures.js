if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Intoducing Telescope',
    url: 'http://sachagreif.com/intoductin-telescope'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook'
  });
}
