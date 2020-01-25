const AWS = require('aws-sdk');
const {createItemInDynamoDB} = require('./../lib/dynamoDB')
const { responseHandler} = require('./../lib/responseHandler')

 function addTodo(event, context){

   console.log('===> event ||',JSON.stringify(event))


}

module.exports = {
    addTodo
}