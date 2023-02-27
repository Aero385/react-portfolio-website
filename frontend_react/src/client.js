import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-02-02',
  token: process.env.REACT_APP__SANITY_TOKEN,
  useCdn: true // Note that useCdn is now a boolean value instead of a string
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);