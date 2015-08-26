'use strict';
var test = require('tape');
var childProcess = require('child_process');
test('Testing output', function (t) {
	t.plan(2);
	childProcess.execFile('./cli.js', ['www.google.com'], {cwd: __dirname}, function (err, stdout) {
		if (err) {
			t.end();
		}
		t.equal('✔ Reachable\n', stdout, 'Both strings are equal');
	});
	childProcess.execFile('./cli.js', ['randowmtext'], {cwd: __dirname}, function (err, stdout) {
		if (err) {
			t.end();
		}
		t.equal('✖ Not Reachable\n', stdout, 'Both strings are equal');
	});
});
