import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

export function Footer() {
  const socials = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const links = {
    product: ['Features', 'Pricing', 'Documentation', 'Changelog', 'API Reference'],
    company: ['About', 'Blog', 'Careers', 'Press Kit', 'Contact'],
    resources: ['Community', 'Help Center', 'Partners', 'Status', 'Terms'],
  };

  return (
    <footer className="relative py-20 px-6 border-t border-blue-200/50 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 relative overflow-hidden shadow-xl">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-blue-100 mb-8">
                Get the latest updates, news, and exclusive insights delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <motion.button
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2 justify-center">
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="text-3xl mb-4"
                style={{
                  background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Innovation
              </div>
              <p className="text-slate-600 max-w-sm mb-6 leading-relaxed">
                Empowering businesses with next-generation technology solutions.
                Building the future, one innovation at a time.
              </p>
              
              {/* Trust badges */}
              <div className="flex gap-3">
                {['ISO 27001', 'SOC 2', 'GDPR'].map((badge) => (
                  <div 
                    key={badge}
                    className="px-3 py-1 bg-blue-50 border border-blue-200/50 rounded-lg text-xs text-blue-700"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items], categoryIndex) => (
            <div key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h4 className="text-slate-900 mb-4 capitalize">{category}</h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a 
                        href="#" 
                        className="text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                      >
                        <span>{item}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-blue-200/50 gap-6"
        >
          <p className="text-slate-500 text-sm">
            © 2026 Innovation Platform. All rights reserved.
          </p>

          <div className="flex gap-3">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 bg-white border border-blue-200/50 rounded-xl flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-lg transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
    </footer>
  );
}
