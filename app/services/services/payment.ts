import {routes, executeRequest} from '../index';

export const getPayments = async(user) => {
  const response = await executeRequest( 'GET' ,`${routes.getPayments}`, {user} );
  
  return response.data
};
