import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Github, GitBranch, GitPullRequest, Check, AlertCircle, Clock, Code, Server, Terminal } from 'lucide-react';

// Sample data for charts and tables
const commitData = [
  { day: 'Mon', commits: 12 },
  { day: 'Tue', commits: 8 },
  { day: 'Wed', commits: 15 },
  { day: 'Thu', commits: 6 },
  { day: 'Fri', commits: 18 },
  { day: 'Sat', commits: 4 },
  { day: 'Sun', commits: 2 },
];

const deploymentData = [
  { name: 'Week 1', deployments: 4, failures: 1 },
  { name: 'Week 2', deployments: 7, failures: 0 },
  { name: 'Week 3', deployments: 5, failures: 1 },
  { name: 'Week 4', deployments: 9, failures: 0 },
];

const pullRequests = [
  { id: '#1234', title: 'Fix authentication bug', author: 'sarah-dev', status: 'Merged', created: '2 days ago' },
  { id: '#1233', title: 'Add dark mode toggle', author: 'john-coder', status: 'Open', created: '3 days ago' },
  { id: '#1232', title: 'Refactor API calls', author: 'mike-tech', status: 'In Review', created: '3 days ago' },
  { id: '#1231', title: 'Update dependencies', author: 'alex-dev', status: 'Merged', created: '5 days ago' },
  { id: '#1230', title: 'Fix responsiveness issues', author: 'lisa-ui', status: 'Open', created: '1 week ago' },
];

const buildStatuses = [
  { id: 'build-125', branch: 'main', status: 'Success', time: '10 minutes ago', duration: '2m 34s' },
  { id: 'build-124', branch: 'feature/auth', status: 'Failed', time: '1 hour ago', duration: '3m 12s' },
  { id: 'build-123', branch: 'main', status: 'Success', time: '3 hours ago', duration: '2m 45s' },
];

const repositories = [
  { 
    name: 'frontend-app', 
    stars: 128, 
    issues: 15, 
    pullRequests: 5, 
    language: 'TypeScript',
    languageColor: '#3178c6' 
  },
  { 
    name: 'api-service', 
    stars: 86, 
    issues: 8, 
    pullRequests: 3, 
    language: 'JavaScript',
    languageColor: '#f7df1e' 
  },
  { 
    name: 'mobile-app', 
    stars: 64, 
    issues: 12, 
    pullRequests: 7, 
    language: 'Dart',
    languageColor: '#00b4ab' 
  },
  { 
    name: 'docs', 
    stars: 42, 
    issues: 6, 
    pullRequests: 2, 
    language: 'Markdown',
    languageColor: '#083fa1' 
  },
];

const Developer = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const hoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const prStatusColors: Record<string, string> = {
    'Merged': 'bg-purple-500/20 text-purple-500 border-purple-500/20',
    'Open': 'bg-emerald-500/20 text-emerald-500 border-emerald-500/20',
    'In Review': 'bg-blue-500/20 text-blue-500 border-blue-500/20',
    'Closed': 'bg-rose-500/20 text-rose-500 border-rose-500/20',
  };

  const buildStatusColors: Record<string, string> = {
    'Success': 'bg-emerald-500/20 text-emerald-500 border-emerald-500/20',
    'Failed': 'bg-rose-500/20 text-rose-500 border-rose-500/20',
    'In Progress': 'bg-amber-500/20 text-amber-500 border-amber-500/20',
  };
  
  const terminalLines = [
    { text: '> git checkout -b feature/new-dashboard', color: 'text-white' },
    { text: 'Switched to a new branch "feature/new-dashboard"', color: 'text-muted-foreground' },
    { text: '> npm install', color: 'text-white' },
    { text: '+ 254 packages installed', color: 'text-emerald-500' },
    { text: '> npm run build', color: 'text-white' },
    { text: 'Building project...', color: 'text-muted-foreground' },
    { text: 'Build completed in 4.2s', color: 'text-blue-500' },
    { text: '> git commit -m "Add new dashboard features"', color: 'text-white' },
    { text: '[feature/new-dashboard abc1234] Add new dashboard features', color: 'text-dashboard-developer' },
    { text: '> _', color: 'text-white' },
  ];

  return (
    <DashboardLayout>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Developer Dashboard</h1>
        <p className="text-muted-foreground">Track your code, deployments, and team activity</p>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-7 mb-6">
        <motion.div 
          className="lg:col-span-4"
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Card className="bg-secondary border-none shadow-md">
            <CardHeader>
              <CardTitle>Weekly Commits</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={commitData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="day" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#262626', borderColor: '#333' }} 
                  />
                  <Bar dataKey="commits" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="lg:col-span-3"
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="h-full bg-secondary border-none shadow-md">
            <CardHeader className="pb-0">
              <CardTitle>Terminal</CardTitle>
              <CardDescription>Recent commands</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="bg-black rounded-lg p-3 h-[250px] font-mono text-sm overflow-hidden">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
                    className={`${line.color} ${index === terminalLines.length - 1 ? 'animate-pulse' : ''}`}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
        <motion.div
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Card className="bg-secondary border-none shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>Pull Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>PR</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pullRequests.map((pr) => (
                    <motion.tr
                      key={pr.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ 
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <TableCell className="font-medium">{pr.id}</TableCell>
                      <TableCell>{pr.title}</TableCell>
                      <TableCell>{pr.author}</TableCell>
                      <TableCell>
                        <Badge 
                          className={`${prStatusColors[pr.status]}`}
                          variant="outline"
                        >
                          {pr.status === 'Merged' && <GitMerge size={12} className="mr-1" />}
                          {pr.status === 'Open' && <GitPullRequest size={12} className="mr-1" />}
                          {pr.status === 'In Review' && <Clock size={12} className="mr-1" />}
                          {pr.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{pr.created}</TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="bg-secondary border-none shadow-md">
            <CardHeader>
              <CardTitle>Build Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {buildStatuses.map((build) => (
                  <motion.div 
                    key={build.id}
                    className="bg-background border border-border rounded-lg p-3"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Badge 
                          className={`${buildStatusColors[build.status]}`}
                          variant="outline"
                        >
                          {build.status === 'Success' && <Check size={12} className="mr-1" />}
                          {build.status === 'Failed' && <AlertCircle size={12} className="mr-1" />}
                          {build.status === 'In Progress' && <Clock size={12} className="mr-1" />}
                          {build.status}
                        </Badge>
                        <span className="ml-2 text-sm">{build.id}</span>
                      </div>
                      <div className="flex items-center">
                        <GitBranch size={14} className="mr-1 text-muted-foreground" />
                        <span className="text-sm">{build.branch}</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{build.time}</span>
                      <span>Duration: {build.duration}</span>
                    </div>
                  </motion.div>
                ))}
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
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Card className="h-full bg-secondary border-none shadow-md">
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <Server size={16} className="mr-2 text-dashboard-developer" />
                      <span className="font-medium">API Server</span>
                    </div>
                    <Badge variant="outline" className="bg-emerald-500/20 text-emerald-500 border-emerald-500/20">Online</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>CPU</span>
                    <span>12%</span>
                  </div>
                  <Progress value={12} className="h-1 bg-muted" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <Server size={16} className="mr-2 text-dashboard-developer" />
                      <span className="font-medium">Database</span>
                    </div>
                    <Badge variant="outline" className="bg-emerald-500/20 text-emerald-500 border-emerald-500/20">Online</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>CPU</span>
                    <span>28%</span>
                  </div>
                  <Progress value={28} className="h-1 bg-muted" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <Server size={16} className="mr-2 text-dashboard-developer" />
                      <span className="font-medium">Web Server</span>
                    </div>
                    <Badge variant="outline" className="bg-emerald-500/20 text-emerald-500 border-emerald-500/20">Online</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>CPU</span>
                    <span>43%</span>
                  </div>
                  <Progress value={43} className="h-1 bg-muted" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <Server size={16} className="mr-2 text-dashboard-developer" />
                      <span className="font-medium">Cache Server</span>
                    </div>
                    <Badge variant="outline" className="bg-amber-500/20 text-amber-500 border-amber-500/20">Degraded</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>CPU</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-1 bg-muted" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Card className="h-full bg-secondary border-none shadow-md">
            <CardHeader>
              <CardTitle>Repositories</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="activity">
                <TabsList className="w-auto mb-4 bg-background">
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="list">Repositories</TabsTrigger>
                </TabsList>
                <TabsContent value="activity" className="mt-0">
                  <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={deploymentData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#262626', borderColor: '#333' }} 
                      />
                      <Line type="monotone" dataKey="deployments" stroke="#3B82F6" strokeWidth={2} />
                      <Line type="monotone" dataKey="failures" stroke="#EF4444" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="list" className="mt-0">
                  <div className="space-y-3">
                    {repositories.map((repo) => (
                      <div 
                        key={repo.name}
                        className="flex items-center justify-between p-3 bg-background rounded-lg border border-border"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-white/5 border border-border flex items-center justify-center mr-3">
                            <Github size={20} className="text-dashboard-developer" />
                          </div>
                          <div>
                            <p className="font-medium">{repo.name}</p>
                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                              <span className="flex items-center mr-3">
                                <span className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: repo.languageColor }}></span>
                                {repo.language}
                              </span>
                              <span className="mr-2">⭐ {repo.stars}</span>
                              <span className="mr-2">🔴 {repo.issues}</span>
                              <span>🔃 {repo.pullRequests}</span>
                            </div>
                          </div>
                        </div>
                        <Code size={18} className="text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

// Ensure we have the GitMerge icon
const GitMerge = (props: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </svg>
  );
};

export default Developer;
