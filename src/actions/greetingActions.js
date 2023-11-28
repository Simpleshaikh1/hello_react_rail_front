import axios from 'axios';

const setRandomGreeting = (greeting) => {
  return {
    type: 'SET_RANDOM_GREETING',
    payload: greeting,
  };
};

export const getRandomGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/api/greetings/random');
      dispatch(setRandomGreeting(response.data.greeting));
    } catch (error) {
      console.error('Error fetching random greeting:', error);
    }
  };
};
