
    let createNoteDiv = document.querySelector(".create-note");
    let inputNoteDiv = document.querySelector(".input-note ");
    let notesContainer = document.querySelector(".notes");

    createNoteDiv.addEventListener("click", showInputNote);

    function showInputNote() {
        inputNoteDiv.style.display = "block";
        inputNoteDiv.focus();
    }

    inputNoteDiv.addEventListener("keydown", function(event) {
        if (event.key == "Enter") {
            createNote();
        }
    });

    function createNote() {
        let typeNOte = document.querySelector(".type-note ");
        let noteText = inputNoteDiv.value;
        if (noteText !== "") {
           let noteDiv = document.createElement('div');
            noteDiv.className = "note"
            noteDiv.innerHTML = `
            <p>${typeNOte.value}</p>
            <i class="fa-solid fa-trash"></i>
        `
            notesContainer.appendChild(noteDiv);
            noteDiv.style.display = 'block';    
            inputNoteDiv.style.display = "none";
            typeNOte.value = ""; 
        }
    }

    
    notesContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("fa-trash")) {
            event.target.parentElement.remove();
        }
    });

