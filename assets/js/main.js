let zwanzigNeunZehn = document.getElementById("zwanzigneunzehn")
let zwanzigZwanzig = document.getElementById("zwanzigzwanzig")
let zwanzigEinUndZwanzig = document.getElementById("zwanzigeinundzwanzig")

let calculateTax = () => {
    let zvE = document.getElementById("income")
    let anualIncome = document.getElementById("anualIncome")
    let taxYear = document.getElementById("taxyear")
    let sumOutput = document.getElementById("incomeTax")
    switch (split.checked) {
        case true: {
            switch (zwanzigEinUndZwanzig.checked) {
                case true: {
                    switch (true) {
                        case Number(zvE.value) <= 9744: {
                            sumEst = 0;
                        } break;
                        case Number(zvE.value) > 9744 && Number(zvE.value) <= 14753: {
                            let y = ((Number(zvE.value) / 2) - 9744) / 10000;
                            sumEst = (995.21 * y + 1400) * y;
                        } break;
                        case Number(zvE.value) > 14753 && Number(zvE.value) <= 57918: {
                            let z = ((Number(zvE.value) / 2) - 14573) / 10000;
                            sumEst = (((208.85 * z) + 2397) * z) + 950.96;
                        } break;
                        case Number(zvE.value) > 57918 && Number(zvE.value) <= 274612: {
                            sumEst = 0.42 * ((Number(zvE.value)) / 2) - 9136.63;
                        } break;
                        case Number(zvE.value) > 274612: {
                            sumEst = 0.45 * ((Number(zvE.value)) / 2) - 17374.99;
                        } break;
                    } // Ende Switch Number.value
                    taxYear.innerHTML = "2021";
                } // Ende true 2021
                case false: {
                    switch (zwanzigZwanzig.checked) {
                        case true: {
                            switch (true) {
                                case Number(zvE.value) <= 9408: {
                                    sumEst = 0;
                                } break;
                                case Number(zvE.value) > 9408 && Number(zvE.value) <= 14532: {
                                    let y = ((Number(zvE.value) - 9408) / 2) / 10000;
                                    sumEst = (972.87 * y + 1400) * y;
                                } break;
                                case Number(zvE.value) > 14532 && Number(zvE.value) <= 57051: {
                                    let z = ((Number(zvE.value) - 14532) / 2) / 10000;
                                    sumEst = (212.02 * z + 2397) * z + 972.79;
                                } break;
                                case Number(zvE.value) > 57051 && Number(zvE.value) <= 270500: {
                                    sumEst = 0.42 * ((Number(zvE.value)) / 2) - 8963.74;
                                } break;
                                case Number(zvE.value) > 270500: {
                                    sumEst = 0.45 * ((Number(zvE.value)) / 2) - 17078.74;
                                } break;
                            }// Ende switch Number.value
                            taxYear.innerHTML = "2020";
                        } break; // ende case true 2020
                        case false: {
                            switch (zwanzigNeunZehn.checked) {
                                case true: {
                                    switch (true) {
                                        case Number(zvE.value) <= 9168: {
                                            sumEst = 0;
                                        } break;
                                        case Number(zvE.value) > 9168 && Number(zvE.value) <= 14254: {
                                            let y = ((Number(zvE.value) / 2) - 9168) / 10000;
                                            sumEst = (980.14 * y + 1400) * y;
                                        } break;
                                        case Number(zvE.value) > 14754 && Number(zvE.value) <= 55960: {
                                            let z = ((Number(zvE.value) - 14254) / 2) / 10000;
                                            sumEst = (216.16 * z + 2397) * z + 965.58;
                                        } break;
                                        case Number(zvE.value) > 55960 && Number(zvE.value) <= 265326: {
                                            sumEst = 0.42 * ((Number(zvE.value)) / 2) - 8780.90;
                                        } break;
                                        case Number(zvE.value) > 255326: {
                                            sumEst = 0.45 * ((Number(zvE.value)) / 2) - 16740.68;
                                        } break;
                                    }// Ende switch Number.value
                                    taxYear.innerHTML = "2019";
                                } break;
                            } // Ende switch 2019
                        } //Ende case false 2020
                    }//Ende switch 2020
                }// Ende case false 2021
            }  // Ende Case true 2021
        }// Ende case TRUE SPLIT
        case false: {
            switch (zwanzigEinUndZwanzig.checked) {
                case true: {
                    switch (true) {
                        case Number(zvE.value) <= 9744: {
                            sumEst = 0;
                        } break;
                        case Number(zvE.value) > 9744 && Number(zvE.value) <= 14753: {
                            let y = (Number(zvE.value) - 9744) / 10000;
                            sumEst = (995.21 * y + 1400) * y;
                        } break;
                        case Number(zvE.value) > 14753 && Number(zvE.value) <= 57918: {
                            let z = (Number(zvE.value) - 14573) / 10000;
                            sumEst = (208.85 * z + 2397) * z + 950.96;
                        } break;
                        case Number(zvE.value) > 57918 && Number(zvE.value) <= 274612: {
                            sumEst = 0.42 * (Number(zvE.value)) - 9136.63;
                        } break;
                        case Number(zvE.value) > 274612: {
                            sumEst = 0.45 * (Number(zvE.value)) - 17374.99;
                        } break;
                    }// Ende switch Number.value
                    taxYear.innerHTML = "2021";
                } break;
                case false: {
                    switch (zwanzigZwanzig.checked) {
                        case true: {
                            switch (true) {
                                case Number(zvE.value) <= 9408: {
                                    sumEst = 0;
                                } break;
                                case Number(zvE.value) > 9408 && Number(zvE.value) <= 14532: {
                                    let y = (Number(zvE.value) - 9408) / 10000;
                                    sumEst = (972.87 * y + 1400) * y;
                                } break;
                                case Number(zvE.value) > 14532 && Number(zvE.value) <= 57051: {
                                    let z = (Number(zvE.value) - 14532) / 10000;
                                    sumEst = (212.02 * z + 2397) * z + 972.79;
                                } break;
                                case Number(zvE.value) > 57051 && Number(zvE.value) <= 270500: {
                                    sumEst = 0.42 * (Number(zvE.value)) - 8963.74;
                                } break;
                                case Number(zvE.value) > 270500: {
                                    sumEst = 0.45 * (Number(zvE.value)) - 17078.74;
                                } break;
                            }// Ende switch Number.value
                            taxYear.innerHTML = "2020";
                        } break;
                        case false: {
                            switch (zwanzigNeunZehn.checked) {
                                case true: {
                                    switch (true) {
                                        case Number(zvE.value) <= 9168: {
                                            sumEst = 0;
                                        } break;
                                        case Number(zvE.value) > 9168 && Number(zvE.value) <= 14254: {
                                            let y = (Number(zvE.value) - 9168) / 10000;
                                            sumEst = (980.14 * y + 1400) * y;
                                        } break;
                                        case Number(zvE.value) > 14754 && Number(zvE.value) <= 55960: {
                                            let z = (Number(zvE.value) - 14254) / 10000;
                                            sumEst = (216.16 * z + 2397) * z + 965.58;
                                        } break;
                                        case Number(zvE.value) > 55960 && Number(zvE.value) <= 265326: {
                                            sumEst = 0.42 * (Number(zvE.value)) - 8780.90;
                                        } break;
                                        case Number(zvE.value) > 255326: {
                                            sumEst = 0.45 * (Number(zvE.value)) - 16740.68;
                                        } break;
                                    }// Ende switch Number.value
                                    taxYear.innerHTML = "2019";
                                } break;
                            }// Ende switch 2019
                        } // Ende case false 2020
                    } // Ende switch 2020
                } //Ende case false 2020
            } // Ende case false 2021
        }// Ende case false Split
    }//Ende Switch Split
    anualIncome.innerHTML = zvE.value + " €";
    sumOutput.innerHTML = sumEst.toFixed(2) + " €";
}//Ende function calculateTax()



