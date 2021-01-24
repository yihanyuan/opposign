"ui";
ui.layout(
    <vertical >
        <text marginTop="200" layout_gravity="center">功能依赖于无障碍，使用前请先点击“打开无障碍”，打开无障碍后返回软件，点击开始执行，开始签到！软件是用autojs打包的，可能部分手机管家会报毒！不会使用的加群</text>
        <button marginTop="50" id="addGroup" layout_gravity="center" text="加qq群" />
        <button id="on" layout_gravity="center" text="打开无障碍" />
        <button id="start" layout_gravity="center" text="开始签到" />
        <button id="startugcvideo" layout_gravity="center" text="开始刷爆赞小视屏" />
        <button id="startyoli" layout_gravity="center" text="开始刷视屏(请安装40.4.0.0.1beta版)" />

    </vertical>

);

ui.addGroup.click(function() {
    toQqGroup()
});
ui.start.click(function() {
    threads.start(function() {
        main();
    });
});
ui.startugcvideo.click(function() {
    threads.start(function() {
        ugcvideo();
    });
});
ui.startyoli.click(function() {
    threads.start(function() {
        yoli();
    });
});

ui.on.click(function() {
    auto.waitFor();
});

function toQqGroup() {
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Ffrom%3Dapp%26p%3Dandroid%26k%3DU_5WjaiHILGlq2ZvxHthjg9JCvnReNoh"
    });
}

function yoli() {
    toast("打开视屏");
    if (app.launchPackage("com.heytap.yoli")) {
        toastLog("等待4秒");
        sleep(4000);
        var target = id("comment_cnt");
        log(target.click());
        setInterval(function() {
            var lq = id("awards").findOne().bounds();
            click(lq.centerX(), lq.centerY());
            sleep(1000);
            text("领取").findOne().click();
        }, 1000 * 60 * 7);

        // back();
        // while()
        // var target = id("comment_cnt");
        // log(target.click());
        // var target = child.findOne(id("video_length"));
        // log(target.click());
        toast("已完成");
    } else {
        toast("软件不存在，进行下一个");
    }
}

function ugcvideo() {
    toast("打开暴赞小视屏");
    if (app.launchPackage("com.heytap.ugcvideo.praise")) {
        toastLog("等待3秒");
        sleep(2000);
        var count = 1;
        while (count < 11 * 6) {
            log(swipe(device.width / 2, device.height * 3 / 4, device.width / 2, device.height / 5, 100));
            toast("10秒后滑动");
            sleep(12000);
        }
        var lq = id("awards").findOne().bounds();
        click(lq.centerX(), lq.centerY());
        sleep(1000);
        text("领取").findOne().click();
        toast("已完成");
    } else {
        toast("软件不存在，进行下一个");
    }
}

function main() {
    toast("等待3秒钟");
    sleep(3000);
    alert("开始执行任务了，请不要随意切换应用");
    sleep(2000);
    healthSign();
    yoliSign();
    storeSign();
    communitySign();
    walletSign();
    usercenterSign();
    smarthomeSign();
    gamecenterSign();
    nearmePlaySign();
    themestoreSign();
    speechassistSign();
    videoeditorSign();
    marketSign();
    browserSign();
    alert("已执行完成！");
}
//欢太商城签到
function storeSign() {
    toast("打开欢太商城");
    if (app.launchPackage("com.oppo.store")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log(click("我的"));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
            sleep(2000);
            click("立即签到");
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

function healthSign() {
    toast("打开运动健康");
    if (app.launchPackage("com.heytap.health")) {
        sleep(4000);
        closeupdate();
        log(id("iv_avatar").waitFor());
        var b = id("iv_avatar").findOne(3000).bounds();
        click(b.centerX(), b.centerY());
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}
// log(getPackageName("OPPO 社区"));

function communitySign() {
    toast("打开OPPO 社区");
    if (app.launchPackage("com.oppo.community")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
            sleep(1000);
            if (text("签到").exists()) {
                click("签到");
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}


// log(getPackageName("钱包"));com.finshell.wallet

function walletSign() {
    toast("打开钱包");
    if (app.launchPackage("com.finshell.wallet")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
            sleep(2000);
            if (text("签到").exists()) {
                click("签到");
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

// log(getPackageName("我的 OPPO"));com.oppo.usercenter
function usercenterSign() {
    toast("打开我的 OPPO");
    if (app.launchPackage("com.oppo.usercenter")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

// log(getPackageName("智能家居"));com.heytap.smarthome
function smarthomeSign() {
    toast("打开智能家居");
    if (app.launchPackage("com.heytap.smarthome")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(1000);
        log(click(me.centerX(), me.centerY()));
        sleep(1000);
        if (text("签到").exists()) {
            click("签到");
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

// log(getPackageName("游戏中心"));com.nearme.gamecenter
function gamecenterSign() {
    toast("打开游戏中心");
    if (app.launchPackage("com.nearme.gamecenter")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        log(me.visibleToUser())
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}
// log(getPackageName("小游戏"));com.nearme.play

function nearmePlaySign() {
    toast("打开小游戏");
    if (app.launchPackage("com.nearme.play")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("福利").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        log(me.visibleToUser())
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

// log(getPackageName("主题商店")); com.heytap.themestore

function themestoreSign() {
    toast("打开主题商店");
    if (app.launchPackage("com.heytap.themestore")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}
// log(getPackageName("Breeno 语音"));com.heytap.speechassist
function speechassistSign() {
    toast("打开Breeno 语音");
    if (app.launchPackage("com.heytap.speechassist")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, 0, device.width, device.height / 2).findOne();
        sleep(1000);
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}



// log(getPackageName("Soloop 即录"));com.coloros.videoeditor
function videoeditorSign() {
    toast("打开Soloop 即录");
    if (app.launchPackage("com.coloros.videoeditor")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

// log(getPackageName("视屏"));com.heytap.yoli
function yoliSign() {
    toast("打开视屏");
    if (app.launchPackage("com.heytap.yoli")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            var qd = text("签到");
            sleep(3000);
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
                sleep(1000);
                text("去签到").findOne().click();
            }
        }
    } else {
        toast("软件不存在，进行下一个");;
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}
// log(getPackageName("软件商店"));com.heytap.market
function marketSign() {
    toast("打开软件商店");
    if (app.launchPackage("com.heytap.market")) {
        sleep(6000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}
// log(getPackageName("浏览器"));com.heytap.browser
function browserSign() {
    toast("打开浏览器");
    if (app.launchPackage("com.heytap.browser")) {
        sleep(6000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
        sleep(1000);
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            }
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    sleep(3000);
}

//关闭升级和广告之类的
function closeupdate() {
    log("进入关闭广告");
    var cancel = textContains("取消");
    if (cancel.exists()) {
        toast("取消升级");
        click(cancel.findOne().bounds().centerX(), cancel.findOne().bounds().centerY());
        sleep(1000);
    }
    var cancel2 = text("稍后");
    if (cancel2.exists()) {
        toast("取消升级");
        click(cancel2.findOne().bounds().centerX(), cancel2.findOne().bounds().centerY());
        sleep(1000);
    }
    cancel2 = text("暂不更新");
    if (cancel2.exists()) {
        toast("取消升级");
        click(cancel2.findOne().bounds().centerX(), cancel2.findOne().bounds().centerY());
        sleep(1000);
    }
    var ad = id("dialog_clos_image");
    if (ad.exists()) {
        toast("关闭广告");
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
    }
    ad = id("close");
    if (ad.exists()) {
        toast("关闭广告");
        click(ad.findOne().bounds().centerX(), ad.findOne().bounds().centerY());
        sleep(1000);
    }
    log("结束");
}