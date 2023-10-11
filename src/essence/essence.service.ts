import { Injectable } from '@nestjs/common';
import { CreateEssenceDto } from './dto/create-essence.dto';

import { http } from '../api/http';

@Injectable()
export class EssenceService {
  async createEssence({ title, type }: CreateEssenceDto) {
    const { data } = await http.post(`api/v4/${type}`, [{ name: title }]);

    return data;
  }
}
