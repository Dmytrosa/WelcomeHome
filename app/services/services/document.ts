import { executeRequest, routes } from "..";

export const documentId = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.documentId}`, {body});
    if (response.status == 200 )return response.data
  };

export const document = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.document}`, {body});
    if (response.status == 200 )return response.data
  };

export const documentIdDelete = async (body: any) => {
    const response =  await executeRequest( 'DELETE' , `${routes.documentId}`, {body});
    if (response.status == 200 )return response.data
  };

export const documentPost = async (body: any) => {
    const response =  await executeRequest( 'POST' , `${routes.document}`, {body});
    if (response.status == 200 )return response.data
  };

export const documentPut = async (body: any) => {
    const response =  await executeRequest( 'PUT' , `${routes.document}`, {body});
    if (response.status == 200 )return response.data
  };

export const neededDocument = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.neededDocuments}`, {body});
    if (response.status == 200 )return response.data
  };

export const receivedDocument = async (body: any) => {
    const response =  await executeRequest( 'GET' , `${routes.receivedDocuments}`, {body});
    if (response.status == 200 )return response.data
  };