import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Play, Shield, Zap, Globe } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Floating 3D Glass Elements */}
      <motion.div
        className="absolute top-32 left-[10%] w-32 h-32 bg-gradient-to-br from-blue-500/40 to-indigo-600/40 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl"
        style={{ 
          transformStyle: 'preserve-3d',
          boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)',
        }}
        animate={{
          rotateX: [0, 15, 0],
          rotateY: [0, 15, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-48 right-[15%] w-24 h-24 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 backdrop-blur-xl rounded-full border border-white/50 shadow-2xl"
        style={{ 
          transformStyle: 'preserve-3d',
          boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.5)',
        }}
        animate={{
          rotateZ: [0, 360],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-[20%] w-28 h-28 backdrop-blur-xl border border-white/50 shadow-2xl"
        style={{ 
          transformStyle: 'preserve-3d',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.3))',
          boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.5)',
        }}
        animate={{
          rotateY: [0, 360],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-48 right-[12%] w-20 h-20 bg-gradient-to-br from-indigo-500/40 to-blue-600/40 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl"
        style={{ 
          transformStyle: 'preserve-3d',
          boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.5)',
        }}
        animate={{
          rotateX: [0, 180, 360],
          rotateZ: [0, 180, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-blue-200/50 rounded-full px-6 py-3 shadow-lg shadow-blue-500/10">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-900 text-sm">Redefining Digital Excellence</span>
            <Sparkles className="w-4 h-4 text-blue-500" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-8xl lg:text-9xl mb-8 tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Next Generation
          <br />
          <span className="relative inline-block">
            Innovation
            <motion.div
              className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Experience unparalleled performance with our cutting-edge 3D platform.
          Transform your vision into reality with precision-engineered solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            className="group relative px-8 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl overflow-hidden shadow-xl shadow-blue-500/30"
            whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-3">
              <span>Get Started</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.button>

          <motion.button
            className="group px-8 py-5 bg-white/80 backdrop-blur-xl border border-blue-200/50 text-blue-900 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
              </div>
              <span>Watch Demo</span>
            </div>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20"
        >
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '500K+', label: 'Active Users' },
            { value: '150+', label: 'Countries' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* 3D Floating Card Showcase */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div 
            className="relative w-full max-w-4xl h-80"
            style={{ perspective: '2000px' }}
          >
            <motion.div
              className="absolute inset-0 bg-white/90 backdrop-blur-2xl rounded-3xl border border-blue-200/50 shadow-2xl p-8"
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.3)',
              }}
              animate={{ 
                rotateY: [0, 5, 0, -5, 0],
                rotateX: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Card content */}
              <div className="grid grid-cols-3 gap-6 h-full">
                {[
                  { icon: Shield, label: 'Enterprise Security', color: 'from-blue-500 to-indigo-500' },
                  { icon: Zap, label: 'Lightning Fast', color: 'from-cyan-500 to-blue-500' },
                  { icon: Globe, label: 'Global Scale', color: 'from-indigo-500 to-blue-600' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-blue-50/50 to-white/50 rounded-2xl p-6 border border-blue-100/50"
                      style={{ transform: `translateZ(${30 * (index + 1)}px)` }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm text-slate-700 text-center">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-tl from-indigo-400/20 to-transparent rounded-full blur-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
