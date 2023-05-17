/**
 * @author
 * @file index.js
 * @fileBase Buttons
 * @path src\UI\components\Buttons\index.js
 * @from
 * @desc
 * @todo

 *
 * @done
 * @example
 */

import React, { useState, useEffect } from 'react';
import { Row } from '../TheFlex';
import DefaultItem from './Item';
import useButtons from './useButtons';

const ROUNDED = 10;
function TheButtons({
  defaultValue,
  onValueChange,
  buttons: buttonsOption,
  colors = {},
  ItemComponent = DefaultItem,
}: any) {
  const { buttons } = useButtons({ buttons: buttonsOption });
  const {
    activeColor = 'blue',
    activeLightColor = 'lightblue',
    activeDarkColor = 'darkblue',
    inactiveColor = 'lightblue',
  } = colors;
  const [value, setValue] = useState(defaultValue);
  const _onValueChange = (v: any) => {
    setValue(v);
  };
  useEffect(() => {
    onValueChange(value);
  }, [value]);
  return (
    <Row rounded={3} gapLevel={1}>
      {buttons.map((item: any = {}, index: any) => (
        <ItemComponent
          key={index}
          {...item}
          style={{
            borderTopLeftRadius: item.isFirst ? ROUNDED : undefined,
            borderTopRightRadius: item.isLast ? ROUNDED : undefined,
            borderBottomLeftRadius: item.isFirst ? ROUNDED : undefined,
            borderBottomRightRadius: item.isLast ? ROUNDED : undefined,
          }}
          onPress={() => {
            _onValueChange(item.value);
          }}
          active={item.isActive(value)}
          colors={{
            activeColor,
            activeLightColor,
            activeDarkColor,
            inactiveColor,
          }}
        />
      ))}
    </Row>
  );
}

export default TheButtons;
