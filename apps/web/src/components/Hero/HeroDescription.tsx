interface HeroDescriptionProps {
     description :string;
     className?: string;
}

export default function HeroDescription ({description, className}:HeroDescriptionProps){
    return(
        <p
          className={`mt-6 text-sm sm:text-base text-white/60 leading-relaxed max-w-3xl mx-auto ${className}`}
        >
          {description}
        </p>
    )
}