"use strict";

(function(exports) {
	var Task = function(text) {
		this.text = text;
		this.isCompleted = false;
	};

	Task.prototype = {
		complete: function(){
			this.isCompleted = true;
		},

	};

	exports.Task = Task;
})(this);
