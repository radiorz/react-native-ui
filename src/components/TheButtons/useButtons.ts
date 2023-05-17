/**
 * @author
 * @file useButtons.js
 * @fileBase useButtons
 * @path src\UI\components\TheButtons\useButtons.js
 * @from
 * @desc
 * @todo

 *
 * @done
 * @example
 */

import { useMemo } from 'react';
// import { useDispatch } from "react-redux";
class Button {
  isFirst = false;
  isLast = false;
  constructor({ index, buttons, ...rest }: any) {
    Object.assign(this, rest);
    this.isFirst = index === 0;
    this.isLast = index === (buttons?.length || 0) - 1;
  }
  value: any;
  isActive(value: any) {
    return this.value === value;
  }
}
export default function useButtons({ buttons }: any) {
  const _buttons = useMemo(
    () =>
      buttons?.map(
        (button: any, index: number) =>
          new Button({ buttons, index, ...button })
      ),
    [buttons]
  );
  return { buttons: _buttons };
}
