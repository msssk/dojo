define([
	'intern!object',
	'intern/chai!assert',
	'dojo/regexp'
], function (registerSuite, assert, regexp) {
	var regexpString = '\f\b\n\t\r+.$?*|{}()[]\\/^';

	registerSuite({
		name: 'dojo/regexp',

		'escape': function () {
			var re1 = new RegExp(regexp.escapeString(regexpString));
			var re2 = new RegExp(regexp.escapeString(regexpString, '.'));

			assert.ok(re1.test('TEST\f\b\n\t\r+.$?*|{}()[]\\/^TEST'));
			assert.ok(re2.test('TEST\f\b\n\t\r+X$?*|{}()[]\\/^TEST'));
		}
	});
});
