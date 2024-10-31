import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Binary } from 'lucide-react';

const LoadingSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState(0);
  const [text, setText] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const messages = [
      'Initializing Neural Network',
      'Synthesizing Digital Pathways',
      'Calibrating Innovation Matrix',
      'Engaging Quantum Processors',
      'Activating Digital Excellence'
    ];

    let currentMessageIndex = 0;
    let currentCharIndex = 0;

    const typeMessage = () => {
      if (currentMessageIndex >= messages.length) {
        setTimeout(() => {
          setStage(5);
          setIsTransitioning(true);
          setTimeout(onComplete, 1500);
        }, 500);
        return;
      }

      const currentMessage = messages[currentMessageIndex];
      if (currentCharIndex < currentMessage.length) {
        setText(currentMessage.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        setTimeout(typeMessage, 30 + Math.random() * 40);
      } else {
        setTimeout(() => {
          currentMessageIndex++;
          currentCharIndex = 0;
          setStage(prev => prev + 1);
          typeMessage();
        }, 800);
      }
    };

    typeMessage();
  }, [onComplete]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      targetX: number;
      targetY: number;
      inTransition: boolean;
      color: string;
      opacity: number;

      constructor(x: number, y: number) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 3;
        this.speedY = (Math.random() - 0.5) * 3;
        this.targetX = x;
        this.targetY = y;
        this.inTransition = false;
        this.color = `rgba(255, ${Math.random() * 50}, 0`;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update(isTransitioning: boolean) {
        if (isTransitioning) {
          const dx = this.targetX - this.x;
          const dy = this.targetY - this.y;
          this.x += dx * 0.1;
          this.y += dy * 0.1;
          this.opacity *= 0.95;
        } else {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `${this.color}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color + ', 1)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Create initial particles
    for (let i = 0; i < 100; i++) {
      particlesRef.current.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        particle.update(isTransitioning);
        particle.draw(ctx);
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.05)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isTransitioning]);

  const containerVariants = {
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: { 
      scale: 1.5,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="loading"
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        variants={containerVariants}
        exit="exit"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        <div className="relative z-10 w-full max-w-md px-4">
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center"
          >
            <div className="relative w-32 h-32 mx-auto mb-8 sm:w-48 sm:h-48">
              <div className="absolute inset-0">
                <div className="absolute inset-0 border-4 border-red-500/20 rounded-full animate-[spin_8s_linear_infinite]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-transparent blur-xl" />
                </div>
                <div className="absolute inset-4 border-4 border-red-500/30 rounded-full animate-[spin_6s_linear_infinite_reverse]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-transparent blur-lg" />
                </div>
                <div className="absolute inset-8 border-4 border-red-500/40 rounded-full animate-[spin_4s_linear_infinite]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/40 to-transparent blur-md" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg transform rotate-45 animate-pulse sm:w-24 sm:h-24">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg" />
                    <div className="absolute inset-1 border border-white/20 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="h-6"
              >
                <span className="text-red-500 font-mono text-sm sm:text-base">
                  {text}
                  <span className="animate-blink">_</span>
                </span>
              </motion.div>

              <div className="w-full max-w-[200px] mx-auto sm:max-w-[300px]">
                <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-500 to-red-600"
                    initial={{ width: '0%' }}
                    animate={{ width: `${(stage / 5) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="fixed top-1/2 left-4 transform -translate-y-1/2 opacity-20 hidden sm:block"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          exit={{ x: -50, opacity: 0 }}
        >
          <Code2 className="w-24 h-24 text-red-500" />
        </motion.div>
        <motion.div
          className="fixed top-1/2 right-4 transform -translate-y-1/2 opacity-20 hidden sm:block"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          exit={{ x: 50, opacity: 0 }}
        >
          <Binary className="w-24 h-24 text-red-500" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingSequence;