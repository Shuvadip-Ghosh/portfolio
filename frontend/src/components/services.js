import React,{ useState } from 'react';

export default function Services() {
  const el = React.useRef(null);
  React.useEffect(() => {
    el.current.scrollIntoView({ behavior: 'smooth' })
  });
  const [active, setactive] = useState(["servactcard","",""]);

  const changeactive = (v) => {
    setactive(v);
  };

  const [actived, setactived] = useState(["servactdet","",""]);

  const changeactived = (v) => {
    setactived(v);
  };
    
  return (
    <section className='services' ref={el}>
        <div className='servicelist'>
            <div className={"servicecard "+ active[0]}>
              <div className='servicehead'><h1>Web Development</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brilliance" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7"/>
              </svg>
              </div>
              <p onClick={() => {changeactive(["servactcard","",""]);changeactived(["servactdet","",""])}}>Show more</p>
            </div>
            <div className={"servicecard "+ active[1]}>
              <div className='servicehead'><h1>Python Development</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
              </svg>
              </div>
              <p onClick={() => {changeactive(["","servactcard",""]);changeactived(["","servactdet",""])}}>Show more</p>
            </div>
            <div className={"servicecard "+ active[2]}>
              <div className='servicehead'>
                <h1>Desktop Applications</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
                  <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145"/>
                </svg>
              </div>
              <p onClick={() => {changeactive(["","","servactcard"]);changeactived(["","","servactdet"])}}>Show more</p>
            </div>
        </div>
        <div className='servicedet'>
          <div className={"servicedetcard "+ actived[0]}>
            <h1>Web Development</h1>
            <h3>"Your website is the digital face of your brand—let’s make it unforgettable."</h3>
            <p>I build modern, responsive websites from scratch using HTML, CSS, and JavaScript, or with frameworks like React. Whether you need a dynamic web app, a portfolio site, or a Shopify-based eCommerce store, I can bring your ideas to life with clean, efficient code and smooth user experiences.</p>
          </div>

          <div className={"servicedetcard "+ actived[1]}>
            <h1>Python Development</h1>
            <h3>"Automate the boring, optimize the essential—power your ideas with Python."</h3>
            <p>I develop Python-based applications, including automation scripts, backend services, data processing tools, and AI integrations. Whether it’s a custom API with Flask, a web scraper, or a specialized script for your workflow, I can craft scalable and efficient Python solutions tailored to your needs.</p>
          </div>

          <div className={"servicedetcard "+ actived[2]}>
            <h1>Desktop Applications</h1>
            <h3>"Seamless, powerful, and cross-platform—your ideas, running anywhere."</h3>
            <p>Need a cross-platform desktop app? I create lightweight yet powerful applications using Electron.js, ensuring smooth performance across Windows, macOS, and Linux. Whether it's a productivity tool, a data manager, or a media player, I can build a robust app with a sleek UI.</p>
          </div>
        </div>
    </section>
  )
}
