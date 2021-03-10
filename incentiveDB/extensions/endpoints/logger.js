const Joi = require("joi");

const config = require ('./config');

const logSchema = Joi.object({
  loggingtypeid: Joi.number().required(),
  loggingtype: Joi.string().required(),
  data: Joi.string().required()
});

function log(service, info, schema) {

  console.log("blah", info);

  const { error } = logSchema.validate(info);
  if (error) {
    console.error(error.message)
  } else {

    const ItemsService = service;
    const thisScema = schema
    const typeId = info.loggingtypeid
    const type = info.loggingtype
    const data = info.data

    const loggerCreate = {
      loggingtypeid: typeId,
      loggingtype: `${type}`,
      data: `${data}`
    }

    const loggerService = new ItemsService(config.tables.log.table, { schema: thisScema });
    loggerService
      .create(loggerCreate)
      .then(function (response) {
      })
      .catch((error) => {
        console.error(error.message);
      });
  }


}

exports.log = log;
