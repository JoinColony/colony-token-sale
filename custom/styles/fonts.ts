import { css } from 'styled-components'

import MuliRegular from '../assets/fonts/muli-webfont.woff2'
import MuliBold from '../assets/fonts/muli-bold-webfont.woff2'
import RobotoMono from '../../src/assets/fonts/RobotoMono-Regular.woff2'

const fontFace = css`
  @font-face {
    font-family: 'Muli';
    src: url(${MuliRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Muli';
    src: url(${MuliBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  font-face {
    font-family: 'Roboto Mono';
    src: url(${RobotoMono}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
`

export default fontFace
