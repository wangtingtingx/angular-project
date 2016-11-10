var indexTpl = require('../tpls/index.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(indexTpl);

var myApp = angular.module('myApp',['ngRoute']);
