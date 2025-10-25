import { NextResponse } from 'next/server';

export default async function POST(req: Request) {
  const { email, password } = await req.json();
  // Do login logic here
  return NextResponse.json({ message: 'Login successful' });
}
