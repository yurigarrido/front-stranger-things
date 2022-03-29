import axios from 'axios';

require('dotenv').config();

const DEFAULT_TIMEOUT = process.env.REACT_APP_HAWKINS_TIMEOUT;
const RHAWKINS_URL = process.env.REACT_APP_HAWKINS_URL;

class CharactersService {
  constructor({ url = RHAWKINS_URL, timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
