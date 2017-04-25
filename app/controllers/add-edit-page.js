import Ember from 'ember';

export default Ember.Controller.extend({
	init(){
		this.set("validatorSteps", []);
	},

	actions: {
		addStep(object){
			this.propertyWillChange('validatorSteps');
			var arr = this.get("validatorSteps");
			arr.push(object);
			this.propertyDidChange('validatorSteps');
		}
	}
});
