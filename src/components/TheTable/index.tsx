import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { isArray } from 'lodash';
import PropTypes from 'prop-types';
import { Pressable, ScrollView, View, FlatList } from 'react-native';
// import { Row, Table } from 'react-native-table-component';
import { Center, Column, Row } from '../TheFlex';
import Text from '../ThemedText';
const logger = console;
const shouldStripe = (index: number) => index % 2 === 1;
const DefaultDataEmptyComponent = memo(
  ({ height, text, ...restProps }: any) => (
    <Center {...restProps} flex={1} h={height || '100%'}>
      {text}
    </Center>
  )
);
export default function TheTable({
  // 颜色配置
  headerColor,
  headerTextColor,
  dataLightColor,
  dataDarkColor,
  dataTextColor,
  // 文字
  notDataText = '',
  // 高度配置
  w,
  dataHeight,
  // 字体
  headerFontSize = 28,
  dataFontSize = 28,
  // 主要数据
  headers: originalHeaders = [],
  data: originalData = [],
  DataEmptyComponent = DefaultDataEmptyComponent,
  onDataRowPress = () => {},
  renderItems = {},
}: any) {
  const headers = originalHeaders.map(
    (header: any) => header.title || header.key || ''
  );
  // const widthArr = originalHeaders.map(header => header.width || null);
  // console.log(`originalData`, originalData);
  const data = useMemo(() => {
    if (isArray(originalData)) {
      // 过滤成只有 headers 所包含的数据
      return originalData.map((item) =>
        originalHeaders.map((header: any) => ({
          key: header?.key,
          value: item[header?.key] || '',
        }))
      );
    }
    return [];
  }, [originalData, originalHeaders]);
  // console.log(`originalData`, originalData);
  // console.log(`data`, data);
  // console.log(
  //   ` headerColor,
  // headerTextColor,
  // dataLightColor,
  // dataDarkColor,
  // dataTextColor,`,
  //   headerColor,
  //   headerTextColor,
  //   dataLightColor,
  //   dataDarkColor,
  //   dataTextColor,
  // );
  const headerWidths = useMemo(
    () => originalHeaders.map((header: any) => (header as any).width || null),
    [originalHeaders]
  );
  const headerMinWidths = useMemo(
    () =>
      originalHeaders.map((header: any) => (header as any).minWidth || null),
    [originalHeaders]
  );
  const [widthArr, setWidthArr] = useState(headerWidths);
  const widthArrTemp = useRef<Array<number>>([]);
  useEffect(() => {
    // 长度改变应该清空temp 不然之后会被误导(index对应不了)
    widthArrTemp.current = [];
    setWidthArr(headerWidths);
  }, [headerWidths]);
  // console.log(`widthArr`, widthArr);
  function onHeaderColumnLayout(nativeEvent: any, index: number) {
    if (index === widthArrTemp.current.length) {
      widthArrTemp.current.push(nativeEvent.current.width);
    } else {
      return;
    }
    // 前面都是缓存,最后这个才是真的设置
    if (index + 1 === headers?.length) {
      setWidthArr(widthArrTemp.current);
    }
  }
  logger.debug('table headersWidth', headerWidths);
  logger.debug('table widthArrTemp', widthArrTemp);
  // console.log(`table headersWidth`, headerWidths);
  // console.log(`table widthArrTemp`, widthArrTemp);
  const view = (
    <View style={{ flex: 1 }}>
      <Row px={5 / 4} w={w} style={{ backgroundColor: headerColor }}>
        {headers.map((title: string, index: number) => (
          // TODO 每一个column 进行定制
          <Column
            key={index}
            flex={widthArr[index] ? undefined : 1}
            w={widthArr[index]}
            minWidth={headerMinWidths[index]}
            onLayout={({ nativeEvent }: any) =>
              onHeaderColumnLayout(nativeEvent, index)
            }
          >
            {/* 这里需要提供一下 text样式转化(或许用slot 解决) */}
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              textAlign="center"
              color={headerTextColor}
              fontSize={headerFontSize}
            >
              {title}
            </Text>
          </Column>
        ))}
      </Row>
      {/* // 没有的情况 */}
      {
        <DataEmptyComponent
          style={{ display: data?.length ? 'none' : null }}
          height={dataHeight}
          text={notDataText}
        />
      }
      {!!data?.length && (
        <FlatList
          style={{ height: dataHeight, backgroundColor: dataLightColor }}
          nestedScrollEnabled={true}
          data={data}
          keyExtractor={(_, index): any => index}
          renderItem={({ item: rowData, index }) => (
            <Pressable
              key={index}
              onPress={() => onDataRowPress(rowData, index)}
            >
              <Row
                w={w}
                key={index}
                style={[
                  shouldStripe(index) && { backgroundColor: dataDarkColor },
                ]}
              >
                {rowData.map(({ key, value }: any = {}, index: number) => {
                  const Component = renderItems?.[key];
                  return (
                    <Column
                      flex={widthArr[index] ? undefined : 1}
                      w={widthArr[index]}
                      key={index}
                    >
                      {Component ? (
                        <Component
                          header={key}
                          value={value}
                          index={index}
                          fontSize={dataFontSize}
                          textColor={dataTextColor}
                        />
                      ) : (
                        <Text fontSize={dataFontSize} color={dataTextColor}>
                          {`${value}`}
                        </Text>
                      )}
                    </Column>
                  );
                })}
              </Row>
            </Pressable>
          )}
        />
      )}
    </View>
  );
  //  w=100%的话 不用 scrollView
  if (w === '100%') {
    return <>{view}</>;
  }
  return (
    // 水平滚动(宽度大于实际显示宽度的时候)
    <ScrollView
      style={{ flex: 1 }}
      horizontal={true}
      nestedScrollEnabled={true}
    >
      {view}
    </ScrollView>
  );
}

TheTable.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      width: PropTypes.number,
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      // value,
    })
  ),
};
