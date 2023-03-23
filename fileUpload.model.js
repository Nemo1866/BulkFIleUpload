module.exports = (sequelize, DataTypes) => {
  const fileUpload = sequelize.define('fileUpload', {
      filename: {
          type: DataTypes.TEXT,
      },
      mimetype: {
          type: DataTypes.TEXT,
      },
      encoding: {
          type: DataTypes.TEXT,
      },
      originalname: {
          type: DataTypes.TEXT,
      },size:{
        type:DataTypes.INTEGER,
      }
  }, {
          freezeTableName: true,
          tableName: 'fileUpload',
          timestamps: false
      });
      return fileUpload;
  }