## 百度移动统计Cordova Demo
本demo目前仅包含iOS的使用过程，安卓版本正在开发中，敬请期待。

使用步骤
1. clone此代码库，并运行

  ```
  cordova platform add ios
  cordova prepare
  ```  
2. 打开$(home)/platforms/ios/HelloWorld.xcworkspace
3. 打开`AppDelegate.m`
4. 修改代码，引入`#import "BaiduMobStat.h"`

  ```objc 
    - (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
    {
        [[BaiduMobStat defaultStat] startWithAppId:@"xxx"];
        [[BaiduMobStat defaultStat] setEnableDebugOn:YES];
        self.viewController = [[MainViewController alloc] init];
        return [super application:application didFinishLaunchingWithOptions:launchOptions];
    }

  ```
5. 运行并调试
