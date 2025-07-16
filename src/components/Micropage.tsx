import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Instagram, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { trackLinkClick, trackSocialClick, trackThemeToggle } from '@/lib/analytics'

interface SocialLink {
  platform: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  visible: boolean
}

interface MicropageLink {
  id: string
  title: string
  url: string
  description?: string
  visible: boolean
}

const Micropage = () => {

  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const [data] = useState({
    name: 'George Harrison V',
    title: 'Aerospace & Software Engineer',
    current_role: '',
    bio:
      'Adaptable and driven engineer with an entrepreneurial mindset, relentless curiosity (hence the name, Curious George), and a passion for turning bold ideas into working technology. I thrive in rapid learning and hands-on building environments.',
    email: 'gcharrisv@gmail.com',
    profileImage: 'profile-hero.jpg',
    socialLinks: [
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/george_harrisonv/',
        icon: Instagram,
        visible: true,
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/georgeharrison/',
        icon: Linkedin,
        visible: true,
      },
      {
        platform: 'Email',
        url: `mailto:${'gcharrisv@gmail.com'}`,
        icon: Mail,
        visible: true,
      },
    ] as SocialLink[],
    links: [
      {
        id: '1',
        title: 'Capstone Aerospace',
        url: 'https://capstoneaerospace.net/',
        description: 'Aircraft Senior Design Project',
        visible: true,
      },
      {
        id: '2',
        title: 'Coming Soon',
        url: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
        description: 'Under Construction',
        visible: true,
      },
      {
        id: '3',
        title: 'Coming Soon',
        url: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
        description: 'Under Construction',
        visible: true,
      },
    ] as MicropageLink[],
  })

  const visibleSocial = data.socialLinks.filter((s) => s.visible)
  const visibleLinks = data.links.filter((l) => l.visible)

  const bgImage = theme === 'light' ? 'url(fighter-jets.jpeg)' : 'url(code-background.jpg)'

  return (
    <div
      className={cn(
        'min-h-screen bg-cover bg-center transition-colors duration-500',
        'before:content-[""] before:absolute before:inset-0 before:bg-black/20 before:pointer-events-none'
      )}
      style={{ backgroundImage: bgImage }}
    >
      {/* ---- Toggle Button ---- */}
      <button
        onClick={() => {
          const newTheme = theme === 'light' ? 'dark' : 'light';
          setTheme(newTheme);
          trackThemeToggle(newTheme);
        }}
        className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-white/30 backdrop-blur-md text-sm font-medium text-white hover:bg-white/50 transition"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>

      <div className="relative z-10 max-w-md mx-auto px-6 py-12">
        {/* Avatar & Intro */}
        <div className="text-center mb-8">
          <div className="w-64 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
            <img
              src={data.profileImage}
              alt={data.name}
              className="scale-[2] w-full h-full object-cover object-center translate-y-[25%]"
            />
          </div>
          <h1 className="mt-4 text-3xl font-bold drop-shadow-lg text-white">{data.name}</h1>
          <p className="mt-1 text-lg drop-shadow-md text-white">{data.title}</p>
          <p className="mt-1 text-lg drop-shadow-md text-white">{data.current_role}</p>
          <p className="mt-2 text-base leading-relaxed drop-shadow-md text-white">{data.bio}</p>
        </div>

        {/* Social Icons */}

        <h2 className="text-2xl font-semibold mb-4 text-center drop-shadow-lg text-white">Connect With Me</h2>

        <div className="flex justify-center gap-4 mb-8">
          {visibleSocial.map((s, i) => {
            const Icon = s.icon
            return (
              <a
                key={s.platform}
                href={s.url}
                onClick={() => trackSocialClick(s.platform, s.url)}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition shadow-lg",
                  theme === 'light'
                    ? 'bg-white/90 hover:bg-white border border-gray-200'
                    : 'bg-white/20 hover:bg-white/40'
                )}
              >
                <Icon className={cn(
                  "w-5 h-5",
                  theme === 'light' ? 'text-gray-700' : 'text-white'
                )} />
              </a>
            )
          })}
        </div>

        {/* Links */}

        <h2 className="text-2xl font-semibold mb-4 text-center drop-shadow-lg text-white">My Links</h2>

        <div className="space-y-4 mb-8">
          {visibleLinks.map((link, i) => (
            <Card
              key={link.id}
              className={cn(
                "backdrop-blur-sm p-4 transition",
                theme === 'light'
                  ? 'bg-white/90 border border-gray-200 hover:bg-white shadow-micropage-light hover:shadow-micropage-light-hover'
                  : 'bg-white/20 border border-white/30 hover:bg-white/30 shadow-micropage-dark hover:shadow-micropage-dark-hover'
              )}
            >
              <a 
                href={link.url} 
                onClick={() => trackLinkClick(link.title, link.url)}
                className={cn(
                  "block",
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                )}
              >
                <h3 className="font-semibold text-lg">{link.title}</h3>
                {link.description && (
                  <p className={cn(
                    "text-sm",
                    theme === 'light' ? 'text-gray-600' : 'text-white/80'
                  )}>{link.description}</p>
                )}
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-white">TO BEING BOLD</h2>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} George Harrison V</p>
          <p></p>
        </div>

      </div>
    </div>
  )
}

export default Micropage
