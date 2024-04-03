//
//  ShapeViewManager.m
//  RNDemo
//
//  Created by abc on 2024/3/18.
//

#import "ShapeViewManager.h"
#import "ShapeImageView.h"
#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>
@implementation ShapeViewManager
RCT_EXPORT_MODULE(ShapeView)

- (UIView *)view {
  return [[ShapeImageView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(circle, BOOL);
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock);
@end
