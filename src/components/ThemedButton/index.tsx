/**
 * @author
 * @file Button.js
 * @fileBase Button
 * @path src\screens\SystemMaintenance\Button.js
 * @from
 * @desc
 * @todo
 * textButton
 * 大中小等按钮大小
 * text的所有属性
 * icon
 * @done
 * @example
 */

import { isFunction, isString } from 'lodash';
import React, { useMemo } from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { toCamel } from '../../utils/funcs';
import { Flex as Box, Row } from '../TheFlex';
import { BUTTON_VARIANTS } from '../../utils/variables';
import Text from '../ThemedText';
import { useTheme } from 'styled-components/native';
function Button({ title, children, onPress, icon: renderIcon, ...rest }: any) {
  const theme: any = useTheme();
  // Box 的属性
  const restProps = useMemo(() => {
    const props: any = {};
    Object.entries(rest).forEach(([key, value]) => {
      if (!key.startsWith('text')) {
        props[key] = value;
      }
    });
    return props;
  }, [rest]);
  // text 的属性
  const textProps = useMemo(() => {
    const props: any = {};
    Object.entries(rest).forEach(([key, value]) => {
      if (key.startsWith('text')) {
        const _key = toCamel(key.slice(4));
        props[_key] = value;
      }
    });
    return props;
  }, [rest]);
  // console.log(`textProps`, textProps);
  // child
  const child = useMemo(() => {
    if (title || isString(children)) {
      return (
        <Row>
          {isFunction(renderIcon) &&
            renderIcon({
              size: theme.dimension.normalizeText(textProps?.fontSize || 18),
              color: textProps?.color,
            })}
          <Text
            bold
            fontSize={18}
            numberOfLines={1}
            ellipsizeMode="tail"
            {...textProps}
          >
            {title || children}
          </Text>
        </Row>
      );
    }
    return children || <></>;
  }, [textProps, title, children, renderIcon, theme]);
  return (
    // 外面限制 pressable的 ripple
    <Box flexDirection="column" h={56} w={180} rounded={2} {...restProps}>
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: 'gray',
          borderless: true,
        }}
        style={{ height: '100%', width: '100%' }}
      >
        <Box h="100%" w={'100%'} rounded={restProps?.rounded || 2}>
          {child}
        </Box>
      </Pressable>
    </Box>
  );
}
function addVariant({
  textColor,
  bgColor,
  _variant,
  theme,
  mode = 'contained',
}: any) {
  let _bgColor;
  let _textColor;
  if (textColor) {
    _textColor = textColor;
  } else if (mode === 'text') {
    _textColor =
      theme?.colors?.[(BUTTON_VARIANTS as any)[_variant]] ||
      theme?.colors?.文字图标黑;
  } else if (mode === 'contained') {
    _textColor = theme?.colors?.文字图标白;
  }
  if (bgColor) {
    _bgColor = bgColor;
  } else if (mode === 'contained') {
    _bgColor =
      theme?.colors?.[(BUTTON_VARIANTS as any)[_variant]] ||
      theme?.colors?.主题文字色;
  }
  return {
    bgColor: _bgColor,
    textColor: _textColor,
  };
}
const styledButton = styled(Button).attrs(addVariant)``;

export default styledButton;
