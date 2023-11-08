import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Rank } from './rank.entity';
import { RankList } from './rankList.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddRankDto, AddRankListDto } from './rank.dto';

@Injectable()
export class RankService {
  constructor(
    @InjectRepository(Rank)
    private readonly rankRepository: Repository<Rank>,
    @InjectRepository(RankList)
    private readonly rankListRepository: Repository<RankList>,
  ) {}

  async getRank() {
    const rank = await this.rankRepository.find();
    return Promise.all(
      rank.map(async (item) => {
        item.list = await this.getRankList(item.id);
        return item;
      }),
    );
  }

  getRankList(id: number) {
    return this.rankListRepository.findBy({ pid: id });
  }

  async addRank(body: AddRankDto) {
    const isHave = await this.rankRepository.findOneBy({ title: body.title });
    if (isHave) {
      return {
        statusCode: '400',
        message: '已存在',
      };
    } else {
      const data = await this.rankRepository.save(body);
      return {
        statusCode: '200',
        message: '添加成功',
        data,
      };
    }
  }

  async addRankList(body: AddRankListDto) {
    const pidHave = await this.rankRepository.findOneBy({ id: body.pid });

    if (!pidHave) {
      return {
        statusCode: '400',
        message: '排行榜不存在',
      };
    }
    const isHave = await this.rankListRepository.findOneBy({
      pid: body.pid,
      title: body.title,
    });

    if (isHave) {
      return {
        statusCode: '400',
        message: '已存在',
      };
    } else {
      const data = await this.rankListRepository.save(body);
      return {
        statusCode: '200',
        message: '添加成功',
        data,
      };
    }
  }
}
