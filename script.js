/*
  Este é o arquivo JavaScript para adicionar interatividade ao seu site.
  Você pode colocar aqui funções para:

  -   Abrir e fechar o menu de navegação em dispositivos móveis (menu hambúrguer).
  -   Animações de rolagem (scroll animations).
  -   Validar formulários antes do envio.
  -   Sliders de imagem ou carrosséis.
  -   Qualquer outra funcionalidade dinâmica.

  Exemplo (um simples para começar a pensar no menu mobile):
*/

document.addEventListener('DOMContentLoaded', function() {
  // Exemplo: Se você tivesse um botão de menu hambúrguer para dispositivos móveis
  // const menuToggle = document.querySelector('.menu-toggle');
  // const mainNav = document.querySelector('.main-nav');

  // if (menuToggle) {
  //   menuToggle.addEventListener('click', function() {
  //     mainNav.classList.toggle('active'); // Adiciona/remove uma classe 'active' para mostrar/esconder o menu
  //   });
  // }

  console.log("O site Mal-do-Panamá MT foi carregado com sucesso!");
  // Você pode adicionar mais scripts aqui conforme necessário.
});

let ultimoScrollTop = 0;

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > ultimoScrollTop){
    document.body.classList.add('rolagem-para-baixo');
  } else {
    document.body.classList.remove('rolagem-para-baixo');
  }
  ultimoScrollTop = scrollTop;
});