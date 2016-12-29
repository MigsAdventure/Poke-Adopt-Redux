export default function (state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TRAINER_FULFILLED': {
      return payload.data;
    }

    case 'GET_TRAINERS_FULFILLED' : {
      return payload.data;
    }

    default: return state;
  }
}
