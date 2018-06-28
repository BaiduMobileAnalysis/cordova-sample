/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
},
    
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
onDeviceReady: function() {
    this.init();
},
    
init: function(){
    
    // 事件一
    var event1Button = document.getElementById('event1');
    event1Button.addEventListener('click', this.onEvent1Click.bind(this), false);
    
    
    // 事件二
    var event2Button = document.getElementById('event2');
    event2Button.addEventListener('click', this.onEvent2Click.bind(this), false);
    
    
    // 事件三
    var event3StartButton = document.getElementById('event3Start');
    event3StartButton.addEventListener('click', this.onEvent3StartClick.bind(this), false);
    
    var event3EndButton = document.getElementById('event3End');
    event3EndButton.addEventListener('click', this.onEvent3EndClick.bind(this), false);
    
    // 事件四
    var event4Button = document.getElementById('event4');
    event4Button.addEventListener('click', this.onEvent4Click.bind(this), false);
    // 事件五
    var event5Button = document.getElementById('event5');
    event5Button.addEventListener('click', this.onEvent5Click.bind(this), false);
    
    //  事件六
    var event6StartButton = document.getElementById('event6Start');
    event6StartButton.addEventListener('click', this.onEvent6StartClick.bind(this), false);
    
    var event6EndButton = document.getElementById('event6End');
    event6EndButton.addEventListener('click', this.onEvent6EndClick.bind(this), false);
    
    // 页面
    var pageStartButton = document.getElementById('pageStart');
    pageStartButton.addEventListener('click', this.onPageStart.bind(this), false);
    
    var pageEndButton = document.getElementById('pageEnd');
    pageEndButton.addEventListener('click', this.onPageEnd.bind(this), false);
    
},
    
    
    // 百度移动统计DEMO代码
onEvent1Click: function() {
    BaiduMobStat.onEvent('event1', '事件一');
},
    
onEvent2Click: function() {
    BaiduMobStat.onEventDuration('event2', '事件二', 1000);
},
    
    
onEvent3StartClick: function() {
    BaiduMobStat.onEventStart('event3', '事件三');
},
    
onEvent3EndClick: function() {
    BaiduMobStat.onEventEnd('event3', '事件三');
},
    
    
onEvent4Click:function() {
    BaiduMobStat.onEventWithAttributes('event4', '事件四', {'分类':'分类一'});
},
    
onEvent5Click:function() {
    BaiduMobStat.onEventDurationWithAttributes('event5', '事件五', 1000, {'分类':'分类一'});
},
    
onEvent6StartClick: function() {
    BaiduMobStat.onEventStart('event6', '事件六');
},
    
onEvent6EndClick: function() {
    BaiduMobStat.onEventEndWithAttributes('event6', '事件六', {'分类':'分类一'});
},
    
onPageStart: function() {
    BaiduMobStat.onPageStart('页面一');
},
    
onPageEnd: function() {
    BaiduMobStat.onPageEnd('页面一');
},
    
};

app.initialize();

