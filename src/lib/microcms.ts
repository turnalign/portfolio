import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export type Work = {
  id: string;
  title: string;
  category: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  body: string;
  url?: string;
  description?: string;
  tags?: { fieldId: string; name: string }[];
};