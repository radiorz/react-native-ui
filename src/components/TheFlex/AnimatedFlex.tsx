import { isArray, isNumber, isObject, isString } from 'lodash';
import styled from 'styled-components/native';
import React from 'react';
import Animated from 'react-native-reanimated';
import { getBoxStyle, getFlexStyle } from '../../style';
import Gapper from '../../components/Gapper';

export function getGapNumber({ gap, gapLevel, theme }: any) {
  if (isNumber(gap)) return gap;
  if (isNumber(gapLevel)) return gapLevel * theme.dimension.onSpace;
  return 0;
  // return   ${({ gap, gapLevel }) => {
  //   if (isNumber(gap)) return `gap: ${gap}`;
  //   if (isNumber(gapLevel)) return `gap: ${gapLevel * ONE_SPACE}`;
  //   return '';
  // }}
}

// ****** Flex 布局 ******
const _Flex = styled(Animated.View).attrs(({ flex, elevation = 0 }: any) => {
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
/**
 * 从数组或对象中找出最终的key 对应的value
 * @param {Object|Array} style
 * @param {String} key
 * @returns {String} value
 */
function getKeyFromStyle(style: any, key: any) {
  if (!style) {
    return undefined;
  }
  if (isArray(style)) {
    const containedKeyStyles = style
      .filter((styleObj) => styleObj?.[key])
      .reverse();
    if (!containedKeyStyles.length) {
      return undefined;
    }
    return containedKeyStyles[0][key];
  }
  if (isObject(style)) {
    return (style as any)[key];
  }
  return undefined;
}
export default function Flex(props: any) {
  const { children, gap, gapLevel, style } = props;
  if (!gap && !gapLevel) {
    return <_Flex {...props}>{children}</_Flex>;
  }
  // 获取准确的 flexDirection
  const { flexDirection = getKeyFromStyle(style, 'flexDirection') } = props;
  // console.log(`_flexDirection`, flexDirection);

  const finalChildren = !isArray(children)
    ? children
    : children
        .map((child, index) =>
          index === children.length - 1
            ? child
            : [child, <Gapper {...{ gap, gapLevel, flexDirection }} />]
        )
        .flat();
  // console.log(`finalChildren`, children, finalChildren);
  return <_Flex {...props} children={finalChildren} />;
}
