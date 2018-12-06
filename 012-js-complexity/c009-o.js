// observer design pattern : scotch.io deval patel

// Controller 1
$scope.$on('nameChanged', function(event, args) {
  $scope.name = args.name;
});

// ...

// Controller 2
$scope.userNameChanged = function(name) {
  $scope.$emit('nameChanged', {name: name});
};
