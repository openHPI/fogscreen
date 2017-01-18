export default Ember.Component.extend({
  delay: 1000,
  didRender() {
    this._super();
	  Ember.run.later(this.attrs.theAction, this.get('delay'));
  }
});
