'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _module2 = require('../../module');

var _module3 = _interopRequireDefault(_module2);

var _utilParseSelector = require('../../util/parse-selector');

var _utilParseSelector2 = _interopRequireDefault(_utilParseSelector);

var _utilDecorateDirective = require('../../util/decorate-directive');

var _utilDecorateDirective2 = _interopRequireDefault(_utilDecorateDirective);

var _writers = require('../../writers');

var TYPE = 'directive';

var Component = function Component(config) {
	return function (t) {
		if (!config.selector) {
			throw new Error('Component selector must be provided');
		}

		var _parseSelector = (0, _utilParseSelector2['default'])(config.selector);

		var name = _parseSelector.name;
		var type = _parseSelector.type;

		if (type !== 'E') {
			throw new Error('Component selectors can only be elements. Perhaps you meant to use @Directive?');
		}

		_writers.providerWriter.set('name', name, t);
		_writers.providerWriter.set('type', TYPE, t);

		// Sensible defaults for components
		_writers.componentWriter.set('restrict', type, t);
		_writers.componentWriter.set('scope', {}, t);
		_writers.componentWriter.set('bindToController', true, t);

		(0, _utilDecorateDirective2['default'])(config, t);
	};
};
exports.Component = Component;