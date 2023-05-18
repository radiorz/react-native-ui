/**
 * @author
 * @file DataEmptyComponent.js
 * @fileBase DataEmptyComponent
 * @path src\UI\themed\DataEmptyComponent.js
 * @from
 * @desc
 * @todo

 *
 * @done
 * @example
 */

import React from 'react';
import Text from './TheText';
import { Center } from './TheFlex';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';

function DataEmptyComponent({ height, text, ...restProps }: any) {
  const { colors }: any = useTheme();
  const { t } = useTranslation();
  return (
    <Center {...restProps} flex={1} h={height}>
      <Text fontSize={32} bold color={colors?.暂无数据灰}>
        {`${text || t('default.no_data')}`}
      </Text>
    </Center>
  );
}

export default DataEmptyComponent;
