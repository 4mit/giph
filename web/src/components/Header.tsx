import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";

interface HeaderProp {
  height?: number;
  bg: string;
  color: string;
}

const HeaderWrapper = styled.div<HeaderProp>`
  height: ${(props) => props.height};
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 2px solid red;
`;

const Header = ({ themeSwitcher, theme }: any) => {
  return (
    <HeaderWrapper
      height={100}
      bg={theme.colors.body}
      color={theme.colors.text}
    >
      <span>GIphy app</span>
      <ThemeSwitcher themeSwitcher={themeSwitcher} theme={theme} />
    </HeaderWrapper>
  );
};
export default Header;
