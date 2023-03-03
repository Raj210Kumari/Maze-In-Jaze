import React from 'react';
import './App.css';
import Home from './Page/Home';
import Navbar from './Page/Navbar';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAYFBMVEX///8AAAAxMTGGhoY2Njb39/fa2tre3t5lZWV6enrj4+Pz8/NHR0d+fn4bGxvDw8MrKyvR0dG6urqZmZlwcHAjIyOQkJDJycmnp6dNTU09PT3q6upeXl5ZWVkMDAyysrLCDnSGAAAEVElEQVRoge1b2dqiMAxt2BWQIuKG6Pu/5UAF7ZIU51fgprmZ+X5Pe7qGtDll7GVhUSWZN5tlSVWEzLQoAdgluT+b5ckOIIk02nQD/LjFGvRDC7dHDptU6S6HKqXwv7S0Ai51+gRevARtb7EH5fj/CLKZB1m2MIOhzyn3FuTtmDl/TusGFhvnp8Ww6f+JoFqWl7FKDHbCF1nPsqV10o04HI0fwrK6BYF38YuGKlueD9fOG2325DTF+7zzg8HhXJq/HSFkBWy1vzZHD0arE6zi8JG9ENAWGO2pvb8Q2Vkf0y0UrNppS/q8A8VyYyZOVxXRGo3b3lREoDUu3FUsSdS/taAb1/zr0UDAQ0XsTYSvIjrWLFea4pllAJRZOmAIZWOcMYTavzxjntKWK1YG5GWwwRFSn5H+9raReXxPJSZqhXqqVqltWwpxpolPVJnXFKUk4jpWkpGQhiS+kGXGDvk0Yv9EFDQip4jpDsPgZegOA1ymOgz3hiBG1+toAvGwIcSgNDbEGScOA1uheLJpYkuhW2m0FieObGVEa0PLOAIc+kqofSEsCFFi2xQ/J9k6jtCG9vXZTXKMEpNbVFi//8ktKizonXpthUQosXXliIGcidiyA+HpQuxDLSJGwudaiUtrmX7NptyGEJ+BxIbgDUrcWIdJfFFvNoSoCPlmvi3Dt5N9RbLJak+Tw+YTxLbN/9z7ttV1f25SG3FJEDc7uswQu5jxycuGmNEyKBdGEHfxLmXjR88ykoNXCmnEiSSmvfVrH5Au8RWCkO7gwEhi0l1LwQMxHbc3gviScDma1YkJtylDtuimu0qIEF0IdyV8N4hRZvWoESPz0SqxeYh4EZUXITbrve9VAEuNeo1DkLFKb9qpACHWjxI+cqQrlMbd9AuVvvmKjwv0tuPE3XiP6+NinHoGK8eoj1fEqS2uxrOBfzJ/JYg7C6OyJI+KQ9WTiKYsiWbRxDObI3bEjtgRO2JH7IgdsSN2xI7YETtiR+yIHbEjXoV4neum6Qu203jBVtMXbPx/L9jObz0DYNoExgolod8iV4qRcoPrfXKlGBmXs3+4RDXyA9OXqNi1sYqIEf3C99fGM16UK2vh09SApLYgUgPv1DCVGqjl0f7/ZAiZuv4qGbJW+ue7hNdQz18SXtMpvtiC+CLFt1ZSc7U07mqJ69VS9auJE1aTY8wvQNltUeKfSG5yG4KQ3KwmMlpNVmXdyL8Qku0oIZltZQxl5pHOfSAWpD96X4kF55VHynJVI+b6syBUCkWJtimK1474NxJYWeyJbyk58BES2GnRr/6iAPnyaaE3ssC00Ltj/YHM+WbKnLWvIyZzxoTdbxdWH6aE3fcWORp1PmFS2E1I2RMv8C5HWsoePYSUPf9Ayo4crXopO0v4oq8kehPi/fWeK6z2QKML4ZYd7NeTlNUe4fTfQ77csyMuO8K1HlqJp2X1Ek/Lau1pGVvtMZ1oUP98MJjNtOeD/wDE/0Ir2QcYsQAAAABJRU5ErkJggg==" className="App-logo" alt="logo" />
        <br />
        <br />
        <a
          className="App-link"
        >
          ROLLDICE
        </a>
      </header> */}
      <Navbar/>
      <Home/>

    </div>
  );
}

export default App;
