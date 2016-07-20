function MainController ($scope){

  $scope.numClicks = 0;




$scope.sumLike = function(numClicks) {
switch (numClicks) {
  case 1:
  return numClicks + " Like"
    break;
  default:
    return numClicks + " Likes"
    }
  }

}

MainController.$inject = ['$scope'];
export { MainController };
