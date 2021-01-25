import { Starlink } from "./Starlink"

export const Starlinks = (starlinks)=>{
    return starlinks.map(starlink => Starlink(starlink))
}