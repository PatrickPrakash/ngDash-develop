import { Module } from '@nestjs/common';
import { ImageUploaderService } from './image-uploader/image-uploader.service';

@Module({
  providers: [ImageUploaderService]
})
export class UploadModule {}
