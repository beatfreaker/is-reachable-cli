'use strict';
var test = require('tape');
var childProcess = require('child_process');

test('Testing output', function (t) {
	t.plan(2);
	childProcess.execFile('./cli.js', ['www.google.com'], {cwd: __dirname}, function (err, stdout) {
		t.assert(stdout.trim().length > 0);
	});
});
