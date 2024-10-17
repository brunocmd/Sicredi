import { Tax } from "../../models/Tax";
import { TaxListDto } from "./dtos/taxes/v1/taxes-list.dto";

export const getTaxes = async (accessToken: string): Promise<Tax[]> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/v1/taxes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Get Taxes failed');
    }

    const data = await response.json();
    const taxListDto = TaxListDto.fromApiResponse(data);

    return taxListDto.map(tax => tax.toModel());
  } catch (error) {
    console.error('Get Taxes Error:', error);
    throw error;
  }
}