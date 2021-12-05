export const gifSearchResolvers = {
  GifData: {
    gifData(data) {
      let count = data.pagination ? data.pagination.count : 0;
      if (count)
        return data.data[Math.floor(Math.random() * data.pagination.count)];
      else return data.data;
    },
  },
  GifsData: {
    gifsData(data) {
      return data.data;
    },
  },
  Query: {
    gifs: (root, { query, limit, offset, rating, lang }, { dataSources }) =>
      dataSources.GifsSearchAPI.getGifs(query, limit, offset, rating, lang),
  },
};
