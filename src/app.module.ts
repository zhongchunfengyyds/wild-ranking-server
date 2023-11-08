import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RankModule } from './rank/rank.module';
@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '42.193.120.189',
      port: 3306,
      username: 'wild-ranking',
      password: 'zhongchunfengyyds',
      database: 'wild-ranking',
      // entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    RankModule,
  ],
  providers: [AppService],
})
export class AppModule {}
