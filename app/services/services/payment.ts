import {routes, executeRequest} from '../index';

export const paymentPost = async (body: any, user: any) => {
  const response =  await executeRequest( 'POST' , `${routes.socPayout}`, {body, user});
  if (response.status == 200 )return 
};
export const paymentDelete = async (body: any) => {
  const response =  await executeRequest( 'DELETE' , `${routes.socPayout}`, {body});
  if (response.status == 200 )return response.data
};
export const payment = async (user: any) => {
  const response =  await executeRequest( 'GET' , `${routes.socPayout}`, {user});
  if (response.status == 200 )return response.data
};
export const paymentId = async (user: any, params: any) => {
  const response =  await executeRequest( 'GET' , `${routes.socPayoutId}`, {user, params});
  if (response.status == 200 )return response.data
};


