import { CodemirrorDirective } from './codemirror.directive';
import {ElementRef} from '@angular/core';

describe('CodemirrorDirective', () => {
  it('should create an instance', () => {
    const directive = new CodemirrorDirective(new ElementRef(''));
    expect(directive).toBeTruthy();
  });
});
