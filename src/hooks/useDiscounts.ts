import { useState, useEffect } from 'react';
import { Discount } from '../types';
import productsData from '../data/products.json';

export const useDiscounts = () => {
  const [discounts, setDiscounts] = useState<Discount[]>([]);

  useEffect(() => {
    setDiscounts(productsData.discounts);
  }, []);

  const getActiveDiscountForProduct = (productId: string): Discount | null => {
    const now = new Date();
    
    return discounts.find(discount => {
      if (!discount.isActive) return false;
      
      const startDate = new Date(discount.startDate);
      const endDate = new Date(discount.endDate);
      
      if (now < startDate || now > endDate) return false;
      
      if (discount.applicableProducts) {
        return discount.applicableProducts.includes(productId);
      }
      
      return true;
    }) || null;
  };

  const calculateDiscountedPrice = (originalPrice: number, discount: Discount): number => {
    return originalPrice - (originalPrice * discount.percentage / 100);
  };

  return {
    discounts,
    getActiveDiscountForProduct,
    calculateDiscountedPrice
  };
};