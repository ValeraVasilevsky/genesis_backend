import { IEssence, TEssence } from '../IEssence';

export class CreateEssenceDto implements IEssence {
  title: string;
  type: TEssence;
}
