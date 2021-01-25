
export const Select = (versions) =>{
    const select = document.createElement('select')
    const defOption = document.createElement('option')
    defOption.value = '-1'
    defOption.selected = true
    defOption.disabled = true
    defOption.hidden = true
    defOption.textContent = 'Izaberite verziju'
    select.append(defOption)

versions.forEach(version=>{
    const opt = document.createElement('option')
    opt.value = version
    opt.textContent = version
    select.append(opt)
})
return select

}