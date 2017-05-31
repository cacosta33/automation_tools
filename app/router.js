import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('home', { path: '/'});
  this.route('about');
  this.route('tools', function(){
  	this.route('tool1');
  	this.route('tool2');
  });

  this.route('test-case');
  this.route('add-edit-page');
  this.route('blog-page');
  this.route('resume');
});


export default Router;
