## 百度移动统计Cordova Demo
### iOS
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

### Android
1. clone此代码库，并运行
	
	```
  	cordova platform add android
  	cordova prepare
  	```
	
2. 配置appkey
 	
 	修改`AndroidManifest.xml`中appkey为自己的appkey：
 	
 	```
 	<meta-data android:name="BaiduMobAd_STAT_ID" android:value="替换key" />
 	```

3. 运行
	
	```
  	cordova run android
  	```
	
4. 调试
	
	需要在java代码中打开调试开关：
	
	```
	StatService.setDebugOn(true);
	```
	
	可以通过 `adb logcat -s sdkstat` 确认统计日志发送成功到服务器，logcat显示 `send log data over. result = true;`即发送成功。 
	
