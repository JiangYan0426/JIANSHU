import {createGlobalStyle} from 'styled-components'
export const Globalstyled=createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 2859778 */
  src: url('./iconfont.woff2?t=1633940539049') format('woff2'),
       url('./iconfont.woff?t=1633940539049') format('woff'),
       url('./iconfont.ttf?t=1633940539049') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
