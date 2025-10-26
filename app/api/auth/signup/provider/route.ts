import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

interface ProviderSignupData {
  name: string;
  email: string;
  phone: string;
  password: string;
  type: "RESTAURANT" | "HOME_KITCHEN";
  serviceName?: string;
  address?: string;
  city?: string;
  pincode?: string;
  latitude?: string;
  longitude?: string;
}

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      password,
      type,
      serviceName,
      address,
      city,
      pincode,
      latitude,
      longitude,
    } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !password || !type) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      );
    }

    // Reject duplicate email/phone
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email or phone already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User and related Provider
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        role: 'PROVIDER',
        provider: {
          create: {
            type,
            serviceName: serviceName || name,
            address: address || '',
            city: city || '',
            pincode: pincode || '',
            latitude: latitude ? parseFloat(latitude) : null,
            longitude: longitude ? parseFloat(longitude) : null,
            verified: false,
          },
        },
      },
      include: {
        provider: true,
      },
    });

    // Return success with public fields
    return NextResponse.json(
      {
        message: 'Provider signup successful',
        data:user
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Provider signup error:', error);
    return NextResponse.json(
      { error: 'Something went wrong while signing up' },
      { status: 500 }
    );
  }
}

