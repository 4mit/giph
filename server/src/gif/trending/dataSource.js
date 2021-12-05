import { RESTDataSource } from "apollo-datasource-rest";

export class GifsTrendingAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/gifs/`;
  }

  async getTrendingGifs(limit = 25, offset = 0, rating = "g") {
    console.log("limit", limit);
    const data = await this.get("trending", {
      api_key: process.env.API_KEY,
      limit,
      offset,
      rating,
    });
    return data;
  }
}
