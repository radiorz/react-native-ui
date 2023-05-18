# react-native-ui

## 实现程度
通用 rn 组件,主题以及宽度自适应
完整组件库其实包括很多东西:
Avatar、Badge、BottomSheet、Button、Canlendar、Cascader、CheckBox、DateTimePicker、DataEmpty、Dialog、Draggable、Drawer、FileExplorer、Hairline、Header、HighlightText、Icon、ImageViewer、Input、NumberInput、ListItem、Loading、LongText、MessageBox、Modal、Notice、PagingList、Popover、ProgressBar、SearchBar、Selector、Slider、Step、Switch、Tab、Tag、Text、Timeline、Toast、Tooltip、Webview
但是我们这个纯粹是因为 部分组件库过于卡顿而多做的工作,不用完全覆盖,只要够项目使用就行了
## 目的
独立出来有利于管理: 目前也只是两个应用都用到了, 以往的应用都是复制一份过去, 不过经常是独立开发应用,这样容易照成一个bug总是要两边改,不太合适;而且不同人开发的应用也不近相同,经常改着改着就分道扬镳了,以后想复用反而要到处比对.

并且要不是实践 native-base 太卡了,不然就直接用 native-base 了.具体卡顿原因不明. 自己实现的好处是可以尽可能简单实现,从而性能上不会太差.

## 最重要的功能包括
### 宽高自适应:
其实就是一份设计多端适用,而实现除了响应式最简单的就是计算长宽进行等比例的缩放.
详细见 /src/Dimension
### 主题色
实现一个颜色的 context 然后遍布全局即可, 这个库中使用了 styled-components, 所以便用styled-components 进行管理了
另外这个项目色彩管理参考native-base 背后参考的阶梯颜色(styled-system),然后结合业务实现了一个极简的颜色系统
详细见 /src/colors
### 布局
布局参考的还是 native-base, 他将各种属性类似 windi-css 一样把所有style属性放在组件props中, 然后就可以利用 flexBox 布局快速布局出想要的布局
没有实现响应式,因为设计没有响应式,都是确定的宽高比例.
## 遗憾与TODO
### 按需引入与按需安装依赖
比较遗憾,用这个包需要独立安装很多个rn 依赖, 不能说没有引用到就不安装...
所以这个库只能保持克制,尽量少引用其他库
并且好在内部项目,依赖项大差不差,所以真实影响也不大.
// 或许可以尝试一下 vite 等其他打包方式
### alias typescript
react-native-builder-bob 目前 typescript 用不了 alias(因为 typescript 不打包),所以不要在这个项目中使用 alias。
### 国际化等的自定义
现在直接用了 react-i18next
这个东西还不能自己进行配置,没整明白
使用时尽量避开国际化,有国际化自己传入国际化信息即可.
### example 暂时跑不了
因为目前项目使用的是旧的 react-native(使用的项目大部分是0.66 的), 所以 example 还得自行配置,不然 expo 版本会不符合跑不了.
### storybook 暂时用不了
...
## Installation

```sh
npm install react-native-ui

```
注意: 还得安装相关的 react-native 依赖,详见 /package.json/peer
## Usage
详见 example

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
