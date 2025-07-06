
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Users,
  Calendar,
  UserCheck,
  DollarSign,
  Shield,
  Database,
  Building,
  Settings,
  FileText,
  Activity,
  Menu,
  X,
} from "lucide-react";
import {
  Sidebar as SidebarContainer,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Activity },
  { title: "Patient", url: "/patient", icon: Users },
  { title: "Appointment", url: "/appointment", icon: Calendar },
  { title: "Doctor", url: "/doctor", icon: UserCheck },
  { title: "Billing", url: "/billing", icon: DollarSign },
  { title: "Insurance", url: "/insurance", icon: Shield },
  { title: "Master Data", url: "/master-data", icon: Database },
  { title: "Finance", url: "/finance", icon: DollarSign },
  { title: "Facility Management", url: "/facility-management", icon: Building },
  { title: "Human Resources", url: "/hr", icon: Users },
];

export function Sidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `w-full justify-start transition-colors ${
      isActive 
        ? "bg-teal-100 text-teal-700 border-r-2 border-teal-600" 
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <SidebarContainer className={`${collapsed ? "w-16" : "w-64"} border-r border-gray-200 bg-white`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          {!collapsed && (
            <h2 className="text-xl font-bold text-teal-600">Healthcare</h2>
          )}
        </div>
      </div>
      
      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls({ isActive: isActive(item.url) })}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <div className="mt-auto pt-4 border-t border-gray-200">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-gray-600 hover:bg-gray-100">
                    <Settings className="h-5 w-5" />
                    {!collapsed && <span className="ml-3">Account Setting</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </SidebarContainer>
  );
}
