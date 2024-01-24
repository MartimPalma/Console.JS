var n1, n2, op1, op2, n3 , resultado , utilizador, certas , erradas ;
certas = 0 ;
erradas = 0;
document.getElementById("btn_jogar").onclick =  function () {

    // tornar ecrâ vísivel //
    document.getElementById("entrada").style.display = "none";
    document.getElementById("jogo").style.display = "block";

    //gera numeros aleatorios//
    n1 =parseInt(Math.random()*10);
    n2 = parseInt(Math.random()*10);
    n3 = parseInt(Math.random()*10);
    op1 = parseInt(Math.random()*5);
    op2 = parseInt(Math.random()*5);


    // insere valores aleatorios nas caixas do html//
    document.getElementById("n1").value = n1;
    document.getElementById("n2").value = n2;
    document.getElementById("n3").value = n3;


    switch (op1) {
        case 1 :
            op1 = "+";
            break;

        case 2 :
            op1 = "-";
            break;

        case 3 :
            op1 = "/";
            break;

        case 4 :
            op1 = "*";
            break;

    }

    switch (op2) {
        case 1 :
            op2 = "+";
            break;

        case 2 :
            op2 = "-";
            break;

        case 3 :
            op2 = "/";
            break;

        case 4 :
            op2 = "*";
            break;

    }

    //inserir dentro da caixa//
    document.getElementById("op1").value = op1;
    document.getElementById("op2").value = op2;


}

//parte 2//
document.getElementById("btn_verificar").onclick = function () {

    utilizador = parseInt(document.getElementById("resultado").value);


    switch (op1) {
        case "+" :
            resultado = n1 + n2;
            break;

        case "-" :
            resultado = n1 - n2;
            break;

        case "/" :
            resultado = n1 / n2;
            break;

        case "*" :
            resultado = n1 * n2;
            break;

    }

    switch (op2) {
        case "+" :
            resultado = resultado + n3;
            break;

        case "-" :
            resultado = resultado - n3;
            break;

        case "/" :
            resultado = resultado / n3;
            break;

        case "*" :
            resultado = resultado * n2;
            break;

    }


    console.log(resultado, utilizador);


    if (resultado === utilizador) {
        console.log('igual')
        certas= (certas + 1)
        console.log("certas " + certas)

        //valor no DOM//
        document.getElementById("certas").innerHTML = '<div>' + "Respostas certas: " + certas + '</div>';

        //conteudo da modal,  imagem só alterar a source//
        document.getElementById("myModal").style.display = "block";
        document.getElementById("modal-body").innerHTML = '<div>Resposta Correta</div>';
        document.getElementById("modal-feedback-pic").src ="img/correct.gif" ;

        document.getElementById("closeBtn",).onclick = function () {
            document.getElementById("myModal").style.display = "none";
        }
        document.getElementById("dismissBtn",).onclick = function () {
            document.getElementById("myModal").style.display = "none";
        }

        document.getElementById("entrada").style.display = "block";
        document.getElementById("jogo").style.display = "none";
    }
    else {
        console.log('diferente')
        erradas= (erradas + 1)
        console.log("erradas " + erradas)

        //valor no DOM//
        document.getElementById("erradas").innerHTML = '<div>' + "Respostas incorretas: " + erradas + '</div>';

        //conteudo da modal, não dá a imagem//
        document.getElementById("myModal").style.display = "block";
        document.getElementById("modal-body").innerHTML = '<div>Resposta Incorreta</div>';
        document.getElementById("modal-feedback-pic").src ="img/incorrect.gif";

        //fechar modal//
        document.getElementById("closeBtn",).onclick = function () {
            document.getElementById("myModal").style.display = "none";
        }
        document.getElementById("dismissBtn",).onclick = function () {
            document.getElementById("myModal").style.display = "none";
        }


        document.getElementById("entrada").style.display = "block";
        document.getElementById("jogo").style.display = "none";
    }

}