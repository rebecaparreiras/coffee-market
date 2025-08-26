# Roastr | Coffee Market | Em processo

Marketplace de café 'Roastr' com catálogo de busca, filtros e ordenação, ficha do produto e carrinho lateral. Projeto de estudo para entender funcionalidades importantes para e-commerce e aprender mais sobre Tailwind. 

<br>

### Objetivos

O objetivo principal é explorar funcionalidades instrísecas ao e-commerce: 

<ul>
  <li>
    Catálogo com busca, filtros e ordenação:
    <ul>
      <li>Buscar cafés via API REST mockada (GET /coffees?q=&origin=&roast=&notes=&priceMin=&priceMax=&sort=&page=);</li>
      <li>Filtrar por torra, origem, moagem e notas;</li>
      <li>Ordenar por preço e avaliação;</li>
      <li>Paginação (ou 'infinite load') com estados de loading, empty e error.</li>
    </ul>
  </li>

  <li>
    Ficha do produto:
    <ul>
      <li>Mostrar nome, origem, torra, notas, rating, preço e imagens;</li>
      <li>Botão 'Add to Cart' com feedback (toast) e controle de estoque mockado por SKU.</li>
    </ul>
  </li>

  <li>
    Carrinho lateral:
    <ul>
      <li>Abrir/fechar globalmente (Context);</li>
      <li>Listar itens, alterar quantidades, remover;</li>
      <li>Cálculo de subtotal e cupom (utilizando POST), com estados "válido/inválido".</li>
    </ul>
  </li>
  
  <li>
    API mock com latência e falhas.
  </li>

  
  <li>
    UX de marketplace:
    <ul>
      <li>Skeletons durante o carregamento, toasts para ações, empty states informativos;</li>
      <li>Acessibilidade: focus rings, aria-labels, navegação por teclado;</li>
      <li>Responsivo: grid 1>2>3>4 colunas com breakpoints.</li>
    </ul>
  </li>

  <li>
    Qualidade e manutenção:
    <ul>
      <li>Testes de unidade para hooks e utilitátios;</li>
      <li>Testes de integração leve;</li>
    </ul>
  </li>
</ul>

<br>

### Tecnologias
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="40" height="40"/>
          
          

