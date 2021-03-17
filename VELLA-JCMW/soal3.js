function cekKoin(koin){
    let arrCoint =[25,10,5,1]
    let countCoint = 0
    let currentCoint = koin
    
    while (currentCoint>0){
        for (let i=0; i<arrCoint.length; i++){
            if (currentCoint>=arrCoint[i]){
                currentCoint -= arrCoint[i]
                countCoint++
                break
            }
        }
    }
    return `
    Jumlah koin Anda adalah ${countCoint}
    `
}

console.log(cekKoin(31))
console.log(cekKoin(49))
console.log(cekKoin(50))