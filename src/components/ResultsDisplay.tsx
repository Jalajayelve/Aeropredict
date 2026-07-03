import { motion } from "motion/react";
import { Smile, Frown, AlertCircle } from "lucide-react";

interface ResultsDisplayProps {
  result: {
    prediction: "satisfied" | "neutral" | "dissatisfied";
    confidence: number;
    name: string;
  } | null;
}

export function ResultsDisplay({ result }: ResultsDisplayProps) {
  if (!result) return null;

  const config = {
    satisfied: {
      icon: Smile,
      color: "from-[#5a8a5a] to-[#4a7a4a]",
      shadow: "shadow-[#5a8a5a]/30",
      bg: "bg-[#5a8a5a]/10",
      border: "border-[#5a8a5a]/40",
      text: "Satisfied",
      textColor: "text-[#4a7a4a]",
    },
    neutral: {
      icon: AlertCircle,
      color: "from-[#d4a54a] to-[#c4954a]",
      shadow: "shadow-[#d4a54a]/30",
      bg: "bg-[#d4a54a]/10",
      border: "border-[#d4a54a]/40",
      text: "Neutral",
      textColor: "text-[#c4954a]",
    },
    dissatisfied: {
      icon: Frown,
      color: "from-[#c94a4a] to-[#b93a3a]",
      shadow: "shadow-[#c94a4a]/30",
      bg: "bg-[#c94a4a]/10",
      border: "border-[#c94a4a]/40",
      text: "Dissatisfied",
      textColor: "text-[#b93a3a]",
    },
  };

  const { icon: Icon, color, shadow, bg, border, text, textColor } = config[result.prediction];

  return (
    <section className="py-12 px-4 bg-[#f5f7f5]">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`p-8 rounded-3xl bg-white border-2 ${border} shadow-2xl ${shadow}`}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${color} ${shadow} mb-6`}
            >
              <Icon className="w-12 h-12 text-white" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl mb-2 font-bold text-[#1f2d1f]"
            >
              Prediction for {result.name}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`inline-block px-6 py-3 rounded-full ${bg} border-2 ${border} mb-4`}
            >
              <p className={`text-2xl ${textColor} font-bold`}>{text}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <p className="text-sm text-[#3a4a3a] mb-2 font-bold">Confidence Level</p>
              <div className="w-full bg-[#e8ede8] rounded-full h-3 overflow-hidden border border-[#6b8e6b]/20">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${result.confidence}%` }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className={`h-full bg-gradient-to-r ${color} rounded-full`}
                />
              </div>
              <p className="text-xl mt-2 font-bold text-[#1f2d1f]">{result.confidence}%</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
