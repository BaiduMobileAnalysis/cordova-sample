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
        
        // 页面
        var pageStartButton = document.getElementById('pageStart');
        pageStartButton.addEventListener('click', this.onPageStart.bind(this), false);
        
        var pageEndButton = document.getElementById('pageEnd');
        pageEndButton.addEventListener('click', this.onPageEnd.bind(this), false);
        
    },

    
    // 百度移动统计DEMO代码
    onEvent1Click: function() {
        BaiduMobStat.logEvent('event1', '事件一');
    },

    onEvent2Click: function() {
        BaiduMobStat.logEventWithDurationTime('event2', '事件二', 1000);
    },
    
    
    onEvent3StartClick: function() {
        BaiduMobStat.eventStart('event3', '事件三');
    },
    
    onEvent3EndClick: function() {
        BaiduMobStat.eventEnd('event3', '事件三');
    },
    
    onPageStart: function() {
        BaiduMobStat.pageviewStartWithName('页面一');
    },
    
    onPageEnd: function() {
        BaiduMobStat.pageviewEndWithName('页面一');
    },
    
};

app.initialize();
