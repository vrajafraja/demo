import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:average', 'Unit | Controller | average', {
});

test('Test rating initial value', function(assert){
	let controller = this.subject();
	assert.equal(controller.get('rating'), null, 'rating is initialized as null');
});