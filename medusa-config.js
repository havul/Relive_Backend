const plugins = [
    // ...
    {
      resolve: "@medusajs/admin",
      /** @type {import('@medusajs/admin').PluginOptions} */
      options: {
        autoRebuild: true,
        // other options...
      },
    },
  ]

  const projectConfig = {
    // ...,
    database_url: "...",
    worker_mode: process.env.MEDUSA_WORKER_MODE,
  }