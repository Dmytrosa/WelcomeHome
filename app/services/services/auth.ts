import {routes, executeRequest} from '../index';

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



export const logout = async (body: any) => {
  const response = await executeRequest( 'DELETE' ,`${routes.logout}`, {body})
  if (response.status == 200) return true  
};


