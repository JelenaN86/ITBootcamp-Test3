import { Header } from "./component/Header"
import { Launches } from "./component/Launches"
import { Select } from "./component/Select"
import { Starlinks } from "./component/Starlinks"
import { getAllStarlink, getNextLaunch } from "./service"

const divInfo = document.querySelector('#info')
const divMain = document.querySelector('main')
const btnNextL = document.querySelector('#upcoming')
const divSelect = document.querySelector('#select')


divInfo.append(Header())
divSelect.append(Select())

let launches = []
let starlinks = []

function denerateSelect(versions){
        
    const selectVersion = Select(versions.map(version => version.version))
    selectVersion.addEventListener('change',(e)=>{
        divMain.innerHTML = ''
        divMain.append(...Starlinks(starlinks.filter(starlink => starlink.version(e.target.value))))
    })
}
getAllStarlink().then(res=>{
    //console.log(res.data)
    divMain.append(...Starlinks(res.data))
    generateSelect(res.data)
})
btnNextL.addEventListener('click',()=>{
    divMain.innerHTML = ''
    getNextLaunch().then(res=>{
       // console.log(res.data)
       launches = res.data
       divMain.append(...Launches(launches))
    })
})

