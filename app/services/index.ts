import axios, {AxiosRequestConfig, AxiosRequestHeaders, Method} from 'axios';
import {env} from '../assets/constants';
import apiClient from './api-client';
const BASE_URL = env.BASEURL;

const contentTypes: any = {
  json: 'application/json',
  mfd: 'multipart/form-data',
};

export const executeRequest = async (
  method: Method,
  route: string,
  {
    body,
    type = '',
    user = {},
    params = {},
    queryParams = {},
  }: {
    body: any;
    type: string;
    user: any;
    params?: Record<string, string | number>;
    queryParams?: Record<string, string | number>;
  },
) => {
  let headers: AxiosRequestHeaders = { Accept: 'application/json' };
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

  let queryParamsString = '';
  if (queryParams) {
    const queryParamKeys = Object.keys(queryParams);
    if (queryParamKeys.length > 0) {
      queryParamsString = '?' + queryParamKeys.map(key => `${key}=${queryParams[key]}`).join('&');
    }
  }

debugger

  if (body) {
    return apiClient({
      method: method,
      url: `${BASE_URL}/${dynamicRoute}${queryParamsString}`,
      headers: headers,
      data: body,
    });
  }

  return apiClient({
    method: method,
    url: `${BASE_URL}/${dynamicRoute}${queryParamsString}`,
    headers: headers,
  });
};


export const routes = {
  loginisation: 'Auth/Login',
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
  establishmentTypes: 'Establishment/types',
  establishmentVolonteer: 'Establishment/volonteer',
  byTypeByCity : 'byType/{typeId}/byCity/{cityId}',
  socPayout: 'api/SocialPayout',
  socPayoutId: 'api/SocialPayout/{payoutId}',
  stepId: '/Step/{id}',
  step: '/Step',
  byEstablishmentType: 'byEstablishmentType/{establishmentTypeId}',
  userId: 'User/{id}',
  user: 'User',
  userCategoryId: 'UserCategory/{id}',
  userCategory: 'UserCategory',
  volunteerId: 'Volunteer/{id}',
  volunteer: 'Volunteer',
  volunteerOrganization: 'Volunteer/organization',
  eventId: 'Event/{id}',
  event: 'Event',
};

// export {routes, executeRequest};
