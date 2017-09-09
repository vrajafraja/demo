import { test } from 'qunit';
import moduleForAcceptance from 'zonky-average/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | average');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/average', 'we want to show average route once site is loaded');
  });
});

test('Should change url to /average', function (assert){
	visit('/');

	click('a:contains("Průměrná výše půjček")');
	andThen(function() {
		assert.equal(currentURL(), '/average');
	});
});

test('Link A** should change url to /average?rating=AAAAA', function (assert){
	visit('/average');

	click('a:eq("1")');
	andThen(function() {
		assert.equal(currentURL(), '/average?rating=AAAAA');
	});
});

test('Link A* should change url to /average?rating=AAAA', function (assert){
	visit('/average');

	click('a:eq("2")');
	andThen(function() {
		assert.equal(currentURL(), '/average?rating=AAAA');
	});
});

test('Link A++ should change url to /average?rating=AAA', function (assert){
	visit('/average');

	click('a:eq("3")');
	andThen(function() {
		assert.equal(currentURL(), '/average?rating=AAA');
	});
});

test('Link A+ should change url to /average?rating=AA', function (assert){
	visit('/average');

	click('a:eq("4")');
	andThen(function() {
		assert.equal(currentURL(), '/average?rating=AA');
	});
});

test('Link A should change url to /average?rating=A', function (assert){
	visit('/average');

	click('a:eq("5")');
	andThen(function() {
		assert.equal(currentURL(), '/average?rating=A');
	});
});

test('Link B should change url to /average?rating=B', function (assert){
	visit('/');

	click('a:eq("6")');
	andThen(function() {
		assert.equal(currentURL(), '/average?rating=B');
	});
});

test('Link C should change url to /average?rating=C', function (assert){
	visit('/');

	click('a:eq("7")');
	andThen(function() {
		assert.equal(currentURL(), '/average?rating=C');
	});
});

test('Link D should change url to /average?rating=D', function (assert){
	visit('/');

	click('a:eq("8")');
	andThen(function() {
		assert.equal(currentURL(), '/average?rating=D');
	});
});

