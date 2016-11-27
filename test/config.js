console.warn("Runing: NodeJS");

var fs = require("fs");
var assert = require("assert");
var select = require("xpath.js");
var DOMParser = require("xmldom-alpha").DOMParser;
var XMLSerializer = require("xmldom-alpha").XMLSerializer;
xmldsig = require("../lib/index");

var WebCrypto = require("node-webcrypto-ossl");
xmldsig.Application.setEngine("OpenSSL", new WebCrypto());
console.log("WebCrypto:", xmldsig.Application.crypto.name);

var readXml = function(path, cb) {
    fs.readFile(path, function(e, buf) {
        if (e)
            assert.equal(false, true, "Error on XML reading " + path);
        else {
            var doc = new DOMParser().parseFromString(buf.toString(), "application/xml");
            cb(doc);
        }
    })
}

module.exports = {
    select: select,
    xmldsig: xmldsig,
    DOMParser: DOMParser,
    XMLSerializer: XMLSerializer,
    readXml: readXml,
    assert: assert
}