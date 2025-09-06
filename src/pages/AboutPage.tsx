import React from 'react';
import { Heart, Award, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  Our Story
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Crafted with
                <span className="block text-amber-600 dark:text-amber-400">Passion & Purpose</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Born from a love of traditional craftsmanship and the timeless beauty of Provence, 
                Shell Leather represents the journey of a single artisan dedicated to creating 
                exceptional leather goods by hand.
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
                  src="https://images.pexels.com/photos/6069008/pexels-photo-6069008.jpeg"
                  alt="Leather crafting workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gray-900 dark:text-white">
              The Beginning of Shell Leather
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  What started as a personal passion for leather working has blossomed into Shell Leather, 
                  a small but growing business rooted in the artisanal traditions of Provence. 
                  Every piece begins with a vision and ends with a product that tells a story.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  As a solo leather crafter, I believe in the beauty of imperfection and the character 
                  that comes from handmade goods. Each stitch is placed with intention, each cut made 
                  with care, and each piece is a reflection of dedication to quality craftsmanship.
                </p>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Working from a small studio nestled in the heart of Provence, I draw inspiration 
                  from the rolling lavender fields, ancient olive groves, and the rich artisanal 
                  heritage that surrounds me. This is more than just leather working – it's a 
                  way of preserving tradition while creating something new.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Every order is a personal commitment. Since each piece is made to order, 
                  please allow time for your item to be crafted with the care it deserves. 
                  Good things truly do take time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our core values guide every decision and every stitch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Handmade with Love",
                description: "Every piece is crafted by hand with genuine care and attention to detail, ensuring each item is unique and special."
              },
              {
                icon: Award,
                title: "Quality Materials",
                description: "We use only the finest full-grain leather and premium materials that age beautifully and last for generations."
              },
              {
                icon: Users,
                title: "Personal Touch",
                description: "As a growing business, we maintain personal relationships with our customers and take pride in exceeding expectations."
              },
              {
                icon: MapPin,
                title: "Provence Heritage",
                description: "Our work is deeply inspired by the artisanal traditions and natural beauty of the South of France."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white dark:bg-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Our Crafting Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From raw materials to finished masterpiece, every step is done with care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Select Premium Leather",
                description: "We carefully source full-grain leather from trusted suppliers, choosing only the finest hides that will develop beautiful patina over time."
              },
              {
                step: "02",
                title: "Hand Cut & Shape",
                description: "Each pattern is traced and cut by hand, ensuring precision while maintaining the natural character of the leather."
              },
              {
                step: "03",
                title: "Traditional Stitching",
                description: "Using saddle stitch technique and waxed cotton thread, we create strong, lasting seams that are both functional and beautiful."
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Thank you for supporting small business and traditional craftsmanship. 
              Together, we're keeping the art of leather working alive while creating 
              beautiful, functional pieces that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@shell.rivieraapps.com"
                className="inline-flex items-center justify-center bg-white text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200"
              >
                Get in Touch
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg font-medium transition-all duration-200"
              >
                Shop Our Collection
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;