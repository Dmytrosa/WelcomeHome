import { useDispatch } from 'react-redux';
import {routes, executeRequest} from '../index';
import { updateUser } from '../../store/userSlice';
import { setSecureValue } from '../../utils/keyChain';

export const login = async (body: any) => {
  const response =  await executeRequest( 'POST' , `${routes.login}`, {body});
  
  const email = body.email
  return {...response.data, email}
};

export const register = async(body: any) => {
  const response = await executeRequest( 'POST' ,`${routes.register}`, {body});
  let sumresp
  
  if (response.data === "User registered successfully!")
  {
    const loginObj ={
      email: body.email,
      password: body.password
    }
    sumresp = await login(loginObj)
  }
  return sumresp
};

export const registerVolonteer = async (body: any) => {
  const response = await executeRequest( 'POST' ,`${routes.registerVolonteer}`, {body})
  let sumresp
  
  if (response.data === "Volunteer registered successfully!")
  {
    const loginObj ={
      email: body.email,
      password: body.password
    }
    sumresp = await login(loginObj)
  }
  return sumresp
};
