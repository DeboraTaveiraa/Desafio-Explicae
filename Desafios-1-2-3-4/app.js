new Vue({
    el: '#app',
    data: {
        array: [],
        selectedNumbers: []
    },
    methods: {
        gerarArray() {
            this.array = []
            while (this.array.length <= 6) {
                var dezenaAleatoria = Math.floor(Math.random() * 60) + 1
                if (this.array.indexOf(dezenaAleatoria) == -1)
                    this.array.push(dezenaAleatoria)
            }
            this.array.sort(function (a, b) { return a - b })
        }, //func
        criarTabela(l, c) {
            switch (l) {
                case 1:
                    return c
                    break
                case 2:
                    return 10 + c
                    break
                case 3:
                    return 20 + c
                    break
                case 4:
                    return 30 + c
                    break
                case 5:
                    return 40 + c
                    break
                case 6:
                    return 50 + c
                    break
            }
        },
        sortearNumeros(table) {
            let numbersTable = document.querySelectorAll(table)
            numbersTable.forEach((e) => e.style.backgroundColor = "#f2f2f2")
            this.gerarArray()
            for (i=0; i<numbersTable.length; i++){
                this.array.forEach((e) => {
                    if(numbersTable[i].innerHTML == e){
                        numbersTable[i].style.backgroundColor = "#ff00ff"
                    }
                });
            }
        },
        sortearTableOne() {
            var table = ".table-one tr td"
            this.sortearNumeros(table)
            
        },
        sortearTableTwo() {
            var table = ".table-two tr td"
            this.sortearNumeros(table)
        },
        sortearTableThree() {
            var table = ".table-three tr td"
            this.sortearNumeros(table)
        }
    }
})