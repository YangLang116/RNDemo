//
//  ShapeImageView.m
//  RNDemo
//
//  Created by abc on 2024/3/18.
//

#import "ShapeImageView.h"

@implementation ShapeImageView

/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/
- (instancetype)init
{
  self = [super init];
  if (self) {
    UITapGestureRecognizer *tapGesture = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(onTap:)];
    [self addGestureRecognizer:tapGesture];
    self.backgroundColor = [UIColor redColor];
    self.userInteractionEnabled = YES;
  }
  return self;
}

- (void)onTap:(UITapGestureRecognizer *)tap {
  if (self.onChange) {
    self.onChange(@{@"message": @"2"});
  }
}

- (void)setCircle:(BOOL)circle {
  if (circle) {
    self.layer.cornerRadius = 10;
    self.layer.masksToBounds = YES;
  } else {
    self.layer.cornerRadius = 0;
    self.layer.masksToBounds = NO;
  }
}


@end
