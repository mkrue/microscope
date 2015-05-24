var postsData = [
  {
    title: 'Introductin Telescope',
    url: 'http://sachagreif.com/introductin-telescope'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
];

Template.postsList.helpers({
  posts: postsData
});
