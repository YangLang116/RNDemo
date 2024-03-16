package com.rndemo.protocol.handle;

import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReadableMap;
import com.rndemo.protocol.ProtocolModule;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class LogHandler implements ProtocolModule.MethodHandler {
    private static final String TAG = "LogHandler";

    @Override
    public void handle(@Nullable ReadableMap args, @NotNull Promise promise) {
        if (args != null) {
            String msg = args.getString("msg");
            if (msg != null) Log.i(TAG, msg);
        }
        promise.resolve(true);
    }
}
