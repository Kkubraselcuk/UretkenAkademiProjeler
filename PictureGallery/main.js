var mainRow = document.getElementById('row');
let cols = "";
for(var i= 0; i<15; i++){
    cols = `
    <div class="col">
        <img src="https://source.unsplash.com/random/300x250?sig=${i}" alt="">
    </div>`;
    mainRow.innerHTML += cols;
}
