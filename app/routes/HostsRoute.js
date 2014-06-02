/**
 * Ember route for hosts.
 */
App.HostsRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        this._super(controller, model);
        this.controllerFor('countries').set('content', this.store.find('country'));
        this.controllerFor('departments').set('content', this.store.find('department'));
    }
});