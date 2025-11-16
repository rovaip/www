const iconMap = {
  gallery: {
    src: '/icons/service-gallery.png',
    alt: 'Gallery service',
  },
  plan: {
    src: '/icons/service-plan.png',
    alt: 'Plan service',
  },
  cube: {
    src: '/icons/service-cube.png',
    alt: '3D visualization service',
  },
  home: {
    src: '/icons/service-home.png',
    alt: 'Interior and exterior design service',
  },
}

function ServiceIcon({ name }) {
  const icon = iconMap[name] ?? iconMap.gallery

  return (
    <img
      src={icon.src}
      alt={icon.alt}
      width={50}
      height={50}
      style={{ display: 'block' }}
    />
  )
}

export default ServiceIcon
