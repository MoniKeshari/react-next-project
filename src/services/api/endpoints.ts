import client from './client';

export const getUsers = async () => {
  const response = await client.get('/users');
  return response.data;
};

export const getUserById = async (id: number) => {
  const response = await client.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (name: any, email: any, phone: any) => {
  const response = await client.post('/users', { name: name, email: email, phone: phone });


  return response.data;
};

export const updateUser = async (id: number, data: any) => {
  const response = await client.put(`/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await client.delete(`/users/${id}`);
  return response.data;
};
