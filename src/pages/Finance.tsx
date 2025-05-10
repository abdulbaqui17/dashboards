import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ArrowUpRight, ArrowDownRight, DollarSign, CreditCard, Wallet, TrendingUp, ArrowDown } from 'lucide-react';

// Sample data for charts
const monthlyData = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 2210 },
  { name: 'Mar', income: 5000, expenses: 3290 },
  { name: 'Apr', income: 4500, expenses: 3800 },
  { name: 'May', income: 6000, expenses: 3900 },
  { name: 'Jun', income: 5500, expenses: 4100 },
  { name: 'Jul', income: 7000, expenses: 4300 },
  { name: 'Aug', income: 7500, expenses: 4500 },
];

const expenseData = [
  { name: 'Housing', value: 35 },
  { name: 'Food', value: 20 },
  { name: 'Transport', value: 15 },
  { name: 'Entertainment', value: 10 },
  { name: 'Healthcare', value: 10 },
  { name: 'Others', value: 10 },
];

const COLORS = ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0', '#D1FAE5', '#ECFDF5'];

const savingsGoals = [
  { name: 'Emergency Fund', current: 8000, target: 10000, percentage: 80 },
  { name: 'New Car', current: 12000, target: 30000, percentage: 40 },
  { name: 'Vacation', current: 2000, target: 5000, percentage: 40 },
];

const recentTransactions = [
  { id: 1, name: 'Amazon', date: '2023-05-06', amount: -84.76, category: 'Shopping' },
  { id: 2, name: 'Salary', date: '2023-05-05', amount: 3200.00, category: 'Income' },
  { id: 3, name: 'Grocery Store', date: '2023-05-04', amount: -65.35, category: 'Food' },
  { id: 4, name: 'Gas Station', date: '2023-05-03', amount: -45.20, category: 'Transport' },
  { id: 5, name: 'Netflix', date: '2023-05-02', amount: -14.99, category: 'Entertainment' },
];

const Finance = () => {
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
      title: "Total Balance",
      value: "$24,563",
      change: "+$1,256",
      positive: true,
      icon: DollarSign,
      color: "text-dashboard-finance"
    },
    {
      title: "Monthly Income",
      value: "$7,245",
      change: "+12%",
      positive: true,
      icon: TrendingUp,
      color: "text-dashboard-finance"
    },
    {
      title: "Monthly Expenses",
      value: "$4,385",
      change: "-3%",
      positive: true,
      icon: CreditCard,
      color: "text-dashboard-finance"
    },
    {
      title: "Savings Rate",
      value: "39%",
      change: "+5%",
      positive: true,
      icon: Wallet,
      color: "text-dashboard-finance"
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
          Finance Dashboard
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Track your finances and budget progress
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
                      <span className="text-sm ml-1">{metric.change} since last month</span>
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <motion.div
          className="lg:col-span-2"
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
            <CardHeader className="pb-2">
              <CardTitle>Income vs Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="monthly" className="mb-4">
                <TabsList className="w-auto mb-4 bg-background">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
                <TabsContent value="monthly" className="mt-0">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#262626', borderColor: '#333' }} 
                      />
                      <Legend />
                      <Line type="monotone" dataKey="income" stroke="#10B981" strokeWidth={2} activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="quarterly" className="mt-0">
                  <div className="flex items-center justify-center h-[300px]">
                    <motion.p 
                      className="text-muted-foreground"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Quarterly data coming soon...
                    </motion.p>
                  </div>
                </TabsContent>
                <TabsContent value="yearly" className="mt-0">
                  <div className="flex items-center justify-center h-[300px]">
                    <motion.p 
                      className="text-muted-foreground"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Yearly data coming soon...
                    </motion.p>
                  </div>
                </TabsContent>
              </Tabs>
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
            <CardHeader className="pb-4">
              <CardTitle>Expenses Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      fill="#8884d8"
                      paddingAngle={3}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#262626', borderColor: '#333' }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
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
              <CardTitle>Savings Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {savingsGoals.map((goal) => (
                  <motion.div 
                    key={goal.name}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className="p-3 rounded-lg"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{goal.name}</span>
                      <span className="text-sm">
                        ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={goal.percentage} className="h-2 bg-muted" />
                    <p className="text-xs text-muted-foreground mt-1">
                      {goal.percentage}% of goal reached
                    </p>
                  </motion.div>
                ))}
              </div>
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
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <motion.div
                    key={transaction.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <div>
                      <p className="font-medium">{transaction.name}</p>
                      <p className="text-sm text-muted-foreground">{transaction.category}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${transaction.amount > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Finance;
