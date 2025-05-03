export interface RegionSales {          // Doughnut chart
    region: string;
    sales: number;
}
  
export interface MonthlySales {         // Step-line chart
    month: string;
    dress: number;
    cosmetics: number;
    footwear: number;
}
  
export interface ProductSales {         // Bar chart
    product: string;
    sales: number;
}


// This file defines the data model/ describes the structure of data

// interface - what objects it holds and what are its types

// export - allows this interface to be used in other files