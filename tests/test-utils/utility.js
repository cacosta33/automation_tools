import Ember from 'ember';

export default Ember.Object.extend({

	//Remove excess spaces and new line characters
	trimFiller(str){
		str = str.trim(); //Remove leading and trailing whitespaces
		str = str.replace(/(\r\n|\n|\r)/gm, ""); //Remove all new lines
		str = str.replace(/ +(?= )/g, ""); //Remove all white spaces
		return str;
	}


});