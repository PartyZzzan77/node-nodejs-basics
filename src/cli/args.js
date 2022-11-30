const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = args
    .map((a) => {
      if (a.includes('--')) {
        return `${a.replace('--', '')} is`;
      }
      return `${a},`;
    })
    .join(' ')
    .slice(0, -1);

  process.stdout.write(result + '\n');
};

parseArgs();
