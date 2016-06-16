"use strict"

function ignore() { }

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

var element = {
 create: document.createElement.bind(document),
 get: document.querySelector.bind(document),
 getall: document.querySelectorAll.bind(document),
 getid: document.getElementById.bind(document),
 gettag: document.getElementsByTagName.bind(document),
 getclass: document.getElementsByClassName.bind(document)
}

EventTarget.prototype.on = function(events = [] || "", options = {}, listener) {
 let target = this
 if(listener == undefined && datatype(options) == "function") {
  listener = options
  options = undefined
 }
 if(datatype(events) == "string") {
  target.addEventListener(events, listener, options)
 } else {
  for(let event of events) {
   target.addEventListener(event, listener, options)
} } }
