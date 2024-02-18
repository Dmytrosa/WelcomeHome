import { executeRequest, routes } from "..";

export const cityGET = async (body: any= {}) => {
    const response =  await executeRequest( 'GET' , `${routes.city}`, {body});
    
    if (response.status == 200 )return response.data.$values
  };

export const cityCountryID = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.cityCountryId}`, {body});
    
    if (response.status == 200 )return response.data
  };

export const Country = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.country}`, {body});
    if (response.status == 200 )return response.data
  };