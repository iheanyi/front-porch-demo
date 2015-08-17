/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

describe('Acceptance: ListContacts', function() {
  var application;
  
  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  it('can visit /contacts and see 10 contacts', function() {
    server.createList('contact', 10);

    visit('/contacts');

    andThen(function() {
      expect(currentPath()).to.equal('contacts.index');
      expect(find('.contacts__list__item').length).to.equal(10);
    });
  });
});
