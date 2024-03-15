import {Dimensions, Platform, StatusBar} from 'react-native';

export const isiOS = () => Platform.OS === 'ios';
export const isAndroid = () => Platform.OS === 'android';
// iPhone X、iPhone XS
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhone XR、iPhone XS Max
const XS_MAX_WIDTH = 414;
const XS_MAX_HEIGHT = 896;

const DEVICE_SIZE = Dimensions.get('window');
const {height: D_HEIGHT, width: D_WIDTH} = DEVICE_SIZE;

export const isiPhoneX = () => {
  return (
    (isiOS() &&
      ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
        (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))) ||
    (D_HEIGHT === XS_MAX_HEIGHT && D_WIDTH === XS_MAX_WIDTH) ||
    (D_HEIGHT === XS_MAX_WIDTH && D_WIDTH === XS_MAX_HEIGHT)
  );
};

const STATUS_BAR_HEIGHT = isiOS()
  ? isiPhoneX()
    ? 34
    : 20
  : StatusBar.currentHeight;
