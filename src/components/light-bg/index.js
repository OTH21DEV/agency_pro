import React,{useState,useRef,useEffect} from 'react'
import "./style.css";


const AnimatedBackground = () => {
    // const canvasRef = useRef(null);

    // // Animation variables
    // let auroraShapes = []; // This would hold the shapes or particles making up the aurora
  
    // // Resize the canvas to fill browser window dynamically
    // const resizeCanvas = (canvas) => {
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;
    // };
  
    // // Aurora drawing function
    // const drawAurora = (ctx, frameCount) => {
    //   // Clear the canvas
    //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
    //   // Draw your aurora shapes here
    //   // For example:
    //   const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
    //   gradient.addColorStop(0, `rgba(0,255,0,${Math.abs(Math.sin(frameCount * 0.01))})`);
    //   gradient.addColorStop(1, `rgba(0,0,255,${Math.abs(Math.sin(frameCount * 0.01))})`);
  
    //   ctx.fillStyle = gradient;
    //   ctx.beginPath();
    //   ctx.moveTo(0, ctx.canvas.height / 2);
  
    //   // Add some wavy effect using sine
    //   for (let i = 0; i < ctx.canvas.width; i++) {
    //     ctx.lineTo(i, ctx.canvas.height / 2 + Math.sin(i * 0.02 + frameCount * 0.05) * 20);
    //   }
  
    //   ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
    //   ctx.lineTo(0, ctx.canvas.height);
    //   ctx.closePath();
    //   ctx.fill();
    // };
  
    // // Main animation loop
    // const animate = (ctx) => {
    //   let frameCount = 0;
    //   const render = () => {
    //     frameCount++;
    //     drawAurora(ctx, frameCount);
    //     requestAnimationFrame(render);
    //   };
    //   render();
    // };
  
    // useEffect(() => {
    //   const canvas = canvasRef.current;
    //   const context = canvas.getContext('2d');
      
    //   resizeCanvas(canvas);
    //   window.addEventListener('resize', () => resizeCanvas(canvas));
      
    //   // Start the animation
    //   animate(context);
      
    //   // Clean up event listener on unmount
    //   return () => {
    //     window.removeEventListener('resize', () => resizeCanvas(canvas));
    //   }
    // }, []);
  
    // return <canvas ref={canvasRef} />;
    const canvasRef = useRef(null);

    // Resize the canvas to fill browser window dynamically
    const resizeCanvas = (canvas) => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
  
    // Morphing shape drawing function
    const drawMorphingShape = (ctx, frameCount) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas
  
      const centerX = ctx.canvas.width / 2;
      const centerY = ctx.canvas.height / 2;
  
      const numOfPoints = 6;
      const slice = Math.PI * 2 / numOfPoints;
      const radius = 150;
  
      // Create gradient
      const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.3, centerX, centerY, radius);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(1, 'rgba(0, 0, 80, 0.1)');
  
      // Calculate points around a circle
      let points = [];
      for (let i = 0; i < numOfPoints; i++) {
        const angle = slice * i;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        points.push({
          x: x,
          y: y,
          cpx: centerX + (radius * Math.cos(angle - slice / 2)), // Use consistent control points
          cpy: centerY + (radius * Math.sin(angle - slice / 2)),
        });
      }
  
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const pCurr = points[i];
        const pNext = points[(i + 1) % points.length];
  
        ctx.quadraticCurveTo(pCurr.cpx, pCurr.cpy, pNext.x, pNext.y);
      }
  
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.closePath();
    };
  
    // Animation loop
    const animate = (ctx) => {
        let frameCount = 0; 
        const render = (frameCount) => {
            drawMorphingShape(ctx, frameCount);
            requestAnimationFrame(() => render(frameCount + 1)); // Increment frameCount here
          };
        
          render(frameCount); // Start with the initial frame count
        };
  
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
      
        resizeCanvas(canvas);
        const resizeListener = () => resizeCanvas(canvas); // Define the function once
        window.addEventListener('resize', resizeListener);
      
        animate(context); // Start the animation
      
        return () => {
          window.removeEventListener('resize', resizeListener); // Remove the same listener reference
        };
      }, [])
  
    return <canvas ref={canvasRef} />;
};

export default AnimatedBackground;
