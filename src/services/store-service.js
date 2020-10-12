export default class StoreService {

  _apiBase = 'https://protected-falls-88472.herokuapp.com/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    
    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`);
    }    
    return await res.json();
  }

  async getBooks() {
    const res = await this.getResource('/books/');
    console.log(res);
    return res.data;
  }  
}