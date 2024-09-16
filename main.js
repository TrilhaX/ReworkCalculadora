//Arrays//
const history = [];

//Functions Dos Calculos//
function fatorial(n) {
    if (n < 0) return "Não definido para números negativos";
    if (n === 0) return 1;

    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

function duploFatorial(n) {
    if (n < 0) return "Não definido para números negativos";
    if (n === 0 || n === 1) return 1;

    let resultado = 1;
    for (let i = n; i > 1; i -= 2) {
        resultado *= i;
    }
    return resultado;
}

function perimetroCirculo() {
    let raio = parseFloat(document.querySelector(".input12").value) || 0;
    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
    return 2 * piInput * raio;
}

function areaCirculo() {
    let raio = parseFloat(document.querySelector(".input12").value) || 0;
    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
    return piInput * raio ** 2;
}

function areaRetangulo() {
    let largura = parseFloat(document.querySelector(".larguraRetangulo").value) || 0;
    let altura = parseFloat(document.querySelector(".alturaRetangulo").value) || 0;
    return largura * altura;
}

function perimetroRetangulo() {
    let largura = parseFloat(document.querySelector(".larguraRetangulo").value) || 0;
    let altura = parseFloat(document.querySelector(".alturaRetangulo").value) || 0;
    return 2 * (largura + altura);
}

function areaTriangulo() {
    let base = parseFloat(document.querySelector(".baseTriangulo").value) || 0;
    let altura = parseFloat(document.querySelector(".alturaTriangulo").value) || 0;
    return (base * altura) / 2;
}

function perimetroTriangulo() {
    let a = parseFloat(document.querySelector(".BA").value) || 0;
    let b = parseFloat(document.querySelector(".BB").value) || 0;
    let c = parseFloat(document.querySelector(".BC").value) || 0;
    return a + b + c;
}

function areaTrianguloHero() {
    let a = parseFloat(document.querySelector(".BA").value) || 0;
    let b = parseFloat(document.querySelector(".BB").value) || 0;
    let c = parseFloat(document.querySelector(".BC").value) || 0;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function areaTrapezio() {
    let baseMaior = parseFloat(document.querySelector(".baseMaior").value) || 0;
    let baseMenor = parseFloat(document.querySelector(".baseMenor").value) || 0;
    let altura = parseFloat(document.querySelector(".altura").value) || 0;
    return ((baseMaior + baseMenor) * altura) / 2;
}

function areaParalelogramo() {
    let base = parseFloat(document.querySelector(".baseParalelogramo").value) || 0;
    let altura = parseFloat(document.querySelector(".alturaParalelogramo").value) || 0;
    return base * altura;
}

function areaLosango() {
    let d1 = parseFloat(document.querySelector(".diagonalMenor").value) || 0;
    let d2 = parseFloat(document.querySelector(".diagonalMaior").value) || 0;
    return (d1 * d2) / 2;
}

function areaQuadrado() {
    let lado = parseFloat(document.querySelector(".ladoQuadrado").value) || 0;
    return lado ** 2;
}

function perimetroQuadrado() {
    let lado = parseFloat(document.querySelector(".ladoQuadrado").value) || 0;
    return 4 * lado;
}

function volumeCubo() {
    let lado = parseFloat(document.querySelector(".ladoQuadrado").value) || 0;
    return lado ** 3;
}

function volumeParalelepipedo() {
    let comprimento = parseFloat(document.querySelector(".comprimento").value) || 0;
    let largura = parseFloat(document.querySelector(".largura").value) || 0;
    let altura = parseFloat(document.querySelector(".altura").value) || 0;
    return comprimento * largura * altura;
}

function volumeEsfera() {
    let raio = parseFloat(document.querySelector(".input12").value) || 0;
    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
    return (4 / 3) * piInput * raio ** 3;
}

function areaEsfera() {
    let raio = parseFloat(document.querySelector(".input12").value) || 0;
    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
    return 4 * piInput * raio ** 2;
}

function volumeCilindro() {
    let raio = parseFloat(document.querySelector(".raioCilindro").value) || 0;
    let altura = parseFloat(document.querySelector(".alturaCilindro").value) || 0;
    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
    return piInput * raio ** 2 * altura;
}

function areaCilindro() {
    let raio = parseFloat(document.querySelector(".raioCilindro").value) || 0;
    let altura = parseFloat(document.querySelector(".alturaCilindro").value) || 0;
    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
    return 2 * piInput * raio * (raio + altura);
}

function volumeCone() {
    let raio = parseFloat(document.querySelector(".raioCone").value) || 0;
    let altura = parseFloat(document.querySelector(".alturaCone").value) || 0;
    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
    return (1 / 3) * piInput * raio ** 2 * altura;
}

function areaCone() {
    let raio = parseFloat(document.querySelector(".raioCone").value) || 0;
    let altura = parseFloat(document.querySelector(".alturaCone").value) || 0;
    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
    const geratriz = Math.sqrt(raio ** 2 + altura ** 2);
    return piInput * raio * (raio + geratriz);
}

function distancia() {
    let x1 = parseFloat(document.querySelector(".x1").value) || 0;
    let y1 = parseFloat(document.querySelector(".y1").value) || 0;
    let x2 = parseFloat(document.querySelector(".x2").value) || 0;
    let y2 = parseFloat(document.querySelector(".y2").value) || 0;
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function raizCalculo() {
    let raiz1 = parseInt(document.querySelector(".raiz1").value);
    let raiz2 = parseInt(document.querySelector(".raiz2").value);

    let raizR = Math.pow(raiz1, 1 / raiz2);
    return raizR;
}

function porcentagem(){
    const numero = parseFloat(document.querySelector(".numero").value);
    const porcentagem = parseFloat(document.querySelector(".porcentagem").value);
    return (numero * porcentagem) / 100;
}

function hipotenusa(){
    const A = parseFloat(document.querySelector(".A").value);
    const B = parseFloat(document.querySelector(".B").value);
    return Math.sqrt(A * A + B * B);
}

function bhaskara(){
    const A2 = parseFloat(document.querySelector(".BA").value);
    const B2 = parseFloat(document.querySelector(".BB").value);
    const C = parseFloat(document.querySelector(".BC").value);
    const delta = B2 * B2 - 4 * A2 * C;
    if (delta < 0) {
        return "Delta negativo, sem raízes reais.";
    } else {
        const x1 = (-BB + Math.sqrt(delta)) / (2 * BA);
        const x2 = (-BB - Math.sqrt(delta)) / (2 * BA);
        return `Delta =  ${delta}<br> x1 = ${x1}<br> x2 = ${x2}`;
    }
}

function teoremaDePitagoras(){
    let valor1 = parseFloat(document.querySelector(".A").value);
    let valor2 = parseFloat(document.querySelector(".B").value);
    return Math.sqrt(valor1 * valor1 + valor2 * valor2);  
}

function trigonometria(){
    const angleInDegrees = parseFloat(document.querySelector(".trigonometria").value);
    const angleInRadians = angleInDegrees * (PI / 180);
    const cosine = Math.cos(angleInRadians);
    const sine = Math.sin(angleInRadians);
    const tangent = Math.tan(angleInRadians);
            
    return `Cosseno: ${cosine.toFixed(2).replace('.', ',')}<br>Seno: ${sine.toFixed(2).replace('.', ',')}<br>Tangente: ${tangent.toFixed(2).replace('.', ',')}`;
}

function log(){
    const base = parseFloat(document.querySelector(".logaritmo").value);
    const valor = parseFloat(document.querySelector(".logaritmando").value);
    return Math.log(valor) / Math.log(base);
}

function evalExpression() {
    let expressao = document.querySelector(".expressao").value;
    expressao = replaceSymbols(expressao);

    try {
        return `${eval(expressao)}`;  // Executa a expressão usando eval
    } catch (error) {
        return "Erro na expressão!";  // Captura erros na expressão
    }
}

function somaDeMatriz(){
    let matrizA2 = document.querySelector(".matrizA3");
    let matrizB2 = document.querySelector(".matrizB3");
    let matrizC2 = document.querySelector(".matrizC3");
    let matrizD2 = document.querySelector(".matrizD3");
    let matrizA3 = document.querySelector(".matrizA4");
    let matrizB3 = document.querySelector(".matrizB4");
    let matrizC3 = document.querySelector(".matrizC4");
    let matrizD3 = document.querySelector(".matrizD4");
    let a1 = matrizA2.value;
    let b1 = matrizB2.value;
    let c1 = matrizC2.value;
    let d1 = matrizD2.value;

    let a2 = matrizA3.value;
    let b2 = matrizB3.value;
    let c2 = matrizC3.value;
    let d2 = matrizD3.value;

    let aR = parseInt(a1) + parseInt(a2);
    let bR = parseInt(b1) + parseInt(b2);
    let cR = parseInt(c1) + parseInt(c2);
    let dR = parseInt(d1) + parseInt(d2);

    return `A soma das matrizes é: ${aR.toFixed(2).replace('.', ',')} ${bR.toFixed(2).replace('.', ',')}<br>${cR.toFixed(2).replace('.', ',')} ${dR.toFixed(2).replace('.', ',')}`;
}

function multiplicacaoDeMatriz(){
    let matrizA2 = document.querySelector(".matrizA3");
    let matrizB2 = document.querySelector(".matrizB3");
    let matrizC2 = document.querySelector(".matrizC3");
    let matrizD2 = document.querySelector(".matrizD3");
    let matrizA3 = document.querySelector(".matrizA4");
    let matrizB3 = document.querySelector(".matrizB4");
    let matrizC3 = document.querySelector(".matrizC4");
    let matrizD3 = document.querySelector(".matrizD4");
    let a1 = matrizA2.value;
    let b1 = matrizB2.value;
    let c1 = matrizC2.value;
    let d1 = matrizD2.value;

    let a2 = matrizA3.value;
    let b2 = matrizB3.value;
    let c2 = matrizC3.value;
    let d2 = matrizD3.value;

    let aR = a1 * a2 + b1 * c2;
    let bR = a1 * b2 + b1 * d2;
    let cR = c1 * a2 + d1 * c2;
    let dR = c1 * b2 + d1 * d2;

    return `A multiplicação das matrizes é: ${aR.toFixed(2).replace('.', ',')} ${bR.toFixed(2).replace('.', ',')}<br>${cR.toFixed(2).replace('.', ',')} ${dR.toFixed(2).replace('.', ',')}`;
}

function matriz2x2(){
    let a1 = parseFloat(document.querySelector(".a11").value) || 0;
    let a2 = parseFloat(document.querySelector(".a12").value) || 0;
    let a3 = parseFloat(document.querySelector(".a21").value) || 0;
    let a4 = parseFloat(document.querySelector(".a22").value) || 0;
    let r1 = parseFloat(document.querySelector(".r1").value) || 0;
    let r2 = parseFloat(document.querySelector(".r2").value) || 0;

    let determinante = a1 * a4 - a2 * a3;
    let Dx = r1 * a4 - r2 * a2;
    let Dy = a1 * r2 - a3 * r1;
    let DxD = Dx / determinante;
    let DyD = Dy / determinante;

    if (determinante !== 0) {
        return `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}<br>Dx é: ${Dx.toFixed(2).replace('.', ',')}<br>Dy é: ${Dy.toFixed(2).replace('.', ',')}<br>X é: ${DxD.toFixed(2).replace('.', ',')}<br>Y é: ${DyD.toFixed(2).replace('.', ',')}<br>Classificação: SPD`;                        
    } else if (determinante === 0 && Dx === 0 && Dy === 0) {
        return `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')} e Dy é ${Dy.toFixed(2).replace('.', ',')}. X é : ${DxD.toFixed(2).replace('.', ',')}, Y é : ${DyD.toFixed(2).replace('.', ',')}. Classificação: SPI`;
    } else {
        return `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')} e Dy é ${Dy.toFixed(2).replace('.', ',')}. X é : ${DxD.toFixed(2).replace('.', ',')}, Y é : ${DyD.toFixed(2).replace('.', ',')}. Classificação: SI`;
    }
}

function matriz3x3(){
    let a1 = parseFloat(document.querySelector(".a11").value) || 0;
    let a2 = parseFloat(document.querySelector(".a12").value) || 0;
    let a3 = parseFloat(document.querySelector(".a13").value) || 0;
    let a4 = parseFloat(document.querySelector(".a21").value) || 0;
    let a5 = parseFloat(document.querySelector(".a22").value) || 0;
    let a6 = parseFloat(document.querySelector(".a23").value) || 0;
    let a7 = parseFloat(document.querySelector(".a31").value) || 0;
    let a8 = parseFloat(document.querySelector(".a32").value) || 0;
    let a9 = parseFloat(document.querySelector(".a33").value) || 0;
    let r1 = parseFloat(document.querySelector(".r1").value) || 0;
    let r2 = parseFloat(document.querySelector(".r2").value) || 0;
    let r3 = parseFloat(document.querySelector(".r3").value) || 0;

    let determinante = (a1 * a5 * a9) + (a2 * a6 * a7) + (a3 * a4 * a8) - (a3 * a5 * a7) - (a1 * a6 * a8) - (a2 * a4 * a9);
    let Dx = (r1 * a5 * a9) + (a2 * a6 * r3) + (a3 * r2 * a8) - (a3 * a5 * r2) - (r1 * a6 * a8) - (a2 * r3 * a9);
    let Dy = (a1 * r2 * a9) + (r1 * a6 * a7) + (a3 * a4 * r3) - (a3 * a6 * a7) - (a1 * a4 * r3) - (r1 * a5 * a9);
    let Dz = (a1 * a5 * r3) + (a2 * r2 * a7) + (r1 * a4 * a8) - (r1 * a5 * a8) - (a1 * a7 * r2) - (a2 * a4 * r3);

    if (determinante !== 0) {
        let X = Dx / determinante;
        let Y = Dy / determinante;
        let Z = Dz / determinante;
        return `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}<br> X é: ${X.toFixed(2).replace('.', ',')}<br> Y é: ${Y.toFixed(2).replace('.', ',')}<br> Z é: ${Z.toFixed(2).replace('.', ',')}`;
    } else {
        return "O sistema não tem uma solução única.";
    }
}

function razao(){
    let a = document.querySelector(".A2").value
    let b = document.querySelector(".B2").value
    const razao = a / b;
    return `O resultado é ${razao}`;
}

function proporcao(){
    let a1 = document.querySelector(".A3").value
    let b1 = document.querySelector(".B3").value
    let c = document.querySelector(".C").value
    const proporcao = (a1 * b1) / (c);
    return `O X é ${proporcao}`;
}

function funcaoExponencial() {
    const valoresX = [-3, -2, -1, 0, 1, 2, 3];
    const inputA = document.querySelector(".funcaoExponencialInput");
    const a = parseFloat(inputA.value);

    if (isNaN(a)) {
        return "Valor de 'a' inválido.";
    } else {
        const resultados = valoresX.map(x => Math.pow(a, x));
        return valoresX.map((x, index) => `f(${x}) = ${resultados[index].toFixed(2)}`).join('<br>');
    }
}

function funcaoQuadratica() {
    const A3 = parseFloat(document.querySelector(".BA").value);
    const B3 = parseFloat(document.querySelector(".BB").value);
    const C2 = parseFloat(document.querySelector(".BC").value);
    const delta2 = B3 * B3 - 4 * A3 * C2;

    if (isNaN(A3) || isNaN(B3) || isNaN(C2)) {
        return "Valores inválidos para a função quadrática.";
    }

    if (delta2 < 0) {
        return "Delta negativo, sem raízes reais.";
    } else {
        const x1 = (-B3 + Math.sqrt(delta2)) / (2 * A3);
        const x2 = (-B3 - Math.sqrt(delta2)) / (2 * A3);
        const Xv = -B3 / (2 * A3);
        const Yv = -delta2 / (4 * A3);
        const EY = C2;
        return `Raízes da função: x1= (${x1.toFixed(2)}, 0), x2= (${x2.toFixed(2)}, 0)<br>
                Vértice da parábola: (${Xv.toFixed(2)}, ${Yv.toFixed(2)})<br>
                Ponto de interseção com o eixo Y: (0, ${EY.toFixed(2)})`;
    }
}

function calcularPA() {
    let a1 = parseFloat(document.getElementById('paInicial').value);
    let r = parseFloat(document.getElementById('paRazao').value);
    let n = parseInt(document.getElementById('paTermos').value);
    let pa = [];
    let tipoPA = '';

    for (let i = 0; i < n; i++) {
        pa.push(a1 + i * r);
    }

    // Determinar o tipo de PA
    if (r > 0) {
        tipoPA = 'Crescente';
    } else if (r < 0) {
        tipoPA = 'Decrescente';
    } else {
        tipoPA = 'Constante';
    }

    return `PA (${tipoPA}): ${pa.join(', ')}`;
}

function calcularPG() {
    let a1 = parseFloat(document.getElementById('pgInicial').value);
    let r = parseFloat(document.getElementById('pgRazao').value);
    let n = parseInt(document.getElementById('pgTermos').value);
    let pg = [];
    let tipoPG = '';

    for (let i = 0; i < n; i++) {
        pg.push(a1 * Math.pow(r, i));
    }

    // Determinar o tipo de PG
    if (r > 1) {
        tipoPG = 'Crescente';
    } else if (r < 1 && r > 0) {
        tipoPG = 'Decrescente';
    } else if (r === 1) {
        tipoPG = 'Constante';
    } else {
        tipoPG = 'Não definido (r <= 0)';
    }

    return `PG (${tipoPG}): ${pg.join(', ')}`;
}

//Main Functions//
function replaceSymbols(expression) {
    return expression
        .replace(/x/g, '*')
        .replace(/X/g, '*')
        .replace(/÷/g, '/')
        .replace(/,/g, '.')
        .replace(/\^/g, '**') // Correctly replace `^` with `**`
}

function calcular() {
    const operacao = document.querySelector(".calculoTipo").value;
    let resultado
    let num1 = parseFloat(document.querySelector(".input1").value) || 0;

    if (operacao === 'eval') {
        resultado = evalExpression();
    } else {
        switch (operacao) {
            case 'raiz':
                resultado = raizCalculo()
                break;            
            case 'porcentagem':
                resultado = porcentagem();
                break;
            case 'hipotenusa':
                resultado = hipotenusa();
                break;
            case 'bhaskara':
                resultado = bhaskara();
                break;
            case "fatorial":
                resultado = fatorial(num1);
                break;
            case "duploFatorial":
                resultado = duploFatorial(num1);
                break;
            case 'teoremaDePitagoras':
                resultado = teoremaDePitagoras();       
                break;
            case 'Trigonometria':
                resultado = trigonometria()
                break;
            case 'logaritmo':
                resultado = log()
                break;
            case 'Matriz':
                const matrizTipo = document.querySelector(".matrizTipo").value;

                if (matrizTipo === "somaDeMatriz") {
                    resultado = somaDeMatriz();
                    break;
                } else if (matrizTipo === "multiplicacaoDeMatriz") {
                    resultado = multiplicacaoDeMatriz();
                    break;
                } else if (matrizTipo === "sistemaLinear") {
                    let tipo = document.querySelector(".tipoMatriz").value;
                    if (tipo === "2x2") {
                        resultado = matriz2x2();
                        break;
                    } else if (tipo === "3x3") {
                        resultado = matriz3x3();
                        break;
                    }   
                }
                break;
            case 'RazãoeProporção':
                let razaoouproporcao = document.querySelector("#razaoouproporção");
                if (razaoouproporcao.value === "razão") {
                    resultado = razao()
                } else if (razaoouproporcao.value === "proporção") {
                    resultado = proporcao()
                } else {
                    resultado = "Operação não reconhecida.";
                }
                break;
            case 'geometria':
                let geometriaTipoDiv2 = document.querySelector(".geometriaTipo").value;
                
                if (geometriaTipoDiv2 === 'perimetroCirculo') {
                    resultado = perimetroCirculo();
                } else if (geometriaTipoDiv2 === 'areaCirculo') {
                    resultado = areaCirculo();
                } else if (geometriaTipoDiv2 === 'perimetroRetangulo') {
                    resultado = perimetroRetangulo();
                } else if (geometriaTipoDiv2 === 'areaRetangulo') {
                    resultado = areaRetangulo();
                } else if (geometriaTipoDiv2 === 'perimetroTriangulo') {
                    resultado = perimetroTriangulo();
                } else if (geometriaTipoDiv2 === 'areaTriangulo') {
                    resultado = areaTriangulo();
                } else if (geometriaTipoDiv2 === 'areaTrianguloHero') {
                    resultado = areaTrianguloHero();
                } else if (geometriaTipoDiv2 === 'areaTrapezio') {
                    resultado = areaTrapezio();
                } else if (geometriaTipoDiv2 === 'areaParalelogramo') {
                    resultado = areaParalelogramo();
                } else if (geometriaTipoDiv2 === 'areaLosango') { 0;
                    resultado = areaLosango();
                } else if (geometriaTipoDiv2 === 'perimetroQuadrado') {
                    resultado = perimetroQuadrado();
                } else if (geometriaTipoDiv2 === 'areaQuadrado') {
                    resultado = areaQuadrado();
                } else if (geometriaTipoDiv2 === 'volumeCubo') {
                    resultado = volumeCubo();
                } else if (geometriaTipoDiv2 === 'volumeParalelepipedo') {
                    resultado = volumeParalelepipedo();
                } else if (geometriaTipoDiv2 === 'areaEsfera') {
                    resultado = areaEsfera();
                } else if (geometriaTipoDiv2 === 'volumeEsfera') {
                    resultado = volumeEsfera();
                } else if (geometriaTipoDiv2 === 'areaCilindro') {
                    resultado = areaCilindro();
                } else if (geometriaTipoDiv2 === 'volumeCilindro') {
                    resultado = volumeCilindro();
                } else if (geometriaTipoDiv2 === 'areaCone') {
                    resultado = areaCone();
                } else if (geometriaTipoDiv2 === 'volumeCone') {
                    resultado = volumeCone();
                } else if (geometriaTipoDiv2 === 'distanciaDoisPontosValue') {;
                    resultado = distancia();
                } else {
                    resultado = "Selecione uma operação válida.";
                }
                break;   
            case 'funcao':
                let funcaoTipo = document.querySelector(".funcaoTipo");
            
                if (funcaoTipo.value === 'funcaoQuadratica') {
                    resultado = funcaoQuadratica();
                } else if (funcaoTipo.value === 'funcaoExponencial') {
                    resultado = funcaoExponencial();
                } else {
                    resultado = "Tipo de função não implementado.";
                }
                break;
            case 'Progressão':
                let progressaoTipo = document.querySelector(".progressaoTipo");

                if (progressaoTipo.value === 'PA'){
                    resultado = calcularPA();
                }else if (progressaoTipo.value === 'PG'){
                    resultado = calcularPG();
                }else{
                    resultado = "Tipo de função não implementado.";
                }
                break
            default:
                resultado = "Operação não implementada.";
            break;
                
        }
    }
    return resultado
}

function operacaoSelected() {
    displayAllNone();

    const operacao = document.querySelector(".calculoTipo").value;

    switch (operacao) {
        case 'eval':
            document.querySelector(".EvalDiv").style.display = "block";
            break;
        case 'porcentagem':
            document.querySelector(".PorcentagemDiv").style.display = "block";
            break;
        case 'hipotenusa':
        case 'teoremaDePitagoras':
            document.querySelector(".PitagorasDiv").style.display = "block";
            break;
        case 'bhaskara':
            let bhaskara = document.querySelector('.BhaskaraDiv');
            bhaskara.style.display = "block";
            break;
        case 'funcao':
            let funcaoQuadratica = document.querySelector('.BhaskaraDiv');
            let funcaoTipo = document.querySelector(".funcaoTipo");
            funcaoTipo.style.display = "block"
            document.querySelector(".inputNormal").style.display = "block";
            funcaoTipo.addEventListener("change", function(){
                if (funcaoTipo.value === "funcaoExponencial"){
                    document.querySelector(".inputNormal").style.display = "block";
                    funcaoQuadratica.style.display = "none"
                }else if (funcaoTipo.value === "funcaoQuadratica"){
                    document.querySelector(".inputNormal").style.display = "none";
                    funcaoQuadratica.style.display = "block"
                }else{
                    resultado = `Não Existe`
                }
            });
            break;
        case 'fatorial':
        case 'duploFatorial':
            document.querySelector(".input1Div").style.display = "block";
            break;
        case 'Trigonometria':
            document.querySelector(".TrigonometriaDiv").style.display = "block";
            break;
        case 'logaritmo':
            document.querySelector(".LogDiv").style.display = "block";
            break;
        case 'Matriz':
            let matrizTipo = document.querySelector(".matrizTipo");
            displayNoneExtra();
            displayAllNone();
            matrizTipo.style.display = "block";
            matrizTipo.addEventListener("change", function() {
                switch (matrizTipo.value) {
                    case 'somaDeMatriz':
                        document.querySelector(".sistemaLinearDiv").style.display = "none";
                        let matrizDiv2 = document.querySelector(".matrizDiv2");
                        let tipoMatrizSoma = document.querySelector(".tipoMatrizSoma");
                        matrizDiv2.style.display = "block";
                        matrizDiv2.addEventListener("change", function() {
                            if (tipoMatrizSoma.value === "2x2") {
                                document.querySelector(".somaDeMatriz2x2").style.display = "block";
                                document.querySelector(".somaDeMatriz3x3").style.display = "none";
                            } else if (tipoMatrizSoma.value === "3x3") {
                                document.querySelector(".somaDeMatriz2x2").style.display = "none";
                                document.querySelector(".somaDeMatriz3x3").style.display = "block";
                            } else {
                                document.querySelector(".somaDeMatriz2x2").style.display = "none";
                                document.querySelector(".somaDeMatriz3x3").style.display = "none";
                            }
                        });
                        break;
                    case 'multiplicacaoDeMatriz':
                        document.querySelector(".sistemaLinearDiv").style.display = "none";
                        let matrizDiv23 = document.querySelector(".matrizDiv2");
                        let tipoMatrizSoma2 = document.querySelector(".tipoMatrizSoma");
                        matrizDiv23.style.display = "block";
                    matrizDiv23.addEventListener("change", function() {
                            if (tipoMatrizSoma2.value === "2x2") {
                                document.querySelector(".somaDeMatriz2x2").style.display = "block";
                                document.querySelector(".somaDeMatriz3x3").style.display = "none";
                            } else if (tipoMatrizSoma2.value === "3x3") {
                                document.querySelector(".somaDeMatriz2x2").style.display = "none";
                                document.querySelector(".somaDeMatriz3x3").style.display = "block";
                            } else {
                                document.querySelector(".somaDeMatriz2x2").style.display = "none";
                                document.querySelector(".somaDeMatriz3x3").style.display = "none";
                            }
                        });
                        break;
                    case 'sistemaLinear':
                        let tipoMatriz = document.querySelector(".tipoMatriz");
                        let sistemaLinearDiv = document.querySelector(".sistemaLinearDiv");
                        document.querySelector(".matrizDiv2").style.display = "none";
                        sistemaLinearDiv.style.display = "block";
                        tipoMatriz.style.display = "block";
                        tipoMatriz.addEventListener("change", () => {
                        if (tipoMatriz.value === "2x2") {
                                document.querySelector(".sistemaLinearDiv2x2Div").style.display = "block";
                                document.querySelector(".sistemaLinearDiv3x3Div").style.display = "none";
                            } else if (tipoMatriz.value === "3x3") {
                                document.querySelector(".sistemaLinearDiv2x2Div").style.display = "none";
                                document.querySelector(".sistemaLinearDiv3x3Div").style.display = "block";
                            } else {
                                document.querySelector(".sistemaLinearDiv2x2Div").style.display = "none";
                                document.querySelector(".sistemaLinearDiv3x3Div").style.display = "none";
                            }
                        });
                        break;
                default:
                    break;
                }
            });
            break;            
        case 'RazãoeProporção':
            let RazãoeProporção = document.querySelector(".RazãoeProporção");
            let razaoouproporção = document.querySelector(".razaoouproporção");
            let razao = document.querySelector(".razão");
            let proporçao = document.querySelector(".proporção");

            RazãoeProporção.style.display = "block";
            razaoouproporção.style.display = "block";
            razaoouproporção.addEventListener("change", function() {
                if (razaoouproporção.value === "razão") {
                    razao.style.display = "block";
                    proporçao.style.display = "none";
                }else if (razaoouproporção.value === "proporção") {
                    razao.style.display = "none";
                    proporçao.style.display = "block";
                }else{
                    razao.style.display = "none";
                    proporçao.style.display = "none";
                }
            });
            break;
        case 'raiz':
            let raizDiv = document.querySelector(".raizDiv");
            raizDiv.style.display = "block";
            break;
        case 'geometria':
            let geometriaDiv = document.querySelector(".geometriaDiv");
            let geometriaTipo = document.querySelector(".geometriaTipo");
            let PI = document.querySelector(".piInputDiv");
            let input1 = document.querySelector(".input1Div2");
            let retanguloDiv = document.querySelector(".areaRetangulo");
            let areaTrianguloDiv = document.querySelector(".areaTriangulo");
            let BhaskaraDiv = document.querySelector(".BhaskaraDiv");
            let areaTrapezioDiv = document.querySelector(".areaTrapezio");
            let areaLosangoDiv = document.querySelector(".areaLosango");
            let areaParalelogramoDiv = document.querySelector(".areaParalelogramo");
            let areaQuadradoDiv = document.querySelector(".areaQuadrado");
            let areaParalelepidedoDiv = document.querySelector(".volumeParalelepipedo");
            let areaCilindroDiv = document.querySelector(".areaCilindro");
            let distanciaDoisPontosDiv = document.querySelector(".distanciaDoisPontos");
            geometriaDiv.style.display = "block";
            geometriaTipo.style.display = "block";
            input1.style.display = "block";
            PI.style.display = "block";
            geometriaTipo.addEventListener("change", function() {
                displayNoneExtra()
                if (geometriaTipo.value === 'perimetroCirculo' || geometriaTipo.value === 'areaCirculo' || geometriaTipo.value === 'areaEsfera' || geometriaTipo.value === 'volumeEsfera') {
                    input1.style.display = "block";
                    PI.style.display = "block";
                } else if (geometriaTipo.value === 'perimetroRetangulo' || geometriaTipo.value === 'areaRetangulo') {
                    retanguloDiv.style.display = "block";
                } else if (geometriaTipo.value === 'perimetroTriangulo' || geometriaTipo.value === 'areaTrianguloHero') {
                    BhaskaraDiv.style.display = "block";
                } else if (geometriaTipo.value === 'areaTriangulo') {
                    areaTrianguloDiv.style.display = "block";
                } else if (geometriaTipo.value === 'areaTrapezio') {
                    areaTrapezioDiv.style.display = "block";
                } else if (geometriaTipo.value === 'areaParalelogramo') {
                    areaParalelogramoDiv.style.display = "block";
                } else if (geometriaTipo.value === 'areaLosango') {
                    areaLosangoDiv.style.display = "block";
                } else if (geometriaTipo.value === 'perimetroQuadrado' || geometriaTipo.value === 'areaQuadrado' || geometriaTipo.value === 'volumeCubo') {
                    areaQuadradoDiv.style.display = "block";
                } else if (geometriaTipo.value === 'volumeParalelepipedo') {
                    areaParalelepidedoDiv.style.display = "block";
                } else if (geometriaTipo.value === 'areaCilindro' || geometriaTipo.value === 'volumeCilindro') {
                    areaCilindroDiv.style.display = "block";
                } else if (geometriaTipo.value === 'areaCone' || geometriaTipo.value === 'volumeCone') {
                    areaCilindroDiv.style.display = "block";
                    PI.style.display = "block";
                } else if (geometriaTipo.value === 'distanciaDoisPontosValue') {
                    distanciaDoisPontosDiv.style.display = "block";
                } else {
                    resultado = 'Opção não reconhecida'
                }
            });
            break; 
        case 'Progressão':
            displayAllNone();
            let progressaoTipo = document.querySelector(".progressaoTipo");
            let paDiv = document.querySelector('.PAD');
            let pgDiv = document.querySelector('.PGD');
        
            progressaoTipo.style.display = 'block';
            progressaoTipo.addEventListener('change', function () {
                if (progressaoTipo.value === 'PA') {
                    paDiv.style.display = 'block';
                    pgDiv.style.display = 'none';
                } else if (progressaoTipo.value === 'PG') {
                    pgDiv.style.display = 'block';
                    paDiv.style.display = 'none';
                }else{
                    paDiv.style.display = 'none';
                    pgDiv.style.display = 'none';
                }
            });
            break;
        default:
        break;
    }
}

//Other Functions//
function updateHistory() {
    const historyDiv = document.querySelector('.history');
    historyDiv.innerHTML = '<h3>Histórico</h3>';
    history.forEach(entry => {
        const p = document.createElement('p');
        historyDiv.style.textAlign = "center"
        p.style.color = "white"
        p.innerHTML = entry;
        historyDiv.appendChild(p);
    });
}

function clearHistory() {
    history.length = 0;
    updateHistory();
}

function limparResultado(){
    document.querySelector(".divResultado").style.display = "none";
}

function mostrarCalculo() {
    let calculo = document.querySelector(".calculo");
    calculo.style.display = "block";
}

function limparCalculo(){
    document.querySelector('.calculo').style.display = "none";
}

function  displayAllNone() {
    document.querySelector(".input1Div").style.display = "none";
    document.querySelector(".input1Div2").style.display = "none";
    document.querySelector(".EvalDiv").style.display = "none";
    document.querySelector(".PorcentagemDiv").style.display = "none";
    document.querySelector(".PitagorasDiv").style.display = "none";
    document.querySelector(".BhaskaraDiv").style.display = "none";
    document.querySelector(".TrigonometriaDiv").style.display = "none";
    document.querySelector(".LogDiv").style.display = "none";
    document.querySelector(".matrizTipo").style.display = "none";
    document.querySelector(".matrizDiv2").style.display = "none";
    document.querySelector(".sistemaLinearDiv2x2Div").style.display = "none";
    document.querySelector(".sistemaLinearDiv3x3Div").style.display = "none";
    document.querySelector(".tipoMatriz").style.display = "none";
    document.querySelector(".RazãoeProporção").style.display = "none";
    document.querySelector(".raizDiv").style.display = "none";
    document.querySelector(".areaRetangulo").style.display = "none";
    document.querySelector(".areaLosango").style.display = "none";
    document.querySelector(".altura").style.display = "none";
    document.querySelector(".largura").style.display = "none";
    document.querySelector(".areaTriangulo").style.d1isplay = "none";
    document.querySelector(".areaTrapezio").style.display = "none";
    document.querySelector(".areaParalelogramo").style.display = "none";
    document.querySelector(".areaQuadrado").style.display = "none";
    document.querySelector(".volumeParalelepipedo").style.display = "none";
    document.querySelector(".areaCilindro").style.display = "none";
    document.querySelector(".distanciaDoisPontos").style.display = "none";
    document.querySelector(".piInputDiv").style.display = "none";
    document.querySelector(".sistemaLinearDiv").style.display = "none";
    document.querySelector(".funcaoTipo").style.display = "none";
    document.querySelector(".geometriaTipo").style.display = "none";
    document.querySelector(".inputNormal").style.display = "none";
    document.querySelector(".progressaoTipo").style.display = "none";
    document.querySelector(".PAD").style.display = 'none'
    document.querySelector(".PGD").style.display = 'none'
    document.querySelector(".progressaoTipo").style.display = "none";
}

function displayNoneExtra() {
    // Oculta divs específicas
    document.querySelector(".input1Div").style.display = "none";
    document.querySelector(".input1Div2").style.display = "none";
    document.querySelector(".EvalDiv").style.display = "none";
    document.querySelector(".PorcentagemDiv").style.display = "none";
    document.querySelector(".PitagorasDiv").style.display = "none";
    document.querySelector(".BhaskaraDiv").style.display = "none";
    document.querySelector(".TrigonometriaDiv").style.display = "none";
    document.querySelector(".LogDiv").style.display = "none";
    document.querySelector(".matrizTipo").style.display = "none";
    document.querySelector(".matrizDiv2").style.display = "none";
    document.querySelector(".sistemaLinearDiv2x2Div").style.display = "none";
    document.querySelector(".sistemaLinearDiv3x3Div").style.display = "none";
    document.querySelector(".tipoMatriz").style.display = "none";
    document.querySelector(".RazãoeProporção").style.display = "none";
    document.querySelector(".raizDiv").style.display = "none";
    document.querySelector(".areaRetangulo").style.display = "none";
    document.querySelector(".areaLosango").style.display = "none";
    document.querySelector(".altura").style.display = "none";
    document.querySelector(".largura").style.display = "none";
    document.querySelector(".areaTriangulo").style.d1isplay = "none";
    document.querySelector(".areaTrapezio").style.display = "none";
    document.querySelector(".areaParalelogramo").style.display = "none";
    document.querySelector(".areaQuadrado").style.display = "none";
    document.querySelector(".volumeParalelepipedo").style.display = "none";
    document.querySelector(".areaCilindro").style.display = "none";
    document.querySelector(".distanciaDoisPontos").style.display = "none";
    document.querySelector(".piInputDiv").style.display = "none";
    document.querySelector(".sistemaLinearDiv").style.display = "none";
    document.querySelector(".funcaoTipo").style.display = "none";
    document.querySelector(".inputNormal").style.display = "none";

    // Oculta elementos com classes específicas
    document.querySelector(".funcaoTipo").style.display = "none";
    document.querySelector(".areaRetangulo").style.display = "none";
    document.querySelector(".altura").style.display = "none";
    document.querySelector(".largura").style.display = "none";
    document.querySelector(".areaTriangulo").style.display = "none";
    document.querySelector(".areaLosango").style.display = "none"
    document.querySelector(".areaTrapezio").style.display = "none";
    document.querySelector(".areaParalelogramo").style.display = "none";
    document.querySelector(".areaQuadrado").style.display = "none";
    document.querySelector(".volumeParalelepipedo").style.display = "none";
    document.querySelector(".areaCilindro").style.display = "none";
    document.querySelector(".distanciaDoisPontos").style.display = "none";
    document.querySelector(".PAD").style.display = 'none'
    document.querySelector(".PGD").style.display = 'none'
    document.querySelector(".progressaoTipo").style.display = "none";
}

function result() {
    
    let resultado = calcular();
    document.querySelector(".resultado").innerHTML = resultado;

    if (!isNaN(resultado)) {
        history.push(resultado);
        updateHistory();
    }    
    var audio = new Audio("audios/SomdeLápisescrevendo_EfeitoSonorodeLápisescrevendo_[cut_1sec].mp3");
    audio.play();
    document.querySelector(".divResultado").style.display = "block";
}

document.querySelector(".buttoncalcular").addEventListener("click", result);
document.querySelector(".calculoTipo").addEventListener("change", operacaoSelected);
document.querySelector(".clearResult").addEventListener("click", limparResultado);
document.querySelector(".clearHistory").addEventListener("click", clearHistory);
document.querySelector(".mostrarCalculo").addEventListener("click", mostrarCalculo);
document.querySelector(".clearCalulo").addEventListener("click", limparCalculo);