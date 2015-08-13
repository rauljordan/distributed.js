


# Node Genbrain

A node.js library for building reactive algorithm networks. A new design pattern.

[![Build Status](https://travis-ci.org/rauljordan/zeta.js.svg?branch=master)](https://travis-ci.org/rauljordan/zeta.js)


![Imgur](http://i.imgur.com/zMPjMW7.jpg)

## The Case for a New Pattern

> Imagine a system that lives and breathes out of algorithms and
> data-structures reactively...a system whose components seem to link to each other
> seamlessly and change magically in real-time but at the same time all being part
> of the same whole...a truly reactive network of algorithms...a brain

Many large and often distributed systems rely on many components that can easily become nested or a large amount of complex remote protocols between them, and are considerably harder to manage once streams of real time information come into play. Eventually, nested systems would require a lot of refactoring or even decoupling old modules that are not working as expected on a real-time basis. **Why can't we have a reactive design pattern that does all of this at once?** This is the basis of genbrain solves this issue by sticking to these two core ideas that **encapsulate** reactivity:
  - A completely reactive and distributed framework of algorithms/data-structures
  - A framework for building highly-modular and decoupled node projects in a way that is unobtrusive, but feature-rich.

Having a platform that gives us this power by building reactive projects and using little overhead is the strength of Genbrain.



### Core Features

Genbrain relies on a few core features as a project-building framework

* A powerful workflow for creating data-structures and algorithms in a package
* a way of encompassing reactivity in every component of a genbrain project
* methods of immediately targeting components of a genbrain system, or the whole system at once
* reactive machine learning methods that manage internal state of a genbrain project elegantly in real-time
* adaptability to any type of modular project



## Installing Genbrain

```sh
$ npm install node-genbrain
```

## Basic Examples

Imagine an application that consists of a series of algorithms and a single running script that determines overall sentiments from a news website by fetching live updates from it and performing some machine learning. A non-reactive and naiïve way of solving the problem would be to have a nodejs program that runs forever and consistenly checks if there is a live update on the website, and if there is one, it reacts to it accordingly. This creates a lot of overhead and draws the question of efficiency in how often the program should check and how fast it should act.

In a reactive system, this should not be an issue. Data and output should change immediately and without a program prompting any client if there has been a change. What makes it worse is that if there are also many linked algorithms in the system that check on different aspects of the website to determine sentiment (such as trending news types, which categories the news are labeled on), this increases complexity even further. Now if one thing changes, we have to respond and fetch new changes on everything else because it all goes together.

In Genbrain, the project architecture along with all its modules is reactive since the very beginning. Inspired by Meteor's "Tracker.autorun", every algorithm and genbrain module you add to the main architecture will immediately be reactive to the context it is set up in. Morever, genbrain includes methods out-of-the-box that allow a user to quickly decouple running algorithms or modules from the main architecture, add new ones on the fly, analyze their runtime behavior and output reactively, and visualize the entire system in a web application all at the same time. The genbrain workflow allows a user to not worry about reactivity or module decoupling, because it every part of the project is encapsulated by the common genbrain architecture.

## First Steps

We will go through the process of building a simple genbrain architecture and exploring some of its options, including showing how it encapsulates reactivity across modules.

TODO

## Development

Want to contribute? Great! Please submit a pull request and I'll review it and integrate it as fast as I can. Write up some tap tests for your implementation before submitting.



License
----

MIT
