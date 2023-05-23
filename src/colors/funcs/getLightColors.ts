import type { BaseColors } from './BaseColors';
export default function (baseColors: BaseColors) {
  return {
    主题背景色: baseColors[500],
    渐变背景色深: baseColors[500], // 500
    文字背景色深: baseColors[400], // 400
    渐变背景色浅: baseColors[300], // 300
    文字背景色浅: baseColors[200], // 200
    文字背景色: baseColors[100], // 100
    留白背景色浅: baseColors[50], // 50
    留白背景色: baseColors[0], // 0return {
    表格标题背景色: baseColors[300],
    表格数据背景色深: baseColors[100],
    表格数据背景色浅: baseColors[0],
    //
    更多功能按键深: baseColors[500],
    更多功能按键浅: baseColors[300],
    // 文字
    主题文字色: baseColors[500],
    主题文字色浅: baseColors[300],
    文字图标默认: baseColors[1000],
    文字图标相反: baseColors[0],
  };
}
