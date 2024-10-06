// Ambil Elemen Yang Di Perlukan
const inputUserName = document.querySelector(".namaTodo");
const deadline = document.querySelector(".deadlineTodo");
const btn = document.querySelectorAll(".btn")[1];
const ul = document.querySelector(".list");
const li = document.querySelector("#listTodo");




//Menambahkan Event Dan Mengambil Data Value Lalu Di Tambahkan Ke Card
btn.addEventListener ("click" , function(input){
    input.preventDefault();
    Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Berhasil menambahkan data",
      });

    let namaTodo = inputUserName.value;
    let deadline1 = deadline.value;
    tampilDataValidasi(namaTodo,deadline1);
    
   
})

function tampilDataValidasi(a,b){
    let status = true;

    function validasi (a,b){
        for (let e in a){
            if (!isNaN(a)){
                Swal.fire({
                    icon: "error",
                    title: "Ooops...",
                    text: "nama tidak boleh diisi angka"
                    
                });
                status = false;
                return;
            }
        }

        if (!a){
            status = false;
            Swal.fire({
                icon: "error",
                title: "Nama Wajib Diisi",
                text: "nama wajib diisi,tidak boleh kosong"

              });
              return;
        }
        if (!b){
            b = "Tidak ada deadline";
        }
       return b;
    }
    b = validasi (a,b);
    if (!status){
        return;
    }

    
    const list = document.createElement ("li");
    list.innerHTML = `<li>Nama Todo : ${a}
                        </br>
                        Deadline : ${b}</li>`;
    return ul.append(list);
}