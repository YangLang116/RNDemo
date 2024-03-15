## 页面导航
- createNativeStackNavigator: App
- createMaterialTopTabNavigator: HallTab
- createBottomTabNavigator: MainPage
- createDrawerNavigator: SettingPage

## 网络请求
- Fetch: ServiceApi

## 数据储存
- Storage: AppStorage

## ReactHook
- useContext / createContext
- configureStore / createSlice / createAsyncThunk
- useDispatch
- useSelector / createSelector
- useState
- useRef / useImperativeHandle
- useEffect
- useCallback
- React.memo / useMemo

## RN Hook
- useFocusEffect
- useBackHandler

```js
function ScreenWithCustomBackBehavior() {
  // ...

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (isSelectionModeEnabled()) {
          disableSelectionMode();
          return true;
        } else {
          return false;
        }
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    }, [isSelectionModeEnabled, disableSelectionMode])
  );

  // ...
}
```

回调函数是倒序执行的（即后添加的函数先执行）。

- 如果某一个函数返回 true，则后续的函数都不会被调用。
- 如果没有添加任何监听函数，或者所有的监听函数都返回 false，则会执行默认行为，退出应用。

## 状态栏
支持静态方法 / 支持组件方式

### 所有平台
- hidden：是否隐藏状态栏。
- barStyle： 设置状态栏文本的颜色。
- animated：指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle 和 hidden。

### android属性
- translucent：指定状态栏是否透明。设置为 true 时，应用会延伸到状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
- backgroundColor： 状态栏的背景色。

### iOS属性
- networkActivityIndicatorVisible：指定是否显示网络活动提示符。
- showHideTransition：通过hidden属性来显示或隐藏状态栏时所使用的动画效果。默认值为'fade'。

## 安全区域
SafeAreaView的目的是在一个“安全”的可视区域内渲染内容。具体来说就是因为目前有 iPhone X 这样的带有“刘海”的全面屏设备，所以需要避免内容渲染到不可见的“刘海”范围内。本组件目前仅支持 iOS 设备以及 iOS 11 或更高版本。

SafeAreaView会自动根据系统的各种导航栏、工具栏等预留出空间来渲染内部内容。更重要的是，它还会考虑到设备屏幕的局限，比如屏幕四周的圆角或是顶部中间不可显示的“刘海”区域。

