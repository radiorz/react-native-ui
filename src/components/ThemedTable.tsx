import styled from 'styled-components/native';
import Table from './TheTable';

import DataEmptyComponent from './DataEmptyComponent';
// interface TableThemeProps {
//   headerColor?: string | undefined;
//   headerTextColor?: string | undefined;
//   dataLightColor?: string | undefined;
//   dataDarkColor?: string | undefined;
//   dataTextColor?: string| undefined;
//   theme: any;
// }
export default styled(Table).attrs(
  ({
    headerColor,
    headerTextColor,
    dataLightColor,
    dataDarkColor,
    dataTextColor,
    theme,
  }: any) =>
    // console.log(`theme.colors`, theme.colors);
    ({
      headerColor: headerColor || theme?.colors?.表格标题背景色,
      headerTextColor: headerTextColor || theme?.colors?.文字图标白,
      dataLightColor: dataLightColor || theme?.colors?.表格数据背景色浅,
      dataDarkColor: dataDarkColor || theme?.colors?.表格数据背景色深,
      dataTextColor: dataTextColor || theme?.colors?.文字图标黑,
      DataEmptyComponent,
    })
)``;
