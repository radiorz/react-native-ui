import styled from 'styled-components/native';
import { isNumber } from 'lodash';
import { addPx } from '../../style';
import { BaseFontSize, BaseFontGap } from '../../utils/variables';
import { getMarginStyle, getSizeStyle } from '../../style';
import type Dimension from '../../Dimension';
export default styled.Text`
  ${getFontSizeStyle}
  ${getSizeStyle}
  ${getTextColorStyle}
  ${getMarginStyle}
  ${getWeight}
  ${getTextTransform}
`;
// 简单高效使用 _size 决定 文本的大小 原始尺寸
function _getFontSize(_size: number | string = 1) {
  return (parseInt(_size as string, 10) - 1) * BaseFontGap + BaseFontSize;
}
// 最终尺寸
export function getFontSizeByLevel(
  fontLevel: any,
  dimension: Dimension
): number {
  return dimension.normalizeText(_getFontSize(fontLevel));
}
const TEXT_VARIANTS = {
  heading: 'heading',
};
// 大小
export function getFontSizeStyle({
  fontSize,
  sizeLevel,
  _variant,
  theme,
}: any) {
  if (isNumber(fontSize))
    return `font-size: ${addPx(theme.dimension.normalizeText(fontSize))};`;
  if (typeof sizeLevel !== 'undefined')
    return `font-size:${addPx(getFontSizeByLevel(sizeLevel, theme.dimension))}`;
  if (_variant === TEXT_VARIANTS.heading)
    return `font-size:${addPx(theme.dimension.normalizeText(24))}`;
  return '';
}
// 颜色
export function getTextColorStyle({ color, theme, isContrast }: any) {
  if (color) return `color: ${color}`;
  if (isContrast && theme) return `color: ${theme.colors.文字图标白};`;
  if (theme) return `color: ${theme.colors.文字图标黑}`;
  return '';
}
// 重量(粗细)
export function getWeight({ bold, weightLevel, fontWeight, _variant }: any) {
  if (fontWeight) return `font-weight: ${fontWeight}`;
  if (weightLevel) return `font-weight: ${weightLevel * 100}`;
  if (bold) return `font-weight: bold`;
  // 因为可能混用 react-native-paper 严谨起见用 _ 作为区分..
  if (_variant === TEXT_VARIANTS.heading) return `font-weight: bold`;
  return '';
}

function getTextTransform({ isCapitalize, isUppercase, isLowerCase }: any) {
  if (isCapitalize) return `text-transform: capitalize;`;
  if (isUppercase) return `text-transform: uppercase;`;
  if (isLowerCase) return `text-transform: lowercase;`;
  return '';
}
