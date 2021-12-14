import { Module } from '@nestjs/common';
import { ImageUploaderService } from './image-uploader/image-uploader.service';
import { UploadController } from './upload/upload.controller';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

@Module({
  providers: [ImageUploaderService],
  controllers: [UploadController],
})
export class UploadModule {}
