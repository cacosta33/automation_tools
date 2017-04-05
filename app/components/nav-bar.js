import Ember from 'ember';

export default Ember.Component.extend({
	title: 'Cesar\'s Domain',
	menuItems: [
		{
			label: 'About',
			id: 'about',
			url: 'about',
			restricted: false,
		},
		{	
			label:'Tools',
			id: 'tools',
			restricted: false,
			links: [
				{
					label: 'Tool 1',
					id: 'tool1',
					url: 'tools.tool1',
					restricted: false
				},
				{
					label: 'Tool 2',
					id: 'tool2',
					url: 'tools.tool2',
					restricted: false
				}
			]
		}
	]
});
