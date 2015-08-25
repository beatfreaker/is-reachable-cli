'use strict';
var test = require('tape');
var childProcess = require('child_process');
var logSymbols = require('log-symbols');

test('Testing output', function (t) {
	t.plan(1);
	childProcess.execFile('./cli.js', ['www.google.com'], {cwd: __dirname}, function (err, stdout) {
		t.equal(stdout, logSymbols.success + ' Reachable');
	});
});
