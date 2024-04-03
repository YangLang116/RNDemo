//
//  ProtocolModule.m
//  RNDemo
//
//  Created by abc on 2024/3/18.
//

#import "ProtocolModule.h"
#import <React/RCTLog.h>
@implementation ProtocolModule
RCT_EXPORT_MODULE(ProtocolModule);

RCT_EXPORT_METHOD(callMethod:(NSDictionary *)args findEventsWithResolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  RCTLogInfo(@"Pretending to create an event at %@", args);
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"log"];
}

- (void)sendMessageToReactWithMessageType:(NSString *)messageType content:(NSString *)content {
  [self sendEventWithName:messageType body: content];
}

@end
