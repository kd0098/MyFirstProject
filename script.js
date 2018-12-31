var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.questionPaper = [
    {
    	question: " this is first question",
    	option:["first", "second", "third", "forth"],
    	answer: "first"
    },
    {
    	question: " this is second question",
    	option:["first", "second", "third", "forth"],
    	answer: "second"
    }
    ];
    $scope.answers = [];
    $scope.score = 0;
    $scope.debug = false;
    
    hideQuestion = false;
    showScore = false;
    
    $scope.questionVisibility = function() {
    	$scope.hideQuestion = !$scope.hideQuestion;
    }

    $scope.evaluate = function() {
    	len = $scope.questionPaper.length;
    	count = 0;
    	console.log(len);
    	for(i=0; i<len; ++i) {
    		if($scope.questionPaper[i].answer === $scope.answers[i])
    			++count;
    	}
    	$scope.score = count;
    }

    $scope.nextStep = function() {
    	$scope.showScore = true;
    	$scope.questionVisibility();
    	$scope.evaluate();
    }
});



