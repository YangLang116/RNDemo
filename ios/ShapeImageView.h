//
//  ShapeImageView.h
//  RNDemo
//
//  Created by abc on 2024/3/18.
//

#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>
NS_ASSUME_NONNULL_BEGIN

typedef int (^onClick)(void);

@interface ShapeImageView : UIImageView

@property (nonatomic, assign) BOOL circle;
@property (nonatomic, copy) RCTBubblingEventBlock onChange;
- (instancetype)init;
@end

NS_ASSUME_NONNULL_END
