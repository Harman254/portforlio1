import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { sanityClient } from "./sanity"
import { Project } from "@/types/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return `${day}/${month}/${year}`;
}

export async function getData(): Promise<Project[]> {
  try {
    const query = "*[_type == 'project']";
    const data = await sanityClient.fetch(query);
    if (!data) return [];
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}