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

export const categoryLimits = {
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
    title: "Graphic Cards",
    icon: Gpu,
  },
  CPU: {
    title: "Processors",
    icon: Cpu,
  },
  PSU: {
    title: "Power Supplies",
    icon: Plug,
  },
  COOLING: {
    title: "Fans",
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
    title: "Motherboards",
    icon: MotherboardIcon,
  },
  CASE: {
    title: "Cases",
    icon: PcCase,
  },
};
