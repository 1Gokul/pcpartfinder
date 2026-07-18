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
  "MOTHERBOARD",
  "CASE",
] as const;

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
  MOTHERBOARD: {
    title: "Motherboard",
    icon: MotherboardIcon,
  },
  CASE: {
    title: "Case",
    icon: PcCase,
  },
};
