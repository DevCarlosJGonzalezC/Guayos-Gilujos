import './App.css';
import Testimonio from './componentes/02-testimonio.js'
import Footer from './componentes/05-footer.js'
import NavBar from './componentes/01-navBar.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <NavBar/>
        <h1 className='titulo-principal'>Productos Deportivos.</h1>
        <Testimonio
        nombre='Carlos Jose Gonzalez'
        pais='Colombia'
        imagen='auriculares'
        cargo='Ingeniero de Software'
        empresa='Facebook'
        testimonio='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen'
        />        
        <Testimonio
        nombre='Luciana Gonzalez Natera'
        pais='Alemania'
        imagen='chasis'
        cargo='Ingeniero de Sistemas'
        empresa='Instagram'
        testimonio='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen'
        />
        <Testimonio
        nombre='Jose Jhoel Gonzalez Natera'
        pais='Israel'
        imagen='mouse'
        cargo='Ingeniero de Datos'
        empresa='Google'
        testimonio='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen'
        />
        <Footer
        desarrollador= "Carlos J. Gonzalez C."
        ciudad='Medellin'
        desarrollador2='jose Jhoel Gonzalez C.'
        ciudad2='Bello'
        />
      </div>
    </div>
  );
}

export default App;
