// 主题调度参照 https://smart-swatch.netlify.app/pink
import { baseColors as commonBaseColors } from './commonColors';
import getLightColors from './funcs/getLightColors';

export const baseColors = {
  ...commonBaseColors,
  50: '#ffe3ea',
  100: '#ffb3c0',
  200: '#fd8196',
  300: '#fc516d',
  400: '#fc2544',
  500: '#e3132a',
  600: '#b10b21',
  700: '#7f0517',
  800: '#4d000d',
  900: '#1e0003',
};
export const {
  主题背景色,
  渐变背景色深,
  文字背景色深,
  渐变背景色浅,
  文字背景色浅,
  文字背景色,
  留白背景色浅,
  留白背景色,
  // 表格
  表格标题背景色,
  表格数据背景色深,
  表格数据背景色浅,
  // 按键图标
  更多功能按键深,
  更多功能按键浅,
  // 文字
  主题文字色,
  主题文字色浅,
  文字图标默认,
  文字图标相反,
} = getLightColors(baseColors);
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
