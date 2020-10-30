export default async () => {
  /**
   * app teardown
   */
  if (global.__SERVER__) {
    console.log(`[${process.env.NODE_ENV}] http server closed`);
    await global.__SERVER__.close();
  }
};
