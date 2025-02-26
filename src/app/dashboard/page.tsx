import { getClients } from "@/actions/contact";
import { unstable_noStore as noStore } from 'next/cache';

import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CarIcon, Users2, ShoppingCart } from "lucide-react";
import { ProfitChart } from "@/components/dashboard/ProfitChart";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const properties = [
  {
    name: "Windmills Loft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    percentage: "25%"
  },
  {
    name: "Seaview Villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    percentage: "18%"
  },
  {
    name: "Family Villa",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
  noStore(); // This ensures fresh data on every request
  const clients = await getClients();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/95 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Portfolio Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Monitor the traffic of your portfolio</p>
          </div>
          <div className="w-full sm:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full sm:w-auto pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg 
                         bg-white dark:bg-gray-800/90 
                         text-gray-900 dark:text-gray-100"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="px-4 sm:px-0">
            <Tabs defaultValue="week" className="w-fit">
              <TabsList className="bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <TabsTrigger value="week" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Week</TabsTrigger>
                <TabsTrigger value="month" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Month</TabsTrigger>
                <TabsTrigger value="year" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Year</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="p-6 bg-gradient-to-br from-[#F3F0FF] to-[#F3F0FF]/80 dark:from-purple-900/20 dark:to-purple-900/10 border-none backdrop-blur-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium dark:text-gray-200">Views</span>
              <CarIcon className="h-5 w-5 dark:text-purple-400" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold dark:text-white">31</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">+3 last day</div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-[#E0F7FF] to-[#E0F7FF]/80 dark:from-blue-900/20 dark:to-blue-900/10 border-none backdrop-blur-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium dark:text-gray-200">Clients</span>
              <Users2 className="h-5 w-5 dark:text-blue-400" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold dark:text-white">{clients.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Contacts</div>
            </div>
          </Card>

          <Card className="p-6 bg-white dark:bg-gray-800/90 border dark:border-gray-700/50 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium dark:text-gray-200">Purchases</span>
              <ShoppingCart className="h-5 w-5 dark:text-gray-400" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold dark:text-white">10</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">+1 last day</div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6 dark:bg-gray-800/90 dark:border-gray-700/50 backdrop-blur-sm">
              <div className="h-[300px] sm:h-[400px]">
                <ProfitChart />
              </div>
            </Card>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 dark:bg-gray-800/90 dark:border-gray-700/50 backdrop-blur-sm">
              <h2 className="text-lg sm:text-xl font-bold mb-4 dark:text-white">Recent Clients</h2>
              <div className="space-y-4 max-h-[300px] sm:max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                {clients.map((client: Client) => (
                  <div key={client._id} 
                       className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 
                                bg-gray-50 dark:bg-gray-700/50 rounded-lg gap-2 sm:gap-0">
                    <div>
                      <h3 className="font-medium dark:text-white">{client.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{client.email}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 sm:hidden">
                        {new Date(client.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
                      <p className="text-xs text-gray-400 dark:text-gray-500 hidden sm:block">
                        {new Date(client.createdAt).toLocaleDateString()}
                      </p>
                      <span className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
                        client.status === 'new' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
                        client.status === 'contacted' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' :
                        client.status === 'in-progress' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' :
                        'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                      }`}>
                        {client.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="space-y-4">
              {properties.map((property, index) => (
                <Card key={index} 
                      className="p-3 sm:p-4 flex items-center gap-3 sm:gap-4 
                               dark:bg-gray-800/90 dark:border-gray-700/50 backdrop-blur-sm 
                               hover:bg-gray-50 dark:hover:bg-gray-700/70 transition-colors duration-200">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium dark:text-white truncate">{property.name}</h3>
                    <div className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-green-500 dark:text-green-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                      <span className="text-sm text-green-500 dark:text-green-400">{property.percentage}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="p-4 sm:p-6 dark:bg-gray-800/90 dark:border-gray-700/50 backdrop-blur-sm">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 dark:text-white">Recent Contacts</h2>
          <div className="space-y-4 max-h-[400px] sm:max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            <Accordion type="single" collapsible className="space-y-2">
              {clients.map((client: Client) => (
                <AccordionItem key={client._id} value={client._id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full p-3 sm:p-4 
                                  bg-white dark:bg-gray-700/50 rounded-lg gap-2 sm:gap-0">
                      <div>
                        <h3 className="font-medium dark:text-white">{client.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{client.email}</p>
                      </div>
                      <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 
                                     text-blue-800 dark:text-blue-300 rounded-full w-fit">
                        {client.status}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800/50">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Created: {new Date(client.createdAt).toLocaleDateString()}
                      </p>
                      {client.message && (
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                          Message: {client.message}
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
