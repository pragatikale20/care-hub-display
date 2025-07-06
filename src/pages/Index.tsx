
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header"; 
import { DashboardGrid } from "@/components/DashboardGrid";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-6 mb-8 text-white">
              <h1 className="text-3xl font-bold mb-2">AI SOLUTION FOR ALL HEALTHCARE NEEDS</h1>
              <div className="flex items-center gap-2 text-teal-100">
                <span>Home</span>
                <span>•</span>
                <span>Dashboard</span>
              </div>
            </div>
            <DashboardGrid />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
