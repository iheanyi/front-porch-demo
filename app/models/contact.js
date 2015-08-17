// app/models/contact.js
import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  avatar: DS.attr('string'),
  email: DS.attr('string'),
	description: DS.attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function(key, value) {
		return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
