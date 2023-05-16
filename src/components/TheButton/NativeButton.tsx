import { isString } from 'lodash';
import styled from 'styled-components/native';
import { getBoxStyle } from '~/style';
import { BaseButtonFontSize } from '~/utils/variables';
// react native 默认的 button 不过好像不能嵌套 icon
export const NativeButton = styled.Button.attrs(({ title, children }: any) => {
  // 添加了 children 的形式
  if (isString(children)) {
    return { title: children };
  }
  return { title };
})`
  ${getBoxStyle}
`;

const getButtonMode = ({ mode }: any) => ({
  // 默认 contained 模式(因为这款设备按钮比较多)
  mode: mode || 'contained',
});
const getLabelStyle = ({ labelStyle = {}, theme }: any) => {
  const { fontSize = BaseButtonFontSize, lineHeight } = labelStyle;
  // console.log(`lineHeight`, fontSize, lineHeight);
  const result = {
    labelStyle: {
      ...labelStyle,
      fontSize: theme.dimension.normalizeText(fontSize),
      lineHeight: theme.dimension.normalizeText(lineHeight || fontSize + 2), // Paper 有个毛病就是 lineWeight 不根据 fontSize 改变 导致文字被覆盖
    },
  };
  return result;
};
const getContentStyle = ({ contentStyle = {} }) => ({
  contentStyle: {
    ...contentStyle,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});
export default styled(NativeButton).attrs((props: any) => ({
  ...getLabelStyle(props),
  ...getContentStyle(props),
  ...getButtonMode(props),
}))``;
