import Head from 'next/head'
import Image from 'next/image'
import { About, Navbar } from '../components'
import dynamic from 'next/dynamic';


export default function Home() {
  const ParticlesBg = dynamic(() => import('particles-bg'), {
    ssr: false,
  });
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [.1, 0.4],
    position: "all",
    color: ["random", "#ff0000"],
    cross: "dead",
    // emitter: "follow",
    random: 15
  };

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      }
    });
  }
  return (
    <div className="md:container md:mx-auto flex ">
      {/* <ParticlesBg type="custom" config={config} bg={{
        position: "absolute",
        zIndex: 999,
      }} /> */}
      <About className="about-position"/>
    </div>
  )
}
