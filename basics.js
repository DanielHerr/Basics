"use strict"

function ignore() { }

function not(value) {
 if(value) {
  return(false)
 } else {
  return(true)
} }

function arrayobject(item) {
 return(Object.assign(Object.values(item), item))
}

function wait(time = 0) {
 return(new Promise(function(resolve) {
  setTimeout(resolve, time)
})) }

var log = console.log.bind(console)
