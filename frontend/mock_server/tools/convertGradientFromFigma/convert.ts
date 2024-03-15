import { createLinearGradient } from './linearGradient';
import component from './obj.json';

component.fills.map((fill: any) => {
  if (fill.type == 'GRADIENT_LINEAR' && fill.visible != false) {
    let gradientStr = createLinearGradient(fill, component);
    console.log(gradientStr);
  }
});
