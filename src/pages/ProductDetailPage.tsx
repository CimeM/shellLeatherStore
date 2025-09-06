import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { useDiscounts } from '../hooks/useDiscounts';
import DiscountBanner from '../components/Common/DiscountBanner';
import productsData from '../data/products.json';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { getActiveDiscountForProduct, calculateDiscountedPrice } = useDiscounts();
  
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = productsData.products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product not found
          </h2>
          <Link
            to="/products"
            className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
          >
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const discount = getActiveDiscountForProduct(product.id);
  const displayPrice = discount 
    ? calculateDiscountedPrice(product.price, discount)
    : product.price;

  // Set default color if not selected
  React.useEffect(() => {
    if (!selectedColor && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product.colors, selectedColor]);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, quantity);
    // You could add a toast notification here
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DiscountBanner productId={product.id} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            {/* Main Image */}
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImageIndex === index
                        ? 'border-amber-500'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm font-medium rounded-full mb-4">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    €{displayPrice.toFixed(0)}
                  </span>
                  {discount && (
                    <span className="text-xl text-gray-500 line-through">
                      €{product.price}
                    </span>
                  )}
                </div>
                
                {discount && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{discount.percentage}% OFF
                  </span>
                )}
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Colors */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Choose Color
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                      selectedColor === color
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                        : 'border-gray-300 dark:border-gray-600 hover:border-amber-300 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quantity
              </h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  -
                </button>
                <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              
              <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span className="hidden sm:inline">Save</span>
              </button>
              
              <button 
                onClick={handleShare}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Share2 className="w-5 h-5" />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Lifetime Warranty</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                    <RotateCcw className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Easy Returns</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            {(product.dimensions || product.materials) && (
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Product Details
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  {product.dimensions && (
                    <div>
                      <span className="font-medium">Dimensions:</span> {product.dimensions}
                    </div>
                  )}
                  {product.materials && (
                    <div>
                      <span className="font-medium">Materials:</span> {product.materials.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;