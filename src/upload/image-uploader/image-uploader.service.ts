import { Injectable } from '@nestjs/common';
import { S3Client } from '@aws-sdk/client-s3';

@Injectable()
export class ImageUploaderService {
  AWS_S3_BUCKET = process.env.S3_BUCKET;
  s3Client = new S3Client({ region: 'us-east-1' });

  async uploadImage(file: any): Promise<any> {
    const urlKey = `${Date.now()}--${file.originalname}`;
    const params = {
      Body: file.buffer,
      Bucket: this.AWS_S3_BUCKET,
      Key: urlKey,
    };
  }
}
