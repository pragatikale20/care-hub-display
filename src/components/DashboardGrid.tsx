
import { 
  Users, 
  Calendar, 
  UserCheck, 
  DollarSign, 
  Shield, 
  Building, 
  FileText, 
  Clipboard, 
  BarChart3, 
  Settings, 
  BookOpen,
  Activity,
  Database
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const dashboardItems = [
  { title: "Patient", icon: Users, color: "bg-teal-50 border-teal-200", iconColor: "text-teal-600" },
  { title: "Appointment", icon: Calendar, color: "bg-blue-50 border-blue-200", iconColor: "text-blue-600" },
  { title: "Doctor", icon: UserCheck, color: "bg-green-50 border-green-200", iconColor: "text-green-600" },
  { title: "Billing", icon: DollarSign, color: "bg-yellow-50 border-yellow-200", iconColor: "text-yellow-600" },
  { title: "Insurance", icon: Shield, color: "bg-purple-50 border-purple-200", iconColor: "text-purple-600" },
  { title: "Master Data", icon: Database, color: "bg-indigo-50 border-indigo-200", iconColor: "text-indigo-600" },
  
  { title: "Facility Management", icon: Building, color: "bg-teal-50 border-teal-200", iconColor: "text-teal-600" },
  { title: "Human Resources", icon: Users, color: "bg-orange-50 border-orange-200", iconColor: "text-orange-600" },
  { title: "Facility Policy", icon: FileText, color: "bg-cyan-50 border-cyan-200", iconColor: "text-cyan-600" },
  { title: "Finance", icon: DollarSign, color: "bg-emerald-50 border-emerald-200", iconColor: "text-emerald-600" },
  { title: "Inspection Checklist", icon: Clipboard, color: "bg-rose-50 border-rose-200", iconColor: "text-rose-600" },
  { title: "Forms and Daily Checklist", icon: FileText, color: "bg-violet-50 border-violet-200", iconColor: "text-violet-600" },
  
  { title: "Key Performance Indicator", icon: BarChart3, color: "bg-amber-50 border-amber-200", iconColor: "text-amber-600" },
  { title: "Audit Reports", icon: Activity, color: "bg-lime-50 border-lime-200", iconColor: "text-lime-600" },
  { title: "Roles and Management", icon: Settings, color: "bg-pink-50 border-pink-200", iconColor: "text-pink-600" },
  { title: "News letters", icon: BookOpen, color: "bg-slate-50 border-slate-200", iconColor: "text-slate-600" },
];

export function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {dashboardItems.map((item, index) => (
        <Card 
          key={index} 
          className={`${item.color} border-2 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105`}
        >
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <item.icon className={`h-8 w-8 ${item.iconColor}`} />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
              {item.title}
            </h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
