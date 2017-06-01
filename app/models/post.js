import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	content: DS.attr('string'),
	raw_date: DS.attr('date'),
	date: Ember.computed('raw_date', function(){
		return `${this.get('raw_date').toString('yyyy')}`;
	}),
	time: Ember.computed('raw_date', function(){
		return `${this.get('raw_date').toString('hh:mm:ss')}`;
	})
});
