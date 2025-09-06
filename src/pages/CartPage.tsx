import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useDiscounts } from '../hooks/useDiscounts';

const CartPage: React.FC = () => {
  const { state, updateQuantity, removeFromCart } = useCart();
  const { currentUser } = useAuth();
  const { getActiveDiscountForProduct, calculateDiscountedPrice } = useDiscounts();
  const navigate = useNavigate();

  const calculateItemTotal = (item: any) => {
    const discount = getActiveDiscountForProduct(item.product.id);
    const price = discount ? calculateDiscountedPrice(item.product.price, discount) : item.product.price;
    return price * item.quantity;
  };

  const totalAmount = state.items.reduce((sum, item) => sum + calculateItemTotal(item), 0);

  const handleCheckout = () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    navigate('/checkout');
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Discover our handcrafted leather goods and add them to your cart
          </p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            <span>Shop Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link
            to="/products"
            className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Shopping Cart ({state.items.length} {state.items.length === 1 ? 'item' : 'items'})
              </h2>

              <div className="space-y-6">
                <AnimatePresence>
                  {state.items.map((item) => {
                    const discount = getActiveDiscountForProduct(item.product.id);
                    const price = discount ? calculateDiscountedPrice(item.product.price, discount) : item.product.price;
                    const itemTotal = calculateItemTotal(item);

                    return (
                      <motion.div
                        key={`${item.product.id}-${item.selectedColor}`}
                        initial={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        {/* Product Image */}
                        <div className="w-20 h-20 flex-shrink-0">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-grow min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                            {item.product.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Color: {item.selectedColor}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">
                              €{price.toFixed(0)}
                            </span>
                            {discount && (
                              <>
                                <span className="text-sm text-gray-500 line-through">
                                  €{item.product.price}
                                </span>
                                <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded text-xs font-medium">
                                  -{discount.percentage}% OFF
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                          >
                            <Minus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </button>
                          <span className="w-8 text-center font-medium text-gray-900 dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                          >
                            <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </button>
                        </div>

                        {/* Item Total */}
                        <div className="text-right min-w-0">
                          <p className="text-lg font-bold text-gray-900 dark:text-white">
                            €{itemTotal.toFixed(0)}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200 mt-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal ({state.items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>€{totalAmount.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">Free</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>€{totalAmount.toFixed(0)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{currentUser ? 'Proceed to Checkout' : 'Login to Checkout'}</span>
              </button>

              {!currentUser && (
                <p className="text-gray-500 dark:text-gray-400 text-sm text-center mt-4">
                  Please login to proceed with your purchase
                </p>
              )}

              <div className="mt-6 text-center">
                <Link
                  to="/products"
                  className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 font-medium transition-colors duration-200"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;