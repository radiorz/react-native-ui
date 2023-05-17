import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { getBoxStyle, getFlexStyle } from '../style';
import GapWrapper from './GapWrapper';
const LinearGradientBox = styled(LinearGradient)`
  ${getFlexStyle}
  ${getBoxStyle}
`;
const LinearGradientBoxWithDirection = styled(LinearGradientBox).attrs(
  ({ flexDirection }: any) => ({
    flexDirection: flexDirection || 'column',
  })
)``;

export default GapWrapper(LinearGradientBoxWithDirection);
