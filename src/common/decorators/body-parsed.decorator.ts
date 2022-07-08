import { createParamDecorator } from '@nestjs/common';

// it is neccessary, cuz createFormData from client, build a primitive object and the new object data comes with [Object: null prototype], read more: https://stackoverflow.com/questions/56892048/file-upload-react-native-node-js-mongodb-multer-grid-fs
export const BodyParsed = createParamDecorator((data, req) => JSON.parse(JSON.stringify(req.body)))
