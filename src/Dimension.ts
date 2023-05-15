import { Dimensions, PixelRatio } from 'react-native';
import { ONE_SPACE_NUMBER } from './utils/variables';
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const fontScale = PixelRatio.getFontScale();
const pixelRatio = PixelRatio.get();
const screenHorizontalPx = PixelRatio.getPixelSizeForLayoutSize(screenWidth);
const screenVerticalPx = PixelRatio.getPixelSizeForLayoutSize(screenHeight);
export default class Dimension {
  constructor(
    public designWidth: number = 1024,
    public designHeight: number = 600,
    public space: number = ONE_SPACE_NUMBER
  ) {}
  get scaleWidth(): number {
    return screenWidth / this.designWidth;
  }
  get scaleHeight(): number {
    return screenHeight / this.designHeight;
  }
  get scale(): number {
    return Math.min(this.scaleWidth, this.scaleHeight);
  }
  // 字体
  normalizeText = (size: number): number => {
    const _size = Math.ceil((size * this.scale) / fontScale);
    return _size;
  };
  normalizeWidth = (size: number): number | undefined => {
    const scaleWidth = (size * screenHorizontalPx) / this.designWidth;
    const _size = Math.ceil(scaleWidth / pixelRatio);
    return _size || undefined;
  };
  normalizeHeight = (size: number): number | undefined => {
    const scaleHeight = (size * screenVerticalPx) / this.designHeight;
    const _size = Math.ceil(scaleHeight / pixelRatio);
    return _size || undefined;
  };
  get onePx(): number {
    return 1 / pixelRatio;
  }
  get oneSpace(): number {
    return this.space * this.onePx;
  }
}
