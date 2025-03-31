import React,{ useState, useRef } from 'react';

export default function Services() {
  document.title = "Services - Shuvadip - Developer Portfolio ";
  let metas = document.getElementsByTagName("meta");
  metas.description.content = "Offering web development (React, Flask, Shopify), Python scripting, and Electron.js desktop app development. Let's build something amazing together!";
  const el = useRef(null);
  React.useEffect(() => {
    el.current.scrollIntoView({ behavior: 'smooth' })
  });


  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = [useRef(null),useRef(null),useRef(null)]
  const services = [
    {
      title: 'Web Development',
      icon: 'bi-brilliance',
      description: `"Your website is the digital face of your brand—let’s make it unforgettable."`,
      details: `I build modern, responsive websites from scratch using HTML, CSS, and JavaScript, or with frameworks like React. Whether you need a dynamic web app, a portfolio site, or a Shopify-based eCommerce store, I can bring your ideas to life with clean, efficient code and smooth user experiences.`
    },
    {
      title: 'Python Development',
      icon: 'bi-code-slash',
      description: `"Automate the boring, optimize the essential—power your ideas with Python."`,
      details: `I develop Python-based applications, including automation scripts, backend services, data processing tools, and AI integrations. Whether it’s a custom API with Flask, a web scraper, or a specialized script for your workflow, I can craft scalable and efficient Python solutions tailored to your needs.`
    },
    {
      title: 'Desktop Applications',
      icon: 'bi-display',
      description: `"Seamless, powerful, and cross-platform—your ideas, running anywhere."`,
      details: `Need a cross-platform desktop app? I create lightweight yet powerful applications using Electron.js, ensuring smooth performance across Windows, macOS, and Linux. Whether it's a productivity tool, a data manager, or a media player, I can build a robust app with a sleek UI.`
    }
  ];
    
  return (
    <section className='services' ref={el}>
        <div className='servicelist'>
        {services.map((service, index) => (
          <div
            id={`b-${index}`}
            className={`servicecard ${activeIndex === index ? 'servactcard' : ''}`}
          >
            <div className='servicehead'>
              <h1>{service.title}</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi ${service.icon}`} viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
              </svg>
            </div>
            <p onClick={() => {setActiveIndex(index); cardRefs[index].current.scrollIntoView({ behavior: 'smooth',block: "center" })}}>Show more</p>
          </div>
        ))}
        </div>
        <div className='servicedet'>
        {services.map((service, index) => (
          <div id={`b-${index}`} ref={cardRefs[index]} className={`servicedetcard ${activeIndex === index ? 'servactdet' : ''}`}>
            <h1>{service.title}</h1>
            <h3>{service.description}</h3>
            <p>{service.details}</p>
          </div>
        ))}
        </div>
    </section>
  )
}