import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-admin',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  files2: File[] = [];

  constructor() { }
    
  ngOnInit(): void {
  }

  onSelect2(event: any) {
    this.files2.push(...event.addedFiles);
  }

  onRemove2(event: any){
    this.files2.splice(this.files2.indexOf(event), 1);
  }

}
