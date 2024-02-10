import {routes, executeRequest} from '../index';

export const step = async (body: any) => {
  const response =  await executeRequest( 'GET' , `${routes.step}`, {body});
  if (response.status == 200 )return response.data
};
export const stepPost = async (body: any) => {
    const response =  await executeRequest( 'POST' , `${routes.step}`, {body});
    if (response.status == 200 )return response.data
  };
  export const stepPut = async (body: any) => {
    const response =  await executeRequest( 'PUT' , `${routes.step}`, {body});
    if (response.status == 200 )return response.data
  };
  export const stepId = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.stepId}`, {body});
    if (response.status == 200 )return response.data
  };
  export const stepIdDelete = async (body: any) => {
    const response =  await executeRequest( 'DELETE' , `${routes.stepId}`, {body});
    if (response.status == 200 )return response.data
  };
  export const byEstablishmentType = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.byEstablishmentType}`, {body});
    if (response.status == 200 )return response.data
  };