const Card = ({ 
  children, 
  padding = true,
  hover = true,
  className = '' 
}) => {
  return (
    <div 
      className={`
        bg-black border border-[#a0ff00]/10 rounded-xl overflow-hidden
        ${hover ? 'transition-all duration-300 hover:border-[#a0ff00]/30 hover:shadow-lg hover:shadow-[#a0ff00]/5 hover:-translate-y-1' : ''}
        ${padding ? 'p-6' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Card