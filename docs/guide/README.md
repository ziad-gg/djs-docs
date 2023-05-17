---
lang: en-US
title: Getting Start
description: Description of this page
sidebar_label: Start Up

# layout: CustomLayout

---


## Installing
 ```bash
  $ npm init --y
  $ npm i discord.js
  $ npm i handler.djs
 ```

## Basic Start

# index.js

```js
const { Client, GatewayIntentBits } = require('discord.js');
const { Application } = require('handler.djs');
const path = require('node:path');


const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildMessages
    ] 
});

new Application(client, {
  commandsPath: path.join(__dirname, 'commands'),
});


client.Application.build();

client.login(yourToken);
```

we used [discord.js](https://discord.js.org/#/) to Connect to discord websocket and we used [node:path](https://nodejs.org/api/path.html) to Get the full Direction of the file


## Commands
 First go to commands dir and create a file with ping.js 
 # commands/ping.js
 ```js
const { CommandBuilder } = require('handler.djs');

module.exports = new CommandBuilder()
.setName('ping')
.setMessageExecution(MessageExecute)

async function MessageExecute(message, global) {
  message.replyNoMention({ content: "> **PONG** 🟢" });
};
 ```

