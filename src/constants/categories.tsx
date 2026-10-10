import { Cpu, Fan, Gpu, HardDrive, MemoryStick, PcCase, Plug } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { MotherboardIcon } from "../assets/MotherboardIcon";

type CategoryCopy = { title: string; icon: LucideIcon | typeof MotherboardIcon };

export const Categories = [
  "GPU",
  "CPU",
  "PSU",
  "COOLING",
  "STORAGE",
  "RAM",
  "MOBO",
  "CASE",
] as const;

export const maxQuantitiesPerCategory = {
  GPU: 1,
  CPU: 1,
  PSU: 1,
  COOLING: 1,
  STORAGE: 2,
  RAM: 2,
  MOBO: 1,
  CASE: 1,
} satisfies Record<(typeof Categories)[number], number>;

export const CategoryCopies: Record<(typeof Categories)[number], CategoryCopy> = {
  GPU: {
    title: "Graphics Card",
    icon: Gpu,
  },
  CPU: {
    title: "Processor",
    icon: Cpu,
  },
  PSU: {
    title: "Power Supply",
    icon: Plug,
  },
  COOLING: {
    title: "Cooling",
    icon: Fan,
  },
  STORAGE: {
    title: "Storage",
    icon: HardDrive,
  },
  RAM: {
    title: "Memory",
    icon: MemoryStick,
  },
  MOBO: {
    title: "Motherboard",
    icon: MotherboardIcon,
  },
  CASE: {
    title: "Case",
    icon: PcCase,
  },
};
