/**
 * @author
 * @file Provider.js
 * @fileBase Provider
 * @path src\Provider.js
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */

import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import type Dimension from './Dimension';
import { commonBlue } from './colors';
interface ProviderProps {
  dimension: Dimension;
  colors?: any;
  children?: any;
}

// import { createContext } from 'react';

// const ThemeContext = createContext({
//   dimension,
//   colors,
// });

function Provider({ dimension, colors = commonBlue, children }: ProviderProps) {
  return (
    <StyledThemeProvider theme={{ colors, dimension }}>
      <>
        {/*  上面的<></> 是为了应对children 多个的情况 */}
        {children}
      </>
    </StyledThemeProvider>
  );
}

export default Provider;
