import { IsNotEmpty } from 'class-validator';
export class AddRankDto {
  @IsNotEmpty()
  title: string;
}

export class AddRankListDto {
  @IsNotEmpty()
  pid: number;

  @IsNotEmpty()
  title: string;
}
