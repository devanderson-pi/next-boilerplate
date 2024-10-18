module.exports = {
  '*.{ts,tsx}': filenames => [
    `npm run lint --fix . ${filenames.join(' --file ')}`,
    `prettier --write ${filenames.join(' ')}`,
    `vitest related ${filenames.join(' ')} --run`,
  ],
};
