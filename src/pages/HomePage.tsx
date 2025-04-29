import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>APRECIA</span>
          </div>
          <nav className="hidden md:flex gap-6 ml-10">
            <a href="#inicio" className="text-sm font-medium transition-colors hover:text-blue-600">
              Inicio
            </a>
            <a href="#nosotros" className="text-sm font-medium transition-colors hover:text-blue-600">
              Nosotros
            </a>
            <a href="#servicios" className="text-sm font-medium transition-colors hover:text-blue-600">
              Servicios
            </a>
            <a href="#deteccion" className="text-sm font-medium transition-colors hover:text-blue-600">
              Detección Temprana
            </a>
            <a href="#contacto" className="text-sm font-medium transition-colors hover:text-blue-600">
              Contacto
            </a>
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <button className="hidden md:flex h-10 px-4 py-2 rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
              Agendar Cita
            </button>
            <Link to="/asistente" className="h-10 px-4 py-2 rounded-md bg-blue-600 text-white shadow hover:bg-blue-700">
              Detección Virtual
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Cuidamos tu visión para un futuro más claro
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  En APRECIA nos especializamos en la detección temprana de problemas visuales, ofreciendo servicios de
                  alta calidad con tecnología de vanguardia.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/asistente" className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700">
                    Evalúa tu visión ahora
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                  <a href="#servicios" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    Conoce nuestros servicios
                  </a>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://placehold.co/800x500/EEE/31343C"
                  alt="Cuidado de la visión"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre APRECIA</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Somos un equipo de profesionales dedicados a la salud visual, comprometidos con la prevención y
                  detección temprana de enfermedades oculares.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://placehold.co/600x400/EEE/31343C"
                alt="Equipo APRECIA"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Misión</h3>
                      <p className="text-gray-500">
                        Proporcionar servicios oftalmológicos de excelencia, utilizando tecnología avanzada para la
                        detección temprana y tratamiento de enfermedades visuales.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Visión</h3>
                      <p className="text-gray-500">
                        Ser líderes en la prevención de la ceguera y referentes en la innovación tecnológica para el
                        cuidado de la salud visual.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Valores</h3>
                      <p className="text-gray-500">
                        Excelencia, compromiso, innovación, empatía y accesibilidad en todos nuestros servicios.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros Servicios</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos una amplia gama de servicios para el cuidado integral de tu salud visual.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
                <div className="rounded-full bg-blue-100 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Exámenes Visuales Completos</h3>
                <p className="text-center text-gray-500">
                  Evaluaciones exhaustivas para detectar problemas de visión y enfermedades oculares en etapas
                  tempranas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
                <div className="rounded-full bg-blue-100 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Detección de Glaucoma</h3>
                <p className="text-center text-gray-500">
                  Pruebas especializadas para la detección temprana del glaucoma, una causa común de ceguera prevenible.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
                <div className="rounded-full bg-blue-100 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Tratamiento de Retinopatía</h3>
                <p className="text-center text-gray-500">
                  Diagnóstico y tratamiento de retinopatía diabética y otras enfermedades de la retina.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
                <div className="rounded-full bg-blue-100 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Oftalmología Pediátrica</h3>
                <p className="text-center text-gray-500">
                  Atención especializada para niños, enfocada en la detección temprana de problemas visuales.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
                <div className="rounded-full bg-blue-100 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Cirugía Ocular</h3>
                <p className="text-center text-gray-500">
                  Procedimientos quirúrgicos avanzados para cataratas, glaucoma y otras condiciones oculares.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
                <div className="rounded-full bg-blue-100 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Evaluación Virtual</h3>
                <p className="text-center text-gray-500">
                  Evaluación preliminar a través de nuestra plataforma digital para la detección temprana de problemas
                  visuales.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="deteccion" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Detección Temprana de Ceguera</h2>
                <p className="text-gray-500 md:text-xl">
                  La mayoría de los casos de ceguera pueden prevenirse con una detección temprana. En APRECIA utilizamos
                  tecnología avanzada y métodos innovadores para identificar factores de riesgo y signos tempranos de
                  enfermedades oculares.
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Beneficios de la detección temprana:</h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Prevención de pérdida irreversible de la visión</li>
                    <li>Tratamientos menos invasivos y más efectivos</li>
                    <li>Mejor pronóstico y calidad de vida</li>
                    <li>Reducción de costos médicos a largo plazo</li>
                  </ul>
                </div>
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 mt-4">
                  Programa una evaluación
                </button>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://placehold.co/800x500/EEE/31343C"
                  alt="Detección temprana"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="asistente-virtual"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-green-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Asistente Virtual de Detección</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestro asistente virtual te ayuda a identificar posibles problemas visuales mediante un cuestionario
                  interactivo y análisis de imágenes.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12 rounded-xl border bg-white p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b pb-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Asistente APRECIA</h3>
                    <p className="text-sm text-gray-500">Evaluación preliminar de salud visual</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-100 p-4">
                    <p className="text-sm">
                      Hola, soy el asistente virtual de APRECIA. Estoy aquí para ayudarte a identificar posibles
                      problemas visuales. Responde algunas preguntas para una evaluación preliminar.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">¿Has notado alguno de estos síntomas recientemente?</p>
                    <div className="grid gap-2">
                      <button className="flex justify-start items-center h-10 px-4 py-2 text-sm rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                        Visión borrosa
                      </button>
                      <button className="flex justify-start items-center h-10 px-4 py-2 text-sm rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                        Dificultad para ver de noche
                      </button>
                      <button className="flex justify-start items-center h-10 px-4 py-2 text-sm rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                        Dolor o presión en los ojos
                      </button>
                      <button className="flex justify-start items-center h-10 px-4 py-2 text-sm rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                        Halos alrededor de las luces
                      </button>
                      <button className="flex justify-start items-center h-10 px-4 py-2 text-sm rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                        Ninguno de los anteriores
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-500">
                    Nota: Esta evaluación no reemplaza una consulta médica profesional. Si experimentas problemas
                    visuales, te recomendamos agendar una cita con uno de nuestros especialistas.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/asistente" className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700">
                Iniciar evaluación completa
              </Link>
            </div>
          </div>
        </section>

        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contáctanos</h2>
                <p className="text-gray-500 md:text-xl">
                  Estamos aquí para responder tus preguntas y ayudarte a cuidar tu salud visual.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <p>+52 123 456 7890</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <p>contacto@aprecia.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p>Av. Principal 123, Ciudad de México</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <p>
                      Lunes a Viernes: 9:00 - 18:00
                      <br />
                      Sábados: 9:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border bg-white p-6 shadow-md">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-medium">
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="apellido" className="text-sm font-medium">
                        Apellido
                      </label>
                      <input
                        id="apellido"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="+52 123 456 7890"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      className="w-full min-h-[120px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  <button type="submit" className="w-full h-10 px-4 py-2 rounded-md bg-blue-600 text-white shadow hover:bg-blue-700">
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24 px-4 md:px-6">
          <div className="flex items-center gap-2 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="font-bold">APRECIA</span>
          </div>
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © {new Date().getFullYear()} APRECIA. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Términos
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
