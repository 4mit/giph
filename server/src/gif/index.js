import { gifSearchTypeDefs } from "./search/typedef";
import { gifTrendingTypeDefs } from "./trending/typedef";

import { gifSearchResolvers } from "./search/resolver";
import { gifTrendingResolvers } from "./trending/resolver";

import merge from "lodash.merge";
export const GifsTypeDefs = [gifSearchTypeDefs, gifTrendingTypeDefs];

export const GifResolvers = merge({}, gifSearchResolvers, gifTrendingResolvers);
