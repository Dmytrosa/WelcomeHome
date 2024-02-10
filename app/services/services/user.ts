import {executeRequest, routes} from '../index';

export const userId = async (body: any) => {
  const response =  await executeRequest( 'GET' , `${routes.userId}`, {body});
  if (response.status == 200 )return response.data
};
export const user = async (body: any) => {
  const response =  await executeRequest( 'GET' , `${routes.user}`, {body});
  if (response.status == 200 )return response.data
};
export const userCategoryId = async (body: any) => {
  const response =  await executeRequest( 'GET' , `${routes.userCategoryId}`, {body});
  if (response.status == 200 )return response.data
};
export const userCategory = async (body: any) => {
  const response =  await executeRequest( 'GET' , `${routes.userCategory}`, {body});
  if (response.status == 200 )return response.data
};
export const volunteer = async (body: any) => {
  const response =  await executeRequest( 'GET' , `${routes.volunteer}`, {body});
  if (response.status == 200 )return response.data
};
export const volunteerId = async (body: any) => {
  const response =  await executeRequest( 'GET' , `${routes.volunteerId}`, {body});
  if (response.status == 200 )return response.data
};
