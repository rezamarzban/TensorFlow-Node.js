# TensorFlow-Node.js
Simple high performance AI TensorFlow digits recognition code with Node.js (C++ &amp; V8 engine)

After coding TensorFlow in Python3 with TensorFlow module,
And after coding it in Python2 with V8 engine and TensorFlow.js javascript module,
And after coding it in C++ with V8 engine and TensorFlow.js javascript module,
The result was "C++ with V8 engine and TensorFlow.js javascript module" has most speed and less hardware resources usage.

Node.js is C++ with V8 engine: The V8 interface between C++ and JavaScript is used by the native code bindings that come with Node.

So, Coding in Node.js is better than coding in C++ with V8 engine however Node.js has written in C++ and contains V8 engine library headers which make these same as together in processing and performance.

I measured single threaded Node.js process MIPS by MIPS.js code, It is equal to total sum of one or two CPU cores frequency in MHZ.
test it online:
https://rextester.com/VJTL81707

Measured single threaded process MIPS in Node.js is equal to each thread MIPS in this code¹ that measure multi threaded process MIPS in C++:
https://rextester.com/HQA96838


C++ speed + Fast powerful V8 engine => Node.js


Node.js + TensorFlow.js => AI C++ project


Currently I decide to coding simple high performance AI TensorFlow digits recognition with Node.js here.


Install required module by running below command:

"npm install @tensorflow/tfjs-node"

Note: tensorflow node is available for Intel, AMD processors and so on. Not available for arm, arm64 processors and so on.

On error study and do this: How to Install Node.js on Ubuntu and Update npm to the Latest Version:
https://www.freecodecamp.org/news/how-to-install-node-js-on-ubuntu-and-update-npm-to-the-latest-version/

Run script by running below command:

"node main.js"

On error study and do very confusing guides in it: Peter Babič - Install tfjs-node from source:
https://peterbabic.dev/blog/install-tfjs-node-from-source/

Footnotes:

1- https://github.com/marzban2030/MIPS

Measure multi threaded process MIPS with C++
