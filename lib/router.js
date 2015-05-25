Router.configure({
  layouttemplate: 'layout',
  waitOn: function () { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
