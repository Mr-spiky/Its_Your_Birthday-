'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<number[]>([]);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Photo slideshow data
  const photos = [
    { caption: "The day we first met - my heart knew you were special", image: "/image/582117910_1734520943884509_387080101035315742_n.jpg" },
    { caption: "Every moment with you feels like a dream" },
    { caption: "Your smile lights up my entire world" },
    { caption: "Together, we create the most beautiful memories" },
    { caption: "You make every ordinary day extraordinary" },
    { caption: "In your eyes, I found my forever home" },
    { caption: "Our love story is my favorite adventure" },
    { caption: "With you, I've found my happily ever after" }
  ];

  const handleSurpriseClick = () => {
    setShowSurprise(true);
    // Generate floating hearts
    const hearts = Array.from({ length: 20 }, (_, i) => i);
    setFloatingHearts(hearts);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [photos.length]);

  // Play music on page load after user interaction
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => console.log('Audio play failed:', err));
      }
      // Remove event listener after first interaction
      document.removeEventListener('click', playAudio);
      document.removeEventListener('touchstart', playAudio);
      document.removeEventListener('scroll', playAudio);
    };

    // Add listeners for user interaction
    document.addEventListener('click', playAudio);
    document.addEventListener('touchstart', playAudio);
    document.addEventListener('scroll', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
      document.removeEventListener('touchstart', playAudio);
      document.removeEventListener('scroll', playAudio);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 overflow-x-hidden">
      {/* Background Music */}
      <audio ref={audioRef} loop className="hidden">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-pink-300/30"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Section 1: Landing Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Floating Hearts Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="floating-heart absolute text-pink-400/40"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${Math.random() * 20 + 20}px`
              }}
            >
              ❤️
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center space-y-6 md:space-y-8 px-4">
          <h1 className="glowing-text text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold text-pink-600 mb-4 md:mb-8 animate-fade-in leading-tight">
            Happy Birthday My Love ❤️
          </h1>

          <div className="heart-frame mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse-slow"></div>
            <div className="absolute inset-3 sm:inset-4 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 sm:border-4 border-pink-300">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-4 sm:px-8 text-center tracking-wide" style={{ fontFamily: "'Great Vibes', cursive", textShadow: '0 2px 10px rgba(236, 72, 153, 0.3)' }}>
                Haya
              </h2>
            </div>
            <div className="sparkle absolute top-0 left-1/4 text-yellow-400 text-lg sm:text-2xl animate-sparkle">✨</div>
            <div className="sparkle absolute bottom-0 right-1/4 text-yellow-400 text-lg sm:text-2xl animate-sparkle-delay">✨</div>
            <div className="sparkle absolute top-1/4 right-0 text-yellow-400 text-base sm:text-xl animate-sparkle">💫</div>
            <div className="sparkle absolute bottom-1/4 left-0 text-pink-400 text-base sm:text-xl animate-sparkle-delay">💖</div>
          </div>

          <p className="text-base sm:text-lg md:text-2xl text-gray-700 italic max-w-2xl mx-auto animate-fade-in-up px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            "You are my safest place and my favourite adventure."
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Moments Gallery */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-pink-600 mb-8 sm:mb-12 md:mb-16 animate-fade-in" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Beautiful Moments ✨
          </h2>

          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-white/50 backdrop-blur-sm p-4 sm:p-6 md:p-8">
            <div className="relative h-80 sm:h-96 md:h-[500px] flex items-center justify-center">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    currentPhoto === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-pink-200 to-rose-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {photo.image ? (
                      <>
                        <Image
                          src={photo.image}
                          alt={photo.caption}
                          fill
                          className="object-cover rounded-2xl"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10">
                          <p className="text-base sm:text-lg md:text-2xl text-white italic font-medium px-2 drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {photo.caption}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-300/50 via-rose-300/50 to-pink-400/50"></div>
                        <div className="relative z-10 text-center p-4 sm:p-6 md:p-8">
                          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto mb-4 sm:mb-6 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 sm:border-4 border-white/50 shadow-xl">
                            <span className="text-4xl sm:text-5xl md:text-6xl">📸</span>
                          </div>
                          <p className="text-base sm:text-lg md:text-2xl text-gray-700 italic font-medium px-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {photo.caption}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhoto(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentPhoto === index
                      ? 'w-8 h-3 bg-pink-500'
                      : 'w-3 h-3 bg-pink-300 hover:bg-pink-400'
                  }`}
                  aria-label={`Go to photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Birthday Message */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-transparent via-pink-100/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-rose-300/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base md:text-xl leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-pink-500 first-letter:mr-1 sm:first-letter:mr-2 first-letter:float-left">
                If I could gift you a universe, I would fill it with stars shaped like your smile, 
                moons that whisper your name, and galaxies that dance to the rhythm of your laughter. 
                You are not just a part of my life; you are the very essence of everything beautiful in it.
              </p>
              
              <p>
                Every sunrise reminds me of the warmth you bring to my soul, and every sunset paints 
                the sky with the colors of the love I feel for you. You've turned my ordinary days 
                into poetry, my silence into songs, and my dreams into reality.
              </p>
              
              <p>
                In a world full of temporary things, you are my forever. You are the gentle rain on a 
                summer day, the cozy blanket on a cold night, and the sweetest melody my heart has ever known. 
                With you, I've discovered that love isn't just a feeling—it's a home, a sanctuary, a miracle.
              </p>
              
              <p className="text-center text-xl sm:text-2xl font-semibold text-pink-600 italic mt-6 sm:mt-8" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Happy Birthday to the one who makes my heart sing! 💕
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Interactive Surprise */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {!showSurprise ? (
            <button
              onClick={handleSurpriseClick}
              className="surprise-button group relative px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-bold text-white rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 shadow-2xl transform hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10">Click for your surprise 🎁</span>
              <div className="absolute inset-0 rounded-full bg-pink-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </button>
          ) : (
            <div className="animate-fade-in relative">
              {/* Floating Hearts on Surprise */}
              {floatingHearts.map((heart) => (
                <div
                  key={heart}
                  className="surprise-heart absolute text-4xl pointer-events-none"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  ❤️
                </div>
              ))}

              <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-rose-100/50"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-4 sm:mb-6" style={{ fontFamily: "'Great Vibes', cursive" }}>
                    My Dearest Love,
                  </h3>
                  
                  <div className="handwritten space-y-3 sm:space-y-4 text-sm sm:text-base md:text-xl text-gray-700" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <p>
                      On this special day, I want you to know that you are the greatest gift life has ever given me. 
                      Every moment with you is a treasure, every smile of yours is my sunshine, and every heartbeat 
                      reminds me how lucky I am to call you mine.
                    </p>
                    
                    <p>
                      You make the impossible possible, the ordinary extraordinary, and every day an adventure. 
                      Thank you for being you—beautiful, kind, magical, and absolutely perfect in every way.
                    </p>
                    
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-pink-600 mt-4 sm:mt-6">
                      I love you more than words could ever express. 💖
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 5: Final Line */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="text-center">
          <p className="final-signature text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent animate-glow px-4 py-2" style={{ fontFamily: "'Great Vibes', cursive", lineHeight: '1.5' }}>
            Forever yours, Spiky. ❤️
          </p>
          
          <div className="mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-4">
            <span className="text-2xl sm:text-3xl animate-float">🌹</span>
            <span className="text-2xl sm:text-3xl animate-float-delay">💝</span>
            <span className="text-2xl sm:text-3xl animate-float">✨</span>
          </div>
        </div>
      </section>

      {/* Footer Sparkles */}
      <div className="py-6 sm:py-8 text-center text-gray-400 text-xs sm:text-sm">
        <p>Made with 💕 and infinite love</p>
      </div>
    </div>
  );
}
