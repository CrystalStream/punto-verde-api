"use strict";

const mailer = require('sails-service-mailer');
const config = require('../../config/services/mailer');

module.exports = mailer('sendgrid', config.services.mailer);
