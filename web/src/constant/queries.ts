import { gql } from "@apollo/client";
export const TRENDING_GIPHY = gql`
  query ($limit: Int!) {
    trendingGifs(limit: $limit) {
      gifsData {
        id
        type
        url
        title
        rating
        images {
          original {
            height
            width
          }
          fixed_height {
            url
          }
          fixed_height_still {
            url
          }
          preview_gif {
            height
            size
          }
        }
      }
      pagination {
        count
        offset
        total_count
      }
      meta {
        msg
        response_id
        status
      }
    }
  }
`;
export const SEARCH_GIPHY = gql`
  query ($query: String!) {
    gifs(query: $query) {
      gifsData {
        id
        type
        url
        title
        rating
        images {
          original {
            height
            width
          }
          fixed_height {
            url
          }
          fixed_height_still {
            url
          }
          preview_gif {
            height
            size
          }
        }
      }
    }
  }
`;
