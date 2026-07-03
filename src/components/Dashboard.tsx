import { motion } from "motion/react";
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { TrendingUp, Users, Activity } from "lucide-react";

interface Prediction {
  id: string;
  name: string;
  airline: string;
  prediction: "satisfied" | "neutral" | "dissatisfied";
  confidence: number;
  timestamp: string;
}

interface DashboardProps {
  predictions: Prediction[];
}

export function Dashboard({ predictions }: DashboardProps) {
  // Calculate statistics
  const stats = {
    total: predictions.length,
    satisfied: predictions.filter((p) => p.prediction === "satisfied").length,
    neutral: predictions.filter((p) => p.prediction === "neutral").length,
    dissatisfied: predictions.filter((p) => p.prediction === "dissatisfied").length,
  };

  const satisfactionRate = stats.total > 0 ? ((stats.satisfied / stats.total) * 100).toFixed(1) : "0";

  // Prepare chart data
  const pieData = [
    { name: "Satisfied", value: stats.satisfied, color: "#5a8a5a" },
    { name: "Neutral", value: stats.neutral, color: "#d4a54a" },
    { name: "Dissatisfied", value: stats.dissatisfied, color: "#c94a4a" },
  ];

  // Airline distribution
  const airlineData = predictions.reduce((acc, pred) => {
    const airline = pred.airline || 'unknown';
    const existing = acc.find((item) => item.name === airline);
    if (existing) {
      existing.satisfied += pred.prediction === "satisfied" ? 1 : 0;
      existing.neutral += pred.prediction === "neutral" ? 1 : 0;
      existing.dissatisfied += pred.prediction === "dissatisfied" ? 1 : 0;
    } else {
      acc.push({
        name: airline,
        satisfied: pred.prediction === "satisfied" ? 1 : 0,
        neutral: pred.prediction === "neutral" ? 1 : 0,
        dissatisfied: pred.prediction === "dissatisfied" ? 1 : 0,
      });
    }
    return acc;
  }, [] as { name: string; satisfied: number; neutral: number; dissatisfied: number }[]);

  return (
    <section id="dashboard" className="py-20 px-4 bg-gradient-to-b from-[#f5f7f5] to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-bold text-[#1f2d1f]">
            Analytics Dashboard
          </h2>
          <p className="text-lg text-[#3a4a3a] font-medium">Real-time satisfaction insights and trends</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-white border-2 border-[#6b8e6b]/20 shadow-xl card-3d"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6b8e6b] to-[#5a7a5a] flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-[#5a8a5a]" />
            </div>
            <p className="text-sm text-[#3a4a3a] mb-1 font-bold">Total Predictions</p>
            <p className="text-3xl font-bold text-[#1f2d1f]">{stats.total}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white border-2 border-[#6b8e6b]/20 shadow-xl card-3d"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5a8a5a] to-[#4a7a4a] flex items-center justify-center shadow-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-[#5a8a5a]" />
            </div>
            <p className="text-sm text-[#3a4a3a] mb-1 font-bold">Satisfaction Rate</p>
            <p className="text-3xl font-bold text-[#1f2d1f]">{satisfactionRate}%</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-white border-2 border-[#6b8e6b]/20 shadow-xl card-3d"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7a9a7a] to-[#6b8e6b] flex items-center justify-center shadow-lg">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-[#5a8a5a]" />
            </div>
            <p className="text-sm text-[#3a4a3a] mb-1 font-bold">Total Airlines</p>
            <p className="text-3xl font-bold text-[#1f2d1f]">5</p>
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-2xl bg-white border-2 border-[#6b8e6b]/20 shadow-xl"
          >
            <h3 className="text-xl mb-6 font-bold text-[#1f2d1f]">Satisfaction Distribution</h3>
            {stats.total > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '2px solid #6b8e6b', borderRadius: '8px', fontWeight: '600' }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-[#5a6a5a] text-base font-semibold">
                No predictions yet
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 rounded-2xl bg-white border-2 border-[#6b8e6b]/20 shadow-xl"
          >
            <h3 className="text-xl mb-6 font-bold text-[#1f2d1f]">Airlines Performance</h3>
            {airlineData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={airlineData}>
                  <XAxis dataKey="name" stroke="#3a4a3a" style={{ fontSize: '14px', fontWeight: '600' }} />
                  <YAxis stroke="#3a4a3a" style={{ fontSize: '14px', fontWeight: '600' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff', 
                      border: '2px solid #6b8e6b',
                      borderRadius: '8px',
                      fontWeight: '600'
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '14px', fontWeight: '600' }} />
                  <Bar dataKey="satisfied" stackId="a" fill="#5a8a5a" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="neutral" stackId="a" fill="#d4a54a" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="dissatisfied" stackId="a" fill="#c94a4a" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-[#5a6a5a] text-base font-semibold">
                No predictions yet
              </div>
            )}
          </motion.div>
        </div>

        {/* Recent Predictions Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-6 rounded-2xl bg-white border-2 border-[#6b8e6b]/20 shadow-xl overflow-hidden"
        >
          <h3 className="text-xl mb-6 font-bold text-[#1f2d1f]">Recent Predictions</h3>
          <div className="overflow-x-auto">
            {predictions.length > 0 ? (
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#6b8e6b]/20">
                    <th className="text-left py-3 px-4 text-sm text-[#1f2d1f] font-bold">Name</th>
                    <th className="text-left py-3 px-4 text-sm text-[#1f2d1f] font-bold">Airline</th>
                    <th className="text-left py-3 px-4 text-sm text-[#1f2d1f] font-bold">Prediction</th>
                    <th className="text-left py-3 px-4 text-sm text-[#1f2d1f] font-bold">Confidence</th>
                    <th className="text-left py-3 px-4 text-sm text-[#1f2d1f] font-bold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {predictions.slice().reverse().map((pred) => (
                    <tr key={pred.id} className="border-b border-[#6b8e6b]/10 hover:bg-[#f5f7f5] transition-colors">
                      <td className="py-3 px-4 text-[#1f2d1f] font-semibold">{pred.name}</td>
                      <td className="py-3 px-4 text-[#1f2d1f] capitalize font-semibold">{pred.airline}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                            pred.prediction === "satisfied"
                              ? "bg-[#5a8a5a]/10 text-[#4a7a4a] border-2 border-[#5a8a5a]/40"
                              : pred.prediction === "neutral"
                              ? "bg-[#d4a54a]/10 text-[#c4954a] border-2 border-[#d4a54a]/40"
                              : "bg-[#c94a4a]/10 text-[#b93a3a] border-2 border-[#c94a4a]/40"
                          }`}
                        >
                          {pred.prediction}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[#1f2d1f] font-semibold">{pred.confidence}%</td>
                      <td className="py-3 px-4 text-[#3a4a3a] text-sm font-medium">{pred.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="py-12 text-center text-[#5a6a5a] text-base font-semibold">
                No predictions yet. Submit a prediction to see results here.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
