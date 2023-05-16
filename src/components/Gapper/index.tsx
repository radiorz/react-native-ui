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
import { FLEX_DIRECTIONS, ONE_SPACE_NUMBER } from '~/utils/variables';

interface GapperProps {
  gap?: number;
  gapLevel?: number;
  flexDirection?: string;
  theme?: any;
}
function Gapper(props: GapperProps) {
  let { gap, theme } = props;
  const { gapLevel, flexDirection } = props;
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
          height: theme.dimension.normalizeHeight(gap),
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
        width: theme.dimension.normalizeWidth(gap),
      }}
    />
  );
}
export default memo(Gapper);
