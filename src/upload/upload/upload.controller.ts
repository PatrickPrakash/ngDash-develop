import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageUploaderService } from '../image-uploader/image-uploader.service';

@Controller('upload')
export class UploadController {
  constructor(private imageUpload: ImageUploaderService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public uploadtoAWS(@UploadedFile() file: Express.Multer.File) {
    return this.imageUpload.uploadFile(file);
  }
}
