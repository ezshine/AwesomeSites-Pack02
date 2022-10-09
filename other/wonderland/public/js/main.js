var firstshow=false,
    autoplay=true,
    isfull=false,
    app={},    
    musicPlaying=false,
    oMusic=null,
    oAnnieEngine=document.getElementById("annieEngine"),
    videoPlayer,
    el=function(id){return document.querySelector(id)},
    pathUrl=window.location.origin +window.location.pathname.replace("/index.html",""),
    pause=el("#pause"),
    ovideoBox=el("#videoBox"),
    unlockNum=1,
    player="",
    videoTimer=null,
    //personPage,
    personPage="page10_1",
    personNum,
    page1open=false,
    savenum=1,
    oVideomcBox=el("#videomcBox");
app.videoSeek=false;
function fnSave(bool){
  if(bool){
    savenum++;
    if(savenum>9){
      savenum=1;
    }
  }else{
    savenum--;
    if(savenum<1){
      savenum=9;
    }
  }  
  return savenum;
}
var isWebView=false;
function isWx(){
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return new Promise(resolve => {
        wx.miniProgram.getEnv(function(res){
          if (res.miniprogram) {
            resolve("mini-wx");
            isWebView=true;
          } else {
            resolve("wx");
          }
        });
      });
    } else {
    //  console.log("不在微信里");
      return new Promise(resolve => {
        resolve("no-wx");
      });
    }
  }
isWx().then(type=>{
  if(type=="mini-wx"){
    isWebView=true;
  }
});
var ua = navigator.userAgent.toLocaleLowerCase();;
var iOS = /ipad|iphone|ipod/.test(ua),
    isAndroid = /android/.test(ua);
var arrVideo=["./public/video/page1.mp4","./public/video/video1.mp4"];
var videoObj={
  page1:"./public/video/page1.mp4",
  page8_1:"./public/video/page8_1.mp4",
  page8_2:"./public/video/page8_2.mp4",
  page8_3:"./public/video/page8_3.mp4",
  page8_4:"./public/video/page8_4.mp4",
  page8_5:"./public/video/page8_5.mp4",
  page8_6:"./public/video/page8_6.mp4",
  end:"./public/video/end.mp4",
  full:"./public/video/full.mp4",
  page10_1_1:"./public/video/person/page10_1_1.mp4",
  page10_1_2:"./public/video/person/page10_1_2.mp4",
  page10_1_3:"./public/video/person/page10_1_3.mp4",
  page10_2_1:"./public/video/person/page10_2_1.mp4",
  page10_2_2:"./public/video/person/page10_2_2.mp4",
  page10_2_3:"./public/video/person/page10_2_3.mp4",
  page10_3_1:"./public/video/person/page10_3_1.mp4",
  page10_3_2:"./public/video/person/page10_3_2.mp4",
  page10_3_3:"./public/video/person/page10_3_3.mp4",
  page10_4_1:"./public/video/person/page10_4_1.mp4",
  page10_4_2:"./public/video/person/page10_4_2.mp4",
  page10_4_3:"./public/video/person/page10_4_3.mp4",
  page10_5_1:"./public/video/person/page10_5_1.mp4",
  page10_5_2:"./public/video/person/page10_5_2.mp4",
  page10_5_3:"./public/video/person/page10_5_3.mp4",
  page10_6_1:"./public/video/person/page10_6_1.mp4",
  page10_6_2:"./public/video/person/page10_6_2.mp4",
  page10_6_3:"./public/video/person/page10_6_3.mp4"
}
var starVideoNum,starNum=0;
var videoDataArr={
  page10_1:[0,0,0],
  page10_2:[0,0,0],
  page10_3:[0,0,0],
  page10_4:[0,0,0],
  page10_5:[0,0,0],
  page10_6:[0,0,0]
}
var page11picmcArr=[
"page10_1_1","page10_1_2","page10_1_3",
"page10_2_1","page10_2_2","page10_2_3",
"page10_3_1","page10_3_2","page10_3_3",
"page10_4_1","page10_4_2","page10_4_3",
"page10_5_1","page10_5_2","page10_5_3",
"page10_6_1","page10_6_2","page10_6_3"
],
  page11picmcLen=page11picmcArr.length;
//生成二维码start
var qrcode = new QRCode(document.getElementById("contImg"), {
  text:window.location.origin + window.location.pathname,
  width : 260,
  height : 260
});

//app.Num
function random(lower, upper) {
    var num=Math.floor(Math.random() * (upper - lower)) + lower;
    num=padding5(num,8);
    return num;
}
 function padding5(num, length) {
  var len = (num + "").length;
  var diff = length - len;
  if(diff > 0) {
   return Array(diff).join("0") + num;
  }
  return num;
 }
app.Num=random(1,99999999);
var ua = navigator.userAgent;
        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
            isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
            isAndroid = ua.match(/(Android)\s+([\d.]+)/),
            isMobile = isIphone || isAndroid;
        if(!isMobile) {
            $('#device-box').show()
           // return;
        }else{
            $('#device-box').hide()
        }
//end

var sendUrl="https://wx.blankpage.site";

$.ajax({
  type:'post',
  url:sendUrl+'/api/login.string',
  data:{
      token:CryptoJS.baibing.encrypt(JSON.stringify({'time':new Date().getTime()}),"NdApcpun//0rYNlfy+LtfRcC6BdQ6V8P","adZpuGeSkzQ="),
      projectid:"88cd0016099911ed9116506b4beee5e2"
  },//请求的数据秘钥:
  resType:'json',//返回的数据类型
  success:function( res ){//成功的回调函数
       res=JSON.parse(res);
       window.sessionID=res.sessionID;
       //微信分享start
       (function(window){                
       var sharePath = window.location.origin + window.location.pathname;
       var path = window.location.href.split('#')[0];
       var script = document.createElement('script');
       script.src = sendUrl+'/api/public/jssignature.x?sessionID='+sessionID+'&url=' + encodeURIComponent(path) + '&callback=jsonpCallback'
      //api/public
       wx.shareData = {
        title: 'WMU Parallel Universe',
         desc: '点击探索新时空秩序',
         link: sharePath,
         imgUrl:'https://h5.blankpage.site/h5/wonderland/mag202207/public/images/share.jpg',//pathUrl+  https://h5.blankpage.site/h5Test/hushpuppies_wuhan202206
         debug:false,
         trigger: function(res){
         },
         success: function(res){
           try { app.onShareComplete() } catch (e) {}
         },
         complete: function(res){
         },
         cancel: function(res){
         },
         fail: function(res){
         }
       }

       function jsonpCallback(data){ 
              //console.log(data)                    
                if(data.success){

                 wx.config({
                   debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
                   appId: 'wx47e311fb3178f6e2', // wx1fc4414574c80533
                   timestamp: data.data.timeStamp, // 必填，生成签名的时间戳
                   nonceStr:  data.data.noncestr, // 必填，生成签名的随机串
                   signature: data.data.cardSign,// 必填，签名
                   jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'], // 必填，需要使用的JS接口列表
                   openTagList: ['wx-open-launch-weapp'] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
                 });
                 wx.ready(function () {                
                   var btn1 = document.getElementById('launch-btn1');
                   btn1.addEventListener('launch', function (e) {
                     console.log('success');
                     //alert("abcadf");
                   });
                   btn1.addEventListener('error', function (e) {
                     console.log('fail', e.detail);
                    // alert("abcadfasdf");
                   });


                   wx.error(function (res) {
                     //alert("error");
         
       });  
       });
                 
                  wx.setShareData(wx.shareData)
                } else {
                  alert('页面加载失败，请刷新重试。')
                }
              }
       wx.setShareData = function(data){                    
           wx.ready(function() {
           wx.onMenuShareAppMessage(data)
           wx.onMenuShareTimeline({
             title: data.title+"\n"+data.desc,
             link: data.link,
             imgUrl: data.imgUrl,
             success: data.success
           })
         })
       }
       window.jsonpCallback = jsonpCallback;
       $(function(){
          document.getElementsByTagName('head')[0].appendChild(script)
       })

       })(window);
       //微信分享end
       },error:function( res){
      alert("登录失败！");
  }
})


//start

function getStorage(name){
  return ($.cookie(name)||localStorage.getItem(name));
}
function setStorage(name,value){
  $.cookie(name,value);  
  if(!getStorage(name)){
     localStorage.setItem(name, value);
  }
}
function clearStorage(name){
  //localStorage.clear();
  $.cookie(name)&&$.cookie(name, null);
  localStorage.getItem(name)&&localStorage.removeItem(name);
}
function todayTime(){
  return "hush_";
 }


document.body.addEventListener('touchmove', function (e) {
        e.preventDefault()
    }, {passive: false})
if(iOS){
  document.body.addEventListener('touchstart', function (e) {
    e.preventDefault()
  }, {passive: false});
  pause.addEventListener("touchstart",function(){      
    //  console.log(num);
      //if(musicPlaying) return;
      if (!autoplay) {
           app.sound.pause(false);
           app.sound.volume=1;
           autoplay=true;
           pause.classList.add("pause_playing");
         } else {
           app.sound.pause(true);
           app.sound.volume=0;
           autoplay=false;
           pause.classList.remove("pause_playing");                   
         }
    },false);
}
    function fnautoplay(){
      if(app.audioplay){
        $("#pause").trigger("click");
        app.audioplay=false;
      }
    }
    function fnautopause(){
      if(autoplay){
        $("#pause").trigger("click")
        app.audioplay=true;
      }
    }
pause.addEventListener("click",function(){
  if (!autoplay) {
       app.sound.pause(false);
       app.sound.volume=1;
       autoplay=true;
       pause.classList.add("pause_playing");
     } else {
       app.sound.pause(true);
       app.sound.volume=0;
       autoplay=false;
       pause.classList.remove("pause_playing");                   
     }
},false);
    
var windowW=window.innerWidth,windowH=window.innerHeight,mathPercent=window.innerWidth/750,oWarp=el("#warp");


    app.setfullVideo=function(videourl,picurl,num){
      videoClose();
       /*fullScreen?(el("#videoBox").style.background="#ffffff"):(el("#videoBox").style="");
       el("#videoBox").classList.add("videoBox");
       el("#videoBox").classList.remove("videoSmallBox");
       el("#close").classList.remove("hide");
       ovideoBox.style.left="0";*//**/
       app.videoisplay=true;
       app.CloseBtn=false;
       app.videoOpen=true;
       pause.style.display="none";
       player = new Aliplayer({
                 "id": "player-mc-con",
                 "source": videourl,
                 "width": "100%",
                 "height":"100%",
                 "autoplay": true,
                 "isLive": false,
                 "cover": picurl,
                 "rePlay": false,
                 "videoHeight":"auto",
                 "playsinline": true,
                 "preload": true,
                 "language": "zh-cn",
                 "controlBarVisibility": "click",
                 "videoWidth": "100%",
                 "showBarTime": 5000,
                 "useH5Prism": true,
                 "skinLayout": [
                     {
                         "name": "H5Loading",
                         "align": "cc"
                     },
                     {
                         "name": "errorDisplay",
                         "align": "tlabs",
                         "x": 0,
                         "y": 0
                     },
                     {
                         "name": "infoDisplay"
                     },                    
                     {
                         "name": "thumbnail"
                     },
                     /*(fullScreen?"":{
                         "name": "tooltip",
                         "align": "blabs",
                         "x": 0,
                         "y": 56
                     }),*/
                     {
                         "name": "controlBar",
                         "align": "blabs",
                         "x": 0,
                         "y": 0,
                         "children": []
                     }
                 ]
             },
             function(player) {
              /**/
              if(iOS){
                fnautopause();
              }else{
                if(videourl==videoObj.page1){
                    fnautopause();
                  }else{
                    fnautoplay();
                  }
              }
              
              /*if(videourl==videoObj.page1){
                if(!page1open){
                  page1open=true;
                  videoTimer=setInterval(function(){
                    console.log(player._audioTrackService._video.currentTime);
                    if(player._audioTrackService._video.currentTime>=10){
                      player._audioTrackService._video.pause();
                      el("#jumpbtn").style.display="block";
                      clearInterval(videoTimer);
                      el("#jumpbtn").onclick=null;
                      el("#jumpbtn").onclick=function(){
                        player._audioTrackService._video.play();
                        el("#jumpbtn").style.display="none";
                      }
                    }
                  },1000);                  
                }
              }*/
                var oclosebtn=el("#videomcBox .closebtn");
                oclosebtn.ontouchstart=null;
                oclosebtn.ontouchstart=function(){
                  app.CloseBtn=true;
                  num&&app.pageShow(num);                  
                  app.videoisplay=false;                 
                  player.pause();
                  setTimeout(function(){
                    videoClose();                    
                  },500);
                }
               player._audioTrackService._video.addEventListener("ended",function(){
                  //oclosebtn.ontouchstart();
                  app.CloseBtn=true;
                  num&&app.pageShow(num);                  
                  app.videoisplay=false;                 
                  player.pause();
                  setTimeout(function(){
                    videoClose();                    
                  },500);
                });
             });
    }
    function videoClose(){
      pause.style.display="block";
      if($("#player-small-con").find("video").length>0){
        el("#player-small-con").parentNode.removeChild(el("#player-small-con"));
        var div=document.createElement("div");
        div.id="player-small-con";
        div.className="prism-player exitfullscreen-player";
        el("#videoSmallBox").appendChild(div);
        player=null;
      }
      if($("#player-mc-con").find("video").length>0){
        el("#player-mc-con").parentNode.removeChild(el("#player-mc-con"));
        var div=document.createElement("div");
        div.id="player-mc-con";
        div.className="prism-player exitfullscreen-player";
        oVideomcBox.appendChild(div);
        player=null;
        fnautoplay();
        app.videoOpen=false;
        app.CloseBtn=false;
      }

    }
    app.setSamllVideo=function(videourl,picurl,num){
       videoClose();
       player = new Aliplayer({
                 "id": "player-small-con",
                 "source": videourl,
                 "width": "750",
                  "height":"100%",
                 "autoplay": true,
                 "isLive": false,
                 "cover": picurl,
                 "rePlay": false,
                 "videoHeight": "100%",
                 "playsinline": true,
                 "preload": true,
                 "language": "zh-cn",
                 "controlBarVisibility": "click",
                 //"videoWidth": "750",
                 "showBarTime": 5000,
                 "useH5Prism": true,
                 "skinLayout": [
                     {
                         "name": "H5Loading",
                         "align": "cc"
                     },
                     {
                         "name": "errorDisplay",
                         "align": "tlabs",
                         "x": 0,
                         "y": 0
                     },
                     {
                         "name": "infoDisplay"
                     },                    
                     {
                         "name": "thumbnail"
                     },
                     /*(fullScreen?"":{
                         "name": "tooltip",
                         "align": "blabs",
                         "x": 0,
                         "y": 56
                     }),*/
                     {
                         "name": "controlBar",
                         "align": "blabs",
                         "x": 0,
                         "y": 0,
                         "children":[]
                     }
                 ]
             },
             function(player) {
              player._audioTrackService._video.addEventListener("ended",function(){
                num&&app.pageShow(num);
                videoClose();
              });              
             });      
    }
/*el("#videoBtns").onclick=function(){
  app.setVideo(arrVideo[0]);
}*/
