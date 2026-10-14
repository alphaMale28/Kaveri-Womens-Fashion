import ResourceTable from "@/components/admin/ResourceTable";

const categories = [
  {
    id: "cat-001",
    name: "Sarees",
    secondary: "sarees",
    count: 24,
    status: "Active" as const,
    date: "Oct 10, 2026",
  },
  {
    id: "cat-002",
    name: "Lehengas",
    secondary: "lehengas",
    count: 18,
    status: "Active" as const,
    date: "Oct 09, 2026",
  },
  {
    id: "cat-003",
    name: "Kurtis",
    secondary: "kurtis",
    count: 32,
    status: "Active" as const,
    date: "Oct 08, 2026",
  },
  {
    id: "cat-004",
    name: "Dresses",
    secondary: "dresses",
    count: 16,
    status: "Active" as const,
    date: "Oct 07, 2026",
  },
  {
    id: "cat-005",
    name: "Tops",
    secondary: "tops",
    count: 21,
    status: "Inactive" as const,
    date: "Oct 06, 2026",
  },
  {
    id: "cat-006",
    name: "Bottoms",
    secondary: "bottoms",
    count: 12,
    status: "Active" as const,
    date: "Oct 05, 2026",
  },
  {
    id: "cat-007",
    name: "Jumpsuits",
    secondary: "jumpsuits",
    count: 8,
    status: "Active" as const,
    date: "Oct 04, 2026",
  },
  {
    id: "cat-008",
    name: "Outerwear",
    secondary: "outerwear",
    count: 9,
    status: "Active" as const,
    date: "Oct 03, 2026",
  },
];

export default function CategoriesPage() {
  return (
    <ResourceTable
      title="Categories"
      description="Organize Kaveri's collections and help customers discover pieces they love."
      resourceName="Category"
      rows={categories}
    />
  );
}
