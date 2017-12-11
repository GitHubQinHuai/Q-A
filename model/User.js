/**
 * Created by Administrator on 2017/12/11.
 */
//创建一个构造函数，命令为 User 里面的username password email 分别为存储用户 密码 邮箱
var mongodb = require('./db');
function User(user) {
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;

}
module.exports = User;
User.prototype.save = function (callback) {
    //收集即将存入数据库的数据
    var  user = {
        username:this.username,
        password:this.password,
        email:this.email
    }
    mongodb.open(function (err,db) {
        if(err){
            return callback(err);
        }
        //读取user集合
        db.collection('users',function (err,collection) {
            if(err){
                mongodb.close();
                return callback(err);
            }
            //将输入插入到user集合中去
            collection.insert(user,{safe:true},function (err, user) {
                mongodb.close()
                if (err){
                    return callback(err);
                }
                callback(null,user[0]);
            })
        })
    })
}
User.get = function (username,callback) {
    //1.打开数据库
    mongodb.open(function (err,db) {
        if (err){
            return callback(err);
        }
        //2.读取user集合
        db.collection('users',function (err,collection) {
            if (err){
                mongodb.close();
                return callback(err);
            }
            //3.查询name为指定用户名的用户信息 将结果返回
            collection.findOne({username:username},function (err,user) {
                mongodb.close();//关掉数据库
                if (err){
                    return callback(err);
                }
                return callback(null,user);
            })

        })
    })
}