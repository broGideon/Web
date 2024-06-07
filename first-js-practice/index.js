document.getElementById("clone-1").addEventListener("click", function() {
    const element = document.getElementById("1");
    const clone = element.cloneNode(true);
    const parent = document.getElementById("1").parentElement;
    parent.appendChild(clone);
});

document.getElementById("clone-2").addEventListener("click", function() {
    const element = document.getElementById("2");
    const clone = element.cloneNode(true);
    const parent = document.getElementById("2").parentElement;
    parent.appendChild(clone);
});

document.getElementById("clone-3").addEventListener("click", function() {
    const element = document.getElementById("3");
    const clone = element.cloneNode(true);
    const parent = document.getElementById("3").parentElement;
    parent.appendChild(clone);
});

document.getElementById('addHorse').addEventListener('click', function() {
    let newImg = document.createElement('img');

    let container = document.getElementById('horses');
    let children = container.children;
    if (children.length%2 !== 0){
        console.log(children.length);
        newImg.src = 'src/5horse.png';
    }
    else{
        newImg.src = 'src/4horse.png';
    }
    newImg.style.width = '65%';
    document.getElementById('horses').appendChild(newImg);
});

document.getElementById('deleteHorse').addEventListener('click', function() {
    let children = document.getElementById('horses').children;
    if(children.length === 0){
        return;
    }
    document.getElementById('horses').removeChild(children[children.length-1]);
})
