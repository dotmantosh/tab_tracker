const Joi = require('joi')

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const { error, value } = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break;
        case "password":
          res.status(400).send({
            error: 'The password provided must contain a lowercase, a uppercase, a numeric number and must not be less than 8 characters nor greater than 32 characters'
          })
          break;

        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
          break;
      }
    } else {
      next()
    }

  }
}