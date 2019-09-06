export const ADD_TRAP = 'ADD_TRAP';

export const addTrap = (id, userId, name, location, country, details, lat, long) => {
  return {
    type: ADD_TRAP,
    payload: {
      id,
      userId,
      name,
      location,
      country,
      details,
      lat,
      long
    }
  }
};
