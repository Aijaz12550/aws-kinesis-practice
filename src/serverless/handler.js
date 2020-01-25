'use strict';

const { addTodo } = require('./controller/addTodo')

module.exports.addTodo = async event => {
  return addTodo(event)
}