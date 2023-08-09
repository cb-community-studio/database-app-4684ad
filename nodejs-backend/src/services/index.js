const users = require("./users/users.service.js");
const clients = require("./clients/clients.service.js");
const emails = require("./emails/emails.service.js");
const subscribers = require("./subscribers/subscribers.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(clients);
  app.configure(emails);
  app.configure(subscribers);
  // ~cb-add-configure-service-name~
};
