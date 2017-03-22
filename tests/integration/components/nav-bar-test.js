import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import utility from 'automation-tools/tests/test-utils/utility';

moduleForComponent('nav-bar', 'Integration | Component | nav bar', {
  integration: true
});

var util = utility.create();

test('it renders', function(assert){

  this.render(hbs`{{nav-bar}}`);

  assert.equal(util.trimFiller(this.$().text()), 'Cesar\'sDomainAboutToolsTool1Tool2');
});