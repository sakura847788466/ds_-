import ajax from './ajax'
let URL = 'https://yun.dascomyun.cn/15_printapi/v2.0'
let testURl = 'http://203.195.138.133:35552'


export const print = (data) => ajax(URL + '/printPreview', data, POST) //获取打印机状态

export const sendMsg = (data) => ajax(testURl + '/sendMsg/4Gv2', data, "POST") //发送消息

