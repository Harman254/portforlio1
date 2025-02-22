import { getClients } from "@/actions/contact";
import { unstable_noStore as noStore } from 'next/cache';

import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CarIcon, Users2, ShoppingCart, MoreVertical } from "lucide-react";
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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Portfolio Dashboard</h1>
            <p className="text-gray-500 mt-2">Monitor the traffic of your portfolio</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
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
            <button className="p-2 bg-gray-900 text-white rounded-lg">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>

        <Tabs defaultValue="week" className="w-fit">
          <TabsList>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-3 gap-6">
          <Card className="p-6 bg-[#F3F0FF] border-none">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">Views</span>
              <CarIcon className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold">31</div>
              <div className="text-sm text-gray-600">+3 last day</div>
            </div>
          </Card>

          <Card className="p-6 bg-[#E0F7FF] border-none">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">Clients</span>
              <Users2 className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold">{clients.length}</div>
              <div className="text-sm text-gray-600">Total Contacts</div>
            </div>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">Purchases</span>
              <ShoppingCart className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold">10</div>
              <div className="text-sm text-gray-600">+1 last day</div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <ProfitChart />
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Recent Clients</h2>
              <div className="space-y-4 max-h-[400px] overflow-y-auto">
                {clients.map((client: Client) => (
                  <div key={client._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{client.name}</h3>
                      <p className="text-sm text-gray-500">{client.email}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(client.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      client.status === 'new' ? 'bg-blue-100 text-blue-800' :
                      client.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                      client.status === 'in-progress' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {client.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="space-y-4">
              {properties.map((property, index) => (
                <Card key={index} className="p-4 flex items-center gap-4">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{property.name}</h3>
                    <div className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-green-500"
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
                      <span className="text-sm text-green-500">{property.percentage}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Contacts</h2>
          <div className="space-y-4 max-h-[500px] overflow-y-auto">
            <Accordion type="single" collapsible>
              {clients.map((client: Client) => (
                <AccordionItem key={client._id} value={client._id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center justify-between w-full p-4 bg-white rounded-lg">
                      <div>
                        <h3 className="font-medium">{client.name}</h3>
                        <p className="text-sm text-gray-500">{client.email}</p>
                      </div>
                      <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                        {client.status}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 bg-gray-50">
                      <p className="text-sm text-gray-600">Created: {new Date(client.createdAt).toLocaleDateString()}</p>
                      {client.message && (
                        <p className="mt-2 text-sm text-gray-700">Message: {client.message}</p>
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
