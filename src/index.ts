import { parse } from 'pgsql-parser';
import { writeFileSync } from 'fs';

const fs = require('fs');

const questions = [
    {
        _: true,
        name: 'file',
        message: 'file path',
        required: true
    }
];

const run = async (argv) => {
    const contents = fs.readFileSync(__dirname + '/../sql/test.sql').toString();
    try {
        const parsed = parse(contents);
        writeFileSync(__dirname + '/../sql/test.json', JSON.stringify(parsed, null, 2));
    } catch (e) {
        console.log(e);
    }
};

run();