import 'dotenv/config';

export interface Envs {
  PORT: number;
  PRODUCTS_MICROSERVICE_HOST: string;
  PRODUCTS_MICROSERVICE_PORT: number;
}

const getEnvs = (): Envs => {
  const PORT = Number(process.env.PORT);
  if (PORT === undefined) throw new Error('PORT is not defined');

  const PRODUCTS_MICROSERVICE_HOST = process.env.PRODUCTS_MICROSERVICE_HOST;
  if (PRODUCTS_MICROSERVICE_HOST === undefined)
    throw new Error('PRODUCTS_MICROSERVICE_HOST is not defined');

  const PRODUCTS_MICROSERVICE_PORT = Number(
    process.env.PRODUCTS_MICROSERVICE_PORT,
  );
  if (PRODUCTS_MICROSERVICE_PORT === undefined)
    throw new Error('PRODUCTS_MICROSERVICE_PORT is not defined');

  const envs: Envs = {
    PORT: PORT,
    PRODUCTS_MICROSERVICE_HOST: PRODUCTS_MICROSERVICE_HOST,
    PRODUCTS_MICROSERVICE_PORT: PRODUCTS_MICROSERVICE_PORT,
  };

  console.log(`[envs] -> `, envs);

  return envs;
};

export const envs: Envs = getEnvs();
