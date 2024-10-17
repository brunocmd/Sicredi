import { Auth } from "../../models/Auth";
import { AuthDto } from "./dtos/auth/v1/auth.dto";

type LoginPayload = {
  username: string;
  password: string;
}

export const login = async (payload: LoginPayload): Promise<Auth> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return AuthDto.fromApiResponse(data).toModel();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}