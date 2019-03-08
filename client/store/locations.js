const GET_ALL_LOCATIONS = "GET_ALL_LOCATION";

const GET_SINGLE_LOCATION = "GET_SINGLE_LOCATION";

const GET_FAVORITE_LOCATIONS = "GET_FAVORITE_LOCATIONS";

export const gotAllLocations = locations => ({
  type: GET_ALL_LOCATIONS,
  locations
});

export const gotSingleLocation = location => ({
  type: GET_SINGLE_LOCATION,
  location
});

export const gotFavoriteLocations = locations => ({
  type: GET_FAVORITE_LOCATIONS,
  location
});

const initialState = {
  locations: [],
  singleLocation: {},
  favoriteLocations: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LOCATIONS:
      return { ...state, locations: action.locations };
    default:
      return state;
  }
};

export default reducer;
