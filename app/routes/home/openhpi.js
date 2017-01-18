import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      openhpi_all_users: 134439,
      openhpi_active_users: null,
      openhpi_enrollments: 350215
    });
  },
  activate: function() {
    this._super();
  }

});
