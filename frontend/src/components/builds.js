import React from 'react'
import PC from "../images/Personal_Cloud.jpg"
import MP from "../images/Music_Player.jpg"

export default function Builds() {
  return (
	<section className='builds'>
		<div className="projects">
			<h1 className='buildhead'>My Latest Projects</h1>
			<div className="buildcardcont">
				<div className="buildcard">
					<img src="https://shuvadip-ghosh.github.io/Oniyama/preview.png" alt="oniyama" />
					<h3><a className='redirect' href="https://shuvadip-ghosh.github.io/Oniyama/" target="_blank" rel="noopener noreferrer">Oniyama 
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
						</svg>
					</a></h3>
					<p>Jan 26, 2024</p>
					<p>Oniyama is a sleek and intuitive anime streaming application built with Electron.js. It allows users to watch their favourite anime series and movies with ease.</p>
					<div className="techtags">
						<div className="techtag">Electronjs</div>
						<div className="techtag">Flask</div>
						<div className="techtag">Apache</div>
						<div className="techtag">sqlite3</div>
					</div>
				</div>
				<div className="buildcard">
					<img src={PC} alt="oniyama" />
					<h3><a className='redirect' href="https://github.com/Shuvadip-Ghosh/My_world" target="_blank" rel="noopener noreferrer">Personal Cloud
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
						</svg>
					</a></h3>
					<p>Apr 09, 2022</p>
					<p>A self-hosted backup solution that transforms my home server into a personal cloud, allowing seamless file storage, access, and management from any device.</p>
					<div className="techtags">
						<div className="techtag">Flask</div>
						<div className="techtag">HTML</div>
						<div className="techtag">CSS</div>
						<div className="techtag">JS</div>
					</div>
				</div>
				<div className="buildcard">
					<img src={MP} alt="oniyama" />
					<h3><a className='redirect' href="https://github.com/Shuvadip-Ghosh/My_world" target="_blank" rel="noopener noreferrer">ResoTune
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
						</svg>
					</a></h3>
					<p>Apr 09, 2022</p>
					<p>A sleek, browser-based music player with smooth playback, intuitive controls, and playlist support—built for an immersive listening experience right from your browser.</p>
					<div className="techtags">
						<div className="techtag">Flask</div>
						<div className="techtag">HTML</div>
						<div className="techtag">CSS</div>
						<div className="techtag">JS</div>
					</div>
				</div>
			</div>
		</div>
		{/* <div className="Workexp"></div> */}
		{/* <div className="Hackathons"></div> */}
	</section>
  )
}
