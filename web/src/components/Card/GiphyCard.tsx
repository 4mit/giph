import { useRef, useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
const HeaderWrapper = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const GiphyCard = ({ gifData }: any) => {
  let { height, width } = gifData.images.original || 200;
  let animateUrl = gifData.images.fixed_height.url;
  let stillurl = gifData.images.fixed_height_still.url;

  const [playing, setPlay] = useState(false);
  const ref = useRef<any>(null);

  const action = () => {
    if (ref.current) {
      if (playing) {
        setPlay(false);
        ref.current.src = ref.current.dataset.still;
      } else {
        ref.current.src = ref.current.dataset.animate;
        setPlay(true);
      }
    }
  };

  return (
    <Card
      style={{
        gridRowEnd: `span ${Math.ceil(height / 10)}`,
        gridColumnEnd: `span ${Math.floor(width / 400)}`,
      }}
    >
      <HeaderWrapper onClick={action}>
        {playing ? "pause" : "play"}
      </HeaderWrapper>
      <img
        ref={ref}
        style={{
          background: "linear-gradient(0deg, #66696c, #f1f1f100)",
          maxWidth: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        loading="lazy"
        src={gifData.images.fixed_height_still.url}
        alt={gifData.title}
        data-animate={animateUrl}
        data-still={stillurl}
        data-state="still"
      />
    </Card>
  );
};
export default GiphyCard;
