import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  getPrice(price: number,discount:number){
    return price - price*(discount/100);
  }
  products: {
    brand_name: string,
    description: string,
    rating : string,
    price: number,
    discount: number,
    image_url: string
  }[] = [
    {
      brand_name: "Roadster",
      description: "Men White Classic Regular Fit Cotton Casual Shirt",
      rating: "4.1",
      price: 500,
      discount: 20,
      image_url: "assets/images/pic1.jpg"
    },
    {
      brand_name: "Levi's",
      description: "men Blue Regular Fit Mid-Rise Clean Look Stretchable Jeans",
      rating: "4.1",
      price: 1500,
      discount: 10,
      image_url: "assets/images/pic2.jpg"
    },
    {
      brand_name: "Nike",
      description: "Men's Black Running Shoes",
      rating: "4.1",
      price: 2500,
      discount: 15,
      image_url: "assets/images/pic1.jpg"
    },
    {
      brand_name: "Adidas",
      description: "Unisex Black & White Striped Sports T-Shirt",
      rating: "4.1",
      price: 1200,
      discount: 25,
      image_url: "assets/images/pic1.jpg"
    },
    {
      brand_name: "Puma",
      description: "Men's Grey Joggers",
      rating: "4.1",
      price: 1800,
      discount: 20,
      image_url: "assets/images/pic1.jpg"
    },
    {
      brand_name: "Zara",
      description: "Women's Red Floral Print Dress",
      rating: "4.1",
      price: 2000,
      discount: 20,
      image_url: "assets/images/pic1.jpg"
    },
    {
      brand_name: "H&M",
      description: "Men's White Graphic Print T-Shirt",
      rating: "4.1",
      price: 800,
      discount: 30,
      image_url: "assets/images/pic1.jpg"
    },
    {
      brand_name: "Gucci",
      description: "Women's Black Leather Handbag",
      rating: "4.1",
      price: 3500,
      discount: 5,
      image_url: "assets/images/pic1.jpg"
    },
    {
      brand_name: "Under Armour",
      description: "Men's Blue Sports Shorts",
      rating: "4.1",
      price: 900,
      discount: 10,
      image_url: "assets/images/pic1.jpg"
    },
    
  ];
  
  products_details: {
    brand_name: string,
    description: string,
    rating: string,
    price: number,
    discount: number,
    image_url1: string,
    image_url2: string,
    image_url3: string,
    image_url4: string,
    size : string[]
  }[] = [
    {
      brand_name: "Roadster",
      description: "Men White Classic Regular Fit Cotton Casual Shirt",
      rating: "4.1",
      price: 500,
      discount: 20,
      image_url1: "assets/images/pic1.jpg",
      image_url2: "assets/images/pic1.jpg",
      image_url3: "assets/images/pic1.jpg",
      image_url4: "assets/images/pic1.jpg",
      size: ["S", "M", "L", "XL"] // example sizes

    },
  ];
}
