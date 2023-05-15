import {Dimensions, PixelRatio} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
const fontScale = PixelRatio.getFontScale();
const pixelRatio = PixelRatio.get();
const screenHorizontalPx = PixelRatio.getPixelSizeForLayoutSize(screenWidth);
const screenVerticalPx = PixelRatio.getPixelSizeForLayoutSize(screenHeight);
export default class Dimension {
  constructor(public designWidth = 1024, public designHeight = 600) {
  }
  get scaleWidth() {
    return screenWidth / this.designWidth;
  }
  get scaleHeight() {
    return screenHeight / this.designHeight;
  }
  get scale() {
    return Math.min(this.scaleWidth, this.scaleHeight);
  }
  // 字体
  normalizeText = (size:number) => {
    const _size = Math.ceil((size * this.scale) / fontScale);
    return _size;
  };
  normalizeWidth = (size:number) => {
    const scaleWidth = (size * screenHorizontalPx) / this.designWidth;
    const _size = Math.ceil(scaleWidth / pixelRatio);
    return _size || undefined;
  };
  normalizeHeight = (size:number) => {
    const scaleHeight = (size * screenVerticalPx) / this.designHeight;
    const _size = Math.ceil(scaleHeight / pixelRatio);
    return _size || undefined;
  };
  get onePx() {
    return 1 / pixelRatio;
  }
}
