import React from 'react';
import { isArray, isNumber, isObject } from 'lodash';
import DefaultGapper from '~/components/Gapper';

/**
 * 添加Gap
 * @param {*} props
 * @returns
 */
export default function GapWrapper(Component: any) {
  return (props: any) => {
    const { children, gap, gapLevel, style } = props;
    if (!gap && !gapLevel) {
      return <Component {...props}>{children}</Component>;
    }
    // 获取准确的 flexDirection
    const { flexDirection = getValueFromStyleByKey(style, 'flexDirection') } =
      props;

    const finalChildren = !isArray(children)
      ? children
      : children
          .filter((child) => child && child != null)
          .map((child, index) =>
            index === children.length - 1
              ? child
              : [
                  child,
                  <DefaultGapper
                    key={`${index}gapper`}
                    {...{ gap, gapLevel, flexDirection }}
                  />,
                ]
          )
          .flat();
    // console.log(`finalChildren`, children, finalChildren);
    return <Component {...props} children={finalChildren} />;
  };
}
/**
 * 从数组或对象中找出最终的key 对应的value
 * @param {Object|Array} style
 * @param {String} key
 * @returns {String} value
 */
function getValueFromStyleByKey(style: any, key: string) {
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
  if (isObject(style) && style.hasOwnProperty(key)) {
    return (style as any)[key];
  }
  return undefined;
}

export function getGapNumber({ gap, gapLevel, theme }: any) {
  if (isNumber(gap)) return gap;
  if (isNumber(gapLevel)) return gapLevel * theme.dimension.oneSpace;
  return 0;
  // return   ${({ gap, gapLevel }) => {
  //   if (isNumber(gap)) return `gap: ${gap}`;
  //   if (isNumber(gapLevel)) return `gap: ${gapLevel * ONE_SPACE}`;
  //   return '';
  // }}
}
