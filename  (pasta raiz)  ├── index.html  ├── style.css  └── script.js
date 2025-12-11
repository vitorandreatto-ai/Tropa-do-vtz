<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Meu Site no Spck</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>Bem-vindo ao meu site!</h1>
        <p>Criado pelo Spck Editor 📱💻</p>
    </header>

    <section class="card">
        <h2>Sobre o Site</h2>
        <p>Este é um exemplo de site simples e moderno, feito diretamente no celular!</p>
    </section>

    <button id="botao">Clique aqui</button>

    <script src="script.js"></script>
</body>
</html>body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f0f0f0;
    text-align: center;
}

header {
    background: #6200ea;
    padding: 40px 10px;
    color: white;
}

.card {
    background: white;
    margin: 20px;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
}

button {
    background: #6200ea;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 17px;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 20px;
}

button:hover {
    background: #4e00b5;
}document.getElementById("botao").onclick = function () {
    alert("Você clicou no botão! 🚀");
};