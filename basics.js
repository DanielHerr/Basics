"use strict"

function ignore() {}

function wait(time = 0) {
 return(new Promise(function(resolve) {
  setTimeout(resolve, time)
})) }

var log = console.log.bind(console)

EventTarget.prototype.on = EventTarget.prototype.addEventListener

Object.defineProperty(Boolean.prototype, "not", { get() {
 return(!this.valueOf())
} })
