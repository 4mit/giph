import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    margin:0px;
    padding:0px;
    background: ${({ theme }: any) => theme.colors.body};
    color: ${({ theme }: any) => theme.colors.text};
    font-family: ${({ theme }: any) => theme.font};
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }: any) => theme.colors.link.text};
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }: any) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }: any) => theme.colors.button.background};
    color: ${({ theme }: any) => theme.colors.button.text};
  }
`;
