import Ember from 'ember';

let model = {
	email: 'cacosta333@hotmail.com',
	phoneNum: '678-749-1844',
};

export default Ember.Route.extend({
	model: function(){
		return model;
	}
});
