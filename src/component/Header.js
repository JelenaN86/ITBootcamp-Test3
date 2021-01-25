import { getCompanyInfo } from "../service"

export const Header = () =>{
    const divHeader = document.createElement('div')
    getCompanyInfo().then(res =>{
        const pName = document.createElement('p')
        pName.textContent = res.data.name
        const pFounded = document.createElement('p')
        pFounded.textContent = res.data.founded
        const pHeadquarters = document.createElement('p')
        pHeadquarters.innerHTML = //res.data.headquarters
                `
                <span>${res.data.headquarters.address}</span>
                <span>${res.data.headquarters.city}</span>
                <span>${res.data.headquarters.state}</span>
                `
        divHeader.append(pName,pFounded,pHeadquarters)
    })
    return divHeader
}