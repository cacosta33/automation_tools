import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [{
			id: 1,
			title: 'First Blog Post',
			content: "Hello World!",
			date: new Date().toDateString()
		},{
			id: 2,
			title: 'Second Blog Post',
			content: "Konnichiwa!",
			date: new Date().toDateString()
		},
		];
	}
});
