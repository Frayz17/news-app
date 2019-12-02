import apiKey from './apiKey';
import axios from 'axios';

export default async function contentSearch() {
  const baseUrl = `https://content.guardianapis.com/search?section=sport${apiKey}`;

  return baseUrl;
}
