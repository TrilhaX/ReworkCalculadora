const history = [];

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

function distancia(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function perimetroCirculo(raio, PI) {
    return 2 * PI * raio;
}

function areaCirculo(raio, PI) {
    return PI * raio ** 2;
}

function areaRetangulo(largura, altura) {
    return largura * altura;
}

function perimetroRetangulo(largura, altura) {
    return 2 * (largura + altura);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function perimetroTriangulo(a, b, c) {
    return a + b + c;
}

function areaTrianguloHero(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) * altura) / 2;
}

function areaParalelogramo(base, altura) {
    return base * altura;
}

function areaLosango(d1, d2) {
    return (d1 * d2) / 2;
}

function areaQuadrado(lado) {
    return lado ** 2;
}

function perimetroQuadrado(lado) {
    return 4 * lado;
}

function volumeCubo(lado) {
    return lado ** 3;
}

function volumeParalelepipedo(comprimento, largura, altura) {
    return comprimento * largura * altura;
}

function volumeEsfera(raio, PI) {
    return (4 / 3) * PI * raio ** 3;
}

function areaEsfera(raio, PI) {
    return 4 * PI * raio ** 2;
}

function volumeCilindro(raio, altura, PI) {
    return PI * raio ** 2 * altura;
}

function areaCilindro(raio, altura, PI) {
    return 2 * PI * raio * (raio + altura);
}

function volumeCone(raio, altura, PI) {
    return (1 / 3) * PI * raio ** 2 * altura;
}

function areaCone(raio, altura, PI) {
    const geratriz = Math.sqrt(raio ** 2 + altura ** 2);
    return PI * raio * (raio + geratriz);
}


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
    const operacao = document.querySelector(".calculoTipo").value;
    let resultado
    let num1 = parseFloat(document.querySelector(".input1").value) || 0;

    if (operacao === 'eval') {
        let expressao = document.querySelector(".expressao").value;
        expressao = replaceSymbols(expressao);

        try {
            resultado = eval(expressao);
        } catch (error) {
            resultado = "Erro na expressão!";
        }
    } else {
        switch (operacao) {
            case 'raiz':
                let raiz1 = parseFloat(document.querySelector(".raiz1").value);
                let raiz2 = parseFloat(document.querySelector(".raiz2").value);
            
                let raizR = Math.pow(raiz1, 1 / raiz2);
                resultado = raizR.toFixed(2);
                break;            
            case 'porcentagem':
                const numero = parseFloat(document.querySelector(".numero").value);
                const porcentagem = parseFloat(document.querySelector(".porcentagem").value);
                resultado = (numero * porcentagem) / 100;
                break;
            case 'hipotenusa':
                const A = parseFloat(document.querySelector(".A").value);
                const B = parseFloat(document.querySelector(".B").value);
                resultado = Math.sqrt(A * A + B * B);
                break;
            case 'bhaskara':
                const A2 = parseFloat(document.querySelector(".BA").value);
                const B2 = parseFloat(document.querySelector(".BB").value);
                const C = parseFloat(document.querySelector(".BC").value);
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
                let valor1 = parseFloat(document.querySelector(".A").value);
                let valor2 = parseFloat(document.querySelector(".B").value);
                resultado = Math.sqrt(valor1 * valor1 + valor2 * valor2);              
                break;
            case 'Trigonometria':
                const angleInDegrees = parseFloat(document.querySelector(".trigonometria").value);
                const angleInRadians = angleInDegrees * (PI / 180);
                const cosine = Math.cos(angleInRadians);
                const sine = Math.sin(angleInRadians);
                const tangent = Math.tan(angleInRadians);
            
                resultado = `Cosseno: ${cosine.toFixed(2).replace('.', ',')}<br>Seno: ${sine.toFixed(2).replace('.', ',')}<br>Tangente: ${tangent.toFixed(2).replace('.', ',')}`;
                break;
            case 'logaritmo':
                const base = parseFloat(document.querySelector(".logaritmo").value);
                const valor = parseFloat(document.querySelector(".logaritmando").value);
                resultado = Math.log(valor) / Math.log(base);
                break;
            case 'Matriz':
                const matrizTipo = document.querySelector(".matrizTipo").value;

                if (matrizTipo === "somaDeMatriz") {
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

                    resultado = `A soma das matrizes é: ${aR.toFixed(2).replace('.', ',')} ${bR.toFixed(2).replace('.', ',')}<br>${cR.toFixed(2).replace('.', ',')} ${dR.toFixed(2).replace('.', ',')}`;
                    break;
                } else if (matrizTipo === "multiplicacaoDeMatriz") {
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
    
                    resultado = `A multiplicação das matrizes é: ${aR.toFixed(2).replace('.', ',')} ${bR.toFixed(2).replace('.', ',')}<br>${cR.toFixed(2).replace('.', ',')} ${dR.toFixed(2).replace('.', ',')}`;
                    break;
                } else if (matrizTipo === "sistemaLinear") {
                    let tipoMatriz = document.querySelector(".matrizTipo");
                    let tipo = tipoMatriz.value;

                if (tipo === "2x2") {
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
                        resultado = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}<br> X é: ${X.toFixed(2).replace('.', ',')}<br> Y é: ${Y.toFixed(2).replace('.', ',')}<br> Z é: ${Z.toFixed(2).replace('.', ',')}`;
                    } else {
                        resultado = "O sistema não tem uma solução única.";
                    }
                }   
                }
                break;
            case 'RazãoeProporção':
                let razaoouproporcao = document.querySelector("#razaoouproporção");
                let a = document.querySelector(".A2").value
                let a1 = document.querySelector(".A3").value
                let b = document.querySelector(".B2").value
                let b1 = document.querySelector(".B3").value
                let c = document.querySelector(".C").value
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
            case 'geometria':
                let geometriaTipoDiv2 = document.querySelector(".geometriaTipo").value;
                
                if (geometriaTipoDiv2 === 'perimetroCirculo') {
                    let input1 = parseFloat(document.querySelector(".input12").value) || 0;
                    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
                    resultado = perimetroCirculo(input1, piInput);
                } else if (geometriaTipoDiv2 === 'areaCirculo') {
                    let input1 = parseFloat(document.querySelector(".input12").value) || 0;
                    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
                    resultado = areaCirculo(input1, piInput);
                } else if (geometriaTipoDiv2 === 'perimetroRetangulo') {
                    let larguraRetangulo = parseFloat(document.querySelector(".larguraRetangulo").value) || 0;
                    let alturaRetangulo = parseFloat(document.querySelector(".alturaRetangulo").value) || 0;
                    resultado = perimetroRetangulo(larguraRetangulo, alturaRetangulo);
                } else if (geometriaTipoDiv2 === 'areaRetangulo') {
                    let larguraRetangulo = parseFloat(document.querySelector(".larguraRetangulo").value) || 0;
                    let alturaRetangulo = parseFloat(document.querySelector(".alturaRetangulo").value) || 0;
                    resultado = areaRetangulo(larguraRetangulo, alturaRetangulo);
                } else if (geometriaTipoDiv2 === 'perimetroTriangulo') {
                    let a2 = parseFloat(document.querySelector(".BA").value) || 0;
                    let b2 = parseFloat(document.querySelector(".BB").value) || 0;
                    let c2 = parseFloat(document.querySelector(".BC").value) || 0;
                    resultado = perimetroTriangulo(a2, b2, c2);
                } else if (geometriaTipoDiv2 === 'areaTriangulo') {
                    let baseTriangulo = parseFloat(document.querySelector(".baseTriangulo").value) || 0;
                    let alturaTriangulo = parseFloat(document.querySelector(".alturaTriangulo").value) || 0;
                    resultado = areaTriangulo(baseTriangulo, alturaTriangulo);
                } else if (geometriaTipoDiv2 === 'areaTrianguloHero') {
                    let a2 = parseFloat(document.querySelector(".BA").value) || 0;
                    let b2 = parseFloat(document.querySelector(".BB").value) || 0;
                    let c2 = parseFloat(document.querySelector(".BC").value) || 0;
                    resultado = areaTrianguloHero(a2, b2, c2);
                } else if (geometriaTipoDiv2 === 'areaTrapezio') {
                    let baseMaior = parseFloat(document.querySelector(".baseMaior").value) || 0;
                    let baseMenor = parseFloat(document.querySelector(".baseMenor").value) || 0;
                    let altura = parseFloat(document.querySelector(".altura").value) || 0;
                    resultado = areaTrapezio(baseMaior, baseMenor, altura);
                } else if (geometriaTipoDiv2 === 'areaParalelogramo') {
                    let baseParalelogramo = parseFloat(document.querySelector(".baseParalelogramo").value) || 0;
                    let alturaParalelogramo = parseFloat(document.querySelector(".alturaParalelogramo").value) || 0;
                    resultado = areaParalelogramo(baseParalelogramo, alturaParalelogramo);
                } else if (geometriaTipoDiv2 === 'areaLosango') {
                    let diagonalMenor = parseFloat(document.querySelector(".diagonalMenor").value) || 0;
                    let diagonalMaior = parseFloat(document.querySelector(".diagonalMaior").value) || 0;
                    resultado = areaLosango(diagonalMenor, diagonalMaior);
                } else if (geometriaTipoDiv2 === 'perimetroQuadrado') {
                    let ladoQuadrado = parseFloat(document.querySelector(".ladoQuadrado").value) || 0;
                    resultado = perimetroQuadrado(ladoQuadrado);
                } else if (geometriaTipoDiv2 === 'areaQuadrado') {
                    let ladoQuadrado = parseFloat(document.querySelector(".ladoQuadrado").value) || 0;
                    resultado = areaQuadrado(ladoQuadrado);
                } else if (geometriaTipoDiv2 === 'volumeCubo') {
                    let ladoQuadrado = parseFloat(document.querySelector(".ladoQuadrado").value) || 0;
                    resultado = volumeCubo(ladoQuadrado);
                } else if (geometriaTipoDiv2 === 'volumeParalelepipedo') {
                    let comprimento = parseFloat(document.querySelector(".comprimento").value) || 0;
                    let largura = parseFloat(document.querySelector(".largura").value) || 0;
                    let altura = parseFloat(document.querySelector(".altura").value) || 0;
                    resultado = volumeParalelepipedo(comprimento, largura, altura);
                } else if (geometriaTipoDiv2 === 'areaEsfera') {
                    let input1 = parseFloat(document.querySelector(".input12").value) || 0;
                    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
                    resultado = areaEsfera(input1, piInput);
                } else if (geometriaTipoDiv2 === 'volumeEsfera') {
                    let input1 = parseFloat(document.querySelector(".input12").value) || 0;
                    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
                    resultado = volumeEsfera(input1, piInput);
                } else if (geometriaTipoDiv2 === 'areaCilindro') {
                    let raioCilindro = parseFloat(document.querySelector(".raioCilindro").value) || 0;
                    let alturaCilindro = parseFloat(document.querySelector(".alturaCilindro").value) || 0;
                    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
                    resultado = areaCilindro(raioCilindro, alturaCilindro, piInput);
                } else if (geometriaTipoDiv2 === 'volumeCilindro') {
                    let raioCilindro = parseFloat(document.querySelector(".raioCilindro").value) || 0;
                    let alturaCilindro = parseFloat(document.querySelector(".alturaCilindro").value) || 0;
                    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
                    resultado = volumeCilindro(raioCilindro, alturaCilindro, piInput);
                } else if (geometriaTipoDiv2 === 'areaCone') {
                    let cone = parseFloat(document.querySelector(".raiocone").value) || 0;
                    let geratriz = parseFloat(document.querySelector(".alturaCone").value) || 0;
                    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
                    resultado = areaCone(cone, geratriz, piInput);
                } else if (geometriaTipoDiv2 === 'volumeCone') {
                    let cone = parseFloat(document.querySelector(".raioCone").value) || 0;
                    let geratriz = parseFloat(document.querySelector(".alturaCone").value) || 0;
                    let piInput = parseFloat(document.querySelector(".piInput").value) || 0;
                    resultado = volumeCone(cone, geratriz, piInput);
                } else if (geometriaTipoDiv2 === 'distanciaDoisPontosValue') {
                    let x1 = parseFloat(document.querySelector(".x1").value) || 0;
                    let y1 = parseFloat(document.querySelector(".y1").value) || 0;
                    let x2 = parseFloat(document.querySelector(".x2").value) || 0;
                    let y2 = parseFloat(document.querySelector(".y2").value) || 0;
                    resultado = distancia(x1, y1, x2, y2);
                } else {
                    resultado = "Selecione uma operação válida.";
                }
                break;   
                case 'funcao':
                    let funcaoTipo = document.querySelector(".funcaoTipo");        
                
                    if (funcaoTipo.value === 'funcaoQuadratica') {
                        const A3 = parseFloat(document.querySelector(".BA").value);
                        const B3 = parseFloat(document.querySelector(".BB").value);
                        const C2 = parseFloat(document.querySelector(".BC").value);
                        const delta2 = B3 * B3 - 4 * A3 * C2;
                
                        if (delta2 < 0) {
                            resultado = "Delta negativo, sem raízes reais.";
                        } else {
                            const x1 = (-B3 + Math.sqrt(delta2)) / (2 * A3);
                            const x2 = (-B3 - Math.sqrt(delta2)) / (2 * A3);
                            const Xv = -B3 / (2 * A3);
                            const Yv = -delta2 / (4 * A3);
                            const EY = C2;
                            resultado = `Raízes da função: x1= (${x1.toFixed(2)}, 0), x2= (${x2.toFixed(2)}, 0)<br>
                                         Vértice da parábola: (${Xv.toFixed(2)}, ${Yv.toFixed(2)})<br>
                                         Ponto de interseção com o eixo Y: (0, ${EY.toFixed(2)})`;
                        }
                    } else if (funcaoTipo.value === 'funcaoExponencial') {
                        function funcaoExponencial(x, a) {
                            return Math.pow(a, x);
                        }
                
                        const valoresX = [-3, -2, -1, 0, 1, 2, 3];
                        const inputA = document.querySelector(".funcaoExponencialInput");
                        const a = parseFloat(inputA.value);
                
                        if (isNaN(a)) {
                            resultado = "Valor de 'a' inválido.";
                        } else {
                            const resultados = valoresX.map(x => funcaoExponencial(x, a));
                            resultado = valoresX.map((x, index) => `f(${x}) = ${resultados[index].toFixed(2)}`).join('<br>');
                        }
                    } else {
                        resultado = "Tipo de função não implementado.";
                    }
                    break;
            default:
                resultado = "Operação não implementada.";
            break;
                
        }
    }
    return resultado
}

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
        default:
        break;
    }
}

function result() {
    
    let resultado = calcular();
    document.querySelector(".resultado").innerHTML = resultado;

    if (!isNaN(resultado)) {
        history.push(resultado);
        updateHistory();
    }    

    document.querySelector(".resultadoDiv").style.display = "block";
}

document.querySelector(".buttoncalcular").addEventListener("click", result);
document.querySelector(".calculoTipo").addEventListener("change", operacaoSelected);
document.querySelector(".clearResult").addEventListener("click", limparResultado);
document.querySelector(".clearHistory").addEventListener("click", clearHistory)