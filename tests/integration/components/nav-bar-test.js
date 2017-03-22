import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import utility from 'automation-tools/tests/test-utils/utility';

moduleForComponent('nav-bar', 'Integration | Component | nav bar', {
  integration: true
});

var util = utility.create();

test('it renders', function(assert){

  this.render(hbs`{{nav-bar}}`);

  assert.equal(util.trimFiller(this.$().text()), 'Cesar\'s Domain About Tools');
});

test('can visit about link', function(assert){
	
	this.render(hbs`{{nav-bar}}`);

	this.click('#about').then(function(){
		assert.equal(currentURL(), '/about', 'correct URL was linked to about page');
	});
});

test('can visit tools link', function(assert){
	
	this.render(hbs`{{nav-bar}}`);

	this.click('#tools').then(function(){
		assert.equal(currentURL(), '/tools', 'correct URL was linked to tools page');
	});
});