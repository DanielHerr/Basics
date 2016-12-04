"use strict"

function ignore() { }

function not(value) {
 if(value) {
  return(false)
 } else {
  return(true)
} }

function arrayobject(item = {}) {
 return(Object.assign(Object.values(item), item))
}

function wait(time = 0) {
 return(new Promise(function(resolve) {
  setTimeout(resolve, time)
})) }

function datatype(item) {
 let type = typeof(item)
 if(type == "object") {
  if(item == null) {
   type = "null"
  } else if(Array.isArray(item)) {
   type = "array"
 } }
 return(type)
}

var log = console.log.bind(console)

Object.prototype.is = function(...values) {
 return(values.includes(this))
}
