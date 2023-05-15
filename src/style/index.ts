import { isNumber, isString } from 'lodash';
import { ROUNDEDS } from '../utils/variables';

export function getPaddingStyle(props: any) {
  return `
  ${setTypeByNumber('padding-start', 'ps')(props)};
  ${setTypeByNumber('padding-end', 'pe')(props)};
  ${setTypeByNumber('padding-top', 'pt')(props)};
  ${setTypeByNumber('padding-bottom', 'pb')(props)};
  ${setTypeByNumber('padding-horizontal', 'px')(props)};
  ${setTypeByNumber('padding-vertical', 'py')(props)};
  ${setTypeByNumber('padding', 'p')(props)};
  `;
}
export function getMarginStyle(props: any) {
  return `
  ${setTypeByNumber('margin-start', 'ms')(props)};
  ${setTypeByNumber('margin-end', 'me')(props)};
  ${setTypeByNumber('margin-top', 'mt')(props)};
  ${setTypeByNumber('margin-bottom', 'mb')(props)};
  ${setTypeByNumber('margin-horizontal', 'mx')(props)};
  ${setTypeByNumber('margin-vertical', 'my')(props)};
  ${setTypeByNumber('margin', 'm')(props)}
  `;
}
export function getFlexStyle(...values: any[]) {
  // if (values[0].flexWrap) console.log(`values[0].flexWrap`, values[0].flexWrap);
  // if (values[0].flexDirection) console.log(`values[0].flexDirection`, values[0].flexDirection);
  // if (values[0].justifyContent) console.log(`values[0].justifyContent`, values[0].justifyContent);
  // if (values[0].alignItems) console.log(`values[0].alignItems`, values[0].alignItems);
  // if (values[0].flex) console.log(`values[0].flex`, values[0].flex);
  return `
    display: flex;
    ${(({ flex }) => flex && `flex: ${flex};`)(values[0])}
    ${(({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`)(values[0])}
    ${(({ flexDirection }) => `flex-direction: ${flexDirection || 'row'};`)(
      values[0]
    )}
    ${(({ justifyContent }) =>
      `justify-content: ${justifyContent || 'center'};`)(values[0])}
    ${(({ alignItems }) => `align-items: ${alignItems || 'center'};`)(
      values[0]
    )}
    `;
}
function getBgColorStyle({ bgColor, elevation, theme = {} }: any) {
  if (!bgColor && !elevation) {
    return '';
  }
  if (!bgColor && elevation) {
    return `background-color: ${theme.colors?.留白背景色};`;
  }
  // console.log(`bgColor`, bgColor);
  return `background-color: ${bgColor};`;
}
function getBgStyle({ bg }: any) {
  if (!bg) {
    return '';
  }
  return `background: ${bg};`;
}

export function getColorStyle(...values: any[]) {
  return `${getBgColorStyle(values[0])}`;
}
function getNumberFromAlias(alias: string, aliases: any = {}) {
  if (isString(alias)) {
    return aliases[alias] || 0;
  }
  return alias;
}
export function getRoundedStyle({
  rounded,
  startRounded,
  endRounded,
  leftRounded,
  rightRounded,
  theme,
}: any) {
  if (!(rounded || startRounded || endRounded || leftRounded || rightRounded)) {
    return '';
  }
  const _rounded = getNumberFromAlias(rounded, ROUNDEDS);
  const _startRounded = getNumberFromAlias(startRounded, ROUNDEDS);
  const _endRounded = getNumberFromAlias(endRounded, ROUNDEDS);
  const _leftRounded = getNumberFromAlias(leftRounded, ROUNDEDS);
  const _rightRounded = getNumberFromAlias(rightRounded, ROUNDEDS);
  // console.log(`_startRounded,_endRounded,_rounded`, _startRounded, _endRounded, _rounded);
  if (
    _rounded &&
    !(_startRounded || _endRounded || _leftRounded || _rightRounded)
  ) {
    return `border-radius: ${theme.dimension.normalizeText(
      _rounded * theme.dimension.space
    )}px`;
  }
  const radius = {
    'border-top-start-radius': _startRounded || _rounded,
    'border-bottom-start-radius': _startRounded || _rounded,
    'border-top-end-radius': _endRounded || _rounded,
    'border-bottom-end-radius': _endRounded || _rounded,
    'border-top-left-radius': _leftRounded || _rounded,
    'border-bottom-left-radius': _leftRounded || _rounded,
    'border-top-right-radius': _rightRounded || _rounded,
    'border-bottom-right-radius': _rightRounded || _rounded,
  };
  let string = '';
  Object.entries(radius).forEach(([key, value]) => {
    if (!value) {
      return;
    }
    string += `${key}: ${theme.dimension.normalizeText(
      value * theme.dimension.space
    )}px;`;
  });
  // console.log(`string`, string);
  return string;
}
const isNumberButString = (size: number | string) =>
  isString(size) && !Number.isNaN(parseFloat(size as string));
//  获取长度
export function getLength(size: number | string) {
  if (!size) return 0;
  if (isNumber(size)) return size;
  if (!(size as string).endsWith('%') && isNumberButString(size)) {
    return parseFloat(size as string);
  }
  return size;
}
// 数字加px 非数字直接返回
export function getFinalSize(size: string | number, normalize: Function) {
  const length = getLength(size);
  if (isNumber(length)) return `${normalize ? normalize(length) : length}px`;
  // string
  return length;
}
export function getWidth({ w, theme }: any) {
  if (!w) return '';
  const width = getFinalSize(w, theme.dimension.normalizeWidth);
  return `width: ${width};`;
}
export function getHeight({ h, theme }: any) {
  if (!h) return '';
  const height = getFinalSize(h, theme.dimension.normalizeHeight);
  // console.log(`height`, height);
  return `height: ${height};`;
}
export function getSizeStyle(...values: any[]) {
  return `
    ${getHeight(values[0])}
    ${getWidth(values[0])}
    ${(({ size, sizeLevel, minHeight, minHeightLevel, theme }: any) => {
      if (isNumber(minHeight)) return `min-height: ${minHeight}px`;
      if (isNumber(minHeightLevel))
        return `min-height: ${minHeightLevel * theme.dimension.oneSpace}px`;
      if (isNumber(size)) return `min-height: ${size}px`;
      if (isNumber(sizeLevel))
        return `min-height: ${sizeLevel * theme.dimension.oneSpace}px`;
      return '';
    })(values[0])};
    ${(({ size, sizeLevel, minWidth, minWidthLevel, theme }: any) => {
      if (isNumber(minWidth)) return `min-width: ${minWidth}px`;
      if (isNumber(minWidthLevel))
        return `min-width: ${minWidthLevel * theme.dimension.oneSpace}px`;
      if (isNumber(size)) return `min-width: ${size}px`;
      if (isNumber(sizeLevel))
        return `min-width: ${sizeLevel * theme.dimension.oneSpace}px`;
      return '';
    })(values[0])};
  `;
}
export function getBoxStyle(...values: any[]) {
  return `
    ${getBgStyle(values[0])}
    ${getSizeStyle(...values)}
    ${getRoundedStyle(values[0])}
    ${getColorStyle(...values)}
    ${getPaddingStyle(values[0])}
    ${getMarginStyle(values[0])}
  `;
}

// 就加一下 px
export function addPx(number: number) {
  return `${number || 0}px`;
}
// 这个是方便添加padding
export function setTypeByNumber(type: any, typeAbbreviation: any) {
  return (props: any) => {
    const number = props[typeAbbreviation];
    if (!number) return '';
    return `${type}: ${addPx(number * props.theme.dimension.oneSpace)};`;
  };
}

/**
 * 获取rounded 数值
 * @param {String|Number} rounded
 * @returns {Number|Undefined}
 */
export function getRounded(rounded: number | string, oneSpace: number) {
  if (isNumber(rounded)) return oneSpace * (rounded as number);
  if (isString(rounded) && ROUNDEDS[rounded]) {
    return oneSpace * (ROUNDEDS[rounded] as number);
  }
  return 0;
}
export function getRoundedPx(rounded: number, theme: any) {
  return addPx(getRounded(rounded, theme.dimension.oneSpace));
}
