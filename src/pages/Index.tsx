import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell 
} from 'recharts';
import { ArrowUpRight, ArrowDownRight, Users, Eye, MousePointerClick, Clock } from 'lucide-react';

const COLORS = ['#6366F1', '#818CF8', '#A5B4FC', '#C7D2FE'];

// Sample data for charts
const visitorData = [
  { name: 'Mon', visitors: 2400, pageViews: 4200 },
  { name: 'Tue', visitors: 1398, pageViews: 3000 },
  { name: 'Wed', visitors: 9800, pageViews: 12000 },
  { name: 'Thu', visitors: 3908, pageViews: 5000 },
  { name: 'Fri', visitors: 4800, pageViews: 6000 },
  { name: 'Sat', visitors: 3800, pageViews: 4000 },
  { name: 'Sun', visitors: 4300, pageViews: 4800 },
];

const bounceRateData = [
  { name: 'A', value: 65 },
  { name: 'B', value: 35 },
];

const conversionData = [
  { name: 'Jan', conversions: 400 },
  { name: 'Feb', conversions: 300 },
  { name: 'Mar', conversions: 500 },
  { name: 'Apr', conversions: 780 },
  { name: 'May', conversions: 890 },
  { name: 'Jun', conversions: 1290 },
];

const Analytics = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10
      },
    }),
  };

  const metrics = [
    {
      title: "Total Visitors",
      value: "24,321",
      change: "+12%",
      positive: true,
      icon: Users,
      color: "text-dashboard-analytics"
    },
    {
      title: "Page Views",
      value: "45,762",
      change: "+8%",
      positive: true,
      icon: Eye,
      color: "text-dashboard-analytics"
    },
    {
      title: "Click Rate",
      value: "12.5%",
      change: "-2%",
      positive: false,
      icon: MousePointerClick,
      color: "text-dashboard-analytics"
    },
    {
      title: "Avg. Session",
      value: "3m 24s",
      change: "+18%",
      positive: true,
      icon: Clock,
      color: "text-dashboard-analytics"
    },
  ];

  return (
    <DashboardLayout>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
      >
        <motion.h1 
          className="text-3xl font-bold"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Analytics Dashboard
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Track your key metrics and user engagement in real-time
        </motion.p>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <Card className="overflow-hidden bg-secondary border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <motion.p 
                      className="text-sm text-muted-foreground"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {metric.title}
                    </motion.p>
                    <motion.h3 
                      className="text-2xl font-bold mt-1"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {metric.value}
                    </motion.h3>
                    <motion.div 
                      className={`flex items-center mt-1 ${metric.positive ? 'text-emerald-500' : 'text-rose-500'}`}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {metric.positive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                      <span className="text-sm ml-1">{metric.change} from last week</span>
                    </motion.div>
                  </div>
                  <motion.div 
                    className={`p-3 rounded-full bg-secondary border border-border ${metric.color}`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <metric.icon size={24} />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.4, 
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          whileHover={{ 
            scale: 1.01,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
        >
          <Card className="h-full bg-secondary border-none shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Visitors & Page Views</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={visitorData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#262626', borderColor: '#333' }} 
                  />
                  <Legend />
                  <Line type="monotone" dataKey="visitors" stroke="#6366F1" strokeWidth={2} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="pageViews" stroke="#818CF8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.5, 
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          whileHover={{ 
            scale: 1.01,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
        >
          <Card className="h-full bg-secondary border-none shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Monthly Conversions</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#262626', borderColor: '#333' }} 
                  />
                  <Bar dataKey="conversions" fill="#6366F1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.6, 
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          whileHover={{ 
            scale: 1.01,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
        >
          <Card className="h-full bg-secondary border-none shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Bounce Rate</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={bounceRateData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  >
                    {bounceRateData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#262626', borderColor: '#333' }} 
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.7, 
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          whileHover={{ 
            scale: 1.01,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
        >
          <Card className="h-full bg-secondary border-none shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Live Visitor Map</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-[250px]">
              <motion.p 
                className="text-muted-foreground"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Geographic visualization coming soon...
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
