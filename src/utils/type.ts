import { LucideIcon } from "lucide-react";

export interface ProjectProps {
  id: number;
  title: string;
  image: string;
  description?: string;
}
export interface TeamMember {
  name: string
  title: string
  image: string
}

export interface ProjectDataType{
id:number;
  title:string,
  image?:string;
  address:string
  project_type:string;
  project_status:"Completed" | "UpComing" | "Current"
  description:string
}
export interface About_Project {
  year: number;
  title: string;
  description: string;
  icon: LucideIcon; 
}
export interface Project {
  name: string;
  location: string;
  description: string;
  lat: number;
  lng: number;
  year: number | null;
}