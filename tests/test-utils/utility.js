import Ember from 'ember';

export default Ember.Object.extend({

	//Remove excess spaces and new line characters
	trimFiller(str){
		str = str.trim(); //Remove leading and trailing whitespaces
		str = str.replace(/\s/g, ""); //Remove all new lines
		str = str.replace(/ +(?= )/g, ""); //Remove all white spaces
		return str;
	}


});