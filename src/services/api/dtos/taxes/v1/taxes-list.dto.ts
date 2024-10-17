import { Tax } from "../../../../../models/Tax";

type TaxesListResponse = {
  id: string;
  type: string;
  documentNumber: string;
  documentExtraData?: DocumentExtraData;
  ownerDocumentNumber: string;
  companyCode: string;
  createdAt: string;
  updatedAt: string;
}

type DocumentExtraData = {
  carPlate: string;
}


export class TaxListDto {
  id: string;
  type: string;
  documentNumber: string;
  documentExtraData?: DocumentExtraData;
  ownerDocumentNumber: string;
  createdAt: string;
  updatedAt: string;

  constructor(apiResponse: TaxesListResponse) {
    this.id = apiResponse.id;
    this.type = apiResponse.type;
    this.documentNumber = apiResponse.documentNumber;
    this.documentExtraData = apiResponse.documentExtraData;
    this.ownerDocumentNumber = apiResponse.ownerDocumentNumber;
    this.createdAt = apiResponse.createdAt;
    this.updatedAt = apiResponse.updatedAt;
  }

  static fromApiResponse(apiResponse: TaxesListResponse[]): TaxListDto[] {
    if (apiResponse.length === 0) return [];
    
    return apiResponse.map(res => new TaxListDto(res));
  }

  toModel(): Tax {
    return new Tax({
      id: this.id,
      type: this.type,
      documentNumber: this.documentNumber,
      documentExtraData: this.documentExtraData,
      ownerDocumentNumber: this.ownerDocumentNumber,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    })
  }
}

