package com.rndemo.protocol;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.rndemo.protocol.handle.LogHandler;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.HashMap;
import java.util.Map;

/**
 * @noinspection unused
 */
public class ProtocolModule extends ReactContextBaseJavaModule {

    private final static String KEY_METHOD = "method";
    private final static String KEY_ARGS = "args";

    private ReactContext context;
    private static final ProtocolModule sInstance = new ProtocolModule();
    private final Map<String, MethodHandler> methodHandlerMap = new HashMap<>();

    private ProtocolModule() {
    }

    public static ProtocolModule getInstance() {
        return sInstance;
    }

    @NonNull
    @Override
    public String getName() {
        return ProtocolModule.class.getSimpleName();
    }

    protected void attachContext(@NotNull ReactApplicationContext context) {
        this.context = context;
        this.methodHandlerMap.put("log", new LogHandler());
    }


    @ReactMethod
    private void callMethod(@NotNull ReadableMap input, @NotNull Promise promise) {
        String methodName = input.getString(KEY_METHOD);
        if (methodName == null || methodName.trim().isEmpty()) {
            promise.reject(new IllegalArgumentException("method name is empty"));
            return;
        }
        MethodHandler methodHandler = this.methodHandlerMap.get(methodName);
        if (methodHandler == null) {
            promise.reject(new IllegalArgumentException("method not implemented"));
            return;
        }
        methodHandler.handle(input.getMap(KEY_ARGS), promise);
    }

    public void sendMsgToReact(String msgType, String content) {
        this.context.getJSModule(ReactContext.RCTDeviceEventEmitter.class)
                .emit(msgType, content);
    }

    @Override
    public void invalidate() {
        super.invalidate();
        this.methodHandlerMap.clear();
    }

    public interface MethodHandler {
        void handle(@Nullable ReadableMap args, Promise promise);
    }
}