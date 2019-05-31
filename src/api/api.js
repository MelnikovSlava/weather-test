import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BASE_URL, API_KEY } from '../constants/consts';
import config from '../project.config';
import subscribeMockRequests from './apiMock';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  params: {
    APPID: API_KEY,
    lang: 'en',
    units: 'metric',
  },
});

if (process.env.NODE_ENV !== 'production') {
  if (config.USE_MOCK) {
    subscribeMockRequests(new MockAdapter(axiosInstance, {
      delayResponse: config.REQUEST_DELAY_MOCK,
    }));
  }
}

export { axiosInstance };
