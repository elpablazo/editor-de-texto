// Convierte pixeles en centímetros
export function pxToCm(pixels: number) {
  const factor = 0.0264583333;
  let equivalencia = pixels * factor;
  equivalencia = parseFloat(equivalencia.toFixed(2));
  return equivalencia;
}

// Convierte centímetros en pixeles
export function cmToPx(centimeters: number) {
  const factor = 37.7952755906;
  let equivalencia = centimeters * factor;
  equivalencia = parseFloat(equivalencia.toFixed(2));
  return equivalencia;
}
