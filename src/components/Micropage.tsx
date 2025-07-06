import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Instagram, Linkedin, Youtube, Facebook, Mail, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import profileImage from '@/assets/profile-hero.jpg';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  visible: boolean;
}

interface MicropageLink {
  id: string;
  title: string;
  url: string;
  description?: string;
  visible: boolean;
}

interface MicropageData {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  theme: 'gradient' | 'minimal' | 'dark' | 'neon';
  socialLinks: SocialLink[];
  links: MicropageLink[];
}

const Micropage = () => {
  const [data] = useState<MicropageData>({
    name: "Your Name",
    title: "Creative Professional",
    bio: "Sharing my work and passion with the world ✨",
    profileImage: profileImage,
    theme: 'gradient',
    socialLinks: [
      { platform: 'Instagram', url: '#', icon: Instagram, visible: true },
      { platform: 'LinkedIn', url: '#', icon: Linkedin, visible: true },
      { platform: 'YouTube', url: '#', icon: Youtube, visible: false },
      { platform: 'Facebook', url: '#', icon: Facebook, visible: false },
    ],
    links: [
      { id: '1', title: 'My Portfolio', url: '#', description: 'Check out my latest work', visible: true },
      { id: '2', title: 'Book a Call', url: '#', description: 'Let\'s work together', visible: true },
      { id: '3', title: 'My Blog', url: '#', description: 'Thoughts and insights', visible: true },
      { id: '4', title: 'Contact Me', url: '#', description: 'Get in touch', visible: true },
    ]
  });

  const themeClasses = {
    gradient: 'bg-gradient-primary',
    minimal: 'bg-background',
    dark: 'bg-secondary',
    neon: 'bg-gradient-secondary'
  };

  const visibleSocialLinks = data.socialLinks.filter(link => link.visible);
  const visibleLinks = data.links.filter(link => link.visible);

  return (
    <div className={cn(
      "min-h-screen relative overflow-hidden",
      themeClasses[data.theme]
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 animate-float" />
        <div className="absolute top-1/3 right-16 w-24 h-24 rounded-full bg-white/15 animate-float delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-white/25 animate-float delay-2000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-md mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="relative mb-6">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-glow animate-glow">
              <img 
                src={data.profileImage} 
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-scale-in">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2 font-display animate-delay-100">
            {data.name}
          </h1>
          <p className="text-xl text-white/90 mb-3 animate-delay-200">
            {data.title}
          </p>
          <p className="text-white/80 text-base leading-relaxed animate-delay-300">
            {data.bio}
          </p>
        </div>

        {/* Social Links */}
        {visibleSocialLinks.length > 0 && (
          <div className="flex justify-center gap-4 mb-8 animate-slide-up">
            {visibleSocialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  className="w-12 h-12 rounded-full glass backdrop-blur-md flex items-center justify-center text-white hover-lift hover-glow transition-smooth"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        )}

        {/* Links */}
        <div className="space-y-4">
          {visibleLinks.map((link, index) => (
            <Card 
              key={link.id}
              className="glass backdrop-blur-md border-white/20 hover-lift transition-smooth p-6 animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <a href={link.url} className="block group">
                <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-primary-foreground transition-smooth">
                  {link.title}
                </h3>
                {link.description && (
                  <p className="text-white/70 text-sm">
                    {link.description}
                  </p>
                )}
              </a>
            </Card>
          ))}
        </div>

      </div>

    </div>
  );
};

export default Micropage;