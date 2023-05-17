/**
 * @author
 * @file Gapper.js
 * @fileBase Gapper
 * @path src\UI\components\Flex\Gapper.js
 * @from
 * @desc 用于设置间隔
 * @todo

 *
 * @done
 * @example
 */
import React, { memo } from 'react';
import { View } from 'react-native';
import { FLEX_DIRECTIONS, ONE_SPACE_NUMBER } from '../../utils/variables';
import { useTheme } from 'styled-components/native';
interface GapperProps {
  gap?: number;
  gapLevel?: number;
  flexDirection?: string;
}
function Gapper(props: GapperProps) {
  let { gap } = props;
  const { gapLevel, flexDirection } = props;
  const theme = useTheme();
  console.log(`theme`, theme);
  if (!gap && gapLevel) gap = gapLevel * ONE_SPACE_NUMBER;
  // console.log(`flexDirection`, flexDirection, gap);
  // 垂直
  if (
    !flexDirection ||
    [FLEX_DIRECTIONS.column, FLEX_DIRECTIONS['column-reverse']].includes(
      flexDirection
    )
  ) {
    return (
      <View
        style={{
          // width: '100%',
          // backgroundColor: 'red',
          height: (theme as any).dimension.normalizeHeight(gap) || 0,
        }}
      />
    );
  }
  // 其他默认为水平
  return (
    <View
      style={{
        // height: '100%',
        // backgroundColor: 'red',
        width: (theme as any).dimension.normalizeWidth(gap) || 0,
      }}
    />
  );
}
export default memo(Gapper);
