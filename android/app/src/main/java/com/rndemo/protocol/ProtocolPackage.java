package com.rndemo.protocol;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Collections;
import java.util.List;

public class ProtocolPackage implements ReactPackage {
    /**
     * @noinspection rawtypes
     */
    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactApplicationContext) {
        return Collections.emptyList();
    }

    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext context) {
        ProtocolModule protocolModule = ProtocolModule.getInstance();
        protocolModule.attachContext(context);
        return Collections.singletonList(protocolModule);
    }



}
