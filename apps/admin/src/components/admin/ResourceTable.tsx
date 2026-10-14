"use client";

import { useMemo, useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiMoreHorizontal,
  FiArrowUpRight,
} from "react-icons/fi";

type AdminRow = {
  id: string;
  name: string;
  secondary: string;
  count: number;
  status: "Active" | "Inactive";
  date: string;
};

type ResourceTableProps = {
  title: string;
  description: string;
  resourceName: string;
  rows: AdminRow[];
};

export default function ResourceTable({
  title,
  description,
  resourceName,
  rows: initialRows,
}: ResourceTableProps) {
  const [rows, setRows] = useState(initialRows);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [menuId, setMenuId] = useState<string | null>(null);

  const filteredRows = useMemo(
    () =>
      rows.filter((row) => {
        const matchesSearch = `${row.name} ${row.secondary}`
          .toLowerCase()
          .includes(search.toLowerCase());

        const matchesStatus = status === "All" || row.status === status;

        return matchesSearch && matchesStatus;
      }),
    [rows, search, status],
  );

  const activeCount = rows.filter((row) => row.status === "Active").length;

  const handleAdd = () => {
    const name = window.prompt(
      `Enter the new ${resourceName.toLowerCase()} name:`,
    );

    if (!name?.trim()) return;

    setRows((current) => [
      {
        id: crypto.randomUUID(),
        name: name.trim(),
        secondary: "Not configured",
        count: 0,
        status: "Active",
        date: new Date().toLocaleDateString(),
      },
      ...current,
    ]);
  };

  const handleEdit = (row: AdminRow) => {
    const name = window.prompt("Edit name:", row.name);

    if (!name?.trim()) return;

    setRows((current) =>
      current.map((item) =>
        item.id === row.id ? { ...item, name: name.trim() } : item,
      ),
    );

    setMenuId(null);
  };

  const handleDelete = (row: AdminRow) => {
    const confirmed = window.confirm(`Delete "${row.name}" from this page?`);

    if (!confirmed) return;

    setRows((current) => current.filter((item) => item.id !== row.id));

    setMenuId(null);
  };

  return (
    <div className="min-h-screen bg-[#f7f4ee] px-4 py-7 text-[#171717] sm:px-7 lg:px-10">
      <div className="mx-auto max-w-[1400px] space-y-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a87872]">
              Kaveri / Management
            </p>

            <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">
              {title}
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#77736d]">
              {description}
            </p>
          </div>

          <button
            onClick={handleAdd}
            className="inline-flex items-center justify-center gap-2 bg-[#171717] px-5 py-3 text-sm text-white transition hover:bg-[#a87872]"
          >
            <FiPlus size={17} />
            Add {resourceName}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              label: `Total ${title.toLowerCase()}`,
              value: rows.length,
            },
            {
              label: "Active",
              value: activeCount,
            },
            {
              label: "Inactive",
              value: rows.length - activeCount,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-[#e7e1d8] bg-white p-6"
            >
              <p className="text-sm text-[#77736d]">{stat.label}</p>

              <p className="mt-4 font-serif text-4xl">
                {stat.value.toString().padStart(2, "0")}
              </p>
            </div>
          ))}
        </div>

        <section className="border border-[#e7e1d8] bg-white">
          <div className="flex flex-col gap-4 border-b border-[#eeeae2] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl">All {title.toLowerCase()}</h2>
              <p className="mt-1 text-xs text-[#77736d]">
                Manage your store's {title.toLowerCase()}.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-2 border border-[#e7e1d8] px-3">
                <FiSearch className="text-[#77736d]" size={16} />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder={`Search ${title.toLowerCase()}...`}
                  className="w-full bg-transparent py-2.5 text-sm outline-none sm:w-52"
                />
              </div>

              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="border border-[#e7e1d8] bg-white px-3 py-2.5 text-sm outline-none"
              >
                <option value="All">All statuses</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left">
              <thead className="bg-[#faf9f6]">
                <tr className="text-[10px] uppercase tracking-[0.16em] text-[#77736d]">
                  <th className="px-5 py-4 font-medium">Name</th>
                  <th className="px-5 py-4 font-medium">Details</th>
                  <th className="px-5 py-4 font-medium">Products / Orders</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                  <th className="px-5 py-4 font-medium">Updated</th>
                  <th className="px-5 py-4 text-right font-medium">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#eeeae2]">
                {filteredRows.map((row) => (
                  <tr key={row.id} className="transition hover:bg-[#faf9f6]">
                    <td className="px-5 py-5">
                      <p className="font-medium">{row.name}</p>
                      <p className="mt-1 text-xs text-[#77736d]">
                        ID: {row.id.slice(0, 8)}
                      </p>
                    </td>

                    <td className="px-5 py-5 text-sm text-[#77736d]">
                      {row.secondary}
                    </td>

                    <td className="px-5 py-5 text-sm">{row.count}</td>

                    <td className="px-5 py-5">
                      <span
                        className={`inline-flex items-center gap-2 text-xs ${
                          row.status === "Active"
                            ? "text-[#53765b]"
                            : "text-[#77736d]"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            row.status === "Active"
                              ? "bg-[#668c6d]"
                              : "bg-[#aaa39a]"
                          }`}
                        />
                        {row.status}
                      </span>
                    </td>

                    <td className="px-5 py-5 text-sm text-[#77736d]">
                      {row.date}
                    </td>

                    <td className="px-5 py-5 text-right">
                      <div className="relative inline-block">
                        <button
                          onClick={() =>
                            setMenuId(menuId === row.id ? null : row.id)
                          }
                          aria-label={`Actions for ${row.name}`}
                          className="p-2 hover:bg-[#eeeae2]"
                        >
                          <FiMoreHorizontal size={19} />
                        </button>

                        {menuId === row.id && (
                          <div className="absolute right-0 z-10 w-36 border border-[#e7e1d8] bg-white py-1 text-left shadow-lg">
                            <button
                              onClick={() => handleEdit(row)}
                              className="flex w-full items-center justify-between px-3 py-2.5 text-sm hover:bg-[#f7f4ee]"
                            >
                              Edit <FiArrowUpRight size={14} />
                            </button>

                            <button
                              onClick={() => handleDelete(row)}
                              className="w-full px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredRows.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-16 text-center text-sm text-[#77736d]"
                    >
                      No results found. Try a different search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="border-t border-[#eeeae2] px-5 py-4 text-xs text-[#77736d]">
            Showing {filteredRows.length} of {rows.length} entries
          </div>
        </section>
      </div>
    </div>
  );
}
