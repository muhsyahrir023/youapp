import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { ProfileSchema } from './schemas/profile.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema }]),
  ],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
