import { LoginType } from '../models/types/login';
import client from './client';

export const login = ({ username, password }: LoginType) =>
  client.post(
    '/authenticate',
    {
      username,
      password,
    },
    {
      headers: {
        'content-type': 'application/json',
      },
    },
  );

export const loginCheck = () => client.get('/logincheck');
