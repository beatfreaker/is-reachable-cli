#!/usr/bin/env node
'use strict';
var logSymbols = require('log-symbols');
var meow = require('meow');
var isReachable = require('is-reachable');

var cli = meow({
	help: [
		'Example',
		'  $ is-reachable www.google.com',
		'  ' + logSymbols.success + ' Reachable'
	]
});

isReachable(cli.input, function (err, reachable) {
	if (err) {
		return;
	}
	console.log(reachable ? logSymbols.success + ' Reachable' : logSymbols.error + ' Not Reachable');
});
