import Ember from 'ember';

let model = {
	email: 'alternativeEmail@ae.com',
	phoneNum: '---',
};

export default Ember.Route.extend({
	model: function(){
		return model;
	}
});
