import { Injectable } from '@angular/core';
import { RegionSales, MonthlySales, ProductSales } from '../chart-data.model';
// Injectable - decarator that makes the class eligible to be used as a service."This class can be injected into components"

@Injectable({ providedIn: 'root' })     // This service is gloabally available

export class ChartDataService {

  // Func returns an array of objs of same structure of RegionSales[]
  getSalesByRegion(): RegionSales[] {
    return [
      { region: 'North', sales: 120 },
      { region: 'South', sales: 150 },
      { region: 'East', sales: 100 },
      { region: 'West', sales: 130 }
    ];
  }

  getMonthlySales(): MonthlySales[] {
    return [
      { month: 'Jan', dress: 30, cosmetics: 50, footwear: 60 },
      { month: 'Feb', dress: 70, cosmetics: 80, footwear: 45 },
      { month: 'Mar', dress: 55, cosmetics: 100, footwear: 90 },
      { month: 'Apr', dress: 80, cosmetics: 120, footwear: 70 },
      { month: 'May', dress: 30, cosmetics: 20, footwear: 80 }
    ];
  }

  getProductSales(): ProductSales[] {
    return [
      { product: 'Dresses', sales: 120 },
      { product: 'Cosmetics', sales: 180 },
      { product: 'Footwear', sales: 90 }
    ];
  }
}


// Services - used to store and share data across components
// This file - provides sales data for diff chart types-doughnut, line, bar