const Generator = require('./Generator');
const JSONWriter = require('./JSONWriter');
const PoolWriter = require('./PoolWriter');

const generator = new Generator();
const JSONwrite = new JSONWriter(generator);
JSONwrite.writeAll();

const poolWrite = new PoolWriter();
poolWrite.run();
