document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.galeria-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modal = document.getElementById('modalGaleria');
            const imagemModal = document.getElementById('imagemModal');
            imagemModal.src = this.href;
            modal.classList.add('ativo');
        });
    });

    const modal = document.getElementById('modalGaleria');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                fecharModal();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            fecharModal();
        }
    });
});

function fecharModal() {
    document.getElementById('modalGaleria').classList.remove('ativo');
}

// Scroll suave ao clicar no botão
document.querySelector('.btn-hero-scroll')?.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#informacoes').scrollIntoView({ 
        behavior: 'smooth' 
    });
});