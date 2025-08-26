import { useEffect, useState } from "react";
import { getCoffees } from "../lib/mockApi";
import type { Coffee, ApiList } from "../types/coffee";

export function useCoffees(query: Record<string, unknown>) {
  const [data, setData] = useState<ApiList<Coffee> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    getCoffees(query as any)
      .then(res => !cancelled && setData(res))
      .catch(err => !cancelled && setError(err.message))
      .finally(() => !cancelled && setLoading(false));

    return () => { cancelled = true; };
  }, [JSON.stringify(query)]);

  return { data, loading, error };
}
