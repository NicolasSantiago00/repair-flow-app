import { useState } from 'react';
import StepCard from './StepCard';
import SubStep from './SubStep';

const steps = [
  { id: 1, title: 'INGRESO', desc: 'Recepción del equipo', color: 'from-purple-500 to-purple-600' },
  { id: 2, title: 'DIAGNÓSTICO', desc: 'Análisis técnico', color: 'from-indigo-500 to-indigo-600' },
  { id: 3, title: 'PRESUPUESTO', desc: 'Cotización y aprobación', color: 'from-violet-500 to-violet-600' },
  { id: 4, title: 'REPARACIÓN', desc: 'Ejecución del servicio', color: 'from-purple-600 to-purple-700' },
  { id: 5, title: 'PRUEBA DE CALIDAD', desc: 'Verificación final', color: 'from-fuchsia-500 to-fuchsia-600' },
  { id: 6, title: 'ENTREGA', desc: 'Devolución con garantía', color: 'from-purple-700 to-purple-800' },
];

const subSteps = [
  { parent: 1, title: 'EQUIPO' },
  { parent: 2, title: 'MARCA / MODELO' },
  { parent: 2, title: 'NÚMERO DE SERIE' },
  { parent: 3, title: 'LONGITUD' },
  { parent: 3, title: 'ANCHO' },
  { parent: 3, title: 'ALTO' },
  { parent: 4, title: 'CONDICIONES' },
  { parent: 4, title: 'ACCESORIOS' },
  { parent: 6, title: 'FIRMA CLIENTE' },
];

export default function FlowDiagram() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Netlyfy Vercel
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Servicio Autorizado de Reparación
        </p>

        {/* Flujo Principal */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <StepCard
                  title={step.title}
                  desc={step.desc}
                  isActive={activeStep === step.id}
                  onClick={() => setActiveStep(step.id)}
                  gradient={step.color}
                />
                {index < steps.length - 1 && (
                  <svg className="hidden md:block w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Línea conectora móvil */}
          <div className="md:hidden flex justify-center mt-4">
            <div className="w-full max-w-xs h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
          </div>
        </div>

        {/* Subpasos */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {subSteps.map((sub) => (
            <SubStep
              key={sub.title}
              title={sub.title}
              isActive={activeStep === sub.parent}
            />
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-gray-500">
          Haz clic en cualquier paso para resaltarlo
        </p>
      </div>
    </div>
  );
}