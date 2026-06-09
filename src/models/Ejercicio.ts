export interface Ejercicio {
  a: number;
  b: number;
  resultado: number;
}

export function generarEjercicios(cantidad: number): Ejercicio[] {
  const ejercicios: Ejercicio[] = [];
  for (let i = 0; i < cantidad; i++) {
    const a = Math.floor(Math.random() * 90) + 10;
    const b = Math.floor(Math.random() * 90) + 10;
    ejercicios.push({ a, b, resultado: a + b });
  }
  return ejercicios;
}
