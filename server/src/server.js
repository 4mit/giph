import { ApolloServer } from "apollo-server";
import { GifsSearchAPI } from "./gif/search/dataSource";
import { GifsTrendingAPI } from "./gif/trending/dataSource";
import { GifsTypeDefs } from "./gif/index";
import { GifResolvers } from "./gif/index";
import merge from "lodash.merge";

const typeDefs = [...GifsTypeDefs];
const resolvers = merge({}, GifResolvers);

require("dotenv").config();

const server = new ApolloServer({
  cors: {
    origin: "*",
  },
  typeDefs,
  resolvers,
  dataSources: () => ({
    GifsSearchAPI: new GifsSearchAPI(),
    GifsTrendingAPI: new GifsTrendingAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`giphy are magically coming from here ${url}`);
});
