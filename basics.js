"use strict"

function ignore() {}

function wait(time = 0) {
 return(new Promise(function(resolve) {
  setTimeout(resolve, time)
})) }

function datatype(data) {
 let type = typeof(data)
 if(type == "object") {
  if(data == null) {
   type = "null"
  }
  else if(Array.isArray(data)) {
   type = "array"
 } }
 return(type)
}

var log = console.log.bind(console)

EventTarget.prototype.on = EventTarget.prototype.addEventListener

Object.defineProperty(Boolean.prototype, "not", { get() {
 return(!this.valueOf())
} })
