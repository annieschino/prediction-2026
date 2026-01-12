import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { cards } from "@/lib/cards";
import NotFound from "@/pages/not-found";
import remarkBreaks from "remark-breaks";

export default function CardDetail() {
  const [match, params] = useRoute("/:slug");
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.slug]);

  if (!match || !params) return <NotFound />;

  const card = cards.find(c => c.slug === params.slug);
  if (!card) return <NotFound />;

  return (
    <div className="min-h-screen bg-background relative pb-20">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 py-12 md:py-20"
      >
        {/* Navigation */}
        <nav className="mb-12 md:mb-20">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors font-sans text-xs tracking-widest uppercase group">
            <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Вернуться к выбору карт
          </Link>
        </nav>

        {/* Title */}
       

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24">
          {card.images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.15), duration: 0.8 }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-sm"
            >
              <img 
                src={img} 
                alt={`${card.title} detail ${i + 1}`}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 border border-primary/5 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Prediction Text */}
        <motion.article 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-2xl mx-auto prose prose-neutral prose-lg md:prose-xl prose-p:font-serif prose-p:text-foreground/80 prose-strong:font-bold prose-strong:text-primary text-left leading-relaxed"
        >
          <ReactMarkdown
            remarkPlugins={[remarkBreaks]}
            components={{
              p: ({ children }) => (
                <p className="mb-4 leading-relaxed">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="mb-4 ml-4 list-disc space-y-1">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed">
                  {children}
                </li>
              ),
            }}
          >
            {card.prediction}
          </ReactMarkdown>

        </motion.article>

        {/* Footer Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 text-left"
        >
          <Link href="/" className="inline-block border-b border-transparent hover:border-primary/30 text-muted-foreground hover:text-primary transition-all pb-1 font-sans text-xs tracking-widest uppercase">
            Вернуться к выбору карт
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
