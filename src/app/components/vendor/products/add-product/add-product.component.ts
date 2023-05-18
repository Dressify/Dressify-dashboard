import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {
  category,
  CategoryList,
  gender,
  GenderList,
  Product,
  subCategory, SubCategoryList
} from "../../../../shared/interface/product/product";
import {VendorService} from "../../../../shared/services/vendor/vendor.service";
import {file} from "../../../../shared/data/icon/ico";

@Component({
  selector: 'app-create-admin',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  files2: File[] = [];
  product: Product

  Category: CategoryList[] = category
  SubCategory: SubCategoryList[] = subCategory
  Gender: GenderList[] = gender

  createProductForm: FormGroup;

  public validate = false;
  public show: boolean = false;
  public errors?: any = {}

  constructor(private fb:FormBuilder, private vendor: VendorService, private toastr: ToastrService) {
    this.createProductForm = this.fb.group({
      ProductName :['',Validators.required],
      Description :['',Validators.required],
      Price : ['',Validators.required],
      Quantity: [1, Validators.required],
      Sale: [0, Validators.required],
      Color: [null],
      Category: ['', Validators.required],
      SubCategory: [null],
      Type: ['', Validators.required],
      Photos: ['', Validators.required],
    });
  }
    
  ngOnInit(): void {
  }

  onSelect2(event: any) {
    this.files2.push(...event.addedFiles);
    this.createProductForm.controls['Photos'].setValue(this.files2)
  }

  onRemove2(event: any){
    this.files2.splice(this.files2.indexOf(event), 1);
    this.createProductForm.controls['Photos'].setValue(this.files2)
  }

  addInput(controlName: string, e:Event){
    // console.log((e.target as HTMLSelectElement).value)
    this.createProductForm.get(controlName)?.patchValue((e.target as HTMLInputElement).value)
}

  onSubmit(){
    this.validate = true;
    console.log(this.createProductForm)
    console.log(this.createProductForm.value)
    console.log(this.createProductForm.valid)
    if(this.createProductForm.valid){
      this.validate = false

      const formData = new FormData();
      formData.append('ProductName', this.createProductForm.value['ProductName']);
      formData.append('Description', this.createProductForm.value['Description']);
      formData.append('Price', this.createProductForm.value['Price']);
      formData.append('Quantity', this.createProductForm.value['Quantity']);
      formData.append('Sale', this.createProductForm.value['Sale']);
      formData.append('Color', this.createProductForm.value['Color']);
      formData.append('Category', this.createProductForm.value['Category']);
      formData.append('SubCategory', this.createProductForm.value['SubCategory']);
      formData.append('Type', this.createProductForm.value['Type']);

      const array: File[] = this.createProductForm.value['Photos']

      array.forEach(data =>{
        formData.append('Photos', data);
      })

      console.log(formData)

      this.vendor.createProduct(formData).subscribe(value => {
        console.log(value)
        this.errors = {}
        this.toastr.success("Product is Added successfully", "Success!", {
          timeOut: 3000,
          closeButton: true,
        });
      },error => {
        this.errors = {}

        if(error?.error?.errors)
          this.errors = error?.error?.errors;

        let errorLog: string = "failed"
        if(typeof(error?.error) == "string")
          errorLog = error?.error
        if(typeof(error?.error) == "object")
          errorLog = error?.error?.title

        this.toastr.error(errorLog, "Failed!", {
          timeOut: 3000,
          closeButton: true,
        });
      })
    }
  }

  reset(){
    this.files2 = []
    this.validate = false
    this.errors = {}
  }

  protected readonly gender = gender;
  protected readonly category = category;
  protected readonly subCategory = subCategory;
}
