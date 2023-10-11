import { config } from 'dotenv';

export const configure = () => {
  const envPath = (() => '.env')();

  config({
    path: envPath,
  });
};
