import styled from 'styled-components/native';
import Flex from './Flex';

export { Flex };
export const Row = styled(Flex)`
  flex-direction: row;
`;
export const Column = styled(Flex)`
  flex-direction: column;
`;
export const Spacer = styled.View`
  flex: 1;
`;
