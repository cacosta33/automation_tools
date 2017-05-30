import Ember from 'ember';

let model = {
	email: 'alternativeEmail@ae.com',
	phoneNum: '(not making this public)',
};

export default Ember.Route.extend({
	model: function(){
		return model;
	}
});
