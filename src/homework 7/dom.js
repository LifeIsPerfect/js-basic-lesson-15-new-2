//import { JSDOM } from "jsdom"
const { JSDOM } = require( 'jsdom' );
//const { create } = require( './user' );

const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window