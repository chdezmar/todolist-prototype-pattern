"use strict";

var Mustache = require('mustache');


(function(exports) {
	var List = function() {
		this.tasks = [];
	};

	List.prototype = {
		retrieve: function(){
			return this.tasks.pop();
		},
		store: function(task){
			this.tasks.push(task);
		},
		createHTML: function() {
			var html_array = [];
			for(var i = 0; i < this.tasks.length; i++) {
				var view = {
					task: this.tasks[i]
				};
				var template = ('<li><div>{{task}}</div></li>');
				var html_render = Mustache.render(template, view);
				html_array.push(html_render);
			}
			return "<ul>" + html_array.join('') + "</ul>";
		}
	};

	exports.List = List;
})(this);

// createHTML: function(task) {
// 	var view = {
// 		task: task
// 	};
// 	return Mustache.render('<ul><li><div>{{task}}</div></li></ul>', view);
// }
