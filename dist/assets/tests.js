'use strict';

define('zonky-average/tests/acceptance/average-test', ['qunit', 'zonky-average/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
	'use strict';

	(0, _moduleForAcceptance.default)('Acceptance | average');

	(0, _qunit.test)('visiting /', function (assert) {
		visit('/');

		andThen(function () {
			assert.equal(currentURL(), '/average', 'we want to show average route once site is loaded');
		});
	});

	(0, _qunit.test)('Should change url to /average', function (assert) {
		visit('/');

		click('a:contains("Průměrná výše půjček")');
		andThen(function () {
			assert.equal(currentURL(), '/average');
		});
	});

	(0, _qunit.test)('Link A** should change url to /average?rating=AAAAA', function (assert) {
		visit('/average');

		click('a:eq("1")');
		andThen(function () {
			assert.equal(currentURL(), '/average?rating=AAAAA');
		});
	});

	(0, _qunit.test)('Link A* should change url to /average?rating=AAAA', function (assert) {
		visit('/average');

		click('a:eq("2")');
		andThen(function () {
			assert.equal(currentURL(), '/average?rating=AAAA');
		});
	});

	(0, _qunit.test)('Link A++ should change url to /average?rating=AAA', function (assert) {
		visit('/average');

		click('a:eq("3")');
		andThen(function () {
			assert.equal(currentURL(), '/average?rating=AAA');
		});
	});

	(0, _qunit.test)('Link A+ should change url to /average?rating=AA', function (assert) {
		visit('/average');

		click('a:eq("4")');
		andThen(function () {
			assert.equal(currentURL(), '/average?rating=AA');
		});
	});

	(0, _qunit.test)('Link A should change url to /average?rating=A', function (assert) {
		visit('/average');

		click('a:eq("5")');
		andThen(function () {
			assert.equal(currentURL(), '/average?rating=A');
		});
	});

	(0, _qunit.test)('Link B should change url to /average?rating=B', function (assert) {
		visit('/');

		click('a:eq("6")');
		andThen(function () {
			assert.equal(currentURL(), '/average?rating=B');
		});
	});

	(0, _qunit.test)('Link C should change url to /average?rating=C', function (assert) {
		visit('/');

		click('a:eq("7")');
		andThen(function () {
			assert.equal(currentURL(), '/average?rating=C');
		});
	});

	(0, _qunit.test)('Link D should change url to /average?rating=D', function (assert) {
		visit('/');

		click('a:eq("8")');
		andThen(function () {
			assert.equal(currentURL(), '/average?rating=D');
		});
	});
});
define('zonky-average/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/average.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/average.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/average.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/average.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});
define('zonky-average/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('zonky-average/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'zonky-average/tests/helpers/start-app', 'zonky-average/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('zonky-average/tests/helpers/resolver', ['exports', 'zonky-average/resolver', 'zonky-average/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('zonky-average/tests/helpers/start-app', ['exports', 'zonky-average/app', 'zonky-average/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('zonky-average/tests/test-helper', ['zonky-average/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('zonky-average/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/average-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/average-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/average-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/average-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/average-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/average-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
});
define('zonky-average/tests/unit/controllers/average-test', ['ember-qunit'], function (_emberQunit) {
	'use strict';

	(0, _emberQunit.moduleFor)('controller:average', 'Unit | Controller | average', {});

	(0, _emberQunit.test)('Test rating initial value', function (assert) {
		var controller = this.subject();
		assert.equal(controller.get('rating'), null, 'rating is initialized as null');
	});
});
define('zonky-average/tests/unit/routes/average-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:average', 'Unit | Route | average', {});

  (0, _emberQunit.test)('average route exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('zonky-average/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {});

  (0, _emberQunit.test)('index route exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('zonky-average/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
