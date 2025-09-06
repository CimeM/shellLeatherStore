import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../../types';
import { useDiscounts } from '../../hooks/useDiscounts';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { getActiveDiscountForProduct, calculateDiscountedPrice } = useDiscounts();
  const { addToCart } = useCart();
  const discount = getActiveDiscountForProduct(product.id);

  const displayPrice = discount 
    ? calculateDiscountedPrice(product.price, discount)
    : product.price;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.colors[0]);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={`group ${className}`}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
          {/* Image Container */}
          <div className="aspect-square overflow-hidden relative">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Discount Badge */}
            {discount && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                -{discount.percentage}%
              </div>
            )}

            {/* Quick Actions */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 space-y-2">
              <button
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                aria-label="Add to favorites"
              >
                <Heart className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={handleQuickAdd}
                className="p-2 bg-amber-500 text-white rounded-full shadow-md hover:shadow-lg hover:bg-amber-600 transition-all duration-200"
                aria-label="Quick add to cart"
              >
                <ShoppingBag className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
                {product.name}
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Colors */}
            <div className="flex items-center space-x-1 mb-4">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600"
                  style={{
                    backgroundColor: color.toLowerCase() === 'black' ? '#000' :
                                   color.toLowerCase() === 'brown' ? '#8B4513' :
                                   color.toLowerCase() === 'cognac' ? '#A0522D' :
                                   color.toLowerCase() === 'natural tan' ? '#D2B48C' :
                                   color.toLowerCase() === 'olive green' ? '#556B2F' :
                                   color.toLowerCase() === 'lavender' ? '#E6E6FA' :
                                   color.toLowerCase() === 'sage green' ? '#9CAF88' :
                                   '#D2B48C'
                  }}
                  title={color}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                €{displayPrice.toFixed(0)}
              </span>
              {discount && (
                <span className="text-sm text-gray-500 line-through">
                  €{product.price}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;