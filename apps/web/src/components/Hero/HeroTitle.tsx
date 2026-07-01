interface  HeroTitleProps {
    title: string;
    highlight: string;
    className?: string;
}

export default function HeroTitle({title ,highlight,className,}: HeroTitleProps){
    return(
        <h1
          className={`"mt-8 text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[1.05]"  ${className}`}    
          >
          {title}
          <span className="bg-linear-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        </h1>
    )
}