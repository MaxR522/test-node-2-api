/*****************************************************
 *
 *  This file Bootstrap the app
 *
 *  @creator Mario Randrianomearisoa <ranjamario@gmail.com>
 *
 *****************************************************/

import { port } from './configs';
import app from './loaders/app';
import Logger from './loaders/winston';

app
  .listen(port, () =>
    Logger.info(
      `Server :: application is running @ 'http://localhost:${port}' ! 🎉 `,
    ),
  )
  .on('error', (error) => {
    Logger.error(`${error} ❌`);
  });

export default app;
