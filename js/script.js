document.addEventListener('DOMContentLoaded', function () {
    const flashcards = document.querySelectorAll('.flashcard');

    flashcards.forEach(flashcard => {
        flashcard.addEventListener('click', function () {
            this.classList.toggle('flipped');
        });
    });
});

//Script Recursos Para Voce

document.addEventListener('DOMContentLoaded', function () {
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const isActive = this.classList.contains('active');
            const content = this.nextElementSibling;

            // Opcional: Fechar todos os outros acordeões (se desejar que apenas um fique aberto)
            accordionBtns.forEach(otherBtn => {
                if (otherBtn !== this) {
                    otherBtn.classList.remove('active');
                    const otherContent = otherBtn.nextElementSibling;
                    otherContent.classList.remove('open');
                    otherContent.style.maxHeight = null;
                    // Resetar padding se você anima o padding e fecha outros
                    // otherContent.style.paddingTop = null;
                    // otherContent.style.paddingBottom = null;
                }
            });

            // Alterna o estado do botão clicado
            this.classList.toggle('active');
            content.classList.toggle('open');

            if (content.classList.contains('open')) {
                // Adiciona padding antes de calcular scrollHeight se o padding afeta a altura
                // A classe .open já cuida do padding via CSS, então só precisamos do maxHeight
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});

//ANIMACAO DIGITACAO SECTION HERO
document.addEventListener('DOMContentLoaded', function () {
    const heroTitle = document.querySelector('.hero-section h2');

    if (heroTitle) {
        const originalText = heroTitle.textContent.trim(); // Pega o texto original
        heroTitle.innerHTML = '<span class="typed-text-wrapper"></span>'; // Limpa e adiciona o wrapper

        const typedTextWrapper = heroTitle.querySelector('.typed-text-wrapper');
        let charIndex = 0;
        const typingSpeed = 100; // Velocidade da digitação em milissegundos (ajuste conforme necessário)

        function typeCharacter() {
            if (charIndex < originalText.length) {
                typedTextWrapper.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeCharacter, typingSpeed);
            } else {
                // Digitação concluída
                typedTextWrapper.classList.add('typing-done'); // Adiciona classe para esconder o cursor (opcional)
            }
        }

        // Inicia a animação de digitação
        // Adiciona um pequeno delay antes de começar para dar tempo da página carregar visualmente (opcional)
        setTimeout(typeCharacter, 500); // Delay de 0.5 segundos
    }
});