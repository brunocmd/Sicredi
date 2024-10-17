import { Auth } from "../../../../../models/Auth";

type AuthResponse = {
  accessToken: string;
}

export class AuthDto {
  accessToken: string;

  constructor(apiResponse: AuthResponse) {
    this.accessToken = apiResponse.accessToken;
  }

  static fromApiResponse(apiResponse: AuthResponse): AuthDto {
    return new AuthDto(apiResponse);
  }

  toModel(): Auth {
    return new Auth({
      accessToken: this.accessToken
    })
  }
}

