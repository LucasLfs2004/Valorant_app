import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://valorant-api.com/v1/',
});

const headers = {
  'Content-Type': 'application/json',
};

export const getAgents = async () => {
  try {
    const response = await Api.get('agents?language=pt-BR');
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const getMaps = async () => {
  try {
    const response = await Api.get('https://valorant-api.com/v1/maps');
    return response.data.data;
  } catch (error) {
    return error;
  }
};
