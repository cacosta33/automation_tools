import Ember from 'ember';

Ember.Route.reopen({
	hasLayout: true,
	setupController: function(){
		this._super(...arguments);
		this.controllerFor('application').set('showLayout', this.get('hasLayout'));
	},
});

export default Ember.Route.extend({
});
