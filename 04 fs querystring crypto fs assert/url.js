/*
const { URL } = require("url") ;

const myUrl =new URL("https://www.npmjs.com/settings/node01/billing")

console.log(myUrl)
*/

/*
const { URL } = require("url") ;

const myUrl =new URL("http://market.gome.com.cn/?intcmp=item-1000000378-4")

console.log(myUrl.hostname)
*/

/*
const { URL } = require("url") ;

console.log(resolve("/usr/local/","node"))

*/

/*
const { URL } = require("url") ;

console.log(resolve("/usr/local/","./node"))

*/

/*
const { URL } = require("url") ;

console.log(resolve("/usr/local/","../node"))
*/

/*
const { URL } = require("url") ;

console.log(resolve("/usr/local/","/node/a"))
*/

/*
const { URL } = require("url") ;

console.log(resolve("http://a.com","b"))
*/

/*
const { URL } = require("url") ;

console.log(resolve("http://a.com","./b"))
*/
/*
const { URL } = require("url") ;

console.log(resolve("http://a.com/c","../b"))
*/

/*
const { URL } = require("url") ;

console.log(resolve("http://a.com/c/d/d","../b"))
*/

/*
const { URL } = require("url") ;
const qs=require("querystring");
const myUrl =new URL("https://www.npmjs.com/settings/node01/billing")

console.log(myUrl.search)
*/

const { URL } = require("url") ;
const qs=require("querystring");
const myUrl =new URL("https://www.npmjs.com/settings/node01/billing")

const queryObj =qs.parse(myUrl.search.slice(1))
console.log(queryObj.wd)