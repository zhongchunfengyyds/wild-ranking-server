import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { RankService } from './rank.service';
import { AddRankDto, AddRankListDto } from './rank.dto';
@Controller('rank')
export class RankController {
  // private readonly rankService: RankService;
  constructor(private readonly rankService: RankService) {}

  @Get('getRankList')
  getRankList(@Query('id') id: number) {
    return this.rankService.getRankList(id);
  }

  @Get('getRank')
  getRank() {
    return this.rankService.getRank();
  }

  @Post('addRank')
  addRank(@Body() body: AddRankDto) {
    return this.rankService.addRank(body);
  }
  @Post('addRankList')
  addRankList(@Body() body: AddRankListDto) {
    return this.rankService.addRankList(body);
  }
}
