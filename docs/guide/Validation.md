---
title: Validation
---


## Constructor
```js
new Validation()
```
_extends <a href="/guide/BaseManager.html">Base</a>_


<div style="display: flex; font-weight: 900;" class="mb">
  <div style="flex: 1;">
    <details>
      <summary>PROPERTIES</summary>
       No PROPERTIES Valid
    </details>
  </div>
  <div style="flex: 1;">
    <details>
      <summary>Methods</summary>
      <a href="#setCommnads" class="block">setCommnads</a> 
      <a href="#setExecution" class="block">setExecution</a> 
    </details>
  </div>
</div>
<hr>


## Methods
<h6 class="pp" id="setCommnads">.setCommnads(cmds)</h6>

Sets the commands for validation.

::: warning
 `cmd (Array[string] | string)`
 <br>
 The command(s) to be validated. It can be either an array of command names or a single command name.
:::

Returns Validation object.

Example usage:

```js {1,2}
 new Validation.setCommnads('all')
 new Validation.setCommnads(['ping'])
```
<hr>

<h6 class="pp" id="setExecution">.setExecution(Function)</h6>

Sets callback function for validation.

PARAMETER | TYPE  | DESCRIPTION |
------------------------------------------------------------ | ------------------------------ | -------- 
Function | [`Function<message, next, end>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | validation Message Callback  

  Returns Validation object.

Example usage:

```js {3}
new Validation()
.setCommnads(["ping"])
.setExecution( (message, next, end) => {
   if (message.content.includes("password")) return next(); // this means do other validation if there is more than one
   else return end(); // this means stop the command
})
```