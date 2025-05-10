import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <motion.div 
      className="flex min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        setIsCollapsed={setIsSidebarCollapsed} 
      />
      <motion.main 
        className={cn(
          "flex-1 p-6 transition-all duration-300 ease-in-out overflow-hidden",
          isSidebarCollapsed ? "ml-20" : "ml-64",
          className
        )}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ 
          duration: 0.3,
          delay: 0.2,
          ease: "easeOut"
        }}
        whileHover={{ scale: 1.01 }}
      >
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </motion.main>
    </motion.div>
  );
}
