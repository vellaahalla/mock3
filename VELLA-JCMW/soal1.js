let itemLelang=[
    {
        nama: "baju",
        harga: 10000,
        interest: 1.1
    },
    {
        nama:"celana",
        harga: 20000,
        interest: 1.2
    },
    {
        nama:"kacamata",
        harga: 30000,
        interest: 1.3
    }
]


function lelangArr(time){
    return  `
    Di menit ke ${time} Product Info
    Nama Barang = ${itemLelang[0].nama}, harga = Rp. ${Math.ceil(itemLelang[0].harga*Math.pow(itemLelang[0].interest,time))}
    Nama Barang = ${itemLelang[1].nama}, harga = Rp. ${Math.ceil(itemLelang[1].harga*Math.pow(itemLelang[1].interest,time))}
    Nama Barang = ${itemLelang[2].nama}, harga = Rp. ${Math.ceil(itemLelang[2].harga*Math.pow(itemLelang[2].interest,time))}
    `
}

console.log(lelangArr(1))
console.log(lelangArr(5))
console.log(lelangArr(10))