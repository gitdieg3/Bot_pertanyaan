const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loader = document.getElementById("loader")
const foto = document.getElementById("foto")

let init = 0

const botsay = (data) => {
    return [
        "perkenalkan nama aku zesBOt.  nama kamu siapa ?",
        `hallo ${data?.nama} senang bertemu dgn kamu, kalo boleh tau umur kamu berapa`,
        `ohhhh ${data?.umur} tahun, btw udah punya pacar ngk `,
        `ohhhh ${data?.pacar} , kalo boleh tau kamu sekolah di mana ?`,
        `ohhhh kamu sekolah di ${data?.jawab} semangat ya belajarnya hhehe`
    ]

}

pertanyaan.innerHTML = botsay()[0]

let userData = []

function botstart() {
    init++
    if (init === 1){
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ umur: jawaban.value })
    }else if (init === 3) {
        botDelay({ pacar: jawaban.value })
    }else if (init === 4) {
        botDelay({ jawab: jawaban.value })
    }else if(init === 5){
        finishing()
    }else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
        loader.style.display = "block"
    setTimeout(() => {
        pertanyaan.innerHTML = botsay(jawabanUser)[init]
        loader.style.display ="none"
    }, [1000])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = 'thank sudah main lain kali kami akan update dengan fitur yang lebih menarik'
    jawaban.value = "ok thanks juga"
}

function botEnd() {
    alert(`terimakasih sudah bermain`)
    window.location.reload()
}