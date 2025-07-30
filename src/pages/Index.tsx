import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const skills = [
    { name: 'PHP', level: 95, icon: 'Code' },
    { name: '1С Битрикс', level: 90, icon: 'ShoppingCart' },
    { name: 'JavaScript', level: 85, icon: 'Zap' },
    { name: 'MySQL', level: 88, icon: 'Database' },
    { name: 'React', level: 80, icon: 'Atom' },
    { name: 'Docker', level: 75, icon: 'Container' }
  ];

  const projects = [
    {
      title: 'Интернет-магазин электроники',
      description: 'Полнофункциональный e-commerce на 1С Битрикс с интеграцией платежных систем',
      image: '/img/2496376e-7bb7-4fca-8a4a-de3c7b033881.jpg',
      tech: ['PHP', 'Битрикс', 'MySQL', 'JavaScript'],
      status: 'Завершен'
    },
    {
      title: 'CRM для IT-компании',
      description: 'Корпоративная система управления проектами с аналитикой и отчетностью',
      image: '/img/0c566b97-ec8c-4e27-a10b-6c7b309fb91d.jpg',
      tech: ['PHP', 'Laravel', 'Vue.js', 'PostgreSQL'],
      status: 'В разработке'
    },
    {
      title: 'Портал недвижимости',
      description: 'Современная платформа для поиска и аренды недвижимости с геолокацией',
      image: '/img/61eaa4d1-b671-446c-b69f-c1aea9d6a707.jpg',
      tech: ['PHP', 'Битрикс', 'Maps API', 'Redis'],
      status: 'Поддержка'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-dark via-deep-blue to-cyber-blue text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cyber-dark/80 backdrop-blur-sm border-b border-electric/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-display font-bold text-electric cyber-text-shadow flex items-center">
              <Icon name="TreePine" size={28} className="mr-2 text-neon-green" />
              &lt;DevGarden/&gt;
              <Icon name="Leaf" size={24} className="ml-2 text-electric" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-electric transition-colors">О себе</a>
              <a href="#skills" className="hover:text-electric transition-colors">Навыки</a>
              <a href="#projects" className="hover:text-electric transition-colors">Проекты</a>
              <a href="#contact" className="hover:text-electric transition-colors">Контакты</a>
            </div>
            <Button className="bg-electric/20 border border-electric text-electric hover:bg-electric hover:text-black animate-cyber-glow">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        {/* Decorative Plants */}
        <div className="absolute top-0 left-0 w-32 h-64 opacity-20 animate-float">
          <Icon name="TreePine" size={120} className="text-neon-green" />
        </div>
        <div className="absolute top-20 right-10 w-24 h-48 opacity-15 animate-float" style={{ animationDelay: '1s' }}>
          <Icon name="Leaf" size={80} className="text-electric" />
        </div>
        <div className="absolute bottom-10 left-20 text-6xl opacity-25 animate-float" style={{ animationDelay: '2s' }}>
          🌿
        </div>
        <div className="absolute bottom-20 right-20 text-5xl opacity-30 animate-float" style={{ animationDelay: '0.5s' }}>
          🌳
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Icon name="TreePine" size={60} className="text-neon-green mr-4 animate-cyber-glow" />
              <h1 className="text-6xl md:text-8xl font-display font-black bg-gradient-to-r from-electric via-neon-green to-electric bg-clip-text text-transparent animate-float">
                Full Stack
              </h1>
              <Icon name="Leaf" size={50} className="text-electric ml-4 animate-cyber-glow" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-tech-gray">
              Developer 🌱
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-tech-gray/80 max-w-3xl mx-auto leading-relaxed">
              Создаю современные интернет-магазины на 1С Битрикс и веб-приложения с нуля. 
              Как дерево растет от корней к вершине - так и я выращиваю проекты от идеи до запуска 🌳
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-electric text-black hover:bg-neon-green font-semibold px-8 py-4 text-lg animate-cyber-glow">
                <Icon name="Sprout" size={20} className="mr-2" />
                Прорастить проект
              </Button>
              <Button variant="outline" size="lg" className="border-electric text-electric hover:bg-electric/10 px-8 py-4 text-lg">
                <Icon name="Trees" size={20} className="mr-2" />
                Посмотреть сад работ
              </Button>
            </div>
          </div>
        </div>

        {/* Background Nature Elements */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/img/daba464c-8edb-479e-8098-ded252b75423.jpg" 
            alt="Green loft background" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gradient-to-r from-cyber-blue/20 to-deep-blue/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-display font-bold text-electric mb-6">
                О разработчике
              </h3>
              <p className="text-lg text-tech-gray/90 leading-relaxed">
                Более 5 лет разрабатываю интернет-магазины и веб-приложения. Специализируюсь на 
                1С Битрикс и современных технологиях. Создаю решения, которые работают стабильно 
                и масштабируются вместе с бизнесом.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-electric/20 text-electric border border-electric">5+ лет опыта</Badge>
                <Badge className="bg-cyber-blue/30 text-neon-green border border-neon-green">50+ проектов</Badge>
                <Badge className="bg-deep-blue/40 text-tech-gray border border-tech-gray">Full Stack</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-electric/10 to-cyber-blue/20 p-8 rounded-2xl border border-electric/30 animate-float">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-display font-bold text-electric">50+</div>
                    <div className="text-tech-gray">Проектов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-neon-green">5+</div>
                    <div className="text-tech-gray">Лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-electric">24/7</div>
                    <div className="text-tech-gray">Поддержка</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-neon-green">100%</div>
                    <div className="text-tech-gray">Качество</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-display font-bold text-center text-electric mb-12">
            Технологии и навыки
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-cyber-dark/60 border-electric/30 hover:border-electric/60 transition-all duration-300 group hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Icon name={skill.icon as any} size={24} className="text-electric" />
                      <span className="text-lg font-semibold text-white">{skill.name}</span>
                    </div>
                    <span className="text-neon-green font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-cyber-blue/30 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-electric to-neon-green h-2 rounded-full transition-all duration-1000 group-hover:animate-cyber-glow"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gradient-to-r from-deep-blue/20 to-cyber-dark/40">
        <div className="container mx-auto">
          <h3 className="text-4xl font-display font-bold text-center text-electric mb-12">
            Последние проекты
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-cyber-dark/80 border-electric/20 hover:border-electric/60 transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={
                      project.status === 'Завершен' ? 'bg-electric/20 text-electric border-electric' :
                      project.status === 'В разработке' ? 'bg-neon-green/20 text-neon-green border-neon-green' :
                      'bg-tech-gray/20 text-tech-gray border-tech-gray'
                    }>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-electric transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-tech-gray/80">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-cyber-blue text-cyber-blue">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-electric/10 border border-electric text-electric hover:bg-electric hover:text-black">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-display font-bold text-center text-electric mb-12">
            Готов к сотрудничеству
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-white mb-6">Обсудим ваш проект</h4>
              <p className="text-tech-gray/90 leading-relaxed">
                Создам современный интернет-магазин на 1С Битрикс или разработаю веб-приложение с нуля. 
                Полный цикл разработки от идеи до запуска.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={20} className="text-electric" />
                  <span className="text-white">dev@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={20} className="text-electric" />
                  <span className="text-white">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={20} className="text-electric" />
                  <span className="text-white">Москва, Россия</span>
                </div>
              </div>
            </div>
            <Card className="bg-cyber-dark/60 border-electric/30">
              <CardHeader>
                <CardTitle className="text-white">Начать проект</CardTitle>
                <CardDescription className="text-tech-gray">
                  Оставьте заявку и я свяжусь с вами в течение 24 часов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input 
                      placeholder="Имя" 
                      className="w-full p-3 bg-deep-blue/30 border border-electric/30 rounded-lg text-white placeholder-tech-gray/60 focus:border-electric focus:outline-none"
                    />
                  </div>
                  <div>
                    <input 
                      placeholder="Email" 
                      className="w-full p-3 bg-deep-blue/30 border border-electric/30 rounded-lg text-white placeholder-tech-gray/60 focus:border-electric focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <input 
                    placeholder="Тема проекта" 
                    className="w-full p-3 bg-deep-blue/30 border border-electric/30 rounded-lg text-white placeholder-tech-gray/60 focus:border-electric focus:outline-none"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Описание проекта" 
                    rows={4}
                    className="w-full p-3 bg-deep-blue/30 border border-electric/30 rounded-lg text-white placeholder-tech-gray/60 focus:border-electric focus:outline-none resize-none"
                  />
                </div>
                <Button className="w-full bg-electric text-black hover:bg-neon-green font-semibold animate-cyber-glow">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-electric/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-electric font-display font-bold text-xl mb-4 md:mb-0">
              &lt;DevPortfolio/&gt;
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-tech-gray hover:text-electric transition-colors">
                <Icon name="Github" size={24} />
              </a>
              <a href="#" className="text-tech-gray hover:text-electric transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
              <a href="#" className="text-tech-gray hover:text-electric transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
            <div className="text-tech-gray/60 text-sm mt-4 md:mt-0">
              © 2024 Full Stack Developer. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}