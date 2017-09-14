"use strict";



define('zonky-average/app', ['exports', 'zonky-average/resolver', 'ember-load-initializers', 'zonky-average/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('zonky-average/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('zonky-average/controllers/average', ['exports'], function (exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
				value: true
		});
		exports.default = Ember.Controller.extend({
				queryParams: ['rating'],
				rating: null
		});
});
define('zonky-average/helpers/app-version', ['exports', 'zonky-average/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('zonky-average/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('zonky-average/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('zonky-average/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'zonky-average/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('zonky-average/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('zonky-average/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('zonky-average/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('zonky-average/initializers/export-application-global', ['exports', 'zonky-average/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('zonky-average/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('zonky-average/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('zonky-average/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("zonky-average/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('zonky-average/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('zonky-average/router', ['exports', 'zonky-average/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('average');
    this.route('about');
  });

  exports.default = Router;
});
define('zonky-average/routes/average', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _asyncToGenerator(fn) {
		return function () {
			var gen = fn.apply(this, arguments);
			return new Promise(function (resolve, reject) {
				function step(key, arg) {
					try {
						var info = gen[key](arg);
						var value = info.value;
					} catch (error) {
						reject(error);
						return;
					}

					if (info.done) {
						resolve(value);
					} else {
						return Promise.resolve(value).then(function (value) {
							step("next", value);
						}, function (err) {
							step("throw", err);
						});
					}
				}

				return step("next");
			});
		};
	}

	var RSVP = Ember.RSVP;

	var Promise = RSVP.Promise;

	/**  
 * returns total amount of loans on marketplace for given rating
 */

	var getTotalLoansForRating = function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(rating) {
			var getTotalLoansPromise, totalLoansForRating, totalLoans;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							getTotalLoansPromise = new Promise(function (resolve, reject) {
								var request = new XMLHttpRequest();
								var url = 'https://api.zonky.cz/loans/marketplace?fields=amount&rating__eq=' + rating;
								request.open('GET', url);
								request.setRequestHeader("X-Size", 1);
								request.onload = function () {
									return resolve(request);
								};
								request.onerror = function () {
									return reject(request.statusText);
								};
								request.send();
							});
							_context.next = 3;
							return getTotalLoansPromise;

						case 3:
							totalLoansForRating = _context.sent;
							totalLoans = totalLoansForRating.getResponseHeader("X-Total");
							return _context.abrupt('return', totalLoans);

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		return function getTotalLoansForRating(_x) {
			return _ref.apply(this, arguments);
		};
	}();

	/**
 * returns JSON with loan objects on. Total amount of loans is determined by size parameter
 * e.g. [{"amount":120000.00,"published":true},{"amount":200000.00,"published":true} ... {"amount":85000.00,"published":true}]
 */
	function getLoansPageWithRating(rating, size) {
		return new Promise(function (resolve, reject) {
			var request = new XMLHttpRequest();
			var url = 'https://api.zonky.cz/loans/marketplace?fields=amount&rating__eq=' + rating;
			request.open('GET', url);
			request.setRequestHeader("X-Size", size);
			request.onload = function () {
				return resolve(JSON.parse(request.responseText));
			};
			request.onerror = function () {
				return reject(request.statusText);
			};
			request.send();
		});
	}

	/**
 * returns JSON with all loan objects marketplace.
 */

	var getLoansForSpecifiedRating = function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(rating) {
			var totalLoans, loans;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return getTotalLoansForRating(rating);

						case 2:
							totalLoans = _context2.sent;
							_context2.next = 5;
							return getLoansPageWithRating(rating, totalLoans);

						case 5:
							loans = _context2.sent;
							return _context2.abrupt('return', loans);

						case 7:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		return function getLoansForSpecifiedRating(_x2) {
			return _ref2.apply(this, arguments);
		};
	}();

	/**
 * returns average loans amount rounded by decimals parameter
 */
	function countAverage(loans, decimals) {
		var totalAmount = 0;
		if (loans) {
			loans.forEach(function (loan) {
				totalAmount += loan.amount;
			});
		}

		var average = Number(totalAmount / loans.length);
		return average.toFixed(decimals);
	}

	/**
 * for given rating, sets average loan amount as the average parameter in controller 
 */

	var setAverage = function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(rating, controller) {
			var average, loans;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							if (!(rating != null)) {
								_context3.next = 7;
								break;
							}

							average = 0;
							_context3.next = 4;
							return getLoansForSpecifiedRating(rating);

						case 4:
							loans = _context3.sent;

							if (loans.length != 0) {
								average = Number(countAverage(loans, 0)).toLocaleString();
							}
							controller.set('average', average);

						case 7:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this);
		}));

		return function setAverage(_x3, _x4) {
			return _ref3.apply(this, arguments);
		};
	}();

	exports.default = Ember.Route.extend({
		queryParams: {
			rating: { refreshModel: true }
		},
		actions: {
			queryParamsDidChange: function queryParamsDidChange(changed, all, removed) {
				if ('rating' in changed) {
					this.refresh();
				} else if ('rating' in removed) {
					this.controllerFor('average').set('average', null);
				}
			}
		},
		beforeModel: function beforeModel(transition) {
			var controller = this.controllerFor('average');
			var rating = transition.queryParams.rating;
			setAverage(rating, controller);
		},
		model: function model() {
			return RSVP.hash({
				ratings: [{ "display-name": "A**", "url-param": "AAAAA" }, { "display-name": "A*", "url-param": "AAAA" }, { "display-name": "A++", "url-param": "AAA" }, { "display-name": "A+", "url-param": "AA" }, { "display-name": "A", "url-param": "A" }, { "display-name": "B", "url-param": "B" }, { "display-name": "C", "url-param": "C" }, { "display-name": "D", "url-param": "D" }]
			});
		}
	});
});
define('zonky-average/routes/index', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		beforeModel: function beforeModel() {
			this.replaceWith('average');
		}
	});
});
define('zonky-average/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("zonky-average/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Z0bBc1+d", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"main-page-container\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"average\",[25,\"query-params\",null,[[\"rating\"],[\"null\"]]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"h1\"],[7],[0,\"Průměrná výše půjček\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\"],[6,\"div\"],[9,\"class\",\"body\"],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"splitter-bar\"],[7],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"h2\"],[9,\"class\",\"ratings-title\"],[7],[0,\"Rating:\"],[8],[0,\"\\n\\t\\t\"],[1,[18,\"outlet\"],false],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "zonky-average/templates/application.hbs" } });
});
define("zonky-average/templates/average", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jHTt6AhN", "block": "{\"symbols\":[\"rating\"],\"statements\":[[6,\"div\"],[9,\"class\",\"rating-list\"],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"rating-buttons\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"model\",\"ratings\"]]],null,{\"statements\":[[4,\"link-to\",[\"average\",[25,\"query-params\",null,[[\"rating\"],[[19,1,[\"url-param\"]]]]]],[[\"class\"],[\"rating-btn\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\"],[1,[19,1,[\"display-name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"\\t\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"average-amount\"],[7],[0,\"\\n\\t\"],[6,\"p\"],[7],[0,\"\\n\"],[4,\"if\",[[19,0,[\"average\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[1,[18,\"average\"],false],[0,\" Kč\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\t\\t\\tZvolte rating\\n\"]],\"parameters\":[]}],[0,\"\\t\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "zonky-average/templates/average.hbs" } });
});
define("zonky-average/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Gm0ocUei", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "zonky-average/templates/index.hbs" } });
});


define('zonky-average/config/environment', ['ember'], function(Ember) {
  var prefix = 'zonky-average';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("zonky-average/app")["default"].create({"name":"zonky-average","version":"0.0.0+e5aa27ac"});
}
//# sourceMappingURL=zonky-average.map
