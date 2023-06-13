---
title: CommandBuilder
---

Command Constructor class


## Constructor
```js
new CommandBuilder()
```
_extends <a href="/guide/BaseManager.html">Base</a>_

<div style="display: flex; font-weight: 900;" class="mb">
  <div style="flex: 1;">
    <details class="details">
      <summary>PROPERTIES</summary>
      <a href="#name" class="block">name</a> 
      <a href="#description" class="block">description</a> 
      <a href="#usage" class="block">usage</a> 
      <a href="#examples" class="block">examples</a> 
      <a href="#permissions" class="block">permissions</a> 
      <a href="#int" class="block">int</a> 
      <a href="#cooldown" class="block">cooldown</a> 
      <a href="#owners" class="block">owners</a> 
      <a href="#disabed" class="block">disabed</a> 
      <a href="#category" class="block">category</a> 
     </details>
  </div>
  <div style="flex: 1;">
    <details class="details">
      <summary>Methods</summary>
      <a href="#setName" class="block">setName()</a> 
      <a href="#setDescription" class="block">setDescription()</a> 
      <a href="#setUsage" class="block">setUsage()</a> 
      <a href="#setExample" class="block">setExample()</a> 
      <a href="#setCooldown" class="block">setCooldown()</a> 
      <a href="#setCategory" class="block">setCategory()</a> 
      <a href="#setMessageExecution" class="block">setMessageExecution()</a> 
      <a href="#setInteractionExecution" class="block">setInteractionExecution()</a> 
      <a href="#setGlobal" class="block">setGlobal()</a> 
      <a href="#setAttr" class="block">setAttr()</a> 
      <a href="#InteractionOn" class="block">InteractionOn()</a> 
      <a href="#OwnersOnly" class="block">OwnersOnly()</a> 
      <a href="#isSensitive" class="block">isSensitive()</a> 
      <a href="#isSubCommand" class="block">isSubCommand()</a> 
      <a href="#mergeCommands" class="block">mergeCommands()</a> 
      <a href="#setSubGroupName" class="block">setSubGroupName()</a> 
      <a href="#setSubcommands" class="block">setSubcommands()</a> 
    </details>
  </div>
</div>

<hr>

## **Properties**


<h6 class="pp" id="name">.name</h6>

 Retuns [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
<hr>

<h6 class="pp" id="description">.description</h6>

  Retuns [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
<hr>

<h6 class="pp" id="usage">.usage</h6>

 Retuns [Array[String]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
<hr>

<h6 class="pp" id="examples">.examples</h6>

 Retuns [Array[String]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
<hr>

<h6 class="pp" id="permissions">.permissions</h6>

 Retuns [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
<hr>

<h6 class="pp" id="int">.int</h6>

 Retuns [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
<hr>

<h6 class="pp" id="cooldown">.cooldown</h6>

 Retuns [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
<hr>

<h6 class="pp" id="owners">.owners</h6>

 Retuns [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
<hr>

<h6 class="pp" id="owners">.owners</h6>

 Retuns [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
<hr>

<h6 class="pp" id="disabed">.disabed</h6>

 Retuns [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
<hr>

<h6 class="pp" id="category">.category</h6>

 Retuns [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
<hr>


## **Methods**
<h6 class="pp" id="setName">.setName(name)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  name | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | command name

 Retuns `CommandBuilder`

 Example:
 ```js
  const Command = new CommandBuilder().setName('ping')
```
<hr>

<h6 class="pp" id="setDescription">.setDescription(Description)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  Description | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | command Description 

 Retuns `CommandBuilder`
 
 Note Description is Required while register a slash command

 Example:
 ```js
  const Command = new CommandBuilder().setDescription('This is a description for a command')
```
<hr>

<h6 class="pp" id="setUsage">.setUsage(Usage)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- 
  Usage | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | [`Array<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | command Usage 

 Retuns `CommandBuilder`

 Example:
 ```js
  const Command = new CommandBuilder().setUsage('This is a Usage for a command')
  // or
  const Command = new CommandBuilder().setUsage(['This is a command Usage 1', 'this is command Usage 2'])
```
<hr>

<h6 class="pp" id="setExample">.setExample(Example)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  Example | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | [`Array<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | command Example 

 Retuns `CommandBuilder`

 Example:
 ```js
  const Command = new CommandBuilder().setExample('This is a Example for a command')
  // or
  const Command = new CommandBuilder().setExample(['This is a command Example 1', 'this is command Example 2'])
```
<hr>


<h6 class="pp" id="setCooldown">.setCooldown(timer)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  timer | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | [`Number<ms>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | command cooldown 

 Retuns `CommandBuilder`

 Example:
 ```js
  const Command = new CommandBuilder().setCooldown('10s')
  // or
  const Command = new CommandBuilder().setCooldown(10_000)
```
<hr>

<h6 class="pp" id="setCategory">.setCategory(category)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  category | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | command category 

  ::: tip
  Command Category will automaticly set befor you use this method
  :::

 Retuns `CommandBuilder`

 Example:
 ```js
  const Command = new CommandBuilder().setCategory('public')
```
<hr>


<h6 class="pp" id="setMessageExecution">.setMessageExecution(Execute)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  Execute | [`Function<message, global>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | command Message Callback  
  
  Retuns `CommandBuilder`
 
   @param [`message`](#) 

   @param [`global`](#)

 Example:
 ```js
  const Command = new CommandBuilder().setMessageExecution(Execute)


  function Execute(message, global) {
    message.reply({ content: "Hello world From" + messsage.Command.name });
    console.log(global)
  }
```
<hr>


<h6 class="pp" id="setInteractionExecution">.setInteractionExecution(Execute)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  Execute | [`Function<interaction, global>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | command interaction Callback  
  Retuns `CommandBuilder`
   
   @param [`interaction`](#) 

   @param [`global`](#)

 Example:
 ```js
  const Command = new CommandBuilder().setInteractionExecution(Execute)
    
  function Execute(interaction, global) {
    interaction.reply({ content: "Hello world From" + messsage.Command.name });
    console.log(global)
  }
```
<hr>

<h6 class="pp" id="setGlobal">.setGlobal(Execute)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  Execute | [`Function<message, interaction>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | command Global Callback  
  Retuns `CommandBuilder`
   
   @param [`message`](#) 

   @param [`interaction`](#)

   @return Object<message, interaction>

 Example:
 ```js
  const Command = new CommandBuilder()
  .setName('hello')
  .setMessageExecution(MessageExecute)
  .setInteractionExecution(InteractionExecute)
  .setInteractionExecution(Execute)
    
  function Execute(message, interaction) {
    return {
      message: "Hello world From Global to Message"
      interaction: "Hello world From Global to interaction"
    }
  }

  async function MessageExecute(message, global) {
    console.log(global) // Hello world From Global to Message
    message.replyNoMention({ content: "> **PONG** 🟢" });
  };

  async function InteractionExecute(interaction, global) {
    console.log(global) // Hello world From Global to interaction
    interaction.replyNoMention({ content: "> **PONG** 🟢"});
  };
```
<hr>

<h6 class="pp" id="InteractionOn">.InteractionOn(slashCommand)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  slashCommand | [`Function<SlashCommandBuilder>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | class to construct the command definitions.
  Retuns `CommandBuilder`
   
  @param [`SlashCommandBuilder`](https://discordjs.guide/creating-your-bot/slash-commands.html#individual-command-files) 
  
  ::: warning
  when using this function the command will be add to bot slash command list
  :::  

 Example:
 ```js
 const { SlashCommandBuilder } = require('discord.js');

 const Command = new CommandBuilder().InteractionOn(new SlashCommandBuilder()) // you can add options 

```
<hr>

<h6 class="pp" id="setAttr">.setAttr(key, value)</h6>

  PARAMETER | TYPE    | DESCRIPTION |
 ------------------------------------------------------------ | ------------------------------ | -------- |
  key | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | key
  value | `any` |  value
  Retuns `CommandBuilder`
   

  @return `any`

 Example:
 ```js
 const { SlashCommandBuilder } = require('discord.js');

 const Command = new CommandBuilder().setAttr('name', 'ziad') // you can add options 

 function Execute(message) {
  console.log(message.getAttr('name')) // ziad
 }

```