<template>
  <el-container style="height:1000px;">
    <el-aside width="200px"
              style="margin-top: 96px;position:relavite">
      <div class="logo"
           style="display:inline-block;position:absolute;top:0;left:0;">
        <!-- <img src="./2.png"
             alt=""
             style="height:104px;width:197px;"> -->
      </div>
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               @select="select"
               text-color="#0090ff"
               active-text-color="#ffd04b"
               style="height:100%;">
        <el-submenu index="0">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>打印类型</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1">电子发票</el-menu-item>
            <el-menu-item index="2">出库单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">打印记录</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">历史信息</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="height:96px;position:relative;background-color:#0090ff;">
        <div class='header_div'
             style="position:absolute;top:0px;left:0px;margin-top:17px;height:60px;width:100%;background-color:#ffff;">
          <el-breadcrumb separator-class="iconfont el-icon-arrow-right"
                         style="height:100%;">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>打印类型</el-breadcrumb-item>
            <el-breadcrumb-item>电子发票</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-header>
      <el-main>
        <div class="print_box"
             :style="{'display':(istrue?'block':'none')}">
          <div class="select_box">
            <span class="select">
              <i class="iconfont iconjia"></i>
              <b>请选择打印的文件</b>
              <b>仅限于jpg/png/pdf</b>
              <input type="file"
                     accept="image/pdf,image/jpeg,image/png,image/jpg"
                     name="image"
                     class="getImgUrl_file"
                     @change="uploader($event)">
            </span>
            <div class="ul_box"
                 style="margin-top:20px;">
              <ul class="el-upload-list el-upload-list--picture">
                <li tabindex="0"
                    class="el-upload-list__item is-success"
                    v-for="(item,index) in liList"
                    :key="index"><img :src="item.url"
                       alt=""
                       class="el-upload-list__item-thumbnail">
                  <a class="el-upload-list__item-name"
                     style="position:relative;">
                    <i class="el-icon-document"></i>{{item.name}}
                    <el-button type="primary"
                               style="position:absolute;top:15px;right:0;">打印</el-button>
                  </a>
                  <label class="el-upload-list__item-status-label">
                    <i class="el-icon-upload-success el-icon-check"></i>
                  </label>
                  <i class="el-icon-close"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="print_box"
             :style="{'display':(istrue?'none':'block')}">
          <img src="./222.png"
               alt=""
               style="display:block;height:100%;width:100%;position:absolute;top:0;left:0;">
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import QRCode from 'qrcode'
export default {
  data () {
    return {
      codes: '',
      qrcodeUrl: '',
      imgUrl: '',
      imgName: "",
      liList: [],
      index: 0,
      istrue: false
    }
  },
  components: {
    QRCode: QRCode
  },
  methods: {
    makeQRCode () {
      QRCode.toDataURL("111")
        .then(imgData => {
          if (imgData) {
            console.log(imgData)
            this.imgUrl = imgData
          }
        });
    },
    select (index) {
      this.$prompt('请输入设备型号', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d{16}$/,
        inputErrorMessage: '型号不正确'
      }).then(({ value }) => {
        this.istrue = !this.istrue
      }).catch(() => {

      });
    },
    uploader ($event) {
      const file = $event.srcElement.files[0]
      const name = event.target.files[0].name
      this.index += 1;
      this.imgName = name
      let reader = new FileReader();
      reader.onload = ($event) => {
        let result = $event.target.result
        this.imgUrl = result
        const liItem = { url: result, name: name, key: this.index }
        console.log(liItem)
        this.liList.push(liItem)
        console.log(this.liList)

      }
      reader.readAsDataURL(file);
    },
    // 打印
    print (number) {

    }

  },
  mounted () {
    // this.makeQRCode();
  }
}
</script>

<style scoped>
.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 120px;
  display: flex;
}

.el-aside {
  background-color: #d3dce6;
  text-align: center;
  line-height: 200px;
}

.el-main {
  position: relative;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.drag_file {
  margin-top: 15px;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 212px;
  height: 48px;
  border-radius: 3px;
  border: dashed 1px #eef0eb;
  font-size: 12px;
  color: #999999;
  position: relative;
  justify-content: center;
}
.drag_file input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
}
.select {
  width: 200px;
  height: 100px;
  border-style: dotted;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
}
.select b {
  display: inline-block;
}
.select input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 200px;
  height: 100px;
  display: inline-block;
}
.el-breadcrumb span {
  height: 100%;
  display: inline-block;
  text-align: center;
  line-height: 60px;
  font-size: 19px;
  padding-left: 20px;
}
</style>