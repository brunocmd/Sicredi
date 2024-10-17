interface DocumentExtraData {
  carPlate: string;
}

export type TaxType = 'IPVA' | 'IPTU'

type TaxProps = {
  id: string;
  type: string;
  documentNumber: string;
  documentExtraData?: DocumentExtraData;
  ownerDocumentNumber: string;
  createdAt: string;
  updatedAt: string;
}
export class Tax {
  private _id: string;
  private _type!: TaxType;
  private _documentNumber: string;
  private _documentExtraData?: DocumentExtraData;
  private _ownerDocumentNumber: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(props: TaxProps) {
    this.setTaxType(props.type);
    
    this._id = props.id;
    this._documentNumber = props.documentNumber;
    this._documentExtraData = props.documentExtraData;
    this._ownerDocumentNumber = props.ownerDocumentNumber;
    this._createdAt = new Date(props.createdAt);
    this._updatedAt = new Date(props.updatedAt);
  }

  setTaxType(type: string) {
    if (type.toLowerCase() === 'iptu') this._type = 'IPTU';
    else if (type.toLowerCase() === 'ipva') this._type = 'IPVA';
    else throw new Error('Invalid tax type received');
  }

  get id(): string {
    return this._id;
  }

  get type(): TaxType {
    return this._type;
  }

  get documentNumber(): string {
    return this._documentNumber;
  }

  get documentExtraData(): DocumentExtraData | undefined {
    return this._documentExtraData;
  }

  get ownerDocumentNumber(): string {
    return this._ownerDocumentNumber;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }  
}