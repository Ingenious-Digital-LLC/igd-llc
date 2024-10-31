import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="relative w-10 h-10">
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0 bg-black rounded-xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-gradient-to-r from-red-500 to-transparent"
                style={{
                  height: '1px',
                  width: '100%',
                  top: `${(i + 1) * 25}%`,
                  left: 0,
                  transform: `translateX(${i % 2 === 0 ? '-100%' : '100%'})`,
                  animation: `slideIn${i % 2 === 0 ? 'Left' : 'Right'} 3s ${i * 0.2}s infinite`
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Icon Container */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-xl transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-red-500/25">
          {/* Digital Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-digital-gradient" />
          
          {/* Glass Effect */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl" />
          
          {/* Inner Border with Circuit Pattern */}
          <div className="absolute inset-[2px] border border-white/20 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Digital Glow Effect */}
        <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl transform scale-90 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
      </div>

      {/* Text */}
      <div className="text-xl font-bold tracking-tight">
        <span className="relative">
          <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent group-hover:from-red-400 group-hover:to-red-500 transition-all duration-300">
            Ingenious
          </span>
          {/* Digital Glitch Effect */}
          <span className="absolute -inset-0.5 bg-red-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
        </span>
        <span className="text-white group-hover:text-gray-100 transition-colors duration-300">
          Digital
        </span>
      </div>
    </Link>
  );
};

export default Logo;