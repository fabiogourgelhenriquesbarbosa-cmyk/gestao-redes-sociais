"use client"

import { useState, useEffect } from 'react'
import { 
  Calendar, 
  BarChart3, 
  Zap, 
  Target, 
  TrendingUp, 
  FileText, 
  MessageSquare, 
  Settings,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Check,
  Star,
  Users,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  Play,
  ChevronRight,
  CreditCard,
  Building2,
  Coins,
  Upload,
  X,
  Copy,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Phone,
  LogOut,
  Menu,
  Bell,
  Search,
  Plus,
  Download,
  Share2,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Edit3,
  Trash2,
  Send,
  Image as ImageIcon,
  Video,
  Calendar as CalendarIcon,
  BarChart,
  Globe,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react'

export default function SocialMasterPro() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [loginType, setLoginType] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [paymentStep, setPaymentStep] = useState('method') // method, details, validation, success
  const [uploadedFile, setUploadedFile] = useState(null)
  const [referenceCode, setReferenceCode] = useState('')
  const [copied, setCopied] = useState('')
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  
  // Estados para o sistema de login e acesso
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [hasAccess, setHasAccess] = useState(false)
  const [userPlan, setUserPlan] = useState(null)
  const [loginForm, setLoginForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  })
  const [loginError, setLoginError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [paymentProcessing, setPaymentProcessing] = useState(false)

  // Estados para funcionalidades do dashboard
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({ content: '', platform: 'instagram', scheduledDate: '' })
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [showNotifications, setShowNotifications] = useState(false)

  // Usuários simulados com planos
  const mockUsers = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@email.com',
      phone: '+244 900 123 456',
      password: '123456',
      plan: 'Profissional',
      hasAccess: true,
      accessGrantedAt: new Date('2024-01-15')
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@email.com',
      phone: '+244 900 654 321',
      password: 'senha123',
      plan: 'Iniciante',
      hasAccess: true,
      accessGrantedAt: new Date('2024-02-01')
    }
  ]

  // Posts simulados
  const mockPosts = [
    {
      id: 1,
      content: 'Novo produto lançado! 🚀 Confira as novidades em nosso site.',
      platform: 'instagram',
      status: 'published',
      scheduledDate: '2024-01-20T10:00:00',
      engagement: { likes: 245, comments: 18, shares: 12 }
    },
    {
      id: 2,
      content: 'Dicas importantes para o seu negócio crescer nas redes sociais.',
      platform: 'facebook',
      status: 'scheduled',
      scheduledDate: '2024-01-22T14:30:00',
      engagement: { likes: 0, comments: 0, shares: 0 }
    },
    {
      id: 3,
      content: 'Estratégias de marketing digital que realmente funcionam.',
      platform: 'linkedin',
      status: 'draft',
      scheduledDate: '',
      engagement: { likes: 0, comments: 0, shares: 0 }
    }
  ]

  // Notificações simuladas
  const mockNotifications = [
    {
      id: 1,
      type: 'payment_confirmed',
      title: 'Pagamento Confirmado',
      message: 'Seu pagamento foi processado com sucesso. Acesso liberado!',
      time: '2 min atrás',
      read: false
    },
    {
      id: 2,
      type: 'post_published',
      title: 'Post Publicado',
      message: 'Seu post no Instagram foi publicado com sucesso.',
      time: '1 hora atrás',
      read: false
    },
    {
      id: 3,
      type: 'engagement_alert',
      title: 'Alto Engajamento',
      message: 'Seu post no Facebook está com 200% mais engajamento que a média.',
      time: '3 horas atrás',
      read: true
    }
  ]

  // Inicializar dados quando usuário faz login
  useEffect(() => {
    if (isLoggedIn && currentUser) {
      setHasAccess(currentUser.hasAccess)
      setUserPlan(currentUser.plan)
      setPosts(mockPosts)
      setNotifications(mockNotifications)
    }
  }, [isLoggedIn, currentUser])

  const features = [
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Agende publicações para Instagram, Facebook, TikTok, LinkedIn e X com horários otimizados por IA",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Análise Avançada",
      description: "Monitore alcance, engajamento, curtidas e métricas detalhadas em tempo real",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "IA para Legendas",
      description: "Gere legendas envolventes e hashtags virais automaticamente com nossa IA avançada",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Conteúdo Viral",
      description: "Receba sugestões personalizadas de conteúdo baseadas no seu nicho e tendências",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Automatizado",
      description: "Estratégias inteligentes de crescimento específicas para cada rede social",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: FileText,
      title: "Relatórios em PDF",
      description: "Relatórios mensais profissionais com insights e recomendações estratégicas",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "Respostas Automáticas",
      description: "IA responde comentários e mensagens automaticamente mantendo seu tom de voz",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Painel Personalizado",
      description: "Dashboard completo com controle total das suas estratégias de redes sociais",
      color: "from-amber-500 to-orange-500"
    }
  ]

  const plans = [
    {
      name: "Iniciante",
      price: "2.500",
      period: "mês",
      description: "Perfeito para começar sua jornada nas redes sociais",
      features: [
        "3 contas conectadas",
        "Agendamentos ilimitados",
        "Análises básicas",
        "Suporte por email",
        "Relatórios mensais"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Profissional",
      price: "5.000",
      period: "mês",
      description: "Para profissionais que querem resultados sérios",
      features: [
        "10 contas conectadas",
        "Acesso completo às ferramentas de IA",
        "Estratégias de crescimento incluídas",
        "Suporte prioritário",
        "Análises avançadas",
        "Respostas automáticas",
        "Relatórios detalhados"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Empresarial",
      price: "50.000",
      period: "mês",
      description: "Solução completa para empresas e agências",
      features: [
        "Contas ilimitadas",
        "Suporte 24h dedicado",
        "IA personalizada",
        "Integração API completa",
        "Relatórios personalizados",
        "Gerente de conta dedicado",
        "Treinamento da equipe"
      ],
      color: "from-gradient-to-r from-amber-500 to-orange-500",
      popular: false
    }
  ]

  const socialNetworks = [
    { icon: Instagram, name: "Instagram", color: "text-pink-500" },
    { icon: Facebook, name: "Facebook", color: "text-blue-600" },
    { icon: Linkedin, name: "LinkedIn", color: "text-blue-700" },
    { icon: Twitter, name: "X (Twitter)", color: "text-gray-900" }
  ]

  const stats = [
    { number: "50K+", label: "Usuários Ativos", icon: Users },
    { number: "2M+", label: "Posts Agendados", icon: Calendar },
    { number: "98%", label: "Satisfação", icon: Star },
    { number: "24/7", label: "Suporte", icon: Clock }
  ]

  const paymentMethods = [
    {
      id: 'multicaixa',
      name: 'Multicaixa Express',
      description: 'Pagamento via Multicaixa Express (Angola)',
      icon: CreditCard,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'bank',
      name: 'Transferência Bancária',
      description: 'Transferência via IBAN',
      icon: Building2,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'binance',
      name: 'Binance (USDT)',
      description: 'Pagamento em criptomoedas',
      icon: Coins,
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  const handlePlanSelect = (plan) => {
    if (!isLoggedIn) {
      setShowLogin(true)
      setLoginType('login')
      setLoginError('Você precisa fazer login para escolher um plano.')
      return
    }
    setSelectedPlan(plan)
    setShowPaymentModal(true)
    setPaymentStep('method')
    setPaymentMethod('')
  }

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method)
    setPaymentStep('details')
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const handlePaymentValidation = async () => {
    if (uploadedFile || referenceCode) {
      setPaymentProcessing(true)
      setPaymentStep('validation')
      
      // Simular processamento de pagamento
      setTimeout(() => {
        // Liberar acesso automaticamente
        setHasAccess(true)
        setUserPlan(selectedPlan.name)
        
        // Atualizar usuário atual
        const updatedUser = {
          ...currentUser,
          hasAccess: true,
          plan: selectedPlan.name,
          accessGrantedAt: new Date()
        }
        setCurrentUser(updatedUser)
        
        // Adicionar notificação de sucesso
        const successNotification = {
          id: Date.now(),
          type: 'payment_confirmed',
          title: 'Pagamento Confirmado!',
          message: `Seu plano ${selectedPlan.name} foi ativado com sucesso. Bem-vindo!`,
          time: 'Agora',
          read: false
        }
        setNotifications(prev => [successNotification, ...prev])
        
        setPaymentStep('success')
        setPaymentProcessing(false)
        
        // Fechar modal após 3 segundos
        setTimeout(() => {
          setShowPaymentModal(false)
          setPaymentStep('method')
          setUploadedFile(null)
          setReferenceCode('')
          setActiveTab('dashboard') // Redirecionar para dashboard
        }, 3000)
      }, 2000)
    }
  }

  // Funções do sistema de login
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }))
    setLoginError('')
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setLoginError('')

    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (loginType === 'login') {
      // Validar login
      const user = mockUsers.find(u => 
        (u.email === loginForm.email || u.phone === loginForm.email) && 
        u.password === loginForm.password
      )

      if (user) {
        setCurrentUser(user)
        setIsLoggedIn(true)
        setHasAccess(user.hasAccess)
        setUserPlan(user.plan)
        setShowLogin(false)
        setLoginForm({ name: '', email: '', phone: '', password: '' })
        
        // Adicionar notificação de boas-vindas
        const welcomeNotification = {
          id: Date.now(),
          type: 'login_success',
          title: 'Bem-vindo de volta!',
          message: `Olá ${user.name}, você está conectado ao plano ${user.plan}.`,
          time: 'Agora',
          read: false
        }
        setNotifications(prev => [welcomeNotification, ...prev])
      } else {
        setLoginError('Email/telefone ou senha incorretos. Tente: joao@email.com / senha: 123456')
      }
    } else {
      // Registrar novo usuário
      if (!loginForm.name || !loginForm.email || !loginForm.phone || !loginForm.password) {
        setLoginError('Por favor, preencha todos os campos.')
        setIsLoading(false)
        return
      }

      if (loginForm.password.length < 6) {
        setLoginError('A senha deve ter pelo menos 6 caracteres.')
        setIsLoading(false)
        return
      }

      // Verificar se email já existe
      const existingUser = mockUsers.find(u => u.email === loginForm.email)
      if (existingUser) {
        setLoginError('Este email já está cadastrado. Tente fazer login.')
        setIsLoading(false)
        return
      }

      // Criar novo usuário
      const newUser = {
        id: mockUsers.length + 1,
        name: loginForm.name,
        email: loginForm.email,
        phone: loginForm.phone,
        password: loginForm.password,
        plan: null,
        hasAccess: false,
        accessGrantedAt: null
      }

      mockUsers.push(newUser)
      setCurrentUser(newUser)
      setIsLoggedIn(true)
      setHasAccess(false)
      setShowLogin(false)
      setLoginForm({ name: '', email: '', phone: '', password: '' })
      
      // Adicionar notificação de conta criada
      const welcomeNotification = {
        id: Date.now(),
        type: 'account_created',
        title: 'Conta criada com sucesso!',
        message: `Bem-vindo ${newUser.name}! Escolha um plano para começar.`,
        time: 'Agora',
        read: false
      }
      setNotifications(prev => [welcomeNotification, ...prev])
    }

    setIsLoading(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    setHasAccess(false)
    setUserPlan(null)
    setPosts([])
    setNotifications([])
    setActiveTab('dashboard')
  }

  const openLoginModal = (type = 'login') => {
    setLoginType(type)
    setShowLogin(true)
    setLoginError('')
    setLoginForm({ name: '', email: '', phone: '', password: '' })
  }

  // Funções do dashboard
  const handleCreatePost = () => {
    if (!newPost.content.trim()) return

    const post = {
      id: Date.now(),
      content: newPost.content,
      platform: newPost.platform,
      status: newPost.scheduledDate ? 'scheduled' : 'draft',
      scheduledDate: newPost.scheduledDate,
      engagement: { likes: 0, comments: 0, shares: 0 }
    }

    setPosts(prev => [post, ...prev])
    setNewPost({ content: '', platform: 'instagram', scheduledDate: '' })
    setShowCreatePost(false)

    // Adicionar notificação
    const notification = {
      id: Date.now(),
      type: 'post_created',
      title: 'Post Criado',
      message: `Novo post ${post.status === 'scheduled' ? 'agendado' : 'salvo como rascunho'} para ${post.platform}.`,
      time: 'Agora',
      read: false
    }
    setNotifications(prev => [notification, ...prev])
  }

  const handleDeletePost = (postId) => {
    setPosts(prev => prev.filter(post => post.id !== postId))
  }

  const markNotificationAsRead = (notificationId) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    )
  }

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'instagram': return Instagram
      case 'facebook': return Facebook
      case 'linkedin': return Linkedin
      case 'twitter': return Twitter
      default: return Globe
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'text-green-600 bg-green-100'
      case 'scheduled': return 'text-blue-600 bg-blue-100'
      case 'draft': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'published': return 'Publicado'
      case 'scheduled': return 'Agendado'
      case 'draft': return 'Rascunho'
      default: return 'Desconhecido'
    }
  }

  // Renderizar conteúdo baseado no acesso
  const renderDashboardContent = () => {
    if (!isLoggedIn) {
      return (
        <div className="text-center py-20">
          <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Acesso Restrito</h3>
          <p className="text-gray-600 mb-6">Faça login para acessar o dashboard</p>
          <button 
            onClick={() => openLoginModal('login')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Fazer Login
          </button>
        </div>
      )
    }

    if (!hasAccess) {
      return (
        <div className="text-center py-20">
          <Shield className="w-16 h-16 text-orange-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Escolha um Plano</h3>
          <p className="text-gray-600 mb-6">Selecione um plano para acessar todas as funcionalidades</p>
          <button 
            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Ver Planos
          </button>
        </div>
      )
    }

    // Dashboard completo para usuários com acesso
    return (
      <div className="space-y-6">
        {/* Header do Dashboard */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <p className="text-gray-600">Bem-vindo de volta, {currentUser?.name}!</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Plano {userPlan}
            </div>
            <button 
              onClick={() => setShowCreatePost(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Novo Post</span>
            </button>
          </div>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Posts Publicados</h3>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {posts.filter(p => p.status === 'published').length}
            </div>
            <div className="text-sm text-green-600">Este mês</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Agendados</h3>
              <CalendarIcon className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {posts.filter(p => p.status === 'scheduled').length}
            </div>
            <div className="text-sm text-blue-600">Próximos 7 dias</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Engajamento</h3>
              <Heart className="w-5 h-5 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {posts.reduce((acc, post) => acc + post.engagement.likes, 0)}
            </div>
            <div className="text-sm text-red-600">Total de curtidas</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Rascunhos</h3>
              <Edit3 className="w-5 h-5 text-gray-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {posts.filter(p => p.status === 'draft').length}
            </div>
            <div className="text-sm text-gray-600">Para revisar</div>
          </div>
        </div>

        {/* Posts Recentes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Posts Recentes</h3>
          </div>
          <div className="p-6">
            {posts.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Nenhum post criado ainda</p>
                <button 
                  onClick={() => setShowCreatePost(true)}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Criar primeiro post
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {posts.slice(0, 5).map((post) => {
                  const PlatformIcon = getPlatformIcon(post.platform)
                  return (
                    <div key={post.id} className="flex items-start space-x-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0">
                        <PlatformIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 truncate">{post.content}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                            {getStatusText(post.status)}
                          </span>
                          <span className="capitalize">{post.platform}</span>
                          {post.scheduledDate && (
                            <span>{new Date(post.scheduledDate).toLocaleDateString()}</span>
                          )}
                          <div className="flex items-center space-x-2">
                            <Heart className="w-4 h-4" />
                            <span>{post.engagement.likes}</span>
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.engagement.comments}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-blue-600 transition-colors">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeletePost(post.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SocialMaster Pro
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Funcionalidades</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Preços</a>
              <a href="#dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">Dashboard</a>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  {/* Notifications */}
                  <div className="relative">
                    <button 
                      onClick={() => setShowNotifications(!showNotifications)}
                      className="relative text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <Bell className="w-5 h-5" />
                      {notifications.filter(n => !n.read).length > 0 && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
                      )}
                    </button>
                    
                    {showNotifications && (
                      <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                        <div className="p-4 border-b border-gray-100">
                          <h3 className="font-semibold text-gray-900">Notificações</h3>
                        </div>
                        <div className="max-h-64 overflow-y-auto">
                          {notifications.length === 0 ? (
                            <div className="p-4 text-center text-gray-500">
                              Nenhuma notificação
                            </div>
                          ) : (
                            notifications.map((notification) => (
                              <div 
                                key={notification.id}
                                onClick={() => markNotificationAsRead(notification.id)}
                                className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                              >
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <h4 className="font-medium text-gray-900">{notification.title}</h4>
                                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                                  </div>
                                  <span className="text-xs text-gray-500">{notification.time}</span>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* User Menu */}
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="hidden md:block">
                      <span className="text-gray-700 font-medium">{currentUser?.name}</span>
                      {hasAccess && (
                        <div className="text-xs text-blue-600">Plano {userPlan}</div>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-red-600 transition-colors flex items-center space-x-1"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden md:inline">Sair</span>
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => openLoginModal('login')}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Entrar
                  </button>
                  <button 
                    onClick={() => openLoginModal('register')}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Começar Grátis
                  </button>
                </>
              )}

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-2">
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Funcionalidades</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Preços</a>
                <a href="#dashboard" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Dashboard</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Domine as
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Redes Sociais </span>
              com IA
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Automatize, analise e cresça suas redes sociais com estratégias inteligentes. 
              Mais de 50.000 criadores já confiam no SocialMaster Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => openLoginModal('register')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Começar Agora - Grátis</span>
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2">
                <span>Ver Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Social Networks */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
              <span className="text-gray-500 font-medium">Conecte com:</span>
              {socialNetworks.map((network, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                  <network.icon className={`w-6 h-6 ${network.color}`} />
                  <span className="text-sm font-medium text-gray-700">{network.name}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Funcionalidades
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Poderosas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para dominar as redes sociais e gerar resultados reais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Planos que
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Cabem no seu Bolso</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para o seu negócio e comece a crescer hoje mesmo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${plan.popular ? 'border-purple-500 scale-105' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">kz/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Escolher {plan.name}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Todos os planos incluem 14 dias de teste grátis</p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Cancele a Qualquer Momento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Painel de Controle
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Inteligente</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gerencie todas as suas redes sociais em um só lugar com nossa interface intuitiva
            </p>
          </div>

          {/* Dashboard Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-xl p-1 flex flex-wrap gap-1">
              {['dashboard', 'analytics', 'content', 'schedule'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab === 'dashboard' && 'Dashboard'}
                  {tab === 'analytics' && 'Análises'}
                  {tab === 'content' && 'Conteúdo'}
                  {tab === 'schedule' && 'Agendamento'}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 md:p-8 shadow-xl">
            {activeTab === 'dashboard' && renderDashboardContent()}

            {activeTab === 'analytics' && (
              <div className="text-center py-12">
                <BarChart3 className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Análises Detalhadas</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Acompanhe métricas em tempo real, identifique tendências e otimize sua estratégia
                </p>
                {hasAccess && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">Alcance</h4>
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">12.5K</div>
                      <div className="text-sm text-green-600">+15% vs semana anterior</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">Engajamento</h4>
                        <Heart className="w-5 h-5 text-red-500" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">8.2%</div>
                      <div className="text-sm text-red-600">Taxa média</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">Crescimento</h4>
                        <Users className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">+342</div>
                      <div className="text-sm text-blue-600">Novos seguidores</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'content' && (
              <div className="text-center py-12">
                <Sparkles className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Geração de Conteúdo IA</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Crie legendas envolventes, hashtags virais e sugestões de conteúdo automaticamente
                </p>
                {hasAccess && (
                  <div className="mt-8 max-w-2xl mx-auto">
                    <div className="bg-white rounded-lg p-6 shadow-sm text-left">
                      <h4 className="font-semibold text-gray-900 mb-4">Sugestões de Conteúdo</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-gray-700">"5 dicas para aumentar seu engajamento no Instagram 📈 #marketing #dicas"</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <p className="text-sm text-gray-700">"Como criar conteúdo viral em 2024 🚀 Estratégias que funcionam #viral #conteudo"</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <p className="text-sm text-gray-700">"Tendências de redes sociais para este mês ✨ Não perca! #tendencias #socialmedia"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="text-center py-12">
                <Clock className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Agendamento Inteligente</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Publique no momento ideal para cada rede social com base na análise de dados
                </p>
                {hasAccess && (
                  <div className="mt-8 max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-4">Melhores Horários</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-pink-50 rounded-lg">
                          <Instagram className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                          <div className="font-semibold text-gray-900">Instagram</div>
                          <div className="text-sm text-gray-600">18:00 - 21:00</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <Facebook className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                          <div className="font-semibold text-gray-900">Facebook</div>
                          <div className="text-sm text-gray-600">12:00 - 15:00</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <Linkedin className="w-6 h-6 text-blue-700 mx-auto mb-2" />
                          <div className="font-semibold text-gray-900">LinkedIn</div>
                          <div className="text-sm text-gray-600">08:00 - 10:00</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Twitter className="w-6 h-6 text-gray-900 mx-auto mb-2" />
                          <div className="font-semibold text-gray-900">X (Twitter)</div>
                          <div className="text-sm text-gray-600">09:00 - 11:00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para Dominar as Redes Sociais?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 50.000 criadores que já transformaram seus resultados com o SocialMaster Pro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openLoginModal('register')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Começar Teste Grátis</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Falar com Especialista
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">14 dias grátis • Sem cartão de crédito • Cancele quando quiser</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SocialMaster Pro</span>
              </div>
              <p className="text-gray-400 mb-4">
                A plataforma mais completa para gestão inteligente de redes sociais.
              </p>
              <div className="flex space-x-4">
                {socialNetworks.map((network, index) => (
                  <div key={index} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <network.icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SocialMaster Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Create Post Modal */}
      {showCreatePost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-2xl shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Criar Novo Post</h2>
              <button 
                onClick={() => setShowCreatePost(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Plataforma</label>
                <select 
                  value={newPost.platform}
                  onChange={(e) => setNewPost(prev => ({ ...prev, platform: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="twitter">X (Twitter)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Conteúdo</label>
                <textarea 
                  value={newPost.content}
                  onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                  placeholder="Digite o conteúdo do seu post..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Agendar para (opcional)</label>
                <input 
                  type="datetime-local"
                  value={newPost.scheduledDate}
                  onChange={(e) => setNewPost(prev => ({ ...prev, scheduledDate: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex space-x-4">
                <button 
                  onClick={() => setShowCreatePost(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  onClick={handleCreatePost}
                  disabled={!newPost.content.trim()}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {newPost.scheduledDate ? 'Agendar Post' : 'Salvar Rascunho'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {loginType === 'login' ? 'Entrar' : 'Criar Conta'}
              </h2>
              <button 
                onClick={() => setShowLogin(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {loginError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-800">{loginError}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              {loginType === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      name="name"
                      value={loginForm.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                      required={loginType === 'register'}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email ou Telefone</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    name="email"
                    value={loginForm.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={loginType === 'login' ? "joao@email.com ou +244 900 123 456" : "seu@email.com"}
                    required
                  />
                </div>
              </div>

              {loginType === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="tel" 
                      name="phone"
                      value={loginForm.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+244 900 000 000"
                      required={loginType === 'register'}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={loginForm.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={loginType === 'login' ? "123456" : "Mínimo 6 caracteres"}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {loginType === 'login' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Contas de teste:</strong><br />
                    Email: joao@email.com | Senha: 123456<br />
                    Email: maria@email.com | Senha: senha123
                  </p>
                </div>
              )}

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processando...</span>
                  </>
                ) : (
                  <span>{loginType === 'login' ? 'Entrar' : 'Criar Conta'}</span>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {loginType === 'login' ? 'Não tem uma conta?' : 'Já tem uma conta?'}
                <button 
                  onClick={() => setLoginType(loginType === 'login' ? 'register' : 'login')}
                  className="text-blue-600 hover:text-blue-700 font-semibold ml-1"
                >
                  {loginType === 'login' ? 'Criar conta' : 'Entrar'}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Finalizar Pagamento - {selectedPlan.name}
              </h2>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">Plano {selectedPlan.name}</h3>
                  <p className="text-gray-600">{selectedPlan.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{selectedPlan.price} kz</div>
                  <div className="text-gray-600">por mês</div>
                </div>
              </div>
            </div>

            {paymentStep === 'method' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Escolha a forma de pagamento</h3>
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => handlePaymentMethodSelect(method.id)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-all duration-300 text-left group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{method.name}</h4>
                          <p className="text-gray-600 text-sm">{method.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {paymentStep === 'details' && (
              <div>
                <button 
                  onClick={() => setPaymentStep('method')}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <span>Voltar</span>
                </button>

                {paymentMethod === 'multicaixa' && (
                  <div className="space-y-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                        <CreditCard className="w-5 h-5 text-orange-600" />
                        <span>Multicaixa Express</span>
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Código de Referência</label>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 font-mono text-lg font-bold text-center">
                              935751085
                            </div>
                            <button
                              onClick={() => copyToClipboard('935751085', 'multicaixa')}
                              className="bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-700 transition-colors"
                            >
                              {copied === 'multicaixa' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Instruções:</h4>
                          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                            <li>Acesse o Multicaixa Express</li>
                            <li>Selecione "Pagamentos"</li>
                            <li>Insira o código de referência: <strong>935751085</strong></li>
                            <li>Confirme o valor: <strong>{selectedPlan.price} kz</strong></li>
                            <li>Complete o pagamento</li>
                            <li>Guarde o comprovativo para validação</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'bank' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                        <Building2 className="w-5 h-5 text-blue-600" />
                        <span>Transferência Bancária</span>
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">IBAN Principal</label>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 font-mono text-sm">
                              005100001166399010114
                            </div>
                            <button
                              onClick={() => copyToClipboard('005100001166399010114', 'iban1')}
                              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              {copied === 'iban1' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">IBAN Alternativo</label>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 font-mono text-sm">
                              000500000521396110115
                            </div>
                            <button
                              onClick={() => copyToClipboard('000500000521396110115', 'iban2')}
                              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              {copied === 'iban2' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Dados para Transferência:</h4>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div><strong>Valor:</strong> {selectedPlan.price} kz</div>
                            <div><strong>Beneficiário:</strong> SocialMaster Pro</div>
                            <div><strong>Descrição:</strong> Plano {selectedPlan.name} - {new Date().toLocaleDateString()}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'binance' && (
                  <div className="space-y-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                        <Coins className="w-5 h-5 text-yellow-600" />
                        <span>Binance (USDT)</span>
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Endereço da Wallet (USDT)</label>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 font-mono text-xs break-all">
                              TQn9Y2khEsLMWD7fhRTKff8CVDqattjA6Y
                            </div>
                            <button
                              onClick={() => copyToClipboard('TQn9Y2khEsLMWD7fhRTKff8CVDqattjA6Y', 'wallet')}
                              className="bg-yellow-600 text-white p-3 rounded-lg hover:bg-yellow-700 transition-colors"
                            >
                              {copied === 'wallet' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Instruções:</h4>
                          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                            <li>Acesse sua conta Binance</li>
                            <li>Selecione "Enviar" USDT</li>
                            <li>Cole o endereço da wallet acima</li>
                            <li>Valor aproximado: <strong>${(parseInt(selectedPlan.price) / 800).toFixed(2)} USDT</strong></li>
                            <li>Confirme a transação</li>
                            <li>Guarde o hash da transação para validação</li>
                          </ol>
                        </div>

                        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                          <div className="flex items-start space-x-2">
                            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                            <div className="text-sm text-yellow-800">
                              <strong>Importante:</strong> Use apenas a rede TRC20 (Tron) para enviar USDT. 
                              Outras redes podem resultar na perda dos fundos.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Validação do Pagamento</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload do Comprovativo
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            {uploadedFile ? uploadedFile.name : 'Clique para enviar comprovativo'}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG ou PDF até 5MB</p>
                        </label>
                      </div>
                    </div>

                    <div className="text-center text-gray-500">ou</div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Código de Referência da Transação
                      </label>
                      <input
                        type="text"
                        value={referenceCode}
                        onChange={(e) => setReferenceCode(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Cole aqui o código/hash da transação"
                      />
                    </div>

                    <button
                      onClick={handlePaymentValidation}
                      disabled={(!uploadedFile && !referenceCode) || paymentProcessing}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {paymentProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processando...</span>
                        </>
                      ) : (
                        <span>Validar Pagamento</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {paymentStep === 'validation' && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Processando Pagamento</h3>
                <p className="text-gray-600 mb-6">
                  Estamos validando seu pagamento. Isso pode levar alguns segundos...
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Aguarde:</strong> Não feche esta janela<br />
                    <strong>Validação:</strong> Automática via IA<br />
                    <strong>Tempo:</strong> 2-30 segundos
                  </p>
                </div>
              </div>
            )}

            {paymentStep === 'success' && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pagamento Confirmado!</h3>
                <p className="text-gray-600 mb-6">
                  Seu plano {selectedPlan.name} foi ativado com sucesso. Bem-vindo ao SocialMaster Pro!
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    <strong>✅ Acesso liberado:</strong> Imediatamente<br />
                    <strong>📧 Email enviado:</strong> Confirmação e boas-vindas<br />
                    <strong>🎯 Próximo passo:</strong> Explore o dashboard completo
                  </p>
                </div>
                <div className="mt-6">
                  <div className="text-sm text-gray-500">Redirecionando para o dashboard em 3 segundos...</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Click outside to close notifications */}
      {showNotifications && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowNotifications(false)}
        ></div>
      )}
    </div>
  )
}