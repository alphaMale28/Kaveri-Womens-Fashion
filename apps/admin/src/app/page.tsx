import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FiArrowUpRight,
  FiDollarSign,
  FiPackage,
  FiShoppingBag,
  FiUsers,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Revenue",
    value: "NPR 0",
    description: "No sales recorded yet",
    icon: FiDollarSign,
  },
  {
    title: "Orders",
    value: "0",
    description: "Orders received",
    icon: FiShoppingBag,
  },
  {
    title: "Products",
    value: "0",
    description: "Products in your catalog",
    icon: FiPackage,
  },
  {
    title: "Customers",
    value: "0",
    description: "Registered customers",
    icon: FiUsers,
  },
];

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-clay">STORE OVERVIEW</p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-muted">
            Manage your store and monitor its performance.
          </p>
        </div>

        <p className="text-sm text-muted">Welcome to Kaveri Admin</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.title} className="border-border shadow-none">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#625e58]">
                  {stat.title}
                </CardTitle>

                <Icon className="text-clay" size={18} />
              </CardHeader>

              <CardContent>
                <div className="text-2xl font-semibold tracking-tight text-ink">
                  {stat.value}
                </div>

                <p className="mt-1 text-xs text-muted">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <Card className="border-border shadow-none">
          <CardHeader>
            <CardTitle className="text-base text-ink">Recent Orders</CardTitle>

            <p className="text-sm text-muted">
              Your latest customer orders will appear here.
            </p>
          </CardHeader>

          <CardContent>
            <div className="flex min-h-36 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border text-center">
              <FiShoppingBag className="text-clay" size={24} />

              <p className="text-sm font-medium text-ink">No orders yet</p>

              <p className="text-xs text-muted">
                Orders will appear here when customers check out.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-none">
          <CardHeader>
            <CardTitle className="text-base text-ink">
              Inventory Overview
            </CardTitle>

            <p className="text-sm text-muted">
              Keep track of your product stock.
            </p>
          </CardHeader>

          <CardContent>
            <div className="flex items-center justify-between border-b border-paper py-4">
              <span className="text-sm text-[#625e58]">Low-stock products</span>

              <span className="font-semibold text-ink">0</span>
            </div>

            <div className="flex items-center justify-between py-4">
              <span className="text-sm text-[#625e58]">
                Out-of-stock products
              </span>

              <span className="font-semibold text-ink">0</span>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="flex items-center gap-2 text-xs text-muted">
        <FiArrowUpRight size={14} className="text-clay" />
        Dashboard metrics will be connected to your server later.
      </div>
    </div>
  );
};

export default DashboardPage;
