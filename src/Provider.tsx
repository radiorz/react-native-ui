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
import Dimension from './Dimension';
import { lightBlue } from './colors';
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

function Provider({
  dimension = new Dimension(),
  colors = lightBlue,
  children,
}: ProviderProps) {
  // TODO change theme
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
