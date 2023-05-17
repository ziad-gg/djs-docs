---
title: Application
---

Application is The main Hub for the Project


## Constructor
```js
new Application(client, options)
```
_extends <a href="#">Base</a>_

**Parameters:**
## @Client
| Name           | Type                                                         | Description                    | Optional |
| -------------- | ------------------------------------------------------------ | ------------------------------ | -------- |
| `Client`       | [`client`](https://discord.js.org/#/docs/discord.js/main/class/Client) | The main Discord.js client     | true     |

## @options
| Name           | Type                                                         | Description                    | Optional |
| -------------- | ------------------------------------------------------------ | ------------------------------ | -------- |
| `prefix` | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Message command prefix | false     |
| `commandsPath` | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Path to the commands folder    | true     |
| `EventsPath`   | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Path to the events folder      | false    |
| `validationPath`|[`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Path to the validation folder  | false    |
| `owners`|        [`Array<OwnerId>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | id of admin commands  | false    |


<div style="display: flex; font-weight: 900;" class="mb">
  <div style="flex: 1;">
    <details>
      <summary>PROPERTIES</summary>
      <a href="#prefix" class="block">prefix</a> 
      <a href="#owners" class="block">owners</a> 
      <a href="#client" class="block">client</a> 
      <span href="#" class="block">api</span>
      <span href="#" class="block">ws</span> 
      <span href="#" class="block">REST</span> 
    </details>
  </div>
  <div style="flex: 1;">
    <details>
      <summary>Methods</summary>
      <a href="#build" class="block">build</a> 
      <a href="#setPrefix" class="block">setPrefix</a> 
      <a href="#setCooldown" class="block">setCooldown</a> 
      <a href="#setCooldownMessage" class="block">setCooldownMessage</a> 
      <a href="#setData" class="block">setData</a> 
      <a href="#getData" class="block">getData</a> 
      <a href="#getCommand" class="block">getCommand</a> 
    </details>
  </div>
  <div style="flex: 1;">
    <details>
      <summary>Events</summary>
       <a href="https://discord.js.org/#/docs/discord.js/main/class/Client">Events</a>
    </details>
  </div>
</div>


<hr>

## **Properties**

 <h6 class="pp" id="prefix">.prefix</h6>

 Type                                                         | Description                    | editable | default |
 ------------------------------------------------------------ | ------------------------------ | -------- | -------
[`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Message command prefix | true | ?

<hr>
<h6 class="pp" id="owners">.owners</h6>

 Type                                                         | Description                    | editable |
 ------------------------------------------------------------ | ------------------------------ | -------- |
[`Array<OwnerId>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | id of admin commands  | true  |
<hr>
<h6 class="pp" id="client">.client</h6>

 Type                                                         | Description                    | editable |
 ------------------------------------------------------------ | ------------------------------ | -------- |
[`client`](https://discord.js.org/#/docs/discord.js/main/class/Client)  | The main Discord.js client  | false  |
<hr>

## **Methods**
 <h6 class="pp" id="build">.build()</h6>

 Retuns [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

 Example:
 ```js
  client.Application.build()
 ```
<hr>

<h6 class="pp" id="setPrefix">.setPrefix(prefix)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  prefix | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |  new prefix to set
  
  Retuns [`void`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

  Example: 
  ```js
   client.Application.setPrefix('-')
  ```
<hr>

<h6 class="pp" id="setCooldown">.setCooldown(options)</h6>

| Name           | Type                                                         | Description                    | Optional | value
| -------------- | ------------------------------------------------------------ | ------------------------------ | -------- | ------- |
| `message` | [`String<cooldownREG>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | cooldown message | false  | **{Username}**, Cool down (**{counter}** left) |
| `reference` | [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | mention user on reply  | false  | true |
| `Mdelete`   | [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | delete message after number of s | false | null |
| `EphemeralReply`|[`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Ephemeral in slashcommand  | false | true |
| `long`|        [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | long means (secounds) in false means (s) | false | true |
| `once`|        [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | reply one time | false | false |

  Retuns [`void`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

  ::: tip cooldownREG
   `{UserName}` User name like `Discord`
    <br>
   `{UserId}` User Id like `860865950945378325` 
    <br>
   `{UserMention}` UserMention like `@Discord#0000` 
    <br>
   `{UserTag}` UserTag like `Discord#0000` 
    <br>
   `{counter}` Counter Like `10s`
    <br>
   `{timer}` Timer like `10`
  :::

  Example: 
  ```js
  client.Application.setCooldown({ 
   message: "**{Username}**, Cool down (**{counter}** left)", 
   reference: true, 
   long: true, 
   Mdelete: "3s" 
   EphemeralReply: true,
   once: true 
  });
  ```
<hr>

<h6 class="pp" id="setCooldownMessage">.setCooldownMessage(message)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  message | [`String<cooldownREG>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | cooldown message content
  
  ::: tip cooldownREG
   `{UserName}` User name like `Discord`
    <br>
   `{UserId}` User Id like `860865950945378325` 
    <br>
   `{UserMention}` UserMention like `@Discord#0000` 
    <br>
   `{UserTag}` UserTag like `Discord#0000` 
    <br>
   `{counter}` Counter Like `10s`
    <br>
   `{timer}` Timer like `10`
  :::

  Retuns [`void`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

  Example: 
  ```js
   client.Application.setCooldownMessage('**{Username}**, Cool down (**{counter}** left) ')
  ```
<hr>

<h6 class="pp" id="setData">.setData(data)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  data | [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | data to save in commands response

  Retuns [`void`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

  Example: 
  ```js
client.Application.setDate({ 
  database: {
    getName: () => "ziad",
    getAge: () => 20,
    getCity: () => "city"
  },
  welcome: "Hello sir How Are You"
});
 ```
<hr>

<h6 class="pp" id="getData">.getData(key)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  key | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | object key to get data
  Retuns `Any`

  Example: 
  ```js
   client.Application.getData('database')
 ```
<hr>
<h6 class="pp" id="getCommand">.getCommand(cmdName)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  cmdName | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | get Command

  ::: warning
   THIS METHOD WONT WORK BEFOR CLIENT READY
  :::

  Retuns [`command`](#)

  Example: 
  ```js
   client.Application.getCommand('ping')
 ```
<hr>

