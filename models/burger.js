const orm = require("../config/orm");

let burger = {
    selectAll: function(cb){
        orm.selectAll("burgers","id",function(res){
            cb(res);
        });
    },
    insertOne: function(colName, colValue, cb){
        orm.insertOne("burgers",colName, colValue,function(res){
            cb(res);
        })
    },
    updateOne: function(colName, colNewValue, colCondition, colConditionValue, cb){
        orm.updateOne("burgers", colName, colNewValue, colCondition, colConditionValue,function(res){
            cb(res);
        })
    }
};

module.exports = burger;