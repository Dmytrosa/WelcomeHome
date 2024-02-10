import { executeRequest, routes } from "..";

export const eventId = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.eventId}`, {body});
    if (response.status == 200 )return response.data
  };

  export const eventIdDelete = async (body: any) => {
    const response =  await executeRequest( 'DELETE' , `${routes.eventId}`, {body});
    if (response.status == 200 )return response.data
  };

  export const event = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.event}`, {body});
    if (response.status == 200 )return response.data
  };

  export const eventPost = async (body: any) => {
    const response =  await executeRequest( 'POST' , `${routes.event}`, {body});
    if (response.status == 200 )return response.data
  };

  export const eventPut = async (body: any) => {
    const response =  await executeRequest( 'PUT' , `${routes.event}`, {body});
    if (response.status == 200 )return response.data
  };