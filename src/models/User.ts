type UserProps = {
  id: string;
  username: string;
  name: string;
  companyCode: string;
  createdAt: string;
  roles: string[];
}
export class User {
  private _id: string;
  private _username: string;
  private _name: string;
  private _companyCode: string;
  private _createdAt: Date;
  private _roles: string[];

  constructor(props: UserProps) {
    this._id = props.id;
    this._username = props.username;
    this._name = props.name;
    this._companyCode = props.companyCode;
    this._createdAt = new Date(props.createdAt);
    this._roles = props.roles;
  }

  get id(): string {
    return this._id;
  }

  get username(): string {
    return this._username;
  }

  get name(): string {
    return this._name;
  }

  get companyCode(): string {
    return this._companyCode;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get roles(): string[] {
    return this._roles;
  }
}