import { executeRequest, routes } from "..";

export const establishmentId = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.establishmentId}`, {body});
    if (response.status == 200 )return response.data
  };


export const establishmentIdDelete = async (body: any) => {
    const response =  await executeRequest( 'DELETE' , `${routes.establishmentId}`, {body});
    if (response.status == 200 )return response.data
  };

export const establishment = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.establishment}`, {body});
    if (response.status == 200 )return response.data
  };


  export const establishmentPost = async (body: any) => {
    const response =  await executeRequest( 'POST' , `${routes.establishment}`, {body});
    if (response.status == 200 )return response.data
  };

  export const establishmentPut = async (body: any) => {
    const response =  await executeRequest( 'PUT' , `${routes.documentId}`, {body});
    if (response.status == 200 )return response.data
  };

  export const byType = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.establishmentByType}`, {body});
    if (response.status == 200 )return response.data
  };

  export const byCity = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.establishmentByCity}`, {body});
    if (response.status == 200 )return response.data
  };

  export const byTypeByCity = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.byTypeByCity}`, {body});
    if (response.status == 200 )return response.data
  };

  export const types = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.establishmentTypes}`, {body});
    if (response.status == 200 )return response.data
  };

  export const volonteer = async (body: any) => {
    const response =  await executeRequest( 'POST' , `${routes.establishmentVolonteer}`, {body});
    if (response.status == 200 )return response.data
  };