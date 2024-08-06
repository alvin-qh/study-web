import { camel, capitalize } from 'radash';

import { factory } from '@/lib/execute';

export interface Pagination {
  page: number
  perPage: number
  total: number
  totalPages: number
}

export interface CarData {
  page: Pagination
  columns: Record<string, string>
  data: Array<Record<string, string | number | null>>
}

export interface Query {
  page: number
  perPage: number
}

export const fetchData = async (pageNo: number, perPage: number = 10): Promise<CarData> => {
  const resp = await fetch(`https://reqres.in/api/cars?page=${pageNo}&per_page=${perPage}`);
  const obj = await resp.json();

  return factory<CarData>(() => {
    const page = {
      page: obj.page as number,
      perPage: obj.per_page as number,
      total: obj.total as number,
      totalPages: obj.total_pages as number
    };

    const rows = obj.data as Array<Record<string, string | number | null>>;
    if (!rows) {
      return {
        page,
        columns: {},
        data: []
      };
    }

    const columns = factory<Record<string, string>>(() => {
      const r: Record<string, string> = {};

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      Object.keys(rows[0]).forEach((key) => {
        r[capitalize(key.replace('-', ' '))] = camel(key);
      });
      return r;
    });

    return {
      page,
      columns,
      data: rows.map((row) => {
        const r: Record<string, string | number | null> = {};
        Object.keys(row).forEach((key) => {
          r[camel(key)] = row[key] ?? null;
        });

        return r;
      })
    };
  });
};
