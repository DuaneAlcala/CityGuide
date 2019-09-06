import { ADD_TRAP} from '../actions/trapActions';
import Trap from "../../models/trap";

const initialState = {
  traps: [new Trap(new Date().toString(), "user1", "Scam Name", "CityHere", "CountryHere",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis eu lacus maximus, id rhoncus " +
    "sem ornare. Nullam pellentesque et nunc eu consectetur. Pellentesque neque ipsum, pulvinar " +
    "eu dolor vel, consectetur lacinia nulla. Integer vitae ante quis orci mollis euismod at in " +
    "arcu. Praesent elementum a neque vel tincidunt. Orci varius natoque penatibus et magnis dis " +
    "parturient montes, nascetur ridiculus mus. Nullam sed ornare ex.", 32, -92)]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRAP:
      const trap = new Trap(new Date().toString(), action.payload.userId, action.payload.name, action.payload.location,
        action.payload.country, action.payload.details, action.payload.lat, action.payload.long);
      return {
        ...state,
        traps: state.traps.concat(trap)
      };
    default:
      return state;
  }
}
