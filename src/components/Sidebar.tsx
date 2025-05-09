
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  ShoppingCart, 
  PieChart, 
  Github,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

interface NavItem {
  path: string;
  title: string;
  icon: React.ElementType;
  color: string;
}

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const navItems: NavItem[] = [
    { path: "/", title: "Analytics", icon: LayoutDashboard, color: "text-dashboard-analytics" },
    { path: "/ecommerce", title: "E-commerce", icon: ShoppingCart, color: "text-dashboard-ecommerce" },
    { path: "/finance", title: "Finance", icon: PieChart, color: "text-dashboard-finance" },
    { path: "/developer", title: "Developer", icon: Github, color: "text-dashboard-developer" },
  ];

  return (
    <motion.div 
      className={cn(
        "fixed top-0 left-0 z-40 h-screen bg-sidebar transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
      initial={false}
      animate={{ width: isCollapsed ? 80 : 256 }}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
        <motion.div
          initial={false}
          animate={{ opacity: isCollapsed ? 0 : 1, width: isCollapsed ? 0 : 'auto' }}
          className="overflow-hidden whitespace-nowrap"
        >
          <h1 className="text-xl font-bold text-white">DarkVerse</h1>
        </motion.div>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 text-gray-400 rounded-md hover:bg-sidebar-accent hover:text-white"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="px-2 py-4">
        <nav>
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <motion.li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => cn(
                    "flex items-center px-3 py-2 rounded-md transition-colors",
                    isActive ? "bg-sidebar-accent text-white" : "text-gray-400 hover:bg-sidebar-accent/50 hover:text-white"
                  )}
                >
                  <item.icon className={cn("flex-shrink-0", item.color)} size={20} />
                  <motion.span
                    initial={false}
                    animate={{ 
                      opacity: isCollapsed ? 0 : 1,
                      width: isCollapsed ? 0 : 'auto',
                      marginLeft: isCollapsed ? 0 : 12
                    }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {item.title}
                  </motion.span>
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
