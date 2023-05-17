import styled from 'styled-components/native';
import Flex from './Flex';
import { isString } from 'lodash';
export { Flex };
import React from 'react';
export const Row = styled(Flex)`
  flex-direction: row;
`;
export const Column = styled(Flex)`
  flex-direction: column;
`;
export const Spacer = styled.View`
  flex: 1;
`;
import Text from '../TheText';
export const Center = styled(Flex).attrs(({ children, _text }) => ({
  children: isString(children) ? <Text {..._text}>{children}</Text> : children,
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
