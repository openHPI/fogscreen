import Ember from 'ember';

export default Ember.Controller.extend({
  didInsertElement: function(){
    console.log('insert');
    var context = this;
    Ember.run.schedule("afterRender",this,function() {
        console.log('after Render');
      Ember.run.later((function() {

        context.send("next");
        //do something in here that will run in 2 seconds
      }), 5000);
    });
  },
  actions: {
    next: function() {
      this.transitionToRoute('home.openhpi');
    },
    playerready: function(player) {
      player.play();
    }
  }
});
