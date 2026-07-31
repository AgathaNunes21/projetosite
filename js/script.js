document.addEventListener('DOMContentLoaded', () => {

  // ================================================
  // 1. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO
  // ================================================
  const form = document.querySelector('#contato form');
  const inputNome = document.querySelector('#nome');
  const inputEmail = document.querySelector('#email');
  const inputMensagem = document.querySelector('#mensagem');

  if (form) {
    form.addEventListener('submit', (event) => {

      event.preventDefault();

      const nome = inputNome.value.trim();
      const email = inputEmail.value.trim();
      const mensagem = inputMensagem.value.trim();

      if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos do formulário antes de enviar!');
        return;
      }

      alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);
      
      form.reset();
    });
  }

  // ================================================
  // 2. ROLAGEM SUAVE E DESTAQUE NO MENU DE NAVEGAÇÃO
  // ================================================
  const navLinks = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('section');

  // Rolagem suave ao clicar no menu
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // Se for um link interno da página
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

  window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // ================================================
  // 3. EFEITO NA GALERIA DE FOTOS
  // ================================================
  const galeriaImagens = document.querySelectorAll('#galeria img');

  galeriaImagens.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {

      window.open(img.src, '_blank');
    });
  });

});
