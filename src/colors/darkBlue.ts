export const 主题色 = 'blue';
import { baseColors as commonBaseColors } from './commonColors';
import type { BaseColors } from './funcs/BaseColors';
export const baseColors: BaseColors = {
  ...commonBaseColors,
  50: '#def2ff',
  100: '#aed5ff',
  200: '#7eb9ff',
  300: '#4c9cfe',
  400: '#1b80fd',
  500: '#0267e4',
  600: '#0050b2',
  700: '#003980',
  800: '#002250',
  900: '#000c20',
};
export const 主题背景色 = baseColors[400]; // 依据...
export const 渐变背景色深 = baseColors[400];
export const 文字背景色深 = baseColors[500];
export const 渐变背景色浅 = baseColors[600];
export const 文字背景色浅 = baseColors[700];
export const 文字背景色 = baseColors[800];
export const 留白背景色浅 = baseColors[900];
export const 留白背景色 = baseColors[1000];
// 表格
export const 表格标题背景色 = baseColors[600];
export const 表格数据背景色深 = baseColors[800];
export const 表格数据背景色浅 = baseColors[1000];

// 按键图标类
export const 更多功能按键深 = baseColors[400];
export const 更多功能按键浅 = baseColors[600];
// 文字
export const 主题文字色 = baseColors[400];
export const 文字图标默认 = baseColors[0];
export const 文字图标相反 = baseColors[1000];
export {
  // 业务颜色
  护理级别特级,
  护理级别一级,
  护理级别二级,
  护理级别三级,
  护理按键,
  呼叫按键,
  安全警示图标背景色,
  // 普通色
  文字图标白,
  文字图标黑,
  文字图标蓝,
  文字图标浅蓝,
  文字图标绿,
  文字图标红,
  文字图标灰,
  文字图标浅灰,
  // 辅助色
  分割线灰,
  边框灰,
  文字背景灰,
  文字背景浅灰,
  暂无数据灰,
} from './commonColors';
