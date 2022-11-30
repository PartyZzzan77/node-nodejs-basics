const parseEnv = () => {
  const entries = Object.entries(process.env);
  const withRS_ = entries.filter(([key]) => {
    if (key.includes('RSS_')) {
      return key;
    }
  });

  const result = withRS_
    .map(([key, value]) => `${key}name=value${value}`)
    .join('; ');

  process.stdout.write(result + '\n');
};

parseEnv();
