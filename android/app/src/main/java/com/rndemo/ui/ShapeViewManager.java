package com.rndemo.ui;

import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.rndemo.R;

import java.util.Map;

/**
 * @noinspection unused
 */
public class ShapeViewManager extends SimpleViewManager<ImageView> {
    @NonNull
    @Override
    public String getName() {
        return "ShapeView";
    }

    @NonNull
    @Override
    protected ImageView createViewInstance(@NonNull ThemedReactContext context) {
        ImageView imageView = new ImageView(context);
        imageView.setImageResource(R.drawable.bg_rect);
        imageView.setOnClickListener(v -> sendEvent(context, imageView.getId()));
        return imageView;
    }

    private void sendEvent(@NonNull ReactContext context, int viewId) {
        WritableMap event = Arguments.createMap();
        event.putString("message", "MyMessage");
        RCTEventEmitter jsModule = context.getJSModule(RCTEventEmitter.class);
        jsModule.receiveEvent(viewId, "topChange", event);
    }

    @Nullable
    @Override
    public Map<String, Object> getExportedCustomBubblingEventTypeConstants() {
        //固定搭配，事件名无法自定义
        Map<String, String> onChangedEvent = MapBuilder.of("bubbled", "onChange");
        Map<String, Map<String, String>> registrationNames = MapBuilder.of("phasedRegistrationNames", onChangedEvent);
        return MapBuilder.of("topChange", registrationNames);
    }

    @ReactProp(name = "circle")
    public void isCircle(ImageView view, boolean circle) {
        view.setImageResource(circle ? R.drawable.bg_circle : R.drawable.bg_rect);
    }

}
