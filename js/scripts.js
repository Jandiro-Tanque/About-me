// Inicializa o AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // duração das animações
    once: true      // anima apenas uma vez
  });
  
  // Alternar Modo Escuro/Claro
  const toggleThemeBtn = document.getElementById('toggleTheme');
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Alterar o ícone do botão conforme o tema
    const icon = toggleThemeBtn.querySelector('i');
    if(document.body.classList.contains('dark-mode')) {
      icon.classList.remove('bi-moon-fill');
      icon.classList.add('bi-sun-fill');
    } else {
      icon.classList.remove('bi-sun-fill');
      icon.classList.add('bi-moon-fill');
    }
  });
  
  // Exemplo de manipulação do formulário de contato (opcional)
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário via AJAX ou integrar com um serviço
    alert('Mensagem enviada! Em breve entraremos em contato.');
    contactForm.reset();
  });
  