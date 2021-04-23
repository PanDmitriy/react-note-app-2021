import { HIDE_ALERT, SHOW_ALERT } from "../types";

const handlers = {
  [SHOW_ALERT]: (state, {payload}) => ({ ...payload, visible: true }),
  [HIDE_ALERT]: state => ({ ...state, visible:false }),
  DEFAULT: state => state,
};

export const alertReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};


// Стандартное написание reducer //

// export const alertReducer = (state, action) => {
//   switch (action.type) {
//     case SHOW_ALERT:
//       return { ...action.payload, visible: true };
//     case HIDE_ALERT:
//       return { ...state, visible: false };
//     default: return state;
//   }
// }