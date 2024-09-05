const history = [];

function replaceSymbols(expression) {
    return expression
        .replace(/x/g, '*')
        .replace(/X/g, '*')
        .replace(/÷/g, '/')
        .replace(/,/g, '.')
        .replace(/\^/g, '**') // Correctly replace `^` with `**`
}

function limparResultado(){
    document.querySelector(".resultadoDiv").style.display = "none";
}

function calcular() {
    const operacao = document.getElementById("calculoTipo").value;
    let resultado = 0;
    let num1 = parseFloat(document.getElementById("input1").value) || 0;

    if (operacao === 'eval') {
        let expressao = document.getElementById("expressao").value;
        expressao = replaceSymbols(expressao);

        try {
            resultado = eval(expressao);
        } catch (error) {
            resultado = "Erro na expressão!";
        }
    } else {
        switch (operacao) {
            case 'raiz':
                let raiz1 = parseFloat(document.getElementById("raiz1").value);
                let raiz2 = parseFloat(document.getElementById("raiz2").value);
            
                let raizR = Math.pow(raiz1, 1 / raiz2);
                resultado = raizR.toFixed(2);
                break;            
            case 'porcentagem':
                const numero = parseFloat(document.getElementById("numero").value);
                const porcentagem = parseFloat(document.getElementById("porcentagem").value);
                resultado = (numero * porcentagem) / 100;
                break;
            case 'hipotenusa':
                const A = parseFloat(document.getElementById("A").value);
                const B = parseFloat(document.getElementById("B").value);
                resultado = Math.sqrt(A * A + B * B);
                break;
            case 'bhaskara':
                const A2 = parseFloat(document.getElementById("BA").value);
                const B2 = parseFloat(document.getElementById("BB").value);
                const C = parseFloat(document.getElementById("BC").value);
                const delta = B2 * B2 - 4 * A2 * C;
                if (delta < 0) {
                    resultado = "Delta negativo, sem raízes reais.";
                } else {
                    const x1 = (-BB + Math.sqrt(delta)) / (2 * BA);
                    const x2 = (-BB - Math.sqrt(delta)) / (2 * BA);
                    resultado = `Delta =  ${delta}<br> x1 = ${x1}<br> x2 = ${x2}`;
                }
                break;
            case "fatorial":
                resultado = fatorial(num1);
                break;
            case "duploFatorial":
                resultado = duploFatorial(num1);
                break;
            case 'teoremaDePitagoras':
                let valor1 = parseFloat(document.getElementById("A").value);
                let valor2 = parseFloat(document.getElementById("B").value);
                resultado = Math.sqrt(valor1 * valor1 + valor2 * valor2);              
                break;
            case 'Trigonometria':
                const angleInDegrees = parseFloat(document.getElementById("trigonometria").value);
                const angleInRadians = angleInDegrees * (Math.PI / 180);
                const cosine = Math.cos(angleInRadians);
                const sine = Math.sin(angleInRadians);
                const tangent = Math.tan(angleInRadians);
            
                resultado = `Cosseno: ${cosine.toFixed(2).replace('.', ',')}<br>Seno: ${sine.toFixed(2).replace('.', ',')}<br>Tangente: ${tangent.toFixed(2).replace('.', ',')}`;
                break;
            case 'logaritmo':
                const base = parseFloat(document.getElementById("logaritmo").value);
                const valor = parseFloat(document.getElementById("logaritmando").value);
                resultado = Math.log(valor) / Math.log(base);
                break;
            case 'Matriz':
                const matrizTipo = document.getElementById("matrizTipo").value;

                if (matrizTipo === "somaDeMatriz") {
                    // Implementar soma de matriz
                } else if (matrizTipo === "multiplicacaoDeMatriz") {
                    // Implementar multiplicação de matriz
                } else if (matrizTipo === "sistemaLinear") {
                    let tipo = tipoMatriz.value;

                if (tipo === "2x2") {
                    let a1 = parseFloat(document.getElementById("a11").value) || 0;
                    let a2 = parseFloat(document.getElementById("a12").value) || 0;
                    let a3 = parseFloat(document.getElementById("a21").value) || 0;
                    let a4 = parseFloat(document.getElementById("a22").value) || 0;
                    let r1 = parseFloat(document.getElementById("r1").value) || 0;
                    let r2 = parseFloat(document.getElementById("r2").value) || 0;

                    let determinante = a1 * a4 - a2 * a3;
                    let Dx = r1 * a4 - r2 * a2;
                    let Dy = a1 * r2 - a3 * r1;
                    let DxD = Dx / determinante;
                    let DyD = Dy / determinante;

                    if (determinante !== 0) {
                        resultado = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}<br>Dx é: ${Dx.toFixed(2).replace('.', ',')}<br>Dy é: ${Dy.toFixed(2).replace('.', ',')}<br>X é: ${DxD.toFixed(2).replace('.', ',')}<br>Y é: ${DyD.toFixed(2).replace('.', ',')}`;
                        resultado += `<br>Classificação: SPD`;                        
                    } else if (determinante === 0 && Dx === 0 && Dy === 0) {
                        resultado = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')} e Dy é ${Dy.toFixed(2).replace('.', ',')}. X é : ${DxD.toFixed(2).replace('.', ',')}, Y é : ${DyD.toFixed(2).replace('.', ',')}`;
                        resultado += `. Classificação: SPI`;
                    } else {
                        resultado = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')} e Dy é ${Dy.toFixed(2).replace('.', ',')}. X é : ${DxD.toFixed(2).replace('.', ',')}, Y é : ${DyD.toFixed(2).replace('.', ',')}`;
                        resultado += `. Classificação: SI`;
                    }
                } else if (tipo === "3x3") {
                    let a1 = parseFloat(document.getElementById("a11").value) || 0;
                    let a2 = parseFloat(document.getElementById("a12").value) || 0;
                    let a3 = parseFloat(document.getElementById("a13").value) || 0;
                    let a4 = parseFloat(document.getElementById("a21").value) || 0;
                    let a5 = parseFloat(document.getElementById("a22").value) || 0;
                    let a6 = parseFloat(document.getElementById("a23").value) || 0;
                    let a7 = parseFloat(document.getElementById("a31").value) || 0;
                    let a8 = parseFloat(document.getElementById("a32").value) || 0;
                    let a9 = parseFloat(document.getElementById("a33").value) || 0;
                    let r1 = parseFloat(document.getElementById("r1").value) || 0;
                    let r2 = parseFloat(document.getElementById("r2").value) || 0;
                    let r3 = parseFloat(document.getElementById("r3").value) || 0;

                    let determinante = (a1 * a5 * a9) + (a2 * a6 * a7) + (a3 * a4 * a8) - (a3 * a5 * a7) - (a1 * a6 * a8) - (a2 * a4 * a9);
                    let Dx = (r1 * a5 * a9) + (a2 * a6 * r3) + (a3 * r2 * a8) - (a3 * a5 * r2) - (r1 * a6 * a8) - (a2 * r3 * a9);
                    let Dy = (a1 * r2 * a9) + (r1 * a6 * a7) + (a3 * a4 * r3) - (a3 * a6 * a7) - (a1 * a4 * r3) - (r1 * a5 * a9);
                    let Dz = (a1 * a5 * r3) + (a2 * r2 * a7) + (r1 * a4 * a8) - (r1 * a5 * a8) - (a1 * a7 * r2) - (a2 * a4 * r3);

                    if (determinante !== 0) {
                        let X = Dx / determinante;
                        let Y = Dy / determinante;
                        let Z = Dz / determinante;
                        resultado = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}<br> X é: ${X.toFixed(2).replace('.', ',')}<br> Y é: ${Y.toFixed(2).replace('.', ',')}<br> Z é: ${Z.toFixed(2).replace('.', ',')}`;
                    } else {
                        resultado = "O sistema não tem uma solução única.";
                    }
                }   
                }
                break;
            case 'RazãoeProporção':
                let razaoouproporcao = document.querySelector("#razaoouproporção");
                let a = document.querySelector("#A2").value
                let a1 = document.querySelector("#A3").value
                let b = document.querySelector("#B2").value
                let b1 = document.querySelector("#B3").value
                let c = document.querySelector("#C").value
                if (razaoouproporcao.value === "razão") {
                    const razao = a / b;
                    resultado = `O resultado é ${razao}`;
                } else if (razaoouproporcao.value === "proporção") {
                    const proporcao = (a1 * b1) / (c);
                    resultado = `O X é ${proporcao}`;
                } else {
                    resultado = "Operação não reconhecida.";
                }
                break;
            case 'funcaoQuadratica':
                const A3 = parseInt(document.getElementById("BA").value);
                const B3 = parseInt(document.getElementById("BB").value);
                const C2 = parseInt(document.getElementById("BC").value);
                const delta2 = B3 * B3 - 4 * A3 * C2
                if (delta2 < 0) {
                    resultado = "Delta negativo, sem raízes reais.";
                } else {
                    const x1 = (-B3 + Math.sqrt(delta2)) / (2 * A3);
                    const x2 = (-B3 - Math.sqrt(delta2)) / (2 * A3);
                    const Xv = -B3 / (2 * A3);
                    const Yv = -delta2 / (4 * A3);
                    const EY = C2;
                    resultado = `Raízes da função: x1= (${x1}, 0), x2= (${x2},0)<br>
                     Vertice da parabola: (${Xv}, ${Yv})<br>
                     Ponto de intersecção com o eixo Y: (0, ${EY})`;
                }
                break;
            default:
                resultado = "Operação não implementada.";
            break;
                
        }
    }
    return resultado;
}

function updateHistory() {
    const historyDiv = document.getElementById('history');
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

function  displayAllNone() {
    document.getElementById("input1Div").style.display = "none";
    document.getElementById("EvalDiv").style.display = "none";
    document.getElementById("PorcentagemDiv").style.display = "none";
    document.getElementById("PitagorasDiv").style.display = "none";
    document.getElementById("BhaskaraDiv").style.display = "none";
    document.getElementById("TrigonometriaDiv").style.display = "none";
    document.getElementById("LogDiv").style.display = "none";
    document.getElementById("matrizTipo").style.display = "none";
    document.getElementById("matrizDiv2").style.display = "none";
    document.getElementById("sistemaLinearDiv2x2Div").style.display = "none";
    document.getElementById("sistemaLinearDiv3x3Div").style.display = "none";
    document.getElementById("tipoMatriz").style.display = "none";
    document.querySelector(".RazãoeProporção").style.display = "none";
    document.querySelector(".raizDiv").style.display = "none";
}

function displayNoneMatriz(){
    document.getElementById("matrizTipo").style.display = "none";
    document.getElementById("matrizDiv2").style.display = "none";
    document.getElementById("sistemaLinearDiv2x2Div").style.display = "none";
    document.getElementById("sistemaLinearDiv3x3Div").style.display = "none";
    document.getElementById("tipoMatriz").style.display = "none";
}

function operacaoSelected() {
    displayAllNone();

    const operacao = document.getElementById("calculoTipo").value;

    switch (operacao) {
        case 'eval':
            document.getElementById("EvalDiv").style.display = "block";
            break;
        case 'porcentagem':
            document.getElementById("PorcentagemDiv").style.display = "block";
            break;
        case 'hipotenusa':
        case 'teoremaDePitagoras':
            document.getElementById("PitagorasDiv").style.display = "block";
            break;
        case 'bhaskara':
        case 'funcaoQuadratica':
            document.getElementById("BhaskaraDiv").style.display = "block";
            break;
        case 'fatorial':
        case 'duploFatorial':
            document.getElementById("input1Div").style.display = "block";
            break;
        case 'Trigonometria':
            document.getElementById("TrigonometriaDiv").style.display = "block";
            break;
        case 'logaritmo':
            document.getElementById("LogDiv").style.display = "block";
            break;
        case 'Matriz':
            displayNoneMatriz()
            matrizTipo.style.display = "block";
            document.getElementById("matrizDiv2").style.display = "block";
            matrizTipo.addEventListener("change", function() {
                switch (matrizTipo.value) {
                    case 'somaDeMatriz':
                        document.getElementById("sistemaLinearDiv").style.display = "none";
                        document.getElementById("matrizDiv2").style.display = "block";
                        break;
                    case 'multiplicacaoDeMatriz':
                        document.getElementById("matrizDiv2").style.display = "block";
                        document.getElementById("sistemaLinearDiv").style.display = "none";
                        break;
                    case 'sistemaLinear':
                        let tipoMatriz = document.getElementById("tipoMatriz");
                        let sistemaLinearDiv = document.getElementById("sistemaLinearDiv");
                        document.getElementById("matrizDiv2").style.display = "none";
                        sistemaLinearDiv.style.display = "block";
                        tipoMatriz.style.display = "block";
                        tipoMatriz.addEventListener("change", () => {
                            if (tipoMatriz.value === "2x2") {
                                document.getElementById("sistemaLinearDiv2x2Div").style.display = "block";
                                document.getElementById("sistemaLinearDiv3x3Div").style.display = "none";
                            } else if (tipoMatriz.value === "3x3") {
                                document.getElementById("sistemaLinearDiv2x2Div").style.display = "none";
                                document.getElementById("sistemaLinearDiv3x3Div").style.display = "block";
                            } else {
                                document.getElementById("sistemaLinearDiv2x2Div").style.display = "none";
                                document.getElementById("sistemaLinearDiv3x3Div").style.display = "none";
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
            let razaoouproporção = document.querySelector("#razaoouproporção");
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
        default:
        break;
    }
}

function result() {
    
    let resultado = calcular();
    document.getElementById("resultado").innerHTML = resultado;

    history.push(`${resultado}`);
    updateHistory();

    document.querySelector(".resultadoDiv").style.display = "block";
}

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


document.getElementById("buttoncalcular").addEventListener("click", result);
document.getElementById("calculoTipo").addEventListener("change", operacaoSelected);
document.querySelector(".clearResult").addEventListener("click", limparResultado);
document.querySelector(".clearHistory").addEventListener("click", clearHistory)