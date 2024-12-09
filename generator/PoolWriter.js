const fs = require('fs');
const path = require('path');

const JSONDir = `${__dirname}/results/`;
const targetDir = `${__dirname}/pool/`;

module.exports = class PoolWriter {
    /** @type {Array<string>} */
    filenames = [];

    ignores = ['companies-only.json', 'projects.json'];

    constructor() {
        this.getFilenames();
        this.write();
        this.cp();
    }

    getFilenames() {
        fs.readdirSync(JSONDir).forEach(file => {
            if (!this.ignores.includes(file)) {
                this.filenames.push(file);
            }
        })
    }

    write() {
        this.filenames.forEach(filename => {
            const file = fs.readFileSync(`${JSONDir}${filename}`);

            const variableName = `const ${this.macroCase(filename.replace('.json', ''))}_POOL = `;
            const jsonData = JSON.stringify(JSON.parse(file), null, 2);
            const fileContent = `${variableName}${jsonData};\n`;

            fs.writeFileSync(`${targetDir}${filename.replace('.json', '.js')}`, fileContent);
        });
    }

    cp() {
        this.filenames.forEach(filename => {
            fs.copyFileSync(`${targetDir}${filename.replace('.json', '.js')}`, path.join(__dirname, '..', filename.replace('.json', '.js')));
        });
    }

    macroCase(str) {
        return str.replace(/-/g, '_').toUpperCase();
    }
}