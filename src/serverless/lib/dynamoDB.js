const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});

let createItemInDynamoDB = ( itemAtrributes, table, expressionAttributes, conditionExpression )=>{
    let tableParams = {
        Item : itemAtrributes,
        TableName:table,
        ExpressionAttributeName : expressionAttributes,
        ConditionExpression : conditionExpression,
    }
    return docClient.put(tableParams).promise()
}


module.exports = {
    createItemInDynamoDB,
}