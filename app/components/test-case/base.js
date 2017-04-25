import Ember from 'ember';

export default Ember.Component.extend({
	init(){
		this._super(...arguments);
		this.type = 'Ping';
		this.test_cases = [
			'Ping',
			'NSLookup',
			'Database Check',
			'File Check'
		];
	},
	actions: {
		selectType(type){
			this.set('type', type);
		},
		addTestCase(testCase){
			this.sendAction('addAction', testCase);
		}
	}
});
