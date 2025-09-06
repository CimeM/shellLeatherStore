import React from 'react';
import { MapPin, Sun, Flower, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const ProvencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium text-purple-800 dark:text-purple-200">
                  South of France
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Inspired by
                <span className="block text-purple-600 dark:text-purple-400">Provence</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                The timeless beauty, artisanal traditions, and natural elegance of Provence 
                infuse every piece we create, connecting you to centuries of French craftsmanship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg"
                  alt="Lavender fields in Provence"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
                  <Flower className="w-6 h-6" />
                  <span className="font-semibold">Lavande de Provence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Provence Means Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              The Soul of Provence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Provence isn't just a place—it's a way of life that celebrates simplicity, 
              authenticity, and the art of taking time to create something beautiful.
            </p>
          </motion.div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  From the rolling hills dotted with ancient olive trees to the vibrant markets 
                  filled with artisanal goods, Provence embodies a timeless elegance that has 
                  inspired artists, craftspeople, and dreamers for centuries.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  The region's rich history of craftsmanship, from traditional pottery in Vallauris 
                  to the famous textiles of Provence, creates an environment where quality and 
                  authenticity are not just valued—they're essential.
                </p>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Here, the pace of life allows for the careful attention to detail that mass 
                  production cannot match. It's in this setting that Shell Leather was born, 
                  drawing from the patient, methodical approach to craftsmanship that defines 
                  the region.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Every piece we create carries the essence of Provençal values: respect for 
                  natural materials, dedication to time-honored techniques, and an unwavering 
                  commitment to creating items that improve with age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provence Elements Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Elements That Inspire Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The colors, textures, and traditions of Provence guide our design philosophy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sun,
                title: "Golden Sunlight",
                description: "The warm, honey-colored light of Provence inspires our rich cognac and natural tan leather tones.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: Flower,
                title: "Lavender Fields",
                description: "Endless purple fields remind us of the beauty in simplicity and the power of natural fragrance.",
                color: "from-purple-400 to-indigo-500"
              },
              {
                icon: Palette,
                title: "Ochre Villages",
                description: "The earthy red and orange cliffs of Roussillon influence our warm, earthy color palette.",
                color: "from-red-400 to-orange-600"
              },
              {
                icon: MapPin,
                title: "Ancient Crafts",
                description: "Centuries-old artisanal traditions guide our commitment to quality and hand-finishing.",
                color: "from-green-400 to-teal-500"
              }
            ].map((element, index) => (
              <motion.div
                key={element.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white dark:bg-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${element.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <element.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {element.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {element.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Materials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Local Materials, Global Quality
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Provençal Leather Traditions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We source our leather from tanneries that have been operating in France for generations, 
                    ensuring that each hide meets the exacting standards of traditional French leather craft.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Natural Finishing Methods
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our finishing techniques use natural oils and waxes, many sourced locally, 
                    allowing the leather to breathe and develop its characteristic patina over time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Sustainable Practices
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Following Provençal values of respecting nature, we minimize waste and use 
                    environmentally conscious methods throughout our crafting process.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6069008/pexels-photo-6069008.jpeg"
                    alt="Traditional leather tools"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6069010/pexels-photo-6069010.jpeg"
                    alt="Leather crafting process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1152076/pexels-photo-1152076.jpeg"
                    alt="Finished leather goods"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg"
                    alt="Provence landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
              Bring Provence Home
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Each Shell Leather piece carries the essence of Provence—the warmth of the sun, 
              the fragrance of lavender, and the timeless beauty of artisanal tradition. 
              Discover how our Provençal-inspired leather goods can add authenticity and 
              elegance to your everyday life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200"
              >
                Shop Provence Collection
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-medium transition-all duration-200"
              >
                Learn Our Story
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProvencePage;