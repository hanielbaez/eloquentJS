//compute all possible routes, and choose the closest one (12 steps/avgs)
function shortRouteRobot({ place, parcels }, route) {
  if (route.length == 0) {

    let distanceToPick = Infinity;
    let distanceToDrop = Infinity;
    let routeToPick, routeToDrop;

    parcels.forEach((parcel) => {
      if (parcel.place != place) {
        //pick up parcel
        const routeFound = findRoute(roadGraph, place, parcel.place);
        if (routeFound.length < distanceToPick) {
          distanceToPick = routeFound.length;
          routeToPick = routeFound;
        }
      }
      else {
        //drop parcel
        const routeFound = findRoute(roadGraph, place, parcel.address);
        if (routeFound.length < distanceToDrop) {
          distanceToDrop = routeFound.length;
          routeToDrop = routeFound;
        }
      }
    })

    // Compare the distance between the shortest place to pick up a package 
    // and the shortest place to drop off a package. 
    // Given preference to pick up.
    route = distanceToPick < distanceToDrop + 2 ? routeToPick : routeToDrop;
  }
  return { direction: route[0], memory: route.slice(1) };
}