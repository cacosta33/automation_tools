import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		submitAttrs(){
			this.sendAction("sendAttrs", {
				"type": "ping",
				"attrs": {
					"ip_address": this.get("ip_address")
				}
			});
		}
	}
});
