const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  auth: Joi.number().required(),
  case: Joi.number().required(),
  missclick : Joi.number(),
  totalQuestion : Joi.number(),
  pourcentage : Joi.number(),
  correct :  Joi.number(),
})
