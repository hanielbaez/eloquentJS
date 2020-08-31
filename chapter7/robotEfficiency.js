//compute all possible routes, and choose the closest one (12 steps/avgs)
function shortRouteRobot({ place, parcels }, route) {
    if (route.length == 0) {
      let shortDistance = Infinity
  
      parcels.forEach((parcel) => {
        if (parcel.place != place) {
          const routeFound = findRoute(roadGraph, place, parcel.place);
          if (routeFound.length < shortDistance) {
            shortDistance = routeFound.length;
            route = routeFound;
          }
        } else {
          const routeFound = findRoute(roadGraph, place, parcel.address);
          if (routeFound.length < shortDistance) {
            shortDistance = routeFound.length;
            route = routeFound;
          }
        }
      })
    }
    return { direction: route[0], memory: route.slice(1) };
  }