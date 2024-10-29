import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'assetsPath' })
export class AssetsPathPipe implements PipeTransform {

  transform(value: string): string {
    const basePath = window.location.origin;
    console.log({ value, basePath })
    return `${basePath}/${value}`;
  }

}
