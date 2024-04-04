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
    marginLeft: '450px',
    marginRight: '450px',
    marginTop: '150px',
    marginBottom: '50px'
  }
  const divStyle2 = {
    margin: '0px 550px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
  }
  const headingStyle = {
    fontSize:'35px',
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
        <p>gm, it's daksh and I like to work on distributed systems. my topics of interests are identities, optimizations and blockchain security.</p>
        <p style={textStyle}>come drop by and say hi on <span style={colorChangingStyle}>x (prev. twitter)</span> or checkout what I'm upto on <span style={colorChangingStyle}>github</span>.</p>
        <h2 style={headingStyle}>werk</h2>
        <p style={textStyle}><span style={colorChangingStyle}>devfolio</span> - worked as an product intern for a while (~1 year) and built multiple crypto native features including, but not limited to, crypto staking, crypto cheers, quadratic voting, etc.</p>
        <p style={textStyle}><span style={colorChangingStyle}>metapass</span> - built an onchain ticketing platform which leveraged NFTs as tickets. wrote all of the EVM contracts and built the frontend and backend with the team. scaled it to over 2000 users in ~3 months with over 1000 tickets sold across irl and virtual events.</p>
        <h2 style={headingStyle}>buidls</h2>
        <p style={textStyle}><span style={colorChangingStyle}>evm explorer</span> - a tool to allow evm devs for testing out evm contracts without building a graphic UI. simply plug in ABI & contract address and be ready to go.</p>
        <p style={textStyle}><span style={colorChangingStyle}>ENS-tar</span> - ENS-tar is a tool which allows you to set your ENS Avatar, you can either use your NFT or a custom avatar to set it.</p>
        <p style={textStyle}><span style={colorChangingStyle}>Wagmi Signatures</span> - Wagmi Signatures is an on-chain protocol for writing and signing agreements. Users can use Private/Public Key signatures to verify authenticity of the agreement.</p>
        <p style={textStyle}><span style={colorChangingStyle}>go eth me</span> - a go fund me like fundraiser alternative for ethereum blockchain.</p>
        <p style={textStyle}><span style={colorChangingStyle}>dislog</span> - a initialize once, use everywhere discord logging library to send application logs directly to discord.</p>
        <p style={textStyle}><span style={colorChangingStyle}>Bridge</span> - an ethereum bridge built using liquidity pools & the graph to index events. currently only native ETH {'<->'} MATIC on rinkeby & mumbai supported</p>
        <p style={textStyle}><span style={colorChangingStyle}>Comebacks AI</span> - A simple AI which generates comebacks for you. Built using OpenAI's GPT-3.</p>
    </div>
    <div style={divStyle2}>
      <hr style={{borderColor: "black", height: "2px", width: "100%", alignItems: "center"}}></hr>
      <p>not playing anything, check out this playlist</p>
      <br/>
        <iframe style={{borderRadius: '12px', marginBottom:'200px'}} src="https://open.spotify.com/embed/playlist/5j6thXnur7Tv029VnSyB7d?utm_source=generator&theme=0" width="100%" height="380" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      <p>Shamelessly copied from <a href="https://www.dakshk.xyz/">dakshk</a></p>
    </div>
    </>
  )
}
