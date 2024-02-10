import {routes, executeRequest} from '../index';

export const paymentPost = async (body: any) => {
  const response =  await executeRequest( 'POST' , `${routes.socPayout}`, {body});
  if (response.status == 200 )return response.data
};
export const paymentDelete = async (body: any) => {
  const response =  await executeRequest( 'DELETE' , `${routes.socPayout}`, {body});
  if (response.status == 200 )return response.data
};
export const payment = async (body: any) => {
  const response =  await executeRequest( 'GET' , `${routes.socPayout}`, {body});
  if (response.status == 200 )return response.data
};
export const paymentId = async (body: any) => {
  const response =  await executeRequest( 'GET' , `${routes.socPayoutId}`, {body});
  if (response.status == 200 )return response.data
};


