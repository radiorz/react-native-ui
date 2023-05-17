import { isString } from 'lodash';
import styled from 'styled-components/native';
import { getBoxStyle, getFlexStyle } from '../../style';
import GapWrapper from '../../components/GapWrapper';

// ****** Flex 布局 ******
const _Flex = styled.View.attrs((props: any) => {
  const { flex, elevation = 0 } = props;
  let _flex = flex;
  const isLikeNumberString = isString(flex) && !Number.isNaN(parseFloat(flex));
  if (isLikeNumberString) {
    _flex = parseFloat(flex);
  }
  // console.log(`_flex`, _flex);
  return {
    flex: _flex,
    elevation,
  };
})`
  ${getFlexStyle}
  ${getBoxStyle}
`;

export default GapWrapper(_Flex);
