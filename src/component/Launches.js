import { Launch } from "../Launch"

export const Launches = (launches)=>{
    return launches.map(launch=> Launch(launch))
}