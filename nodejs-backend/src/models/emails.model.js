// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'emails';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
                   fromEmail: { type: String, lowercase: true },
       toEmail: { type: String, lowercase: true },
       subject: { type: String },
       body: { type: String },
       time: { type: Date },
       sentStatus: { type: Boolean },
       readStatus: { type: Boolean },
       attachments: { type: Array },

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