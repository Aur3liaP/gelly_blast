"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { carrouselImages } from "../../lib/CarrouselDatas"

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carrouselImages.length)
    }, 5000) 
    
    return () => clearInterval(interval) 
  }, [])
  
  return (
    <div className="relative w-4/5 md:w-2/3 max-w-2xl">
     <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '16/10' }}>
        {carrouselImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            quality={70}
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            className={`object-cover transition-opacity duration-500 ease-in-out absolute inset-0 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
          />
        ))}
      </div>
    
      
      <div className="flex justify-center mt-2 gap-3">
        {carrouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${
              index === currentIndex ? 'bg-pink' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}