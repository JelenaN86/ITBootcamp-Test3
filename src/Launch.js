
export const Launch = (launch)=>{
    const divLaunch = document.createElement('div')
    const pName = document.createElement('p')
    pName.textContent = launch.name
    const img = document.createElement('img')
    img.src = launch.links.patch.small
    img.alt = `Image of ${launch.name}`
    divLaunch.append(pName,img)
  return divLaunch
}