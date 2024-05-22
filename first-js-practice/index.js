function addColumnOne(){
    document.getElementById("clone-1").addEventListener("click", function() {
        let newDiv = document.createElement('div');
        newDiv.classList.add('col-md-4', 'col-sm-12', 'mt-5');

        let newImg = document.createElement('img');
        newImg.src = 'src/1horse.png';
        newImg.style.width = '15%';
        newDiv.appendChild(newImg);

        let newHeading = document.createElement('h3');
        newHeading.textContent = '1';
        newDiv.appendChild(newHeading);

        let newParagraph = document.createElement('p');
        newParagraph.textContent = 'Во-первых, оказалось. что все современные домашние лошади произошли от одной группы одомашненных лошадей, т.е. находятся в близком родстве друг с другом.';
        newDiv.appendChild(newParagraph);


        document.getElementById('column-container').appendChild(newDiv);
    });
}

function addColumnTwo(){
    document.getElementById("clone-2").addEventListener("click", function() {
        let newDiv = document.createElement('div');
        newDiv.classList.add('col-md-4', 'col-sm-12', 'mt-5');

        let newImg = document.createElement('img');
        newImg.src = 'src/2horse.png';
        newImg.style.width = '15%';
        newDiv.appendChild(newImg);

        let newHeading = document.createElement('h3');
        newHeading.textContent = '2';
        newDiv.appendChild(newHeading);

        let newParagraph = document.createElement('p');
        newParagraph.textContent = 'Во-вторых. в близком родстве с современными домашними лошадьми оказались древние домашние лошади, вымершие примерно 4200 лет назад, а также дикие лошади из Западной Евразии.';
        newDiv.appendChild(newParagraph);

        document.getElementById('column-container').appendChild(newDiv);
    });
}

function addColumnThree(){
    document.getElementById("clone-3").addEventListener("click", function() {
        let newDiv = document.createElement('div');
        newDiv.classList.add('col-md-4', 'col-sm-12', 'mt-5');

        let newImg = document.createElement('img');
        newImg.src = 'src/3horse.png';
        newImg.style.width = '15%';
        newDiv.appendChild(newImg);

        let newHeading = document.createElement('h3');
        newHeading.textContent = '3';
        newDiv.appendChild(newHeading);

        let newParagraph = document.createElement('p');
        newParagraph.textContent = 'В-третьих, прояснилось положение лошадей из поселения Ботай*, которые до сих пор считались самыми древними представителями домашних лошадей в мире.';
        newDiv.appendChild(newParagraph);

        document.getElementById('column-container').appendChild(newDiv);
    });
}

addColumnOne()
addColumnTwo()
addColumnThree()

function addHorse(){
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
}

function deleteHorse(){
    document.getElementById('deleteHorse').addEventListener('click', function() {
        let children = document.getElementById('horses').children;
        if(children.length === 0){
            return;
        }
        document.getElementById('horses').removeChild(children[children.length-1]);
    })
}

addHorse()
deleteHorse()