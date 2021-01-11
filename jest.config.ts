// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
// const config: Config.InitialOptions = {
//   verbose: true,
// };
// export default config;

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    moduleDirectories: ['node_modules', 'src'],
    // preset: 'ts-jest',
    verbose: true,
  };
};
