/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Cody Sechelski
 * @license MIT
 * 
 * 
 **/

class EasyHTTP{
  //make HTTP GET
  get(uri) {
    return new Promise((resolve, reject) => {
      fetch(uri)
        .then(res => res.json())
        .then(data => console.log(resolve(data)))
        .then(err => console.log(reject(err)));

    });
  }
 }