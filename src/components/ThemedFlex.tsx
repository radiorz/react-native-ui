import { Flex } from './TheFlex';
import styled from 'styled-components/native';

export default styled(Flex).attrs(({ bgColor, theme = {} }: any) => ({
  bgColor: bgColor || theme?.colors?.文字背景色,
}))``;
