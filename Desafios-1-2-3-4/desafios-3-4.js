// Classe que vai ler o arquivo de texto
class TextFile {

    constructor() {
        this.event;
        this._file; //atributo privado
        this._input = document.getElementById("fileText"); //atributo privado
        this.btSubmit = document.getElementById("btSubmit")
        this.contentText = document.getElementById("contentText");
    }

    //método que retorna o arquivo texto no textarea
    get Text() {
        if (this.event == document.getElementById("btSubmit")) {
            return this.viewFile()

        } else {
            this._input.addEventListener('change', () => {
                return this.viewFile()
            })
        }
    }
    set Text(event) {
        if (event == this.btSubmit) {
            this.event = event;
            this._input = document.getElementById("fileForm");
            this.contentText = document.getElementById("contentForm");
        }
    }

    viewFile(){
        var files = this._input.files;

            if (files.length == 0) return;

            this._file = files[0];

            var reader = new FileReader();

            reader.onload = (e) => {
                const file = e.target.result;
                const lines = file.split(/\r\n|\n/);
                this.contentText.value = lines.join('\n');
            }

            reader.onerror = (e) => alert(e.target.error.name);
            reader.readAsText(this._file);
    }
}
//pega o click dos elementos e chama a função
document.getElementById("fileText").addEventListener("click", callClass);
document.getElementById("btSubmit").addEventListener("click", callClass);

//função pega os elementos clickados e cria uma instância da classe
function callClass() {
    var obj = new TextFile();
    obj.Text = this;
    obj.Text;
}