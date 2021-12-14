/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const REGION = 'us-east-1';

@Injectable()
export class ImageUploaderService {
  AWS_S3_BUCKET = 'ngdash-profile-image-bucket';
  s3Client = new S3Client({ region: REGION });

  async uploadFile(file: Express.Multer.File) {
    let r = (Math.random() + 1).toString(36).substring(7);
    const bucketParms = {
      Bucket: 'ngdash-profile-image-bucket',
      Key: `${r}--${file.originalname}`,
      Body: file.buffer,
    };

    const data = await this.s3Client
      .send(new PutObjectCommand(bucketParms))
      .then((response) => {
        console.log(response);
        return `https://${bucketParms.Bucket}.s3.amazonaws.com/${bucketParms.Key}`;
      })
      .catch((error) => {
        console.log(error);
      });

    return data;
  }
}
