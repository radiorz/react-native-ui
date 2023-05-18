// 上颜色
import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { getColorStyle, getRoundedStyle } from '../style';

export default styled(TextInput).attrs(({ bgColor, theme = {} }: any) => ({
  bgColor: bgColor || theme.colors?.留白背景色,
}))`
  ${({ fontSize, theme }: any) =>
    `font-size: ${theme.dimension.normalizeText(fontSize || 50)}px`}
  ${({ color }: any) => color && `color:${color};`}
  ${getRoundedStyle}
  ${getColorStyle}
`;
