/**
 * Created by Administrator on 2017/12/8.
 */
//数据库配置信息
module.exports = {
    cookieSecret:'qinhuai',
    db:'blog',
    host:'localhost',//数据库地址
    port:27017
}
//我们把数据库的配置信息写在这 是为了在链接数据库的时候 一旦数据库的地址或者名称 端口号发生错误的时候我们只需要更改这里就可以了
