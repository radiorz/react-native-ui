/**
 * @author
 * @file Item.js
 * @fileBase Item
 * @path src\UI\components\Buttons\Item.js
 * @from
 * @desc
 * @todo

 *
 * @done
 * @example
 */

import React, { memo, useMemo } from 'react';
import { Pressable } from 'react-native';
import Text from '../ThemedText';
import LinearGradientBox from '../LinearGradientBox';

function Item({ value, active, text, onPress, colors, style }: any) {
  const linearGradientColors = useMemo(() => {
    if (active) {
      return [
        colors.activeLightColor || colors.activeColor || '#000000',
        colors.activeDarkColor || colors.activeColor || '#FFFFFF',
      ];
    }
    return [colors.inactiveColor, colors.inactiveColor];
  }, [active, colors]);
  return (
    <Pressable onPress={() => onPress(value)}>
      <LinearGradientBox
        w={100}
        h={32}
        colors={linearGradientColors}
        style={style}
      >
        <Text isContrast={active} fontSize={18} adjustsFontSizeToFit>
          {text}
        </Text>
      </LinearGradientBox>
    </Pressable>
  );
}

export default memo(Item);
