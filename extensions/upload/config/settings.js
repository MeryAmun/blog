if (process.env.NODE_ENV === 'production') {
    module.exports = {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: process.env.mamba,
        api_key: '121164434917345',
        api_secret: 'JErTk20x0erab5PJVEU_I_w5noA'
      }
    };
  } else {
    // to use the default local provider you can return an empty configuration
    module.exports = {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: process.env.mamba,
          api_key: '121164434917345',
          api_secret: 'JErTk20x0erab5PJVEU_I_w5noA'
        }
      };
  }