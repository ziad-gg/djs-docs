---
title: EventBuilder
---

## Constructor
```js
new EventBuilder()
```
_extends <a href="#">Base</a>_


<div style="display: flex; font-weight: 900;" class="mb">
  <div style="flex: 1;">
    <details>
      <summary>PROPERTIES</summary>
      <a href="#name" class="block">name</a> 
      <a href="#once" class="block">once</a> 
    </details>
  </div>
  <div style="flex: 1;">
    <details>
      <summary>Methods</summary>
      <a href="#setEvent" class="block">setEvent</a> 
      <a href="#setExecution" class="block">setExecution</a> 
      <a href="#once" class="block">once</a> 
      <!-- <a href="#setCustomIds" class="block">setCustomIds</a>  -->
    </details>
  </div>
</div>
<hr>

## Properties
<h6 class="pp" id="name">.name</h6>

 Retuns [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
<hr>
<h6 class="pp" id="once">.once</h6>

 Retuns [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
<hr>

## Methods
<h6 class="pp" id="setEvent">.setEvent(name)</h6>

PARAMETER |	TYPE |	DESCRIPTION
---- | ------ | -------- |
name| [`Events`](https://discord.js.org/#/docs/discord.js/main/typedef/Events) | event name

::: tip More Events
  You Can use ButtonClick Event, SelectMenu And ModelSubmit
 ```js
 const ButtonsEvent = new EventBuilder().setEvent('ButtonClick')
 const MenuEvent = new EventBuilder().setEvent('SelectMenu')
 const ModelEvent = new EventBuilder().setEvent('ModelSubmit')
```

:::

Retuns `EventBuilder`

Example:

```js
 const Event = new EventBuilder()
 .setEvent(Events.ClientReady)
```
<hr>

<h6 class="pp" id="setExecution">.setExecution(func)</h6>

PARAMETER |	TYPE |	DESCRIPTION
---- | ------ | -------- |
func |	[`Function[any]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) |	event callback function

Retuns `EventBuilder`

Example:

```js
 const Event = new EventBuilder()
 .setEvent(Events.ClientReady)
 .setExecution(client => console.log(client.user.tag))
```
<hr>
<h6 class="pp" id="once">.once(Boolean)</h6>

Retuns `EventBuilder`

Example:

```js
  //This Event Will run only one time
 const Event = new EventBuilder()
 .setEvent(Events.ClientReady)
 .setExecution(client => console.log(client.user.tag))
 .once(true);
```




