import apiKey from './apiKey';
import axios from 'axios';

const baseUrl = `https://content.guardianapis.com/search${apiKey}`;

export default async function contentSearch() {
  return baseUrl;
}
