import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
  this.route('test', function() {
    this.route('contract');
  });
  // this.mount('cq-vehicles');
});

export default Router;
