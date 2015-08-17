import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['fullName'],
  sortedContacts: Ember.computed.sort('model', 'sortProperties')
});
