const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

const version = packageJson.version;

const oldFilename = `primeng-${version}.tgz`;
const newFilename = `nfedorov-primeng-${version}.tgz`;

try {
    fs.renameSync(path.join(__dirname, '../dist', oldFilename), path.join(__dirname, '../dist', newFilename));
} catch (error) {
    console.error('Error renaming file:', error.message);
    process.exit(1);
}
