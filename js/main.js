// Create our angular application
var app = angular.module('TodoApp', []);

// Create a new controller for the todo input field

app.controller('TodoController', function($scope) {

  // Create input variable, set it to an empty string
  $scope.myInput = "";

  // Create an array to store tasks
  $scope.myTasks = [];

  // all, completd, uncompleted
  $scope.currentList = "all";

  /**
   * Submits a task
   * @param  {String} description The task description
   */
  $scope.submit = function (description) {
    // Don't create empty tasks
    if (description === "") return;

    // Create a new task
    var newTask = new Task(description);

    // Store in the tasks array
    $scope.myTasks.push(newTask);

    // Clear out input field
    $scope.myInput = "";
  };

  /**
   * Removes a task from the array
   * @param  {Task} task The task to remove
   */
  $scope.deleteTask = function (task) {
    var taskIndex = $scope.myTasks.indexOf(task);
    $scope.myTasks.splice(taskIndex, 1);
  };
});

/**
 * A Task object
 * @param {String} description The task's description.
 */
function Task (description) {
  this.description = description;
  this.completed = false;
}
