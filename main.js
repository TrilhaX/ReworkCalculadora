document.addEventListener("DOMContentLoaded", () => {
    let number1 = document.querySelector("input.number1");
    let number2 = document.querySelector("input.number2");
    let number3 = document.querySelector("input.number3");
    let number4 = document.querySelector("input.number4");
    let resultado = document.getElementById("resultado");
    let calculoTipo = document.getElementById("calculoTipo");
    let matrizA = document.getElementById("matrizA");
    let matrizB = document.getElementById("matrizB");
    let matrizC = document.getElementById("matrizC");
    let matrizD = document.getElementById("matrizD");
    let tipoMatriz = document.getElementById("tipoMatriz");
    let sistemaLinearDiv = document.getElementById("sistemaLinearDiv");
    let sistemaLinearDiv2x2 = document.getElementById("sistemaLinearDiv2x2Div");
    let sistemaLinearDiv3x3 = document.getElementById("sistemaLinearDiv3x3Div");
    let input1Div = document.getElementById("input1Div");
    let input2Div = document.getElementById("input2Div");
    let input3Div = document.getElementById("input3Div");
    let input4Div = document.getElementById("input4Div");
    let matrizDiv = document.getElementById("matrizDiv");

    // Listener para o dropdown de cálculo
    calculoTipo.addEventListener("change", () => {
        let tipo = calculoTipo.value;

        input1Div.style.display = "none";
        input2Div.style.display = "none";
        input3Div.style.display = "none";
        input4Div.style.display = "none";
        matrizDiv.style.display = "none";
        sistemaLinearDiv.style.display = "none";
        sistemaLinearDiv2x2.style.display = "none";
        sistemaLinearDiv3x3.style.display = "none";
        tipoMatriz.style.display = "none";

        if (tipo === "bhaskara" || tipo === "hipotenusa") {
            input1Div.style.display = "block";
            input2Div.style.display = "block";
            input3Div.style.display = "block";
        } else if (tipo === "matrizQuadrada" || tipo === "matrizInversa") {
            matrizDiv.style.display = "block";
        } else if (tipo === "fatorial" || tipo === "duploFatorial") {
            input1Div.style.display = "block";
        } else if (tipo === "sistemaLinear") {
            sistemaLinearDiv.style.display = "block";
            tipoMatriz.style.display = "block";
            
            tipoMatriz.addEventListener("change", () => {
                if (tipoMatriz.value === "2x2") {
                    sistemaLinearDiv2x2.style.display = "block";
                    sistemaLinearDiv3x3.style.display = "none";
                } else if (tipoMatriz.value === "3x3") {
                    sistemaLinearDiv2x2.style.display = "none";
                    sistemaLinearDiv3x3.style.display = "block";
                } else {
                    sistemaLinearDiv2x2.style.display = "none";
                    sistemaLinearDiv3x3.style.display = "none";
                }
            });
        } else if (tipo === "somaDeMatriz") {
            somaDeMatrizDiv.style.display = "block";
        } else {
            // Caso não se encaixe em nenhum dos tipos acima, exibir os inputs padrão
            input1Div.style.display = "block";
            input2Div.style.display = "block";
        }
    });

            function calcular() {
                let num1 = parseFloat(number1.value) || 0;
                let num2 = parseFloat(number2.value) || 0;
                let num3 = parseFloat(number3.value) || 0;
                let num4 = parseFloat(number4.value) || 0;
                let operacao = calculoTipo.value;
                let result;

                switch (operacao) {
                    case "soma":
                        result = num1 + num2;
                        break;
                    case "subtracao":
                        result = num1 - num2;
                        break;
                    case "multiplicacao":
                        result = num1 * num2;
                        break;
                    case "divisao":
                        result = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
                        break;
                    case "media":
                        result = (num1 + num2) / 2;
                        break;
                    case "raizQuadrada":
                        result = Math.sqrt(num1);
                        break;
                    case "raizCubica":
                        result = Math.cbrt(num1);
                        break;
                    case "raiz":
                        result = Math.pow(num1, 1 / num2);
                        break;
                    case "bhaskara":
                        let a = num1;
                        let b = num2;
                        let c = num3;
                        let delta = b * b - 4 * a * c;
                        if (delta < 0) {
                            result = "Sem raízes reais";
                        } else {
                            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
                            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
                            result = `x1 = ${x1}, x2 = ${x2}`;
                        }
                        break;
                    case "hipotenusa":
                        result = Math.sqrt(num1 * num1 + num2 * num2);
                        break;
                    case "fatorial":
                        result = fatorial(num1);
                        break;
                    case "duploFatorial":
                        result = duploFatorial(num1);
                        break;
                    case "porcentagem":
                        result = (num1 * num2) / 100;
                        break;
                    case "matrizQuadrada":
                        let aM = parseFloat(matrizA.value) || 0;
                        let bM = parseFloat(matrizB.value) || 0;
                        let cM = parseFloat(matrizC.value) || 0;
                        let dM = parseFloat(matrizD.value) || 0;
                        result = (aM === dM && bM === cM) ? "A matriz é quadrada." : "A matriz não é quadrada.";
                        break;
                    case "matrizInversa":
                        let aMI = parseFloat(prompt(`Digite o valor de A:`)) || 0;
                        let bMI = parseFloat(prompt(`Digite o valor de B:`)) || 0;
                        let cMI = parseFloat(prompt(`Digite o valor de C:`)) || 0;
                        let dMI = parseFloat(prompt(`Digite o valor de D:`)) || 0;

                        let determinante = aMI * dMI - bMI * cMI;

                        if (determinante !== 0) {
                            let aI = dMI / determinante;
                            let bI = -bMI / determinante;
                            let cI = -cMI / determinante;
                            let dI = aMI / determinante;

                            result = `A matriz inversa é:\n${aI.toFixed(2).replace('.', ',')} ${bI.toFixed(2).replace('.', ',')}\n${cI.toFixed(2).replace('.', ',')} ${dI.toFixed(2).replace('.', ',')}`;
                        } else {
                            result = "A matriz não possui inversa.";
                        }
                        break;
                    case "sistemaLinear":
                        let tipo = tipoMatriz.value;

                        if (tipo === "2x2") {
                            let a1 = parseFloat(document.getElementById("a1").value) || 0;
                            let a2 = parseFloat(document.getElementById("a2").value) || 0;
                            let a3 = parseFloat(document.getElementById("a3").value) || 0;
                            let a4 = parseFloat(document.getElementById("a4").value) || 0;
                            let r1 = parseFloat(document.getElementById("r1").value) || 0;
                            let r2 = parseFloat(document.getElementById("r2").value) || 0;

                            let determinante = a1 * a4 - a2 * a3;
                            let Dx = r1 * a4 - r2 * a2;
                            let Dy = a1 * r2 - a3 * r1;
                            let DxD = Dx / determinante;
                            let DyD = Dy / determinante;

                            if (determinante !== 0) {
                                result = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')} e Dy é ${Dy.toFixed(2).replace('.', ',')}. X é : ${DxD.toFixed(2).replace('.', ',')}, Y é : ${DyD.toFixed(2).replace('.', ',')}`;
                                result += `. Classificação: SPD`;
                            } else if (determinante === 0 && Dx === 0 && Dy === 0) {
                                result = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')} e Dy é ${Dy.toFixed(2).replace('.', ',')}. X é : ${DxD.toFixed(2).replace('.', ',')}, Y é : ${DyD.toFixed(2).replace('.', ',')}`;
                                result += `. Classificação: SPI`;
                            } else {
                                result = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}, Dx é ${Dx.toFixed(2).replace('.', ',')} e Dy é ${Dy.toFixed(2).replace('.', ',')}. X é : ${DxD.toFixed(2).replace('.', ',')}, Y é : ${DyD.toFixed(2).replace('.', ',')}`;
                                result += `. Classificação: SI`;
                            }
                        } else if (tipo === "3x3") {
                            let a1 = parseFloat(document.getElementById("a1").value) || 0;
                            let a2 = parseFloat(document.getElementById("a2").value) || 0;
                            let a3 = parseFloat(document.getElementById("a3").value) || 0;
                            let a4 = parseFloat(document.getElementById("a4").value) || 0;
                            let a5 = parseFloat(document.getElementById("a5").value) || 0;
                            let a6 = parseFloat(document.getElementById("a6").value) || 0;
                            let a7 = parseFloat(document.getElementById("a7").value) || 0;
                            let a8 = parseFloat(document.getElementById("a8").value) || 0;
                            let a9 = parseFloat(document.getElementById("a9").value) || 0;
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
                                result = `O Determinante é: ${determinante.toFixed(2).replace('.', ',')}. X é: ${X.toFixed(2).replace('.', ',')}, Y é: ${Y.toFixed(2).replace('.', ',')}, Z é: ${Z.toFixed(2).replace('.', ',')}`;
                            } else {
                                result = "O sistema não tem uma solução única.";
                            }
                        }
                        break;
                    default:
                        result = "Operação não reconhecida";
                }

                resultado.textContent = result;
            }

            function fatorial(n) {
                if (n < 0) return "Não definido para números negativos";
                return n === 0 ? 1 : n * fatorial(n - 1);
            }

            function duploFatorial(n) {
                if (n < 0) return "Não definido para números negativos";
                return n <= 1 ? 1 : n * duploFatorial(n - 2);
            }

            document.getElementById("buttoncalcular").addEventListener("click", calcular);
        });