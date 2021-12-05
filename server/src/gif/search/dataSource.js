import { RESTDataSource } from "apollo-datasource-rest";

export class GifsSearchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/gifs/`;
  }
  async getGifs(query, limit, offset = 0, rating = "g", lang = "en") {
    const data = await this.get("search", {
      api_key: process.env.API_KEY,
      q: query,
      limit,
      offset,
      rating,
      lang,
    });
    return data;
  }
}
