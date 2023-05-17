import styled from 'styled-components/native';
import _Table from '~/components/TheTable';

export default styled(_Table).attrs(
  ({
    headerColor,
    headerTextColor,
    dataLightColor,
    dataDarkColor,
    dataTextColor,
    theme,
  }) =>
    // console.log(`theme.colors`, theme.colors);
    ({
      headerColor: headerColor || theme?.colors?.表格标题背景色,
      headerTextColor: headerTextColor || theme?.colors?.文字图标白,
      dataLightColor: dataLightColor || theme?.colors?.表格数据背景色浅,
      dataDarkColor: dataDarkColor || theme?.colors?.表格数据背景色深,
      dataTextColor: dataTextColor || theme?.colors?.文字图标黑,
    })
)``;
