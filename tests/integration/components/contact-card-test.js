/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'contact-card',
  'Integration: ContactCardComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#contact-card}}
      //     template content
      //   {{/contact-card}}
      // `);

      this.render(hbs`{{contact-card}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
