# Portfólio Lend — Texturas & Modelos 3D

Site estático responsivo para apresentar seus trabalhos de textura e modelagem 3D para Minecraft.

## Como abrir

Abra o arquivo `index.html` no navegador. Se quiser rodar um servidor local:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Estrutura

```
index.html            Estrutura das seções, abas e contato direto
assets/css/style.css  Tema, layout, responsividade e animações
assets/js/script.js   Dados dos projetos + interatividade
assets/img/*.svg      Ilustrações de exemplo (pixel art) e favicon.svg
```

## O que personalizar

### 1. Seus projetos (texturas e modelos)

Edite o array `portfolioData` no início de `assets/js/script.js`:

- `categories`: categorias exibidas como filtros dentro de cada aba.
- `items`: cada trabalho, com `title`, `description`, `detail`, `tags`, `category` e `image`.

Para trocar uma imagem, salve sua print/render em `assets/img/` e atualize o campo `image`:

```js
image: "assets/img/minha-textura.png"
```

Dica: mantenha proporção próxima de 4:3 para os cards. As imagens de exemplo são SVG e foram geradas apenas para preencher os espaços.

### 2. Contato

Em `index.html`, seção `#contato`, troque:

- `contato@lend.com` pelo seu e-mail real (aparece no link de e-mail da seção de contato).
- `lend#0001` pelo seu Discord.
- O link com `data-placeholder="Discord"` pode virar um link real (por exemplo, `https://discord.gg/seuconvite`).

Não há formulário: o contato é feito diretamente por e-mail ou Discord, como você preferiu.

### 3. Nome e identidade

O nome "Lend" aparece no título, logo, assinatura e rodapé. Busque por `LEND` / `Lend` nos arquivos para ajustar. As cores ficam no topo de `style.css` nas variáveis `--accent`, `--accent-dark` e `--yellow`.

Os commits deste repositório são publicados com a identidade **LendBot**.

### 4. Números do hero

Os contadores (`22`, `22`, `17`) estão em `index.html` nos atributos `data-count`. Atualize para os números reais.

### 5. Favicon

O ícone temporário é `assets/img/favicon.svg` (os losangulos do logo). Troque esse arquivo pelo seu ícone quando quiser — o link já está no `<head>` do `index.html`.

## Funcionalidades

- Abas separadas para **Texturas** e **Modelos 3D**
- Filtros por categoria dentro de cada aba (Moderno, Medieval, Ícones, Natureza, GUI & Menus, Packs Completos, Texturas Animadas, Sci-Fi, Ferramentas & Armas, Armaduras & Cosméticos, Veículos, Estruturas & Máquinas, Natureza & Plantas...)
- Cards com imagem, descrição, tags e modal de detalhes
- Seção de processo e lista de diferenciais
- Área de contato direto por e-mail e Discord (sem formulário)
- Menu mobile, animações de entrada e contadores
- Layout responsivo para celular, tablet e desktop
