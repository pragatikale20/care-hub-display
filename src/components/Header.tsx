
import { Bell, Search, User } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-gray-600" />
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Request Services</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Services</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Tickets</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Calendar</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search..." 
              className="pl-10 w-64 bg-gray-50 border-gray-200"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Bell className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <span className="hidden sm:block text-sm font-medium text-gray-700">Logo</span>
          </div>
        </div>
      </div>
    </header>
  );
}
