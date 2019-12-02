import apiKey from 'services/guardianApi/apiKey';
import axios from 'axios';
import { getStore } from 'services/Store';

const baseUrl = `https://content.guardianapis.com/search?section=sport${apiKey}`;

export default async () => {
  try {
    const response = await axios.get(baseUrl);
    const result = response.data.response.results;

    console.log(result);

    getStore().dispatch({
      type: 'SET_SPORT_CONTENT',
      payload: result
    });
  } catch (error) {
    console.error(error);
  }
};
