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

var log = console.log.bind(console)

var element = {
 create: document.createElement.bind(document),
 get: document.querySelector.bind(document),
 getall: document.querySelectorAll.bind(document),
 getid: document.getElementById.bind(document),
 gettag: document.getElementsByTagName.bind(document),
 getclass: document.getElementsByClassName.bind(document)
}
