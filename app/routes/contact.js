import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    
    /*this.store.filter('contact', function(contact) {
      return contact.get('firstName')[0] === "A";
    });*/

    return this.store.find('contact', params.id).then(function(contact) {
      contact.set('firstName', 'Iheanyi');   
      contact.save();
    });
  }
});
