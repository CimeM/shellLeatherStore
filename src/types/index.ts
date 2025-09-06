export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  colors: string[];
  materials: string[];
  dimensions?: string;
  featured?: boolean;
}

export interface Discount {
  id: string;
  name: string;
  description: string;
  percentage: number;
  startDate: string;
  endDate: string;
  applicableProducts?: string[];
  isActive: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  customizations?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customerEmail: string;
  customerName: string;
  totalAmount: number;
  discountApplied?: Discount;
  timestamp: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
}