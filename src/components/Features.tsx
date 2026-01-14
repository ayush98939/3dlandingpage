import { motion } from 'motion/react';
import { Layers, Cpu, Rocket, Shield, Zap, Globe, Database, Lock, Gauge, Cloud, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Layers,
    title: 'Advanced Architecture',
    description: 'Multi-layered system design with enterprise-grade scalability and performance optimization.',
    color: 'from-blue-500 to-indigo-600',
    gradient: 'from-blue-50 to-indigo-50',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Intelligence',
    description: 'Next-generation AI algorithms that optimize every aspect of your workflow automatically.',
    color: 'from-cyan-500 to-blue-600',
    gradient: 'from-cyan-50 to-blue-50',
  },
  {
    icon: Rocket,
    title: 'Blazing Performance',
    description: 'Optimized for speed with cutting-edge caching and real-time processing capabilities.',
    color: 'from-indigo-600 to-blue-700',
    gradient: 'from-indigo-50 to-blue-50',
  },
  {
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'Bank-level encryption with multi-factor authentication and compliance certifications.',
    color: 'from-blue-600 to-cyan-600',
    gradient: 'from-blue-50 to-cyan-50',
  },
  {
    icon: Database,
    title: 'Infinite Scalability',
    description: 'Auto-scaling infrastructure that grows with your needs without any configuration.',
    color: 'from-blue-500 to-indigo-500',
    gradient: 'from-blue-50 to-indigo-50',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Platform',
    description: 'Built on modern cloud infrastructure with 99.99% uptime guarantee and global CDN.',
    color: 'from-cyan-600 to-blue-500',
    gradient: 'from-cyan-50 to-blue-50',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXVal = ((y - centerY) / centerY) * -12;
    const rotateYVal = ((x - centerX) / centerX) * 12;

    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="perspective-1000"
      style={{ perspective: '1500px' }}
    >
      <motion.div
        className={`relative h-full bg-white/90 backdrop-blur-xl border border-blue-200/50 rounded-3xl p-8 cursor-pointer overflow-hidden shadow-xl transition-shadow duration-300 ${
          isHovered ? 'shadow-2xl shadow-blue-500/20' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Animated gradient background */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 rounded-3xl transition-opacity duration-500`}
          animate={{ opacity: isHovered ? 0.5 : 0 }}
        />

        {/* Glow effect on hover */}
        <div 
          className={`absolute -inset-1 bg-gradient-to-br ${feature.color} opacity-0 hover:opacity-10 rounded-3xl transition-opacity duration-300 blur-2xl`}
          style={{ transform: 'translateZ(-30px)' }}
        />

        {/* Icon with 3D effect and reflection */}
        <motion.div
          className="relative mb-6"
          style={{ transform: 'translateZ(50px)' }}
        >
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg relative`}>
            <Icon className="w-10 h-10 text-white relative z-10" />
            
            {/* Icon glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-50`} />
          </div>
          
          {/* Reflection effect */}
          <div 
            className="absolute top-full left-0 w-20 h-10 overflow-hidden opacity-20"
            style={{ transform: 'translateZ(40px) scaleY(-1)' }}
          >
            <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl`} />
          </div>
        </motion.div>

        {/* Content */}
        <div style={{ transform: 'translateZ(30px)' }}>
          <h3 className="text-2xl mb-4 text-slate-900">{feature.title}</h3>
          <p className="text-slate-600 leading-relaxed">{feature.description}</p>
        </div>

        {/* Decorative corner elements */}
        <div 
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full"
          style={{ transform: 'translateZ(-10px)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-tr-full"
          style={{ transform: 'translateZ(-10px)' }}
        />

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl"
          animate={{
            x: isHovered ? ['-200%', '200%'] : '-200%',
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ transform: 'translateZ(60px)' }}
        />
      </motion.div>
    </motion.div>
  );
}

export function Features() {
  return (
    <div className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 backdrop-blur-xl border border-blue-200/50 rounded-full shadow-lg">
            <Lock className="w-4 h-4 text-blue-600" />
            <span className="text-blue-900">Enterprise Features</span>
            <Gauge className="w-4 h-4 text-blue-600" />
          </div>
          
          <h2 
            className="text-6xl md:text-7xl mb-6 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Powerful Capabilities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade features engineered for scale, security, and exceptional performance
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section with 3D effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
          style={{ perspective: '1500px' }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-16 overflow-hidden shadow-2xl"
            style={{ transformStyle: 'preserve-3d' }}
            whileHover={{ rotateX: 2, rotateY: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-8 right-8 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              animate={{
                rotateZ: [0, 360],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ transform: 'translateZ(40px)' }}
            />

            <motion.div
              className="absolute bottom-8 left-8 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transform: 'translateZ(30px)' }}
            />

            <div className="relative z-10 text-center" style={{ transform: 'translateZ(50px)' }}>
              <h3 className="text-4xl md:text-5xl text-white mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join thousands of companies already leveraging our platform for unprecedented growth
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-10 py-5 bg-white text-blue-600 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-3 justify-center">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </motion.button>
                
                <motion.button
                  className="px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-2xl hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Sales
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}