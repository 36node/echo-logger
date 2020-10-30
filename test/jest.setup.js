import { app, config } from "../src";

const { PORT } = config;

export default async () => {
  /**
   * setup server
   */
  global.__SERVER__ = app.listen(PORT, () =>
    console.log(
      `[${process.env.NODE_ENV}] http server start on port ${PORT} 🚀`
    )
  );
};
