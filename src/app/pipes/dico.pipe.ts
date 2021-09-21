import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dico'
})
export class DicoPipe implements PipeTransform {

  transform(value: string): any {
    switch (value.toLocaleLowerCase()) {
      case "uvs":
        return "Université Virtuelle du Sénégal";
        // break;
      case "ugb":
        return "Université Gaston Berger de Saint-Louis du Sénégal";
        // break;
      case "uidt":
        return "Université Iba Der THIAM de THIES du Sénégal";
        // break;
      case "uasz":
        return "Université Assane SECK de Zinguinchor du Sénégal";
        // break;
      case "uam":
        return "Université Amadou  Moctar MBOW du Sénégal";
        // break;
      case "ussein":
        return "Université du Sine Saloum El-Hâdj Ibrahima NIASS du Sénégal";
        // break;
      default: return value;
        // break;
    }
  }

}
