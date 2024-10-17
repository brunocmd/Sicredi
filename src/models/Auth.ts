type AccessTokenProps = {
  accessToken: string | null;
}
export class Auth {
  private _accessToken: string | null;

  constructor(props: AccessTokenProps) {
    this._accessToken = props.accessToken;
  }

  get accessToken(): string | null {
    return this._accessToken;
  }

  isAuthenticated() {
    return !!this.accessToken;
  }
}