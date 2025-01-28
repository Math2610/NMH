// Selecionando os elementos do DOM
const commentForm = document.getElementById('commentForm');
const commentText = document.getElementById('commentText');
const commentSection = document.getElementById('commentSection');

// Função para adicionar comentário
function addComment(e) {
    e.preventDefault();

    const comment = commentText.value;

    if (comment.trim()) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <p><strong>Comentário:</strong> ${comment}</p>
        `;
        commentSection.appendChild(commentDiv);

        // Limpar o campo de comentário após o envio
        commentText.value = '';
    }
}

// Adicionar evento ao formulário
commentForm.addEventListener('submit', addComment);
