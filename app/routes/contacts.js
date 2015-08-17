// app/routes/contact.js
import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    // fetches every contact from api/contacts
    return this.store.find('contact');
  }
});
