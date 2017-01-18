import Ember from 'ember';

export default Ember.Controller.extend({
  init: function () {
    this._super();

  },
  actions: {
    next: function() {
      //Ember.$('video').hide();
      this.transitionToRoute('home.start');
    },
    playerready: function(player) {
      player.play();
      Ember.$.getJSON('https://open.hpi.de/api/v2/stats/global.json').then(response => this.handleDataResponse(response, 'openhpi'));
      Ember.$.getJSON('https://open.hpi.de/api/v2/stats/active_users.json').then(response => this.set('model.openhpi_active_users', response.count));
    },
    playerprogress: function(player, component) {
      if (player.currentTime()>12.0 && player.currentTime()<14.0){
          Ember.$('.fixed_stats').fadeIn();
          Ember.$('.fixed_stats').addClass('fixed_stats_move');
      }
      if (player.currentTime()>19.5){
          Ember.$('.fixed_stats').fadeOut();
      }
    },
    handleDataResponse: function(data, site) {
      this.set('model.'+site+'_all_users', data.global_statistic.confirmed_users);
      this.set('model.'+site+'_enrollments', data.global_statistic.total_enrollments);
    }
  }



});
