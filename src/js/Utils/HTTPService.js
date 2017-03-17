import Utils from './Utils'
class HTTPService {
    constructor() {
      this._APP_PROD_MODE = false;
      this.preMode = this._APP_PROD_MODE;
    }

    getIp(){
        //开发
        var serverIp = "http://10.18.22.33:8080";
        //var serverIp = "http://218.17.233.246:8180";
        //var serverIp = "http://10.24.1.182:8080";

        //谭政
       // serverIp = "http://10.18.22.38:8080";

        //serverIp = "http://10.18.22.42:8080";

       serverIp = "http://10.18.22.24:8080";

        //var serverIp = "http://10.18.22.30:8080";
        if(this.isProdMode()){
            //生产环境
            serverIp = "http://vcs.dev.sunline.cn:8182";
        }
      return serverIp;
    }

  isProdMode(){
      return this._APP_PROD_MODE;
  }

  switch2Visitor(){
    Utils.setSession('visitorModel',true);
    this._APP_PROD_MODE = false;
  }

  resetMode(){
    this._APP_PROD_MODE = this.preMode;
    Utils.setSession('visitorModel',false);
  }

  commHttp(tranCode,tranData,sucFun,failFun,finallyFun) {
    this.tranCode = tranCode;
     var serverIp = this.getIp();
     serverIp = "http://10.18.22.24:8080/";
     var url = serverIp + tranCode;
    //  console.log(url);

      //console.log(url);
      // let sessid = Utils.getSession("sessid");

      // if(sessid != null){
      //   if(!tranData){
      //     Utils.log("没有传入参数");
      //     return;
      //   } else{
      //     tranData.sessid = "122";
      //   }
      // }
      //console.log(tranData);
    var  options = options ? options : {};
      options.method = 'POST';
      options.body = tranData;
      options.sucFun = sucFun;
      options.failFun = failFun;
      options.finallyFun = finallyFun;
      options.header = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      };
      return this.fetchData(url, options);
  }

  fetchData(path, options) {
      let self = this;
      console.log("++++++++++++");
      console.log(path)
      fetch(path,{
        method: options.method,
        mode:"cors",
        headers: options.header,
        body: JSON.stringify(options.body)
      })
      .then((response) => response.json())
      .then((dataStr) => {
          if(dataStr.code==200){
             options.sucFun(dataStr);
           }else{
             options.failFun(dataStr.msg);
           }
      },(e)=>{

          console.log("网络异常"+e);
          options.failFun("网络异常");
        
      }).then(()=>{
          options.finallyFun()
      }).catch((error) => {
          options.failFun(error);
          console.log("代码问题："+error);     
      })
  }


  commUploadFile(filePath, sucFun, failFun){
    let serverIp = this.getIp();
    let urlPath = serverIp + "/dgrcbmobile/fileupload";
    var fileName = filePath.substr(filePath.lastIndexOf("/") + 1);
    const formData = new FormData();
    formData.append('file',{
      uri:'file://'+filePath,
      name:fileName,
      type:'multipart/formData'
    });
    // formData.append('file',filePath);
    // formData.append('name',fileName);
    // formData.append('type','image/jpeg');


    let options = {
      method:'POST',
      mode: "FormData",
      body: formData,
      header:{
        'Content-Type': 'multipart/formData'
      }
    };

    fetch(urlPath,options)
    .then((response) => response.json())
    .then((dataStr) => {
      // console.info(dataStr);
      var obj = dataStr;
      if(obj._retCode === "0000"){
        //alert(obj._picPath);
        sucFun(obj._picPath);
      }
    }).catch((data) => {
      if(typeof failFun === "function"){
        failFun(data);
      }else{
        // console.log("上传文件失败：" + data);
        alert("上传文件失败：" + data);
      }
    }).done();
  }
  //
  afterSuccess(data){

    let comlgc = data.comlgc;
    if(comlgc==null)return;
    //新消息
    let mesgnm = comlgc.mesgnm;
    //新的圈子消息
    let shrmsg = comlgc.shrmsg;
    // if(this.tranCode!='point/user/getstatus'){//如果发送请求的tranCode = user/user/info正在加载后台消息数据，则不通知
    //   this.mesgHander = setTimeout(() =>
    //     RCTDeviceEventEmitter.emit('msgCount',mesgnm),10);

    //   this.weHander = setTimeout(() =>
    //      RCTDeviceEventEmitter.emit('weCount',shrmsg),10);
    // }
    // if(shrmsg>0){
      // this.mesgHander = setTimeout(() =>
      //   RCTDeviceEventEmitter.emit('weMsgCount',"weMsgCount"),10);
    // }

  }
  componentWillUnmount(){
      this.mesgHander&&clearTimeout(this.mesgHander);
      this.weHander&&clearTimeout(this.weHander);
  }

}
module.exports = HTTPService;
