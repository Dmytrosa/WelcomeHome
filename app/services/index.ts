import axios, {AxiosRequestConfig, AxiosRequestHeaders, Method} from 'axios';
import {env} from '../assets/constants';
import apiClient from './api-client';
const BASE_URL = env.BASEURL;

const contentTypes: any = {
  json: 'application/json',
  mfd: 'multipart/form-data',
};

const executeRequest = async (
  method: Method,
  route: string,
  {
    body,
    type = '',
    user = {},
    params = {},
  }: {
    body: any;
    type: string;
    user: any;
    params?: Record<string, string | number>;
  },
) => {

  let headers: AxiosRequestHeaders = {Accept: 'application/json'};
  if (user.token) {
    headers.Authorization = `bearer ${user.token}`;
  }
  if (type !== '') {
    headers['Content-Type'] = contentTypes[type];
  }

  let dynamicRoute = route;
  if (params) {
    Object.keys(params).forEach(param => {
      const paramValue = params[param].toString();
      dynamicRoute = dynamicRoute.replace(`{${param}}`, paramValue);
    });
  }

  


  if(body){
    return apiClient({
      method: method,
      url: `${BASE_URL}/${dynamicRoute}`,
      headers: headers,
      data: body,
    });
  }

  return apiClient({
    method: method,
    url: `${BASE_URL}/${dynamicRoute}`,
    headers: headers,
  });
};

const routes = {
  login: 'Auth/Login',
  register: 'Auth/Register',
  registerVolonteer: 'Auth/RegisterVolunteer',
  refresh: 'Auth/Refresh',
  logout: 'Auth/Logout',
  city: 'City',
  cityCountryId: 'City/country/{countryId}',
  country: 'Country',
  documentId: 'Document/{id}',
  document: 'Document',
  neededDocuments: 'Document/step/{stepId}/needed',
  receivedDocuments: 'Document/step/{stepId}/received',
  establishmentId: 'Establishment/{id}',
  establishment: 'Establishment',
  establishmentByType: 'Establishment/byType/{cityId}',
  establishmentByCity: 'Establishment/byCity/{cityId}',
  socPayout: 'api/SocialPayout',
  socPayoutId: 'api/SocialPayout/{id}',
  stepId: '/Step/{id}',
  step: '/Step',
  byEstablishmentType: 'byEstablishmentType/{establishmentTypeId}',
  userId: 'User/{id}',
  user: 'User',
  userCategoryId: 'UserCategory/{id}',
  userCategory: 'UserCategory',
  volunteerId: 'Volunteer/{id}',
  volunteer: 'Volunteer',
  establishmentVolunteer: 'Establishment/Volunteer',
  getPayments: 'api/SocialPayout',
};

export {routes, executeRequest};
export {login} from './services/auth';
export {getPayments} from './services/payment';