import { motion } from "motion/react";
import { Sparkles, TrendingUp, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#f5f7f5] to-white">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6b8e6b]/5 via-[#b8c5b8]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Removed AI badge as requested */}

          <h1 className="text-5xl md:text-7xl mb-6 font-bold leading-tight text-[#1f2d1f]">
            Airline Customer Satisfaction Prediction
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#3a4a3a] font-medium">
            Advanced machine learning model to predict customer satisfaction based on travel experience metrics
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl bg-white border border-[#6b8e6b]/20 shadow-xl card-3d"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6b8e6b] to-[#5a7a5a] flex items-center justify-center mb-4 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#1f2d1f]">Advanced</h3>
              <p className="text-sm text-[#5a6a5a] font-medium">ML Model</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl bg-white border border-[#6b8e6b]/20 shadow-xl card-3d"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7a9a7a] to-[#6b8e6b] flex items-center justify-center mb-4 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#1f2d1f]">Real-time</h3>
              <p className="text-sm text-[#5a6a5a] font-medium">Instant Predictions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-6 rounded-2xl bg-white border border-[#6b8e6b]/20 shadow-xl card-3d"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5a8a5a] to-[#4a7a4a] flex items-center justify-center mb-4 shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#1f2d1f]">5 Airlines</h3>
              <p className="text-sm text-[#5a6a5a] font-medium">Global Coverage</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
