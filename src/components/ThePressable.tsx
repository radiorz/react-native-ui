/**
 * @author
 * @file Pressable.js
 * @fileBase Pressable
 * @path src\UI\components\Pressable.js
 * @from
 * @desc
 * @todo

 *
 * @done
 * @example
 */

import React from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function TheView({ pressed, children, ...props }: any) {
  const scale = useSharedValue(1);
  scale.value = pressed ? 0.96 : 1;
  const style = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withTiming(scale.value, { duration: 1000 }),
      },
    ],
  }));
  return (
    <Animated.View {...props} style={style}>
      {children}
    </Animated.View>
  );
}
function ThePressable(props: any) {
  const onEvents: any = {};
  Object.entries(props).forEach(([key, value]) => {
    // TODO 简单判断
    if (!key.startsWith('on')) return;
    onEvents[key] = value;
  });
  // 添加动画
  return (
    <Pressable {...onEvents}>
      <TheView />
    </Pressable>
  );
}

export default ThePressable;
