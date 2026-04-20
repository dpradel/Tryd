# Guia de Sincronização: Code to Canvas (Tryd)

Este repositório foi preparado para a integração **Code to Canvas** da Figma. O objetivo é converter o código atual (HTML/CSS) em frames editáveis no Figma, permitindo que o time de design e desenvolvimento trabalhem em sintonia.

## 🛠 Preparações Realizadas
1.  **Servidor Local:** Criado `package.json` com `browser-sync`. Isso garante que o site seja servido em um ambiente "Live" para captura de alta fidelidade.
2.  **Padronização de UI:** As classes CSS e as variáveis globais (`--brand-primary`, etc.) no arquivo `css/styles.css` foram auditadas para garantir que as camadas no Figma venham com os nomes e tokens corretos.
3.  **Estrutura de Componentes:** Seções como `Navbar`, `Pilares` e `Big Numbers` estão encapsuladas em containers lógicos para facilitar a conversão para Componentes Figma.

## 🚀 Como Iniciar a Captura
Como você está usando o **Antigravity** (baseado em VS Code), siga estes passos:

1.  **Inicie o Servidor:**
    No terminal, execute:
    ```bash
    npm start
    ```
    O site abrirá em `http://localhost:3000`.

2.  **Comando de Captura:**
    Peça ao Antigravity (ou ao suporte MCP do seu IDE):
    > "Capture o site local no endereço http://localhost:3000 em um novo arquivo do Figma."

3.  **Fluxo Roundtrip:**
    - Capture os frames.
    - Organize/Ajuste no Figma.
    - Forneça o link do frame de volta aqui para implementar mudanças de design via IA.

## 📝 Regras de Design System (Para Referência)
- **Primary Color:** `#0083bb` (`--brand-primary`)
- **Background:** `#040810` (`--bg-primary`)
- **Typography:** `Inter` (Sans-serif)
- **Border Radius:** `24px` (Cards), `100px` (Buttons)
