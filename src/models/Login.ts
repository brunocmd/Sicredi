type LoginProps = {
  username: string;
  password: string;
}
export class Login {
  private _username: string;
  private _password: string;

  constructor(props: LoginProps) {
    this._username = props.username;
    this._password = props.password;
  }

  get username(): string {
    return this._username;
  }

  get password(): string {
    return this._password;
  }
}