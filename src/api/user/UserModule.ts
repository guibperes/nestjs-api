import { Module } from '@nestjs/common';

import { UserService } from './UserService';
import { UserController } from './UserController';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
