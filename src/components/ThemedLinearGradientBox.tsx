import styled from 'styled-components/native';
import LinearGradientBox from './LinearGradientBox';
import { isArray } from 'lodash';
export default styled(LinearGradientBox).attrs(
  ({ colors, lightColor, darkColor, theme = {} }: any) => {
    let _colors = [theme?.colors?.渐变背景色浅, theme?.colors?.渐变背景色深];
    if (isArray(colors)) {
      _colors = colors;
    } else if (lightColor && darkColor) {
      _colors = [lightColor, darkColor];
    }
    return {
      colors: _colors,
    };
  }
)``;
