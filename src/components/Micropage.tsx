import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Instagram, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import profileImage from '@/assets/profile-hero.jpg'
import fighterJets from '@/assets/fighter-jets.jpeg'
import codeBg from '@/assets/code-background.jpg'

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
    title: 'Aerospace Engineer | Software Developer Incoming F-22 Flight Test Engineer',
    bio:
      'Driven Engineer with a passion for aerospace engineering and software development. Currently exploring Creative Content Creation and AI.',
    email: 'gcharrisv@gmail.com',
    profileImage,
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
    ] as SocialLink[],
    links: [
      {
        id: '1',
        title: 'Capstone Aerospace',
        url: 'https://capstoneaerospace.net/',
        description: 'My Aircraft Senior Design Project',
        visible: true,
      },
      {
        id: '2',
        title: 'Under Construction',
        url: '#',
        description: 'Super Duper Cool Project Coming',
        visible: true,
      },
      {
        id: '3',
        title: 'Another Epic Project',
        url: '#',
        description: 'Under Construction',
        visible: true,
      },
    ] as MicropageLink[],
  })

  const visibleSocial = data.socialLinks.filter((s) => s.visible)
  const visibleLinks = data.links.filter((l) => l.visible)

  const bgImage = theme === 'light' ? `url(${fighterJets})` : `url(${codeBg})`

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
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-white/30 backdrop-blur-md text-sm font-medium text-white hover:bg-white/50 transition"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>

      <div className="relative z-10 max-w-md mx-auto px-6 py-12 text-white">
        {/* Avatar & Intro */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
            <img
              src={data.profileImage}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="mt-4 text-3xl font-bold">{data.name}</h1>
          <p className="mt-1 text-lg">{data.title}</p>
          <p className="mt-2 text-base leading-relaxed">{data.bio}</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {visibleSocial.map((s, i) => {
            const Icon = s.icon
            return (
              <a
                key={s.platform}
                href={s.url}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition hover:bg-white/40"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            )
          })}
        </div>

        {/* Links */}
        <div className="space-y-4 mb-8">
          {visibleLinks.map((link, i) => (
            <Card
              key={link.id}
              className="bg-white/20 backdrop-blur-sm border border-white/30 p-4 transition hover:bg-white/30"
            >
              <a href={link.url} className="block text-white">
                <h3 className="font-semibold text-lg">{link.title}</h3>
                {link.description && (
                  <p className="text-sm text-white/80">{link.description}</p>
                )}
              </a>
            </Card>
          ))}
        </div>

        {/* Let's Connect */}
        <div className="text-center mt-12">
          <h2 className="text-xl font-semibold mb-4 text-white">Let’s Connect</h2>

          <div className="flex justify-center gap-4">
            {/* Gmail */}
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${data.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition hover:bg-white/40"
              title="Gmail"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.02l10.344 7.758 10.344-7.758h.02c.904 0 1.636.732 1.636 1.636z" fill="#EA4335"/>
              </svg>
            </a>

            {/* Outlook */}
            <a
              href={`https://outlook.office.com/mail/deeplink/compose?to=${data.email}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition hover:bg-white/40"
              title="Outlook"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.83 0-.87.33-1.44.34-.58.95-.58.3 0 .56.14.26.13.45.37.2.25.3.56.1.32.1.7zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5q2.28 0 3.9 1.62Q13 9.24 13 11.5q0 1.18-.44 2.23-.43 1.05-1.18 1.87-.75.82-1.76 1.3-1.01.48-2.12.48h-1V18h16.25q.25 0 .25-.25V12zM0 12.5v-.5q0-.41.3-.7.29-.3.7-.3h1q.41 0 .7.3.3.29.3.7v.5z" fill="#0078D4"/>
              </svg>
            </a>

            {/* Default Mail */}
            <a
              href={`mailto:${data.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition hover:bg-white/40"
              title="Default Mail App"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Micropage
