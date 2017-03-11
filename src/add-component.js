'use strict'

var app = angular.module('app.calculator.add');

function AddController() {
    var self = this;
    self.result;

    self.add = function(leftOperand, rightOperand) {
        self.result = leftOperand + rightOperand;
    }
};


app.component('je-add', {
    templateUrl: 'add-component.html',
    controller: AddController
});