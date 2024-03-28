import CryptocurrencyPrices from "./components/CryptocurrencyPrices"
import PopulationGraph from "./components/PopulationGraph"
import Sidebar, { SidebarItem } from "./components/Sidebar"
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
  Bell
} from "lucide-react"

export default function App(){
  return(
    <main className="App h-screen flex overflow-hidden bg-[#000015]">
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          active
        />
         <SidebarItem
          icon={<BarChart3 size={20} />}
          text="Statistics"
        />
         <SidebarItem
          icon={<UserCircle size={20} />}
          text="User"
        />
         <SidebarItem
          icon={<Boxes size={20} />}
          text="Inventory"
        />
         <SidebarItem
          icon={<Package size={20} />}
          text="Orders"
        />
         <SidebarItem
          icon={<Receipt size={20} />}
          text="Billings"
        />
        <hr className="my-3"/>
        <SidebarItem
          icon={<Bell size={20} />}
          text="Notification"
          alert
        />
        <SidebarItem
          icon={<Settings size={20} />}
          text="Settings"
        />
         <SidebarItem
          icon={<LifeBuoy size={20} />}
          text="Help"
        />
      </Sidebar>
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold mb-4" style={{ background: "linear-gradient(to right, #8A2BE2, #007FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Welcome to the Dashboard</h1>
        </div>
        <div className="flex flex-row p-7">
          <PopulationGraph />
          <CryptocurrencyPrices />
        </div>
      </div>
    </main>
  )
}