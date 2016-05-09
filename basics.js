"use strict"

function ignore() {}

function not(value) {
 if(value) {
  return(false)
 } else {
  return(true)
} }

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

EventTarget.prototype.on = function(events, listener) {
 if(Array.isArray(events)) {
  for(let event of events) {
   this.addEventListener(event, listener)
  }
 } else {
  this.addEventListener(events, listener)
} }
