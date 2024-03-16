import {DeviceEventEmitter, NativeModules} from 'react-native';

const module = NativeModules.ProtocolModule;

//调用Native方法，如打印日志：
// callNativeMethod('log', '123')
export const callNativeMethod = (method, args) => {
  // noinspection JSUnresolvedFunction
  return module.callMethod({method, args});
};

//接受来自Native消息，如：
//监听：subscription = listenMsgFromNative('show', (msg) => console.log(msg))
//取消监听：subscription.remove()
export const listenMsgFromNative = (msgType, callback) => {
  return DeviceEventEmitter.addListener(msgType, callback);
};
