// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'clients';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
                   name: { type: String, required: true, default: '' },
       address: { type: String, required: true },
       emails: { type: String, required: true },
       phones: { type: String, required: true },
       preferences: { type: String, required: true },
       logins: { type: String },

            // ~cb-relationship-schema~
          },
          // ~cb-read-end~
          {
          timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };