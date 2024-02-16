import { executeRequest, routes } from "..";

export const cityGET = async () => {
    const response =  await executeRequest( 'GET' , `${routes.city}`, {});
    if (response.status == 200 )return response.data
  };

export const cityCountryID = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.cityCountryId}`, {body});
    if (response.status == 200 )return response.data
  };

export const Country = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.country}`, {body});
    if (response.status == 200 )return response.data
  };