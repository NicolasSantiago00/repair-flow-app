import { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias ${form.nombre}! Tu mensaje ha sido enviado.`);
    setForm({ nombre: '', correo: '', mensaje: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo"></div>
          <nav className="nav">
            <a href="#inicio">Inicio</a>
            <a href="#programas">Programas</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="title" id="inicio">
          <h1>SERVICIO NACIONAL DE APRENDIZAJE</h1>
          <h2>CENTRO DE GESTIÓN DE MERCADOS</h2>
          <p style={{ fontSize: '1.3rem', marginTop: '1rem' }}>BOGOTÁ</p>
        </section>

        <section className="cards" id="programas">
          <div className="card">
            <h3>ADSO</h3>
            <p>Análisis y Desarrollo de Software</p>
          </div>
          <div className="card">
            <h3>REDES DE DATOS</h3>
            <p>Infraestructura y Seguridad</p>
          </div>
          <div className="card">
            <h3>ANIMACIÓN 3D</h3>
            <p>Diseño y Modelado Digital</p>
          </div>
          <div className="card">
            <h3>LOGÍSTICA</h3>
            <p>Gestión de Cadena de Suministro</p>
          </div>
          <div className="card">
            <h3>MERCADEO</h3>
            <p>Estrategias Digitales</p>
          </div>
          <div className="card">
            <h3>SISTEMAS</h3>
            <p>Soporte y Mantenimiento</p>
          </div>
        </section>

        <section className="form-container" id="contacto">
          <h3>Formulario de Contacto</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
              />
            </div>
            <div className="form-group">
              <label>Correo:</label>
              <input
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </div>
            <div className="form-group">
              <label>Mensaje:</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows="5"
                placeholder="Escribe tu consulta..."
                required
              />
            </div>
            <button type="submit" className="btn">
              ENVIAR
            </button>
          </form>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', background: 'rgba(0,0,0,0.3)', marginTop: '3rem' }}>
        <p>© 2025 SENA - Centro de Gestión de Mercados | Bogotá, Colombia</p>
      </footer>
    </>
  );
}