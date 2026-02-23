import { motion } from 'framer-motion'

const SectionTitle = ({ 
  title, 
  subtitle, 
  highlight = false,
  align = 'center',
  textWhite = false,
  className = '' 
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <motion.div 
      className={`mb-12 ${alignments[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {subtitle && (
        <span className="inline-block text-[#a0ff00] font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-black ${textWhite ? 'text-white' : 'text-black'}`}>
        {title}
        {highlight && (
          <span className="text-[#a0ff00] ml-2">
            {highlight}
          </span>
        )}
      </h2>
    </motion.div>
  )
}

export default SectionTitle