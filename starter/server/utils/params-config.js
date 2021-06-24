const { v4: uuidv4 } = require('uuid');


const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      Bucket: 'user-images-db0d8b0a-50d3-434f-9f9d-a9fda7e04781',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer
    };
  
    return imageParams;
  };


  module.exports = params;