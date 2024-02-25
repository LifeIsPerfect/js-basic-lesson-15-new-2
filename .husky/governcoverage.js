let oldCoverage = require('../.lastcoverage.json');
let newCoverage = require('../coverage/coverage-summary.json');

if( oldCoverage.total.lines.pct > newCoverage.total.lines.pct ||
    oldCoverage.total.lines.pct > newCoverage.total.lines.pct ||
    oldCoverage.total.lines.pct > newCoverage.total.lines.pct ) {
    process.exit(1);
}