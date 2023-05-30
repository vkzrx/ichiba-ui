import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { config } from './lib/config';

type AuthenticationResponse = {
  id: number;
  name: string;
  jwt: string;
  balance: number;
};

const cookieNames = {
  jwt: 'token',
  userID: 'userID',
};

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const userID = request.cookies.get('userID');
  if (!userID || !token) return NextResponse.next();

  const url = `${config.apiBaseURL}/authenticate`;
  const authResponse = await fetch(url, {
    body: JSON.stringify({ id: userID }),
  });

  if (!authResponse.ok) {
    return NextResponse.next();
  }

  const user: AuthenticationResponse = await authResponse.json();

  const response = NextResponse.next();
  response.cookies.set({
    name: cookieNames.jwt,
    value: user.jwt,
    path: '/',
  });
  response.cookies.set({
    name: cookieNames.userID,
    value: user.id.toString(),
    path: '/',
  });

  return response;
}
