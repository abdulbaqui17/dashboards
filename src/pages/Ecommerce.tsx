import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Package, DollarSign, TrendingUp, Users, ShoppingBag, Check, X, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Sample data for charts and tables
const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

const categoryData = [
  { name: 'Electronics', value: 35 },
  { name: 'Clothing', value: 25 },
  { name: 'Books', value: 15 },
  { name: 'Home', value: 25 },
];

const COLORS = ['#F59E0B', '#FBBF24', '#FCD34D', '#FDE68A'];

const recentOrders = [
  { id: '#ORD-5271', customer: 'John Smith', date: '2023-05-06', status: 'Delivered', total: '$459.99' },
  { id: '#ORD-5270', customer: 'Sarah Johnson', date: '2023-05-06', status: 'Processing', total: '$237.50' },
  { id: '#ORD-5269', customer: 'Mike Williams', date: '2023-05-05', status: 'Pending', total: '$124.00' },
  { id: '#ORD-5268', customer: 'Emily Davis', date: '2023-05-05', status: 'Delivered', total: '$842.75' },
  { id: '#ORD-5267', customer: 'Alex Brown', date: '2023-05-04', status: 'Cancelled', total: '$72.30' },
];

const lowStockProducts = [
  { name: 'Wireless Headphones', sku: 'WH-101', stock: 3, threshold: 10 },
  { name: 'Smart Watch', sku: 'SW-202', stock: 5, threshold: 15 },
  { name: 'Bluetooth Speaker', sku: 'BS-303', stock: 2, threshold: 10 },
];

const Ecommerce = () => {
  const statusColors: Record<string, string> = {
    Delivered: 'bg-emerald-500/20 text-emerald-500 border-emerald-500/20',
    Processing: 'bg-blue-500/20 text-blue-500 border-blue-500/20',
    Pending: 'bg-amber-500/20 text-amber-500 border-amber-500/20',
    Cancelled: 'bg-rose-500/20 text-rose-500 border-rose-500/20',
  };

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
      title: "Total Orders",
      value: "12,543",
      change: "+16%",
      positive: true,
      icon: ShoppingBag,
      color: "text-dashboard-ecommerce"
    },
    {
      title: "Total Sales",
      value: "$456,240",
      change: "+12%",
      positive: true,
      icon: DollarSign,
      color: "text-dashboard-ecommerce"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.8%",
      positive: true,
      icon: TrendingUp,
      color: "text-dashboard-ecommerce"
    },
    {
      title: "Active Customers",
      value: "8,753",
      change: "+5%",
      positive: true,
      icon: Users,
      color: "text-dashboard-ecommerce"
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
          E-commerce Dashboard
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Manage your online store and track performance
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
                      <TrendingUp size={16} />
                      <span className="text-sm ml-1">{metric.change} from last month</span>
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-7 mb-6">
        <motion.div
          className="lg:col-span-4"
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
              <CardTitle>Monthly Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#262626', borderColor: '#333' }} 
                  />
                  <Bar dataKey="sales" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="lg:col-span-3"
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
              <CardTitle>Sales by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={categoryData}
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
                      {categoryData.map((entry, index) => (
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
          className="lg:col-span-2"
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
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <motion.tr 
                      key={order.id}
                      whileHover={{ 
                        scale: 1.01,
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                    >
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <Badge 
                          className={`${statusColors[order.status]}`}
                          variant="outline"
                        >
                          {order.status === 'Delivered' && <Check className="mr-1 h-3 w-3" />}
                          {order.status === 'Cancelled' && <X className="mr-1 h-3 w-3" />}
                          {(order.status === 'Processing' || order.status === 'Pending') && (
                            <Clock className="mr-1 h-3 w-3" />
                          )}
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{order.total}</TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="lg:col-span-1"
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
              <CardTitle>Low Stock Alert</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lowStockProducts.map((product) => (
                  <motion.div
                    key={product.sku}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.sku}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-rose-500 font-medium">{product.stock} left</p>
                      <p className="text-sm text-muted-foreground">Threshold: {product.threshold}</p>
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

export default Ecommerce;
