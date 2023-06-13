---
title: MessageManager
---


## Constructor

```js
new Message(ApiPayload, Client)
```
_extends <a href="https://discord.js.org/#/docs/discord.js/main/class/MessageManager" target='_blank'>MessageManager</a>_


**Parameters:**
## @ApiPayload
| Name           | Type                                                         | Description                    | Optional |
| -------------- | ------------------------------------------------------------ | ------------------------------ | -------- |
| `ApiPayload`       | [`ApiPayload`](https://discord.com/developers/docs/resources/channel#message-object) |  discord Gateway message response  | false     |



## @Client
| Name           | Type                                                         | Description                    | Optional |
| -------------- | ------------------------------------------------------------ | ------------------------------ | -------- |
| `Client`       | [`client`](https://discord.js.org/#/docs/discord.js/main/class/Client) | The main Discord.js client     | false     |



<div style="display: flex; font-weight: 900;" class="mb">
  <div style="flex: 1;">
    <details>
      <summary>PROPERTIES</summary>
      <a href="/guide/Application" class="block">Application</a> 
      <a href="/guide/Application#prefix" class="block">prefix</a> 
      <a href="/guide/CommandBuilder#name" class="block">cmdName</a> 
      <a href="/guide/CommandBuilder#Command" class="block">Command</a> 
      <a href="#GroupName" class="block">GroupName</a> 
      <a href="#GroupChildName" class="block">GroupChildName</a> 
    </details>
  </div>
  <div style="flex: 1;">
    <details>
      <summary>Methods</summary>
      <a href="#replyNoMention" class="block">replyNoMention</a> 
      <a href="#sendTimedMessage" class="block">sendTimedMessage</a> 
      <a href="#getUser" class="block">getUser</a> 
      <a href="#getData" class="block">getData</a> 
      <a href="/guide/CommandBuilder#getAttr" target="_blank" class="block">getAttr</a> 
      <a href="https://discord.js.org/#/docs/discord.js/main/class/CommandInteraction?scrollTo=followUp" target="_blank" class="block">followUp</a> 
    </details>
  </div>
</div>
<hr>

::: tip Args
  how to use message Args message arge saved as Object in MessageManager like
  ```js {1}
    message[0] // this likes first word After command Name
    message[1] 
    message[2]
    message.slice(0, 2) // that will return array with sliced Args
  ```
:::

## **Properties**


<h6 class="pp" id="GroupName">.GroupName</h6>

 ::: tip description 
 this property will work when you run a sub command with type [2](https://discord.com/developers/docs/interactions/application-commands#subcommands-and-subcommand-groups)
 :::

 Retuns [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
<hr>
<h6 class="pp" id="GroupChildName">.GroupChildName</h6>

 ::: tip description 
 this property will work when you run a sub command with type [1 and 2](https://discord.com/developers/docs/interactions/application-commands#subcommands-and-subcommand-groups)
 :::
 
 Retuns [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
<hr>

## **Methods**
 <h6 class="pp" id="replyNoMention">.replyNoMention(options)</h6>

   PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  options | [`MessagPayload`](https://discord-api-types.dev/api/discord-api-types-v10/interface/APIMessage) | message options to send
  
 Retuns [Message](#constructor)

 Example:
 ```js
  message.replyNoMention({content: "PONG ME"})
 ```
<hr>
<h6 class="pp" id="sendTimedMessage">.sendTimedMessage(options, time)</h6>

   PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  options | [`MessagPayload`](https://discord-api-types.dev/api/discord-api-types-v10/interface/APIMessage) | message options to send
  time  | [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | time out to delete message after
  reference  | [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | message reply

 Retuns [Null]

 Example:
 ```js
  message.sendTimedMessage({content: "pong"}, 10000, true) // this message will be deleted after 10s
 ```
<hr>
<h6 class="pp" id="getUser">.getUser(id)</h6>

   PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  options | [`id`](https://discord-api-types.dev/api/discord-api-types-v10/interface/GatewayRequestGuildMembersDataWithUserIds#user_ids) | user id 

  Retuns [Promise[User]](https://discord.js.org/#/docs/discord.js/main/class/User)

 Example:
 ```js
 await message.getUser('860865950945378325')
 ```
<hr>
<h6 class="pp" id="getUser">.getData(key)</h6>

   PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  key | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | saved Key

 ::: tip 
   You Can Use Data After [Set It](http://localhost:8080/guide/Application.html#setData) 
 :::

  Retuns [any]

 Example:
 ```js
 await message.getUser('welcome') // Hello sir How Are You
 ```
<hr>