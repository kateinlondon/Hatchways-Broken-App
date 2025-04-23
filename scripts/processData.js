#!/usr/bin/env node
const fs = require('fs').promises;

async function main() {
  const [,, inputFile, outputFile] = process.argv;
  if (!inputFile || !outputFile) {
    console.error('Usage: node processData.js <input.json> <output.json>');
    process.exit(1);
  }

  try {
    const raw = await fs.readFile(inputFile, 'utf8');
    const arr = JSON.parse(raw);

    const processed = arr.filter(n => typeof n === 'number' && n % 2 === 0);

    await fs.writeFile(outputFile, JSON.stringify(processed, null, 2));
    console.log(`Wrote ${processed.length} items to ${outputFile}`);
  } catch (err) {
    console.error('Error processing data:', err.message);
    process.exit(1);
  }
}

main();
