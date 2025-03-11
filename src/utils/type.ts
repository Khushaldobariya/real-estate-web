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