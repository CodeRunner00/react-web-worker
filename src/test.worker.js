/* eslint import/no-webpack-loader-syntax: off */

self.addEventListener("message", logWorker);

function logWorker(event) {
    console.log("log worker ", event.data);
    
}

self.postMessage('all day')