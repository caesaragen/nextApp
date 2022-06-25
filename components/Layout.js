import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'
import dynamic from 'next/dynamic';

const Layout = ({ children }) => {
    const ParticlesBg = dynamic(() => import('particles-bg'), {
        ssr: false,
    });

    const [toggle, setToggle] = useState(false);
    let config = {
        num: [24, 27],
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
        <div className={styles.container}>
            <Head>
                <title>Joel Aduma Developer DogTag</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                <ParticlesBg type="custom" config={config} bg={{
                    position: "absolute",
                    
                }} />
                <body>
                    {children} 
              </body>
                
            </main>

<Footer/>
        </div>
    )
}

export default Layout