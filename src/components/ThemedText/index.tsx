// 上颜色
import Text from '../TheText';
import styled from 'styled-components/native';

export default styled(Text).attrs(
  ({ color, theme = {}, isContrast = false }: any) => ({
    color:
      color ||
      (isContrast ? theme?.colors?.文字图标白 : theme?.colors?.文字图标黑),
  })
)``;
