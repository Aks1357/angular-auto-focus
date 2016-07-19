/*global module:true, require:true */
(function () {
    'use strict';

    var angular,
        MODULE_NAME = 'kt.autoFocus';

    // Check for CommonJS support
    if (typeof module === 'object' && module.exports) {
        angular = require('angular');
        module.exports = MODULE_NAME;
    } else {
        angular = window.angular;
    }

    angular.module(MODULE_NAME, []).directive('ktAutoFocus', function ($timeout) {
        return {
            link: function (scope, element, attrs) {
                scope.$watch(attrs.ktAutoFocus, function (value) {
                    if (angular.isDefined(value) && value) {
                        $timeout(function () {
                            element[0].focus();
                        });
                    }
                }, true);
            }
        };
    });
}());
