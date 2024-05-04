const { Room } = require('./src/models/room.model.js');
const { User } = require('./src/models/user.model.js');
const { Message } = require('./src/models/message.model.js');
const { client } = require('./src/utils/db.js');

client.sync({ force: true });
