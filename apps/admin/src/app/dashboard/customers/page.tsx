import ResourceTable from "@/components/admin/ResourceTable";

const customers = [
  {
    id: "cus-001",
    name: "Aarushi Sharma",
    secondary: "aarushi@example.com",
    count: 5,
    status: "Active" as const,
    date: "Oct 10, 2026",
  },
  {
    id: "cus-002",
    name: "Priya Thapa",
    secondary: "priya@example.com",
    count: 3,
    status: "Active" as const,
    date: "Oct 09, 2026",
  },
  {
    id: "cus-003",
    name: "Ananya Singh",
    secondary: "ananya@example.com",
    count: 8,
    status: "Active" as const,
    date: "Oct 08, 2026",
  },
  {
    id: "cus-004",
    name: "Sanjana Rai",
    secondary: "sanjana@example.com",
    count: 0,
    status: "Inactive" as const,
    date: "Oct 07, 2026",
  },
];

export default function CustomersPage() {
  return (
    <ResourceTable
      title="Customers"
      description="Understand your customer relationships, order activity, and shopping history."
      resourceName="Customer"
      rows={customers}
    />
  );
}
