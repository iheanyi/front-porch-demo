import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('contacts', function() {
    this.route('show', {path: '/:id'});
  });

  //this.route('contact', {path: '/contacts/:id'});
});
