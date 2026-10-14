import ResourceTable from "@/components/admin/ResourceTable";

const designers = [
  {
    id: "des-001",
    name: "Anita Dongre",
    secondary: "Indian couture",
    count: 12,
    status: "Active" as const,
    date: "Oct 10, 2026",
  },
  {
    id: "des-002",
    name: "Sabyasachi",
    secondary: "Luxury fashion",
    count: 16,
    status: "Active" as const,
    date: "Oct 09, 2026",
  },
  {
    id: "des-003",
    name: "Manish Malhotra",
    secondary: "Bridal couture",
    count: 10,
    status: "Active" as const,
    date: "Oct 08, 2026",
  },
  {
    id: "des-004",
    name: "House of Masaba",
    secondary: "Contemporary fashion",
    count: 7,
    status: "Inactive" as const,
    date: "Oct 07, 2026",
  },
];

export default function DesignersPage() {
  return (
    <ResourceTable
      title="Designers"
      description="Curate the designers and creative labels featured in Kaveri's collections."
      resourceName="Designer"
      rows={designers}
    />
  );
}
