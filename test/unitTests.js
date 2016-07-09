
var path = require('path');
var expect = require('chai').expect;
var List = require('../lib/list').List;
var Task = require('../lib/task').Task;

describe('Javascript object', function(){

	describe('List()', function(){

		beforeEach(function(){
			list = new List();
		});

		it('is empty by default', function(){
			expect(list.tasks).to.be.empty;
		});

		it('can store a task', function(){
			list.store('Eat breakfast');
			expect(list.tasks[0]).to.equal('Eat breakfast');
		});

		it('can retrieve a task', function(){
			list.store('Eat breakfast')
			expect(list.retrieve()).to.equal('Eat breakfast');
		});
	});


	describe('Task()', function(){

		beforeEach(function(){
			task = new Task('buy milk');
		});

		it('can be instantiated with a name', function(){
			expect(task.text).to.equal('buy milk');
		});

		it('is not completed by default', function() {
			expect(task.isCompleted).to.be.false;
		})

		it('can be completed', function(){
			task.complete();
			expect(task.isCompleted).to.be.true;
		});
	});


	describe('Mustache', function(){
		// it('returns tasks html when passing list model', function() {
		// 	task = new Task('buy milk');
		// 	expect(list.createHTML(task.text)).to.equal('<ul><li><div>buy milk</div></li></ul>');
		// });

		it('returns an ul of tasks when passing list model', function() {
			list = new List();
			list.store('Eat breakfast');
			list.store('Buy milk');
			expect(list.createHTML()).to.equal('<ul><li><div>Eat breakfast</div></li><li><div>Buy milk</div></li></ul>');
		});




	});


});
