import { normalize } from 'polished';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${normalize()}
  body {
    color: #fff;
    background: #e5f2f5;
  }

  body, input, button, textarea{
    font: 600 18px Nunito, sans-serif;
  }

`;
