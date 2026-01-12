import { Link } from "wouter";
import { motion } from "framer-motion";
import { cards } from "@/lib/cards";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      {/* Decorative background grain/texture can be added here via CSS or image */}
      
      <main className="max-w-[1400px] mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 relative">
          {/* Top Center Instruction - Absolute centered on Desktop, stacked on Mobile */}
          <div className="order-2 md:order-1 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0 w-full md:w-auto text-center mt-8 md:mt-0">
            <p className="font-sans text-xs md:text-sm tracking-wide text-muted-foreground leading-relaxed">
  Приветствую, путник!<br/>
  Посмотри внимательно на карты ниже и выбери ту, что больше всего откликается.<br/>
  Нажми на неё — и получи предсказание на 2026 год.<br/>
  <span className="opacity-90">
    И да: пооткрывать их все и выбрать самое привлекательное — можно.<br/>
    Но — после вердикта судьбы 😊
  </span>
</p>
          </div>

          {/* Top Right Epigraph */}
          <div className="order-1 md:order-2 w-full md:w-auto flex justify-end">
            <div className="font-serif italic text-xs md:text-sm leading-relaxed text-right text-primary/80 border-r border-primary/20 pr-4 md:pr-6 max-w-xs">
  <p>И уносят тебя далеко в… горизонт,</p>
  <p>В две тысячи двадцать шесто-ой</p>
  <p>Три классных коня, перспективой дразня —</p>
  <p>Скорей предсказанье открой!</p>
</div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  ease: "easeOut" 
                }}
              >
                <Link href={`/${card.slug}`} className="block group cursor-pointer h-full">
                  <div className="relative aspect-[2/3] overflow-hidden rounded-sm bg-muted transition-transform duration-500 ease-out group-hover:-translate-y-2 shadow-sm group-hover:shadow-md">
                    {/* Placeholder for card back or thumbnail */}
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                    
                    {/* Image */}
                    <img 
                      src={card.thumbnail} 
                      alt=""
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                    />


                    {/* Subtle border */}
                    <div className="absolute inset-0 border border-primary/10 rounded-sm pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      
      <footer className="w-full text-center py-8 text-muted-foreground font-sans text-[10px] tracking-widest uppercase">
        © {new Date().getFullYear()} • The Silent Oracle
      </footer>
    </div>
  );
}
