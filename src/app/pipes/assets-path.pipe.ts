import { Pipe, PipeTransform } from '@angular/core';
import { BASE_URL_ASSETS } from '../enviroments/prod.env';

@Pipe({ name: 'assetsPath' })
export class AssetsPathPipe implements PipeTransform {

  transform(value: string): string {
    const basePath = BASE_URL_ASSETS;
    return `${basePath}/${value}`;
  }

}
