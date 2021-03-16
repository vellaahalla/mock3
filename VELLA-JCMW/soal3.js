let arrCoin = [25, 10, 5, 1]

let countCoint = 0

function cekKoin(koin) {
    for (let i = 0; i < arrCoin.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (koin / arrCoin[j] >= 1) {
                countCoint += 1
                koin -= arrCoin[j]
            }
        }
    }
    console.log(`Jumlah koin anda adalah ${countCoint}`)
}

cekKoin(31)
cekKoin(49)
cekKoin(50)
