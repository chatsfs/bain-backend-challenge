import { PaginationQueryDto } from '../dto';

export class FindAllQueryDto extends PaginationQueryDto {
  filter?: string;
  active?: number;
  isActive?: boolean;
}
