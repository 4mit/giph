import { useCallback, useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import GiphyCard from "../components/Card/GiphyCard";
import { TRENDING_GIPHY, SEARCH_GIPHY } from "../constant/queries";
import { debounce } from "../util";
import { DebounceInput } from "react-debounce-input";

import styled from "styled-components";

const GifWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 5px 5px;
  grid-auto-rows: 10px;
  padding: 20px;
`;

const GiphyContainer = () => {
  const loader = useRef(null);
  const [API_DATA, setdata] = useState<any[]>([]);
  const [keyword, setkeyword] = useState("");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(150);

  const {
    loading,
    error,
    data: trendingData,
  } = useQuery(TRENDING_GIPHY, {
    variables: { limit: limit },
  });

  const { data: searchData } = useQuery(SEARCH_GIPHY, {
    variables: { query: search },
  });

  console.log("rendering ...", trendingData, loading, error);

  const handleObserver = (entities: any) => {
    console.log("observe");
    const target = entities[0];
    if (target.isIntersecting && (search == "" || keyword == "")) {
      setLimit((limit) => limit + 10);
    }
  };

  useEffect(() => {
    console.log("limit change api call ", searchData, API_DATA);
    if (searchData !== undefined)
      setdata((API_DATA: any) => [...searchData?.gifs?.gifsData]);
  }, [searchData]);

  useEffect(() => {
    console.log("limit change api call ", trendingData, API_DATA);
    if (trendingData !== undefined)
      setdata((API_DATA: any) => [
        ...API_DATA,
        ...trendingData?.trendingGifs?.gifsData,
      ]);
  }, [searchData, trendingData]);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [loader]);

  const searchHandler = useCallback((e) => {
    let val = e.target.value;
    setkeyword(val);
    const ss = debounce((val: any) => {
      setSearch(val[0]);
    });
    ss(val);
  }, []);

  return (
    <>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        placeholder="Search giphy"
        onChange={(event) => searchHandler(event)}
      />
      <br />
      <br />
      <GifWrapper>
        {loading && <h1>Loading images</h1>}
        {
          // eslint-disable-next-line array-callback-return
          API_DATA &&
            API_DATA.map((d, idx) => {
              return <GiphyCard gifData={d} key={d.id + idx} />;
            })
        }
        <div className="loading" ref={loader}></div>
      </GifWrapper>
    </>
  );
};
export default GiphyContainer;
