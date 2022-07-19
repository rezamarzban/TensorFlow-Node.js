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

Currently I decide to coding simple high performance AI TensorFlow digits recognition with Node.js here.
