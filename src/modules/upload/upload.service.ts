import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Upload } from './entities/upload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(Upload)
    private readonly uploadModel: Repository<Upload>,
  ) {}
  create(createUploadDto: CreateUploadDto) {
    console.log("payload", createUploadDto)
    return 'This action adds a new upload';
  }
}
