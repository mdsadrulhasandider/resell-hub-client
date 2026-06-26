"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiStar, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';

const products = [
  { id: 1, name: 'iPhone 13 Pro Max 256GB', location: 'New York, NY', rating: 4.8, price: 750, stock: 4, condition: 'New', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'MacBook Pro M1 2021', location: 'Los Angeles, CA', rating: 4.9, price: 1100, stock: 2, condition: 'Like New', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'IKEA KALLAX Shelf Unit', location: 'Chicago, IL', rating: 4.5, price: 80, stock: 3, condition: 'Good', image: 'https://images.unsplash.com/photo-1595514535415-ebad075be816?q=80&w=400&auto=format&fit=crop' },
  { id: 4, name: 'Honda Civic 2018 EX', location: 'Houston, TX', rating: 4.7, price: 14500, stock: 1, condition: 'Fair', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&auto=format&fit=crop' },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="bg-blue-500/10 text-blue-500 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">Featured</span>
            <h2 className="text-3xl font-bold text-base-content mt-3">Hot Deals Right Now ...</h2>
          </div>
          <Link href="/products" className="text-sm text-base-content/60 hover:text-blue-500 transition-colors flex items-center gap-1">
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={product.id}
              className="bg-base-100 rounded-2xl overflow-hidden border border-base-300 hover:border-primary/40 transition-colors group flex flex-col shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-base-200">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-base-100/80 backdrop-blur-sm text-green-600 text-xs font-bold px-2 py-1 rounded">
                  {product.condition}
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-base-content mb-2 line-clamp-1">{product.name}</h3>
                
                <div className="flex items-center gap-1 text-base-content/60 text-xs mb-3">
                  <FiMapPin />
                  <span>{product.location}</span>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <FiStar className="text-yellow-500 fill-yellow-500" size={14} />
                  <span className="text-sm font-medium text-base-content/80">{product.rating}</span>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-500">${product.price.toLocaleString()}</span>
                  <span className="text-xs text-base-content/50">Stock: {product.stock}</span>
                </div>

                <div className="flex gap-2 mt-5">
                  <Link href="/products" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-lg flex justify-center items-center gap-2 text-sm font-semibold transition-colors">
                    <FiShoppingCart /> View Deal
                  </Link>
                  <button className="p-2.5 rounded-lg border border-base-300 hover:bg-base-200 text-base-content/50 hover:text-pink-500 transition-colors">
                    <FiHeart size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
