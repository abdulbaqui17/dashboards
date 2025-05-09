
import React from 'react';
import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Bell, Lock, User, Globe, Shield, PanelLeft, LayoutDashboard, Monitor } from 'lucide-react';
import { toast } from 'sonner';

const Settings = () => {
  const handleSaveProfile = () => {
    toast.success("Profile settings saved successfully");
  };

  const handleSaveNotifications = () => {
    toast.success("Notification preferences updated");
  };

  const handleSaveSecurity = () => {
    toast.success("Security settings updated");
  };

  return (
    <DashboardLayout className="pb-12">
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </motion.div>
      
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-secondary border border-border">
          <TabsTrigger value="profile" className="data-[state=active]:bg-background">
            <User size={16} className="mr-2" /> Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-background">
            <Bell size={16} className="mr-2" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="appearance" className="data-[state=active]:bg-background">
            <Monitor size={16} className="mr-2" /> Appearance
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-background">
            <Lock size={16} className="mr-2" /> Security
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-secondary border-none shadow-md">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="John" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" defaultValue="john.doe@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" placeholder="Tell us about yourself" />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Preferences</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketing">Marketing emails</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about new products and features
                      </p>
                    </div>
                    <Switch id="marketing" />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSaveProfile}>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="notifications">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-secondary border-none shadow-md">
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive email notifications
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive push notifications
                      </p>
                    </div>
                    <Switch />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Notification Types</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Security Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Important notifications about your account security
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Product Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Information about new features and improvements
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Dashboard Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Alerts about dashboard changes and updates
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSaveNotifications}>Save Preferences</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="appearance">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-secondary border-none shadow-md">
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize how the dashboard looks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label>Theme</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="bg-background cursor-pointer border-2 border-primary rounded-md p-2 w-full aspect-video flex items-center justify-center">
                          <LayoutDashboard size={24} />
                        </div>
                        <span className="text-sm">Dark (Default)</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="bg-white cursor-not-allowed text-black border-2 border-transparent rounded-md p-2 w-full aspect-video flex items-center justify-center opacity-50">
                          <LayoutDashboard size={24} />
                        </div>
                        <span className="text-sm text-muted-foreground">Light (Coming Soon)</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="bg-[#1a1a2e] cursor-not-allowed border-2 border-transparent rounded-md p-2 w-full aspect-video flex items-center justify-center opacity-50">
                          <LayoutDashboard size={24} />
                        </div>
                        <span className="text-sm text-muted-foreground">Midnight (Coming Soon)</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <Label>Sidebar Position</Label>
                    <RadioGroup defaultValue="left">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="left" id="left" />
                        <Label htmlFor="left" className="flex items-center">
                          <PanelLeft size={16} className="mr-2" /> Left
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="right" id="right" disabled />
                        <Label htmlFor="right" className="text-muted-foreground flex items-center">
                          <PanelLeft size={16} className="mr-2 rotate-180" /> Right (Coming Soon)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Dashboard Density</h3>
                    <RadioGroup defaultValue="comfortable">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="compact" id="compact" />
                        <Label htmlFor="compact">Compact</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="comfortable" />
                        <Label htmlFor="comfortable">Comfortable</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="spacious" id="spacious" />
                        <Label htmlFor="spacious">Spacious</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Preferences</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="security">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-secondary border-none shadow-md">
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Change Password</h3>
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Two-factor authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium flex items-center">
                      <Shield size={18} className="mr-2 text-muted-foreground" />
                      Session Management
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      You're currently signed in on this device. To sign out of other devices, click the button below.
                    </p>
                    <Button variant="outline">Sign out of all other devices</Button>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSaveSecurity}>Save Security Settings</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Settings;
