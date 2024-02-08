import {routes, get} from '../index';

export const getUser = (body:any ,id: any) => {
  return get(`${routes.userId}`, {body});
};
