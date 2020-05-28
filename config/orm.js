const connection = require("./connections");

//creating a helper function to insert question marks
function printQuestionMarks(num){
    let arr = [];

    for (let i =0; i<num; i++){
        arr.push("?");
    }
    return arr.toString();
}

//creating a helper function to convert object key/value pair into SQL syntax
function objToSql(obj){
    let arr = [];

    for (let key in obj){
        let value = obj[key];

        if(Object.hasOwnProperty.call(obj, key)){
            if(typeof value === "string" && value.indexOf(" ")>=0){
                value = `'${value}'`;
            }
            arr.push(`${key} = ${value}`)
        }
    }

    return arr.toString();
}

//SQL statement functions
const orm = {
    selectAll: function(table, orderCol, cb){
        let queryString = "SELECT * FROM ?? ORDER BY ??";
        console.log(queryString);
        connection.query(queryString, [table, orderCol], function(err, result){
            if(err){
                throw err
            }
            cb(result);
        });
    },
    insertOne: function(table, colName, colValue, cb){
        let queryString = "INSERT INTO ?? (??) VALUES (?);"
        console.log(queryString);
        connection.query(queryString, [table, colName, colValue], function(err, result){
            if(err){
                throw err
            }
            cb(result);
        });
    },
    updateOne: function(table, colName, colNewValue, condition, cb){
        let queryString = "UPDATE ?? SET (?? = ?) WHERE (??);"
        console.log(queryString);
        connection.query(queryString,[table, colName, colNewValue, condition], function(err, result){
            if(err){
                throw err
            }
            cb(result);
        });
    }

}

module.exports = orm;