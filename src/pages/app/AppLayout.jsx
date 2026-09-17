import {Header, Sidebar} from "./"
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white lg:grid lg:grid-cols-[80px_minmax(0,1fr)] xl:grid-cols-[256px_minmax(0,1fr)]">

      {/* Header */}
      <div className="order-1 lg:col-start-2 lg:row-start-1">
        <Header />
      </div>

      {/* Sidebar / Mobile Navigation */}
      <div className="order-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="order-3 min-w-0 px-4 py-5 sm:px-6 lg:col-start-2 lg:row-start-2 lg:px-8 lg:py-6">
        <Outlet />
      </main>

    </div>
  )
}

export default AppLayout