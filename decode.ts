import fs from 'fs';

// Read the contents of the input file
const inputFileContents = fs.readFileSync('f1.txt', 'utf-8');

// Process the contents of the input file
const processedContents = inputFileContents
  .split('\n')
  .map((line) => {
    if (line.startsWith('$HEX[')) {
      line = Buffer.from(line.replace('$HEX[', '').replace(']', ''), 'hex').toString();
    }
    return line;
  })
  .join('\n');

// Write the processed contents to the output file
fs.writeFileSync('outfile1.txt', processedContents);
