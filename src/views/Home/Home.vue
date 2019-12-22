<template>
  <el-container>
    <el-main style="height:900px;">
      <div class="container"
           ref="main"
           style="padding:10px;display:flex;flex-direction:cloum;overflow-y:scroll">
      </div>
      <div class="bottom"
           style="padding:2px;">
        <div class="bottom_top">
          <div class="bottom_topI"
               style="display:flex; margin-bottom: 5px;">
            <span class="openFile"
                  style=" line-height:30px;font-size:12px;width: 60px;margin-left:10px;">打开文件
              <input type="file"
                     name="image"
                     class="getImgUrl_file"
                     @change="uploader($event)"></span>
            <el-input v-model="fileName"
                      placeholder=""
                      :disabled="true"></el-input>
            <!-- <el-button type="primary">发送文件</el-button> -->
            <el-upload class="upload-demo"
                       action="doUpload"
                       multiple
                       :limit="3"
                       :file-list="fileList"
                       :before-upload="beforeUpload">
              <el-button size="small"
                         type="primary">发送文件</el-button>
            </el-upload>
            <el-button type="primary"
                       @click="saveWindow">保存窗口</el-button>
            <el-button type="primary"
                       @click="strToHexCharCode('sssss')">清除窗口</el-button>
            <el-checkbox v-model="HEX"
                         style="text-align:center;"></el-checkbox>
            <span style="line-height:30px;">显示HEX</span>
          </div>
          <!-- <div class="bottom_topI"
               style="display:flex; margin:5px 0 5px 0;">
            <span style="position:relative;height:30px;line-height:30px;">串口号
            </span>
            <el-select v-model="value"
                       placeholder="请选择"
                       style="margin-left:14px;">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
            <el-radio v-model="radio"
                      label=""></el-radio>
            <el-button type="primary">打开串口</el-button>
            <el-button type="primary">帮助</el-button>
            <span style="line-height:30px;margin-left:5px; color:red;">WWW.DASYUNCOM.COM</span>
            <el-button type="primary">隐藏</el-button>

          </div> -->
        </div>
        <div class="bottom_c">
          <!-- <div class="bottom_cL">
            <div class=" bclItem">
              <span>波特率</span>
              <el-select v-model="value"
                         placeholder="请选择">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class=" bclItem">
              <span>数据位</span>
              <el-select v-model="value"
                         placeholder="请选择">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class=" bclItem">
              <span>停止位</span>
              <el-select v-model="value"
                         placeholder="请选择">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class=" bclItem">
              <span>检验位</span>
              <el-select v-model="value"
                         placeholder="请选择">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class=" bclItem">
              <span>流控制</span>
              <el-select v-model="value"
                         placeholder="请选择">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div> -->
          <div class="bottom_cR">
            <div class="bottom_crT">
              <div class="cottom_crTL">
                <div class="crtLItem">
                  <div class="crtLItem_r"
                       style="margin-left: 10px;">
                    <el-checkbox v-model="timeChange"
                                 style="width: 11px;"
                                 @change="sendBytime(sendTime,$event)"></el-checkbox>
                    定时发送
                  </div>
                  <div class="crtLItem_l">
                    <el-input v-model="sendTime"
                              placeholder=""
                              style="width:100px;margin-left:10px;"></el-input>
                    ms/次
                  </div>
                </div>
                <div class="crtLItem">
                  <div class="crtLItem_r"
                       style="line-height:30px;margin-left:10px;">
                    字符输入框
                  </div>
                  <div class="crtLItem_l">
                    <el-button type="primary"
                               @click="sendInfo">发送</el-button>
                  </div>
                </div>
              </div>
              <div class="cottom_crTR">
                <div class="port"
                     style="display:flex;line-height:30px;">端口号：
                  <el-input v-model="input_port"
                            placeholder="请输入端口"
                            clearable
                            style="width:200px;"></el-input>
                </div>
                <div class="messCode"
                     style="display:flex;line-height:30px;margin-top: 5px;">
                  <span>消息码:</span>
                  <el-input placeholder="请输入消息码"
                            v-model="messcode"
                            style="width:200px;margin-left:10px;">
                  </el-input>
                </div>

              </div>
            </div>
            <div class="bottom_crB">
              <el-tooltip class="item"
                          effect="dark"
                          content="十六进制发送"
                          placement="top-start"
                          style="display:inline-block;">
                <el-checkbox v-model="change_str"
                             style="text-align:center;"
                             @change="strChange"></el-checkbox>
              </el-tooltip>

              <span style="line-height:30px;margin-left:12px;">HEX</span>
              <el-input v-model="input_val"
                        placeholder="请输入字符内容"
                        style="margin-top: 5px;width: 507px;margin-left:10px;"></el-input>
            </div>
          </div>
        </div>
        <div class="bottom_t"></div>
      </div>
    </el-main>
    <el-aside width="326px">
      <div class="aside_top"
           style="height:40px;">
        <div><span>多条字符串定义</span><span>串口资料</span></div>
        <div><span>HEX</span><span>字符串</span><span>发送</span></div>
      </div>
      <div class="aside_continer">
        <div class="item"
             v-for="(item,index) in inputList "
             :key="index">
          <div class="radio">
            <el-checkbox v-model="item.checked"
                         @change='change(index,$event,item.input)'></el-checkbox>
          </div>
          <div class="input">
            <el-input placeholder=""
                      v-model="item.input">
            </el-input>
          </div>
          <div class="button">
            <el-button type="primary"
                       size="mini">{{item.but_val}}</el-button>
          </div>
        </div>

      </div>
      <div class="aside_bot"
           style="    margin-top: 20px;">
        <div class="left">
          <el-checkbox v-model="checked"></el-checkbox>
          自动循环发送
        </div>
        <div class="right"
             style="line-height:30px;margin-left:35px;">
          间隔<input type="text"
                 style="width:39px;margin-left:5px;"> ms
        </div>
      </div>
    </el-aside>

  </el-container>

</template>

<script>
import { sendMsg } from "../../api/index"
export default {
  name: 'Home',
  mounted () {
    this.init()
  },
  data () {
    return {
      checked: '',
      radio: '1',
      textarea: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }],
      inputList: [{
        lable: '',
        input: 'moter open',
        but_val: 0,
        checked: ''
      }, {
        lable: '',
        input: '10F802000501',
        but_val: 1,
        checked: ''
      }, {
        lable: '',
        input: 'moter close',
        but_val: 2,
        checked: ''
      }, {
        lable: '',
        input: '10F80400070104b0',
        but_val: 3,
        checked: ''
      }, {
        lable: '',
        input: 'sensor test',
        but_val: 4,
        checked: ''
      }, {
        lable: '',
        input: '10F80400070104b0',
        but_val: 5,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 6,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 7,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 8,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 9,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 10,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 11,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 12,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 13,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 14,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 15,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 16,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 17,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 18,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 19,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 20,
        checked: ''
      }, {
        lable: '',
        input: '测试',
        but_val: 21,
        checked: ''
      }],
      input: '',
      timeChange: '',
      value: '',
      fileName: '',
      fileUrl: '',
      sendTime: '',
      HEX: true,
      input_port: '',
      messcode: '',
      input_val: '',
      fileList: [],
      change_str: true,
      hex_status: true,
      path: 'ws://203.195.138.133:35552/websocket/test/nb',
      template_info: ''
    }
  },
  methods: {
    // webscoket
    init: function () {
      if (typeof (WebSocket) === "undefined") {
        alert("您的浏览器不支持socket")
      } else {
        // 实例化socket
        this.socket = new WebSocket(this.path)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
      }
    },
    open: function () {
      this.$message.success("socket连接成功")

    },
    error: function () {
      this.$message.error("连接错误")
    },
    getMessage: function (msg) {
      this.template_info = msg.data
      const ele = document.createElement('div')
      ele.style.height = '30px',
        ele.style.width = '100px',
        ele.innerHTML = 'RECV:' + this.template_info
      ele.style.display = 'flex'
      ele.style.lineHeight = '30px'

      this.$refs.main.append(ele)
    },
    send: function () {
      this.socket.send(params)
    },
    close: function () {
      console.log("socket已经关闭")
    },
    //webscoket
    uploader ($event) {
      const file = $event.srcElement.files[0]
      const name = event.target.files[0].name
      let reader = new FileReader();
      reader.onload = ($event) => {
        let result = $event.target.result
        this.fileName = name
        const fileInfo = { name: name, url: result }
        this.fileList.push(fileInfo)
      }
      reader.readAsDataURL(file);
    },
    // 发送文件
    beforeUpload(file){
    let fd = new FormData();
    console.log(99)
    fd.append('file',file);//传文件
    fd.append('srid',this.aqForm.srid);//传其他参数
    axios.post('/api/up/file',fd).then(function(res){
            alert('成功');
    })
},
strToHexCharCode(str) {
　　if(str === "")
　　　　return "";
　　var hexCharCode = [];
　　hexCharCode.push("0x"); 
　　for(var i = 0; i < str.length; i++) {
　　　　hexCharCode.push((str.charCodeAt(i)).toString(16));
　　}
　　console.log(hexCharCode.join(""));
},
    // 清除窗口
    clearWindow () {
      this.changeList.list = []
      this.$message({
        message: '清除窗口成功',
        type: 'success'
      });

    },
    //发送文件
    sendFile () {

    },
    //定时发送
    sendBytime (time, $event) {
      if ($event) {
        const t = setInterval(() => {
          // this.sendInfo()
        }, time);
      } else {
        clearInterval(t)
      }

    },
    change (index, $event, value) {
      const status = $event
      if (status) {
        this.input_val += value
        this.input_val = this.input_val.replace(/\s*/g, '')
      } else {
        const value_str = value.replace(/\s*/g, '')
        const input_valn = this.input_val.replace(value_str, '')
        this.input_val = input_valn
      }

    },
    //数据发送
    sendInfo () {
      const data = {
        type: this.hex_status,
        port: this.input_port,
        code: this.messcode,
        msg: this.input_val,
      }
      sendMsg(data).then((res) => {
        this.$message.success('发送成功')
      }).catch((err) => {
        this.$message.error(err);
      })
    },
    // 发送数据转换
    strChange ($event, value) {
      this.hex_status = $event
    },
    //保存窗口
    saveWindow () {
      const h = this.$createElement;
      this.$notify({
        title: '提示',
        message: h('i', { style: 'color: red' }, '暂时不支持窗口保存')
      });
    }
  },
  components: {
  },
  destroyed () {
    // 销毁监听
    this.socket.onclose = this.close
  }
}

</script>
<style >
.item .input .el-input,
.el-input__inner {
  height: 30px;
}
.el-checkbox {
  height: 30px;
  width: 37.33px;
  line-height: 30px;
}
.el-checkbox {
  height: 30px;
  width: 37.33px;
  line-height: 30px;
}
.el-button {
  height: 30px;
  line-height: 30px;
  width: 37.33px;
  position: relative;
  margin-left: 5px;
}
.el-button span {
  height: 30px;
  position: absolute;
  top: 3px;
  left: 12px;
}
.bottom_top .el-button {
  height: 30px;
  line-height: 30px;
  width: 83px;
  position: relative;
  margin-left: 5px;
}
.bottom_top .el-button span {
  position: absolute;
  top: 0;
  left: 13px;
}
.bottom_top .el-input {
  width: 120px;
  margin-left: 5px;
}
.bottom_top .el-radio {
  margin-left: 14px;
  line-height: 30px;
}
/* 波特率 */
.bclItem {
  display: flex;
  justify-content: space-between;
}
.bclItem span {
  flex: 1;
  line-height: 30px;
  text-align: left;
}
.bclItem .el-select {
  flex: 2;
  margin-right: 16px;
}
.bottom_cR .bottom_crT .cottom_crTL .crtLItem .crtLItem_l button {
  width: 60px;
  margin-left: 9px;
}
</style>
<style scoped>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  padding: 20px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.el-main .container {
  flex: 3;
  width: 100%;
  border: 1px solid #bc58bc;
}
.el-main .bottom {
  flex: 1;
  width: 100%;
  border: 1px solid red;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
}
.el-main .bottom .bottom_top {
  /* flex:2; */
  /* height: 20px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #d3dce6;
}
.el-main .bottom .bottom_top span,
input,
button {
  display: inline-block;
  line-height: 20px;
}
.el-main .bottom .bottom_c {
  flex: 3;
  width: 100%;
  margin-top: 10px;
}
.el-main .bottom .bottom_t {
  flex: 1;
  width: 100%;
}
.aside_top div {
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.aside_top div span {
  display: inline-block;
  height: 20px;
}
.item {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.aside_bot {
  display: flex;
}

.getImgUrl_file {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  cursor: pointer;
}
.openFile {
  position: relative;
  height: 30px;
  cursor: pointer;
  background-color: #409eff;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
}
.bottom_c {
  display: flex;
}
.bottom_c .bottom_cL {
  flex: 1.5;
  height: 100%;
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bottom_c .bottom_cR {
  flex: 5;
  height: 100%;
}

.bottom_cR {
  display: flex;
  flex-direction: column;
}
.bottom_cR .bottom_crT {
  flex: 3;
  width: 100%;
  display: flex;
}
.bottom_cR .bottom_crT .cottom_crTL {
  flex: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
}
.bottom_cR .bottom_crT .cottom_crTL .crtLItem {
  display: flex;
}
.bottom_cR .bottom_crT .cottom_crTR {
  flex: 3;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.bottom_cR .bottom_crB {
  flex: 1;
  width: 100%;
}
</style>

