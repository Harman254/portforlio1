import { getClients } from "@/actions/contact";
import { unstable_noStore as noStore } from 'next/cache';

import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CarIcon, Users2, ShoppingCart } from "lucide-react";
import { ProfitChart } from "@/components/dashboard/ProfitChart";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const properties = [
  {
    name: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    percentage: "25%"
  },
  {
    name: "E-commerce App",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    percentage: "18%"
  },
  {
    name: "Blog Platform",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    percentage: "12%"
  }
];

// Type for client data
interface Client {
  _id: string;
  name: string;
  email: string;
  status: string;
  createdAt: string;
  message?: string;
}

// Option 1: Make the page dynamic by disabling caching
export const dynamic = 'force-dynamic';

// Option 2: Use noStore() in the component (preferred approach)
async function DashboardPage() {
  noStore();
  const clients = await getClients();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/95 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Portfolio Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Monitor your portfolio performance</p>
          </div>
          <div className="w-full sm:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border dark:border-gray-700 
                         bg-white dark:bg-gray-800/90 text-gray-900 dark:text-gray-100"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="p-6 bg-gradient-to-br from-[#F3F0FF] to-[#F3F0FF]/80 dark:from-purple-900/20 dark:to-purple-900/10 border-none">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium dark:text-gray-200">Views</span>
              <CarIcon className="h-5 w-5 dark:text-purple-400" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold dark:text-white">31</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">+3 last day</div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-[#E0F7FF] to-[#E0F7FF]/80 dark:from-blue-900/20 dark:to-blue-900/10 border-none">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium dark:text-gray-200">Clients</span>
              <Users2 className="h-5 w-5 dark:text-blue-400" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold dark:text-white">{clients.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Contacts</div>
            </div>
          </Card>

          <Card className="p-6 bg-white dark:bg-gray-800/90 border dark:border-gray-700/50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium dark:text-gray-200">Projects</span>
              <ShoppingCart className="h-5 w-5 dark:text-gray-400" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold dark:text-white">{properties.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Projects</div>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6 h-full dark:bg-gray-800/90 dark:border-gray-700/50">
              <h2 className="text-xl font-bold mb-4 dark:text-white">Performance Overview</h2>
              <div className="h-[300px] sm:h-[400px]">
                <ProfitChart />
              </div>
            </Card>
          </div>

          {/* Right Sidebar - Properties List */}
          <div className="space-y-6">
            {/* Recent Projects Card */}
            <Card className="p-4 sm:p-6 dark:bg-gray-800/90 dark:border-gray-700/50">
              <h2 className="text-lg font-bold mb-4 dark:text-white">Recent Projects</h2>
              <div className="space-y-4">
                {properties.map((property, index) => (
                  <div key={index} 
                       className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700/70 transition-colors">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium dark:text-white truncate">{property.name}</h3>
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-sm text-green-500">{property.percentage}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Clients Preview */}
            <Card className="p-4 sm:p-6 dark:bg-gray-800/90 dark:border-gray-700/50">
              <h2 className="text-lg font-bold mb-4 dark:text-white">Recent Clients</h2>
              <div className="space-y-4 max-h-[300px] overflow-y-auto">
                {clients.slice(0, 5).map((client: Client) => (
                  <div key={client._id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                    <div>
                      <h3 className="font-medium dark:text-white">{client.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{client.email}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      client.status === 'new' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
                      client.status === 'contacted' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' :
                      'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                    }`}>
                      {client.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Full Width Contact List */}
        <Card className="p-4 sm:p-6 dark:bg-gray-800/90 dark:border-gray-700/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold dark:text-white">All Contacts</h2>
          </div>
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-2">
              {clients.map((client: Client) => (
                <AccordionItem key={client._id} value={client._id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2">
                      <div>
                        <h3 className="font-medium dark:text-white">{client.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{client.email}</p>
                      </div>
                      <span className={`px-3 py-1 text-sm rounded-full w-fit ${
                        client.status === 'new' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
                        client.status === 'contacted' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' :
                        'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                      }`}>
                        {client.status}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg mt-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Created: {new Date(client.createdAt).toLocaleDateString()}
                      </p>
                      {client.message && (
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                          {client.message}
                        </p>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default DashboardPage;
