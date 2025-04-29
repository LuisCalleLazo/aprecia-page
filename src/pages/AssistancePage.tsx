"use strict";
import { useState } from "react";
import { Link } from "react-router-dom";

function AsistentePage() {
  const [step, setStep] = useState(1);
  const [results, setResults] = useState("null");

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Simulación de resultados
      setResults(
        "Basado en tus respuestas, hemos detectado posibles signos de problemas visuales que podrían requerir atención. Te recomendamos agendar una cita con uno de nuestros especialistas para una evaluación completa."
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            <span>Volver al inicio</span>
          </Link>
          <div className="flex items-center gap-2 font-bold text-xl text-blue-600 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>APRECIA</span>
          </div>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto rounded-lg border bg-white shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Asistente Virtual de Detección
              </h2>
              <p className="text-gray-500">
                Esta herramienta te ayuda a identificar posibles problemas visuales. Recuerda que no reemplaza una
                consulta médica profesional.
              </p>
            </div>
            <div className="p-6">
              {results ? (
                <div className="space-y-6">
                  <div className="rounded-lg bg-blue-50 p-6 border border-blue-200">
                    <h3 className="text-lg font-medium mb-2">Resultados de la evaluación preliminar</h3>
                    <p>{results}</p>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <button className="w-full h-10 px-4 py-2 rounded-md bg-blue-600 text-white shadow hover:bg-blue-700">
                      Agendar una cita
                    </button>
                    <button
                      className="w-full h-10 px-4 py-2 rounded-md border border-gray-300 bg-white shadow hover:bg-gray-50"
                      onClick={() => {
                        setStep(1);
                        setResults("");
                      }}
                    >
                      Realizar nueva evaluación
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {step === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Paso 1: Síntomas generales</h3>
                      <p className="text-gray-500">
                        ¿Has experimentado alguno de los siguientes síntomas en los últimos 3 meses?
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="vision-borrosa" name="sintomas" value="vision-borrosa" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="vision-borrosa">Visión borrosa</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="dolor-ocular" name="sintomas" value="dolor-ocular" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="dolor-ocular">Dolor ocular o presión en los ojos</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="vision-nocturna" name="sintomas" value="vision-nocturna" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="vision-nocturna">Dificultad para ver en la noche</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="halos" name="sintomas" value="halos" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="halos">Halos alrededor de las luces</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="none" name="sintomas" value="none" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="none">Ninguno de los anteriores</label>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Paso 2: Historial médico</h3>
                      <p className="text-gray-500">¿Tienes alguna de estas condiciones o antecedentes?</p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="diabetes" name="historial" value="diabetes" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="diabetes">Diabetes</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="hipertension" name="historial" value="hipertension" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="hipertension">Hipertensión</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="glaucoma-familiar" name="historial" value="glaucoma-familiar" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="glaucoma-familiar">Antecedentes familiares de glaucoma</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="lesion-ocular" name="historial" value="lesion-ocular" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="lesion-ocular">Lesión ocular previa</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="none-medical" name="historial" value="none" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="none-medical">Ninguno de los anteriores</label>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Paso 3: Hábitos visuales</h3>
                      <p className="text-gray-500">
                        Cuéntanos sobre tus hábitos diarios relacionados con la visión
                      </p>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <label htmlFor="screen-time" className="block font-medium">¿Cuántas horas al día pasas frente a pantallas?</label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="0-4" name="screen-time" value="0-4" className="h-4 w-4 text-blue-600" />
                              <label htmlFor="0-4">Menos de 4 horas</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="4-8" name="screen-time" value="4-8" className="h-4 w-4 text-blue-600" checked />
                              <label htmlFor="4-8">Entre 4 y 8 horas</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="8+" name="screen-time" value="8+" className="h-4 w-4 text-blue-600" />
                              <label htmlFor="8+">Más de 8 horas</label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="descansos" className="block font-medium">
                            ¿Tomas descansos regulares cuando usas dispositivos digitales?
                          </label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="yes-breaks" name="breaks" value="yes" className="h-4 w-4 text-blue-600" />
                              <label htmlFor="yes-breaks">Sí, regularmente</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="sometimes-breaks" name="breaks" value="sometimes" className="h-4 w-4 text-blue-600" checked />
                              <label htmlFor="sometimes-breaks">A veces</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="no-breaks" name="breaks" value="no" className="h-4 w-4 text-blue-600" />
                              <label htmlFor="no-breaks">Rara vez o nunca</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Paso 4: Información adicional</h3>
                      <p className="text-gray-500">
                        Proporciona cualquier información adicional que consideres relevante para tu evaluación visual
                      </p>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <label htmlFor="age" className="block font-medium">Edad</label>
                          <input 
                            id="age" 
                            type="number" 
                            placeholder="Ej: 45" 
                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-checkup" className="block font-medium">¿Cuándo fue tu último examen visual?</label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="<1" name="last-checkup" value="<1" className="h-4 w-4 text-blue-600" />
                              <label htmlFor="<1">Menos de 1 año</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="1-3" name="last-checkup" value="1-3" className="h-4 w-4 text-blue-600" checked />
                              <label htmlFor="1-3">Entre 1 y 3 años</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="3+" name="last-checkup" value="3+" className="h-4 w-4 text-blue-600" />
                              <label htmlFor="3+">Más de 3 años</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="never" name="last-checkup" value="never" className="h-4 w-4 text-blue-600" />
                              <label htmlFor="never">Nunca he tenido uno</label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="additional-info" className="block font-medium">Comentarios adicionales</label>
                          <textarea
                            id="additional-info"
                            placeholder="Describe cualquier otra preocupación o síntoma que tengas relacionado con tu visión"
                            className="w-full min-h-[100px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="p-6 border-t flex justify-between">
              {!results && (
                <>
                  <button 
                    className="h-10 px-4 py-2 rounded-md border border-gray-300 bg-white shadow hover:bg-gray-50"
                    onClick={() => setStep(Math.max(1, step - 1))} 
                    disabled={step === 1}
                  >
                    Anterior
                  </button>
                  <button 
                    className="h-10 px-4 py-2 rounded-md bg-blue-600 text-white shadow hover:bg-blue-700"
                    onClick={handleNextStep}
                  >
                    {step < 4 ? "Siguiente" : "Ver resultados"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="font-bold">APRECIA</span>
          </div>
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} APRECIA. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AsistentePage;
