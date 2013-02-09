Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean'),
	urlFromTitle: function() {
		return "sword://KJV/" + this.get('title');
	}.property('title'),
	todoDidChange: function() {
		Ember.run.once(this, function() {
			this.get('store').commit();
		});
	}.observes('isCompleted', 'title')
});
