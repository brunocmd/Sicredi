import { useEffect, useState } from 'react';
import { getTaxes } from '../services/api/tax.service';
import { Tax } from '../models/Tax';
import { useAuth } from './useAuth';

interface UseTaxResult {
  taxes: Tax[];
  error: Error | null;
  loading: boolean;
}

export const useTaxes = (page: number = 1): UseTaxResult => {
  const [taxes, setTaxes] = useState<Tax[]>([]);
  const { getAuth } = useAuth();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const accessToken = getAuth().accessToken;

  useEffect(() => {

  const getTaxList = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    if (!accessToken) {
      throw new Error('Token not found');
    }

    try {
      const result = await getTaxes(accessToken);
      setTaxes(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  getTaxList()
  }, [accessToken, page]);



  return { taxes, error, loading };
};
