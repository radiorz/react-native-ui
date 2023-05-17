// 上颜色
import Buttons from './TheButtons';
import styled from 'styled-components/native';

export default styled(Buttons).attrs(({ colors, theme = {} }) => ({
  colors: colors || {
    activeColor: theme.colors?.文字图标蓝,
    activeLightColor: theme.colors?.文字背景色浅,
    activeDarkColor: theme.colors?.文字背景色深,
    inactiveColor: theme.colors?.文字背景色,
  },
}))``;
