#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

class Option {
   constructor (name, beats) {
     this.name = name
     this.beats = beats
   }
   doIBeat (tgt){
       if (this.name === tgt.name) {
           return 'tie'
       } else if (this.beats === tgt.name){
           return true
        }
       return false
   }
}

const options = ['rock', 'paper', 'scissors']
let objects = []
objects.push(new Option(options[0], options[2]))
objects.push(new Option(options[1], options[0]))
objects.push(new Option(options[2], options[1]))
let userInput = argv.move
console.log('Playing a game of roshambo against the computer.')
console.log(`Player plays ${userInput}!`)
let rand = Math.random() * 3
rand = Math.floor(rand)
const compInput = options[rand] 
console.log(`Computer plays ${compInput}!`)
const userObj = objects[options.indexOf(userInput)]
const compObj = objects[rand]
const result = userObj.doIBeat(compObj)
if (result === 'tie') {
    console.log('~You tied.~')
} else if (result) {
    console.log('~You win.~')
} else {
    console.log('~Computer wins.~')
}


