import { Pipe, PipeTransform } from '@angular/core'
import { IBrewery } from '../brewery.interface'

@Pipe({
  name: 'filterBreweries'
})
export class FilterBreweriesPipe implements PipeTransform {

  transform(breweries: IBrewery[], term: string): IBrewery[] {
    if (!term.trim()) {
      return breweries
    }
    return breweries.filter(brewery => brewery.name.toLowerCase().includes(term.toLowerCase()))
  }
}
