/**
 * @author
 * @file Button.js
 * @fileBase Button
 * @path src\UI\components\Button\Button.js
 * @from
 * @desc
 * @todo

 *
 * @done
 * @example
 */

import { isObject, isString } from 'lodash';
import React, { useMemo } from 'react';
// import { TouchableRipple } from 'react-native-paper';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import AnimatedFlex from '../TheFlex/AnimatedFlex';
import Text from '../Text';

function TheButton({ pressed, icon, theText, buttonProps }) {
  const scale = useSharedValue(1);
  if (pressed) {
    scale.value = 1.04;
  } else {
    scale.value = 1;
  }
  const opacity = useSharedValue(1);
  if (pressed) {
    opacity.value = 0.5;
  } else {
    opacity.value = 1;
  }
  const style = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(scale.value, { duration: 10 }),
      },
    ],
    opacity: withSpring(opacity.value, { duration: 10 }),
  }));
  return (
    <AnimatedFlex
      rounded={2}
      w={180}
      h={56}
      m={2}
      p={2}
      style={[style]}
      {...(buttonProps || {})}
    >
      {icon}
      {theText}
    </AnimatedFlex>
  );
}
function Button({ icon, text, textProps, buttonProps, ...restProps }) {
  const theText = useMemo(() => {
    if (isString(text)) {
      return (
        <Text fontSize={28} bold {...textProps}>
          {text}
        </Text>
      );
    }
    if (isObject(text)) {
      return <>{text}</>;
    }
    return null;
  }, [text, textProps]);
  // 动画

  return (
    <Pressable {...restProps}>
      {({ pressed }) => (
        <TheButton
          pressed={pressed}
          icon={icon}
          theText={theText}
          buttonProps={buttonProps}
        />
      )}
    </Pressable>
  );
}

export default Button;
