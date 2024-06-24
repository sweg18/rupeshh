"use client"; 
import Image from 'next/image'
import { useEffect, useState } from 'react';


export default function Home() {
  const [color, setColor] = useState('black');

  useEffect(() => {
    const generateRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let newColor = '#';
      for (let i = 0; i < 6; i++) {
        newColor += letters[Math.floor(Math.random() * 16)];
      }
      return newColor;
    };

    const interval = setInterval(() => {
      setColor(generateRandomColor());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const divStyle = {
    margin: '5%',
  }
  const divStyle2 = {
    margin: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
  }
  const headingStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    textDecoration: 'underline',
    marginBottom: '15px'
  }
  const textStyle = {
    marginBottom: '20px'
  }

  const colorChangingStyle = { 
    color, 
    transition: 'color 1s', 
    fontWeight: '600' 
  };

  return (
    <>
    <div style={divStyle}>
        <h2 style={headingStyle}>hi,</h2>
        <p>gm, it's rupesh and I like to work on distributed computing. my topics of interests are artificial intelligence and blockchain infrastructure.</p>
        <br/> 
        <p style={textStyle}>come drop by and say hi on <span style={colorChangingStyle}><a href="https://twitter.com/sweg_18">x (prev. twitter)</a></span> or checkout what I'm upto on <span style={colorChangingStyle}><a href="https://github.com/sweg18">github</a></span>.</p>
        <h2 style={headingStyle}>werk</h2>
        <p style={textStyle}><span style={colorChangingStyle}>Jiffy Scan</span> - leading AA-based explorer, currently working on building bundler and paymaster infrastructure, and exploring partnerships with chains</p>
        <p style={textStyle}><span style={colorChangingStyle}>Pay3</span> - working as head of product for a while (~1.5 years) and built gaming payment products including, but not limited to, game token purchases, NFT Checkout, in-game checkouts etc.</p>
        <p style={textStyle}><span style={colorChangingStyle}>Spookfish</span> - built an openCV based application for detecting defects on production line for packaging. wrote the entire backend and designed the openCV module with the team.</p>
        <h2 style={headingStyle}>buidls</h2>
        <p style={textStyle}><span style={colorChangingStyle}>CommuneIN</span> - an exclusive community for Indian Citizens diving into cutting-edge Web3 opportunities.</p>
        <p style={textStyle}><span style={colorChangingStyle}>Box Protocol</span> - a platform for trading tokenized crypto portfolios, offering an easy, self-custodial investment in diverse Web3 sectors.</p>
        <p style={textStyle}><span style={colorChangingStyle}>Supervision</span> - a tool for detecting defective blisters on pharma production lines, improved production efficeny by 70%.</p>
        <p style={textStyle}><span style={colorChangingStyle}>Sync Match</span> - a tool to analyse and remove duplicate files including text and image type files.</p>
        <p style={textStyle}><span style={colorChangingStyle}>Predix Market</span> - a platform for betting on the outcomes of real-life events.</p>
        <p style={textStyle}><span style={colorChangingStyle}>LiquiBridge</span> -an Ethereum bridge leveraging liquidity pools and indexing events using The Graph.</p>
    </div>
    <div style={divStyle2}>
      <hr style={{borderColor: "black", height: "2px", width: "100%", alignItems: "center"}}></hr>
      <p>not playing anything, check out this playlist</p>
      <br/>
     // <iframe style={{borderRadius: '12px', marginBottom:'200px'}} src="https://open.spotify.com/embed/playlist/5j6thXnur7Tv029VnSyB7d?utm_source=generator&theme=0" width="100%" height="380" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    //  <p>Shamelessly copied from <a href="https://www.dakshk.xyz/">dakshk</a></p>
    </div>
    </>
  )
}
