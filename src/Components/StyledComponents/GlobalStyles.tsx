import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: #282c34;
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }
      
      a {
        color: black;
        text-decoration: none;
      }
      
      .center {
        margin: auto;
        width: 50%;
        border: 3px solid green;
        padding: 10px;
      }
      .star_container {
  display: inline-block;
  font-size: 22px; /* Initial size */
  transition: transform 0.2s;
}

.star_container:hover {
  cursor: pointer;
}
`;
