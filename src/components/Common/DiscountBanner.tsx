import React from 'react';
import { X, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDiscounts } from '../../hooks/useDiscounts';

interface DiscountBannerProps {
  productId?: string;
  onClose?: () => void;
}

const DiscountBanner: React.FC<DiscountBannerProps> = ({ productId, onClose }) => {
  const { getActiveDiscountForProduct, discounts } = useDiscounts();
  
  const activeDiscount = productId 
    ? getActiveDiscountForProduct(productId)
    : discounts.find(d => d.isActive && new Date() >= new Date(d.startDate) && new Date() <= new Date(d.endDate));

  if (!activeDiscount) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 relative"
      >
        <div className="flex items-center justify-center space-x-2 text-sm font-medium">
          <Tag className="w-4 h-4" />
          <span>{activeDiscount.name}</span>
          <span className="hidden sm:inline">- {activeDiscount.description}</span>
          <span className="font-bold">{activeDiscount.percentage}% OFF</span>
        </div>
        
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors duration-200"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default DiscountBanner;