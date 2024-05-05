const { client } = require('./src/utils/db.js');

const { Room } = require('./src/models/room.model.js');
const { User } = require('./src/models/user.model.js');
const { Message } = require('./src/models/message.model.js');

// client.sync({ force: true });
client.sync();
