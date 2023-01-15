import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent {
    Produits =[
      {nom: "Banane", prix: 500},
      {nom: "pantalon", prix: 300},
      {nom: "chemise", prix: 900},
      {nom: "chaussetee", prix: 100}
    ]

    ProductPrix(prix:number) {
      if(prix > 300){
        return 'highlightDirective'
      }
      return 'Color'
    }

    ProductNom(nom:string) {
      return 'boldDirective'
    }
}
