/**
 * @file: Container
 * @description:
 */

import styled from 'styled-components/native';

const Container = styled.View<{ bg: any }>`
  flex: 1;
  margin-top: 0;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  background-color: ${({ bg }: any) => bg || 'transparent'};
`;
export default Container;
