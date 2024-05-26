
// funcion para listar los paises traidos del json
async function loadCountries() {
    const select = document.getElementById('countrySelect');
    
    try {
        const response = await fetch('./json/countries.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const countriesData = await response.json();
        
        countriesData.countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name;
            option.text = country.es_name;
            select.appendChild(option);
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
document.addEventListener('DOMContentLoaded', loadCountries);

// funcion para listar las peliculas semanales del json
async function loadMoviesWeekly() {
    const container = document.getElementById('imagenes');
  
    try {
      const response = await fetch('./client/json/movies_weekly.json');
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue correcta');
      }
      const moviesData = await response.json();
  
      // Obtener 5 películas al azar
    //   const randomMovies = getRandomElements(moviesData.weekly_top, 5);
      const randomMovies = getFivelements(moviesData.weekly_top, 5);
  
      // Configurar el contenedor para usar un diseño flexible
      container.style.display = 'flex';
      container.style.flexWrap = 'wrap';
  
      randomMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
  
        // Ajustar el ancho de cada elemento de la película
        movieElement.style.width = 'calc(50% - 10px)'; // 50% de ancho menos un margen
  
        const nameElement = document.createElement('h2');
        nameElement.textContent = movie.name;
  
        const yearElement = document.createElement('p');
        yearElement.textContent = movie.year;
  
        const imgElement = document.createElement('img');
        imgElement.src = movie.url_img;
        imgElement.alt = movie.name;
  
        const infoElement = document.createElement('span');
        infoElement.textContent = movie.info; // Suponiendo que tienes "info" en tu JSON
  
        movieElement.appendChild(nameElement);
        // movieElement.appendChild(yearElement);
        movieElement.appendChild(imgElement);
        movieElement.appendChild(infoElement);
  
        container.appendChild(movieElement);
      });
    } catch (error) {
      console.error('Ha habido un problema con su operación de recuperación:', error);
    }
  }
  
  function getRandomElements(array, numElements) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numElements);
  }

  function getFivelements(array, numElements) {
    const shuffled = array.sort(() => 0.5 );
    return shuffled.slice(0, numElements);
  }
  
  document.addEventListener('DOMContentLoaded', loadMoviesWeekly);


//------------------   Tendencias --------------------//
// funcion para listar las peliculas semanales del json
async function loadMoviestendencias() {
    const container = document.getElementById('trendsBox');
  
    try {
      const response = await fetch('./client/json/movies_weekly.json');
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue correcta');
      }
      const moviesData = await response.json();
  
      // Obtener 5 películas al azar
      const randomMovies = getRandomElements(moviesData.weekly_top, 5);
  
      // Configurar el contenedor para usar un diseño flexible
      container.style.display = 'flex';
      container.style.flexWrap = 'wrap';
  
      randomMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
  
        // Ajustar el ancho de cada elemento de la película
        movieElement.style.width = 'calc(50% - 10px)'; // 50% de ancho menos un margen
  
        const nameElement = document.createElement('h2');
        nameElement.textContent = movie.name;
  
        const yearElement = document.createElement('p');
        yearElement.textContent = movie.year;
  
        const imgElement = document.createElement('img');
        imgElement.src = movie.url_img;
        imgElement.alt = movie.name;
  
        const infoElement = document.createElement('span');
        infoElement.textContent = movie.info; // Suponiendo que tienes "info" en tu JSON
  
        movieElement.appendChild(nameElement);
        // movieElement.appendChild(yearElement);
        movieElement.appendChild(imgElement);
        movieElement.appendChild(infoElement);
  
        container.appendChild(movieElement);
      });
    } catch (error) {
      console.error('Ha habido un problema con su operación de recuperación:', error);
    }
  }
  
  function getRandomElements(array, numElements) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numElements);
  }
  document.addEventListener('DOMContentLoaded', loadMoviestendencias);
  
  
// async function loadMoviesWeekly() {
//     const container = document.getElementById('imagenes');
  
//     try {
//       const response = await fetch('./client/json/movies_weekly.json');
//       if (!response.ok) {
//         throw new Error('La respuesta de la red no fue correcta');
//       }
//       const moviesData = await response.json();
  
//       moviesData.weekly_top.forEach(movie => {
//         const movieElement = document.createElement('div');
//         movieElement.classList.add('movie');

//         const nameElement = document.createElement('h2');
//         nameElement.textContent = movie.name;
  
//         const yearElement = document.createElement('p');
//         yearElement.textContent = movie.year;
  
//         const imgElement = document.createElement('img');
//         imgElement.src = movie.url_img;
//         imgElement.alt = movie.name;

//         const infoElement = document.createElement('span');
//         infoElement.textContent = movie.info;
  
//         movieElement.appendChild(nameElement);
//         movieElement.appendChild(yearElement);
//         movieElement.appendChild(imgElement);
//         movieElement.appendChild(infoElement);
  
//         container.appendChild(movieElement);
//       });
//     } catch (error) {
//       console.error('Ha habido un problema con su operación de recuperación:', error);
//     }
//   }
  
//   document.addEventListener('DOMContentLoaded', loadMoviesWeekly);
  

















document.addEventListener('DOMContentLoaded', function() {
    let isMenuOpen = false;
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('header nav a');
    const flagIcon = document.getElementById('flag');
    let currentLanguage = localStorage.getItem('language') || 'es';

    // Function to toggle the menu
    menuIcon.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        menuIcon.classList.toggle('bx-x', isMenuOpen);
        navbar.classList.toggle('active', isMenuOpen);
    });

    // Function to handle nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            isMenuOpen = false;
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    // Function to change the active section on scroll
    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const top = window.scrollY;

        sections.forEach(sec => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Function to change the language
    flagIcon.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        localStorage.setItem('language', currentLanguage);
        changeLanguage(currentLanguage);
    });

    // Function to change the text based on the language
    const changeLanguage = (lang) => {
        let translations;
        if(document.getElementById('loginForm')){
            translations = {
                en: ["Login", "Back"],
                es: ["Iniciar Sesión", "Volver "]
            };
        }else{
            translations = {
                en: ["Home", "Trends", "More views", "API access", "Login"],
                es: ["Inicio", "Tendencias ", "Más vistas ", "Acceso API", "Iniciar Sesión"]
            }
        }

        navLinks.forEach((link, index) => {
            link.textContent = translations[lang][index];
        });
    };
    changeLanguage(currentLanguage);
});

W



// https://www.themoviedb.org/settings/api
// Clave de la API
// 2919da0bf359bee66a01901ad5936d08

// Token de acceso de lectura a la API
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTE5ZGEwYmYzNTliZWU2NmEwMTkwMWFkNTkzNmQwOCIsInN1YiI6IjY2NTE1ODAzNDhjYTZkZTdlYjczMmI5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iWfzXgXCp6UYPg4IKvM92WkVkjQn0CC1nNtGI-vr_AA