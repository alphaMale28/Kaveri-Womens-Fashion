"use client";

import { useMemo, useState } from "react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiCreditCard,
  FiEye,
  FiPackage,
  FiSearch,
  FiShoppingBag,
  FiTruck,
  FiX,
} from "react-icons/fi";

type OrderStatus =
  | "Pending"
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

type PaymentStatus = "Paid" | "Pending" | "Refunded";

type Order = {
  id: string;
  customer: string;
  email: string;
  date: string;
  items: number;
  total: number;
  paymentMethod: string;
  paymentStatus: PaymentStatus;
  status: OrderStatus;
};

const initialOrders: Order[] = [
  {
    id: "KAV-1048",
    customer: "Aarushi Sharma",
    email: "aarushi@example.com",
    date: "2026-10-08",
    items: 2,
    total: 12500,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
    status: "Pending",
  },
  {
    id: "KAV-1047",
    customer: "Priya Thapa",
    email: "priya@example.com",
    date: "2026-10-08",
    items: 1,
    total: 8500,
    paymentMethod: "Online Payment",
    paymentStatus: "Paid",
    status: "Processing",
  },
  {
    id: "KAV-1046",
    customer: "Sanjana Karki",
    email: "sanjana@example.com",
    date: "2026-10-07",
    items: 3,
    total: 18700,
    paymentMethod: "Online Payment",
    paymentStatus: "Paid",
    status: "Shipped",
  },
  {
    id: "KAV-1045",
    customer: "Nisha Adhikari",
    email: "nisha@example.com",
    date: "2026-10-07",
    items: 1,
    total: 4200,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
    status: "Delivered",
  },
  {
    id: "KAV-1044",
    customer: "Anisha Gurung",
    email: "anisha@example.com",
    date: "2026-10-06",
    items: 2,
    total: 9600,
    paymentMethod: "Online Payment",
    paymentStatus: "Paid",
    status: "Delivered",
  },
  {
    id: "KAV-1043",
    customer: "Riya Joshi",
    email: "riya@example.com",
    date: "2026-10-05",
    items: 1,
    total: 5600,
    paymentMethod: "Online Payment",
    paymentStatus: "Refunded",
    status: "Cancelled",
  },
];

const orderStatuses: OrderStatus[] = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-NP", {
    style: "currency",
    currency: "NPR",
    maximumFractionDigits: 0,
  }).format(amount);

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const statusStyles: Record<OrderStatus, string> = {
  Pending: "bg-amber-50 text-amber-800",
  Processing: "bg-blue-50 text-blue-800",
  Shipped: "bg-violet-50 text-violet-800",
  Delivered: "bg-emerald-50 text-emerald-800",
  Cancelled: "bg-red-50 text-red-700",
};

const paymentStyles: Record<PaymentStatus, string> = {
  Paid: "bg-emerald-50 text-emerald-800",
  Pending: "bg-amber-50 text-amber-800",
  Refunded: "bg-gray-100 text-gray-600",
};

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filters = [
    "All",
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

  const filteredOrders = useMemo(() => {
    const query = search.trim().toLowerCase();

    return orders.filter((order) => {
      const matchesSearch =
        order.id.toLowerCase().includes(query) ||
        order.customer.toLowerCase().includes(query) ||
        order.email.toLowerCase().includes(query);

      const matchesStatus =
        activeFilter === "All" || order.status === activeFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, activeFilter]);

  const updateOrderStatus = (id: string, status: OrderStatus) => {
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === id ? { ...order, status } : order,
      ),
    );

    setSelectedOrder((currentOrder) =>
      currentOrder?.id === id ? { ...currentOrder, status } : currentOrder,
    );
  };

  const summaryCards = [
    {
      label: "Total orders",
      value: orders.length,
      detail: "All orders received",
      icon: FiShoppingBag,
      iconClass: "bg-[#f7f4ee] text-[#a85f4b]",
    },
    {
      label: "Awaiting action",
      value: orders.filter((order) => order.status === "Pending").length,
      detail: "Require your attention",
      icon: FiClock,
      iconClass: "bg-amber-50 text-amber-700",
    },
    {
      label: "In progress",
      value: orders.filter((order) =>
        ["Processing", "Shipped"].includes(order.status),
      ).length,
      detail: "Being fulfilled",
      icon: FiTruck,
      iconClass: "bg-blue-50 text-blue-700",
    },
    {
      label: "Delivered",
      value: orders.filter((order) => order.status === "Delivered").length,
      detail: "Successfully completed",
      icon: FiCheckCircle,
      iconClass: "bg-emerald-50 text-emerald-700",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a85f4b]">
            Store management
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#171717]">
            Orders
          </h1>
          <p className="mt-2 text-sm text-[#77736d]">
            Manage customer orders and keep deliveries moving.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-lg border border-[#e8e2d9] px-3 py-2 text-sm text-[#77736d] sm:self-auto">
          <FiCalendar size={16} />
          <span>All order dates</span>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.label}
              className="rounded-xl border border-[#e8e2d9] bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#77736d]">{card.label}</p>
                <span className={`rounded-lg p-2.5 ${card.iconClass}`}>
                  <Icon size={19} />
                </span>
              </div>

              <p className="mt-4 text-3xl font-semibold text-[#171717]">
                {card.value}
              </p>
              <p className="mt-1 text-xs text-[#77736d]">{card.detail}</p>
            </article>
          );
        })}
      </section>

      <section className="overflow-hidden rounded-xl border border-[#e8e2d9] bg-white">
        <div className="border-b border-[#e8e2d9] p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-lg font-semibold text-[#171717]">
                All orders
              </h2>
              <p className="mt-1 text-sm text-[#77736d]">
                Review orders, payments, and fulfillment status.
              </p>
            </div>

            <div className="relative w-full lg:max-w-sm">
              <FiSearch
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#77736d]"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search order or customer..."
                aria-label="Search orders"
                className="w-full rounded-lg border border-[#e8e2d9] py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-[#a85f4b] focus:ring-2 focus:ring-[#a85f4b]/10"
              />
            </div>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {filters.map((filter) => {
              const count =
                filter === "All"
                  ? orders.length
                  : orders.filter((order) => order.status === filter).length;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 rounded-lg px-3.5 py-2 text-sm transition ${
                    activeFilter === filter
                      ? "bg-[#171717] text-white"
                      : "bg-[#f7f4ee] text-[#77736d] hover:bg-[#eeeae2] hover:text-[#171717]"
                  }`}
                >
                  {filter}
                  <span className="ml-2 text-xs opacity-70">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">
            <thead className="bg-[#faf9f6]">
              <tr className="border-b border-[#e8e2d9] text-xs uppercase tracking-wider text-[#77736d]">
                <th className="px-6 py-4 font-medium">Order</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Total</th>
                <th className="px-6 py-4 font-medium">Payment</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#eeeae2]">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="transition hover:bg-[#faf9f6]">
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-[#171717]">
                      {order.id}
                    </p>
                    <p className="mt-1 text-xs text-[#77736d]">
                      {order.items} {order.items === 1 ? "item" : "items"}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-[#171717]">
                      {order.customer}
                    </p>
                    <p className="mt-1 text-xs text-[#77736d]">{order.email}</p>
                  </td>

                  <td className="px-6 py-4 text-sm text-[#77736d]">
                    {formatDate(order.date)}
                  </td>

                  <td className="px-6 py-4 text-sm font-semibold text-[#171717]">
                    {formatCurrency(order.total)}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${paymentStyles[order.paymentStatus]}`}
                    >
                      {order.paymentStatus}
                    </span>
                    <p className="mt-1.5 text-xs text-[#77736d]">
                      {order.paymentMethod}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => setSelectedOrder(order)}
                      aria-label={`View order ${order.id}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#e8e2d9] px-3 py-2 text-sm font-medium text-[#171717] transition hover:border-[#a85f4b] hover:bg-[#f7f4ee]"
                    >
                      <FiEye size={15} />
                      View
                    </button>
                  </td>
                </tr>
              ))}

              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-16 text-center">
                    <FiPackage size={28} className="mx-auto text-[#a8a197]" />
                    <p className="mt-3 text-sm font-medium text-[#171717]">
                      No orders found
                    </p>
                    <p className="mt-1 text-sm text-[#77736d]">
                      Try a different search or status filter.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[#e8e2d9] px-6 py-4 text-sm text-[#77736d]">
          Showing {filteredOrders.length} of {orders.length} orders
        </div>
      </section>

      {selectedOrder && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelectedOrder(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-dialog-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#a85f4b]">
                  Order details
                </p>
                <h2
                  id="order-dialog-title"
                  className="mt-2 text-xl font-semibold text-[#171717]"
                >
                  {selectedOrder.id}
                </h2>
                <p className="mt-1 text-sm text-[#77736d]">
                  Placed on {formatDate(selectedOrder.date)}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                aria-label="Close order details"
                className="rounded-lg p-2 text-[#77736d] hover:bg-[#f7f4ee]"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="mt-6 space-y-5">
              <div className="rounded-xl bg-[#faf9f6] p-4">
                <p className="text-xs text-[#77736d]">Customer</p>
                <p className="mt-1 font-medium text-[#171717]">
                  {selectedOrder.customer}
                </p>
                <p className="mt-1 text-sm text-[#77736d]">
                  {selectedOrder.email}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-[#77736d]">Order total</p>
                  <p className="mt-1 font-semibold text-[#171717]">
                    {formatCurrency(selectedOrder.total)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#77736d]">Items</p>
                  <p className="mt-1 font-semibold text-[#171717]">
                    {selectedOrder.items}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#77736d]">Payment method</p>
                  <p className="mt-1 text-sm font-medium text-[#171717]">
                    {selectedOrder.paymentMethod}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#77736d]">Payment status</p>
                  <span
                    className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${paymentStyles[selectedOrder.paymentStatus]}`}
                  >
                    {selectedOrder.paymentStatus}
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="order-status"
                  className="mb-2 block text-sm font-medium text-[#171717]"
                >
                  Update order status
                </label>
                <select
                  id="order-status"
                  value={selectedOrder.status}
                  onChange={(event) =>
                    updateOrderStatus(
                      selectedOrder.id,
                      event.target.value as OrderStatus,
                    )
                  }
                  className="w-full rounded-lg border border-[#e8e2d9] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#a85f4b] focus:ring-2 focus:ring-[#a85f4b]/10"
                >
                  {orderStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-xs text-[#77736d]">
                  This change is temporary and resets when the page reloads.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedOrder(null)}
              className="mt-6 w-full rounded-lg bg-[#171717] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#333333]"
            >
              Done
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
