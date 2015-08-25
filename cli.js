#!/usr/bin/env node
'use strict'
var logSymbols = require('log-symbols');
var meow = require('meow');
var isReachable = require('is-reachable');

var cli = meow({
	help: [
		'Example',
		'  $ is-reachable-cli www.google.com',
		'  ' + logSymbols.success + ' Reachable'
	]
});

isReachable(cli.input, function (err, reachable) {
	console.log(reachable ? logSymbols.success + ' Reachable' : logSymbols.error + ' Not Reachable');
});
