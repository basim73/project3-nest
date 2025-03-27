import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-productview',
  imports: [],
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.scss'
})
export class ProductviewComponent {
  products: any;
constructor(private route: ActivatedRoute, private apiService:ApiserviceService) { }
  ngOnInit() {
    const getProductsById = this.route.snapshot.paramMap.get('id');
    if(getProductsById){
      this.apiService.getProductsById(getProductsById).subscribe((data: any) => {
        this.products = data;
      })
    }
}}
