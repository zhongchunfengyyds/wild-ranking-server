import { Module } from '@nestjs/common';
import { RankService } from './rank.service';
import { RankController } from './rank.controller';
import { RankList } from './rankList.entity';
import { Rank } from './rank.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Rank, RankList])],

  providers: [RankService],
  controllers: [RankController],
})
export class RankModule {}
