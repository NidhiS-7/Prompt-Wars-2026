import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Map, Users, AlertTriangle, Route, Clock, Zap, CheckCircle2, ShieldAlert, TrainFront, Car, ShieldCheck, Radio, UserCog, Home, MenuSquare, ChevronDown, Plus, Maximize, Minimize } from 'lucide-react';
import { VenueAPI, VenueState, VenueMetadata } from './api/mockData';

const MapGraphic = ({ type }: { type: string }) => {
  const baseClass = "absolute w-[95%] h-[95%] opacity-50 z-0 drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]";

  if (type === 'Concert') {
    return (
      <svg viewBox="0 0 100 100" className={baseClass}>
        <defs>
          <linearGradient id="concertGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#831843" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect x="35" y="10" width="30" height="20" fill="url(#concertGrad)" stroke="#DB2777" strokeWidth="1" rx="2" />
        <path d="M 15 95 Q 50 25 85 95" fill="none" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="2 2" />
        <path d="M 25 85 Q 50 35 75 85" fill="none" stroke="#334155" strokeWidth="0.8" />
        <path d="M 35 75 Q 50 45 65 75" fill="none" stroke="#475569" strokeWidth="1" />
        <path d="M 42 65 Q 50 55 58 65" fill="none" stroke="#64748B" strokeWidth="1.2" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="50" y1="30" x2={15 + i * 10} y2="95" stroke="#1E293B" strokeWidth="0.3" />
        ))}
      </svg>
    );
  }

  if (type === 'Circuit') {
    return (
      <svg viewBox="0 0 100 100" className={baseClass}>
        <defs>
          <linearGradient id="circuitGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#B45309" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path d="M 30 50 C 30 20, 90 10, 80 50 C 70 90, 10 90, 30 50" fill="none" stroke="#1E293B" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 30 50 C 30 20, 90 10, 80 50 C 70 90, 10 90, 30 50" fill="none" stroke="#334155" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 30 50 C 30 20, 90 10, 80 50 C 70 90, 10 90, 30 50" fill="none" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3 6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="42" y="18" width="16" height="6" fill="url(#circuitGrad)" stroke="#F59E0B" strokeWidth="0.8" transform="rotate(15 42 18)" />
      </svg>
    );
  }

  if (type === 'Arena') {
    return (
      <svg viewBox="0 0 100 100" className={baseClass}>
        <defs>
          <linearGradient id="arenaGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect x="15" y="20" width="70" height="60" rx="15" fill="none" stroke="#1E293B" strokeWidth="0.5" />
        <rect x="25" y="30" width="50" height="40" rx="8" fill="url(#arenaGrad)" stroke="#6366F1" strokeWidth="0.8" />
        <circle cx="50" cy="50" r="6" fill="none" stroke="#818CF8" strokeWidth="0.8" />
        <line x1="50" y1="30" x2="50" y2="70" stroke="#818CF8" strokeWidth="0.6" />
        <path d="M 25 40 Q 38 50 25 60" fill="none" stroke="#818CF8" strokeWidth="0.5" />
        <path d="M 75 40 Q 62 50 75 60" fill="none" stroke="#818CF8" strokeWidth="0.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" className={baseClass}>
      <defs>
        <linearGradient id="pitchGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="50" rx="49" ry="43" fill="none" stroke="#1E293B" strokeWidth="0.5" />
      <ellipse cx="50" cy="50" rx="44" ry="38" fill="none" stroke="#334155" strokeWidth="0.2" strokeDasharray="0.5 1" />
      <ellipse cx="50" cy="50" rx="39" ry="32" fill="none" stroke="#475569" strokeWidth="0.5" />
      <ellipse cx="50" cy="50" rx="33" ry="26" fill="none" stroke="#334155" strokeWidth="0.2" strokeDasharray="1 1" />
      <ellipse cx="50" cy="50" rx="27" ry="20" fill="none" stroke="#64748B" strokeWidth="0.8" />
      {Array.from({ length: 16 }).map((_, i) => (
        <line key={i} x1="50" y1="50" x2={50 + 49 * Math.cos(i * 22.5 * Math.PI / 180)} y2={50 + 43 * Math.sin(i * 22.5 * Math.PI / 180)} stroke="#1E293B" strokeWidth="0.2" />
      ))}
      <rect x="37" y="38" width="26" height="24" rx="2" fill="url(#pitchGrad)" stroke="#3B82F6" strokeWidth="0.8" />
      <circle cx="50" cy="50" r="3" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
      <line x1="50" y1="38" x2="50" y2="62" stroke="#3B82F6" strokeWidth="0.5" />
      <rect x="37" y="46" width="4" height="8" fill="none" stroke="#3B82F6" strokeWidth="0.3" />
      <rect x="59" y="46" width="4" height="8" fill="none" stroke="#3B82F6" strokeWidth="0.3" />
    </svg>
  );
};

type ViewTab = 'home' | 'staff' | 'sensors' | 'security' | 'transit' | 'timeline' | 'routes' | 'queues';

export default function App() {
  const [activeTab, setActiveTab] = useState<ViewTab>('home');
  const [activeVenueId, setActiveVenueId] = useState<string>('velocity-stadium');
  const [venues, setVenues] = useState<VenueMetadata[]>([]);
  const [vState, setVState] = useState<VenueState | null>(null);

  const [showSelector, setShowSelector] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newVenueName, setNewVenueName] = useState('');
  const [newVenueSize, setNewVenueSize] = useState('');
  const [newVenueType, setNewVenueType] = useState('Stadium');
  const [newVenueTransit, setNewVenueTransit] = useState('');

  // Interactive UI States
  const [globalLockdown, setGlobalLockdown] = useState(false);
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [timeframe, setTimeframe] = useState('1H');
  const [scrambleKey, setScrambleKey] = useState(0);
  const [selectedActionNode, setSelectedActionNode] = useState<any>(null);
  const [actionState, setActionState] = useState<'idle' | 'executing' | 'resolved'>('idle');

  // Work Interaction States
  const [ackAlerts, setAckAlerts] = useState<Set<string>>(new Set());
  const [staffBoosts, setStaffBoosts] = useState<Record<string, number>>({});
  const [flushedQueues, setFlushedQueues] = useState<Set<string>>(new Set());
  const [sysParams, setSysParams] = useState({ freq: 120, bandwidth: 8.4, cooling: 92 });

  const handleNodeAction = (action: string) => {
    setActionState('executing');
    setTimeout(() => {
      setActionState('resolved');
      setTimeout(() => {
        setSelectedActionNode(null);
        setActionState('idle');
      }, 1500);
    }, 1200);
  };

  const handleStaffBoost = (e: React.MouseEvent, id: string, amount: number) => {
    e.stopPropagation();
    setStaffBoosts(prev => ({ ...prev, [id]: (prev[id] || 0) + amount }));
  };

  const handleAckAlert = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const next = new Set(ackAlerts);
    next.add(id);
    setAckAlerts(next);
  };

  const handleFlushQueue = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const next = new Set(flushedQueues);
    next.add(id);
    setFlushedQueues(next);
  };

  // Initial load of venues
  useEffect(() => {
    VenueAPI.getAllVenues().then(setVenues);
  }, []);

  // Poll state for the active venue
  useEffect(() => {
    let active = true;
    const fetchState = async () => {
      const state = await VenueAPI.getVenueState(activeVenueId);
      if (active) setVState(state);
    };
    fetchState();
    const interval = setInterval(fetchState, 1500);
    return () => { active = false; clearInterval(interval); };
  }, [activeVenueId]);

  const handleAddVenue = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVenueName || !newVenueSize || !newVenueTransit) return;
    const newMeta = await VenueAPI.generateNewVenue(newVenueName, newVenueSize, newVenueType, newVenueTransit);
    const allVenues = await VenueAPI.getAllVenues();
    setVenues(allVenues);
    setActiveVenueId(newMeta.id);
    setShowAddModal(false);
    setNewVenueName('');
    setNewVenueSize('');
    setNewVenueTransit('');
    setNewVenueType('Stadium');
  };

  if (!vState) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-cyber-dark text-cyber-accent">
        <Activity className="w-12 h-12 animate-pulse mb-4" />
        <h1 className="text-xl font-mono tracking-[0.3em] font-bold">ESTABLISHING CONNECTION</h1>
      </div>
    );
  }

  const { telemetry, heatmap, routes, queues, timeline, security, transit, staff, sensors } = vState;

  const navItems: { id: ViewTab, icon: any, label: string }[] = [
    { id: 'home', icon: Home, label: 'Mission Control Home' },
    { id: 'staff', icon: UserCog, label: 'Staff Deployment' },
    { id: 'sensors', icon: Radio, label: 'Sensor Network' },
    { id: 'security', icon: ShieldAlert, label: 'Security & Ops' },
    { id: 'transit', icon: TrainFront, label: 'External Transit' },
    { id: 'timeline', icon: Clock, label: 'Predictive Timeline' },
    { id: 'routes', icon: Route, label: 'Crowd Routing Engine' },
    { id: 'queues', icon: Users, label: 'Smart Queues' },
  ];

  const getTabConfig = (tab: ViewTab) => {
    switch (tab) {
      case 'staff':
        return { color: 'text-emerald-400', border: 'border-emerald-500', from: 'from-emerald-500/80', m1Label: 'ACTIVE PATROLS', m1Value: staff.reduce((acc, s) => acc + s.deployed, 0), m2Label: 'FATIGUE INDEX', m2Value: '14.2%', logPrefix: 'Opr_Unit' };
      case 'sensors':
        return { color: 'text-cyan-400', border: 'border-cyan-500', from: 'from-cyan-500/80', m1Label: 'NETWORK PING', m1Value: '12ms', m2Label: 'PACKET LOSS', m2Value: '0.01%', logPrefix: 'Net_Diag' };
      case 'security':
        return { color: 'text-red-400', border: 'border-red-500', from: 'from-red-500/80', m1Label: 'THREAT LEVEL', m1Value: telemetry.status === 'WARNING' ? 'ELEVATED' : 'NOMINAL', m2Label: 'CLEARED HAZARDS', m2Value: '47', logPrefix: 'Sec_Alert' };
      case 'transit':
        return { color: 'text-blue-400', border: 'border-blue-500', from: 'from-blue-500/80', m1Label: 'SYSTEM DELAY', m1Value: '+14m', m2Label: 'INBOUND TRAFFIC', m2Value: 'HEAVY', logPrefix: 'Ext_Sync' };
      case 'timeline':
        return { color: 'text-[#FFD700]', border: 'border-[#FFD700]', from: 'from-[#FFD700]/80', m1Label: 'EVENT PROGRESS', m1Value: `${timeline.progressPercent.toFixed(1)}%`, m2Label: 'ALERTS SENT', m2Value: timeline.alertsDispatched.toLocaleString(), logPrefix: 'Time_Sync' };
      case 'routes':
        return { color: 'text-purple-400', border: 'border-purple-500', from: 'from-purple-500/80', m1Label: 'FORCED REROUTES', m1Value: telemetry.activeReroutes, m2Label: 'BOTTLENECKS', m2Value: '2', logPrefix: 'Flow_Eng' };
      case 'queues':
        return { color: 'text-orange-400', border: 'border-orange-500', from: 'from-orange-500/80', m1Label: 'AVG WAIT (SECTOR B)', m1Value: '12m', m2Label: 'ABANDON RATE', m2Value: '4.2%', logPrefix: 'Q_Predict' };
      default:
        return { color: 'text-cyber-accent', border: 'border-cyber-accent', from: 'from-cyber-accent/80', m1Label: 'SYSTEM ALIGNMENT', m1Value: 'OPTIMAL', m2Label: 'ACTIVE SENSORS', m2Value: '12,000+', logPrefix: 'Sys_Core' };
    }
  }

  const activeConfig = getTabConfig(activeTab);

  return (
    <div className="w-screen h-screen flex bg-black overflow-hidden font-sans text-cyber-light">

      {/* ADD NEW VENUE MODAL */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-cyber-dark border border-cyber-accent/40 rounded-2xl w-full max-w-md p-6 shadow-[0_0_40px_rgba(0,240,255,0.15)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cyber-accent/10 to-transparent pointer-events-none"></div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3"><Map className="text-cyber-accent w-6 h-6" /> REGISTER COMMAND POST</h2>
              <form onSubmit={handleAddVenue} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-white/50 mb-1">VENUE IDENTIFIER (NAME)</label>
                  <input autoFocus value={newVenueName} onChange={e => setNewVenueName(e.target.value)} required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-cyber-accent transition-colors font-mono" placeholder="e.g. Apex Olympic Arena" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/50 mb-1">CAPACITY / SECTOR SIZE</label>
                  <input value={newVenueSize} onChange={e => setNewVenueSize(e.target.value)} required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-cyber-accent transition-colors font-mono uppercase text-sm" placeholder="e.g. 100K SECTOR" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-white/50 mb-1">VENUE TYPE</label>
                    <select value={newVenueType} onChange={e => setNewVenueType(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-cyber-accent transition-colors font-mono text-sm appearance-none">
                      <option value="Stadium">Open Air Stadium</option>
                      <option value="Arena">Indoor Arena</option>
                      <option value="Concert">Concert Hall</option>
                      <option value="Circuit">Racetrack Circuit</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-white/50 mb-1">PRIMARY TRANSIT HUB</label>
                    <input value={newVenueTransit} onChange={e => setNewVenueTransit(e.target.value)} required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-cyber-accent transition-colors font-mono uppercase text-sm" placeholder="e.g. Olympic Station" />
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 px-4 py-3 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors font-mono text-sm">CANCEL</button>
                  <button type="submit" className="flex-1 px-4 py-3 bg-cyber-accent/20 border border-cyber-accent rounded-lg text-cyber-accent hover:bg-cyber-accent hover:text-black transition-all font-mono text-sm font-bold">INITIALIZE POST</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. SLIM SIDEBAR NAVIGATION */}
      <nav className="w-[88px] shrink-0 bg-cyber-dark border-r border-white/5 flex flex-col items-center py-6 gap-6 z-50 shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-accent/5 to-transparent pointer-events-none"></div>
        <div className="bg-cyber-accent/10 p-3 rounded-xl border border-cyber-accent/30 mb-4 shadow-[0_0_15px_rgba(0,240,255,0.2)] cursor-pointer hover:scale-110 transition-transform">
          <Zap className="w-7 h-7 text-cyber-accent" />
        </div>

        <div className="flex flex-col gap-4 w-full px-4">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                title={item.label}
                className={`relative p-3.5 rounded-xl transition-all duration-300 ease-out w-full flex justify-center group ${isActive ? 'bg-cyber-accent text-black shadow-[0_0_20px_rgba(0,240,255,0.3)]' : 'text-white/40 hover:text-white hover:bg-white/10'
                  }`}
              >
                <Icon className={`w-6 h-6 transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                {isActive && <motion.div layoutId="navIndicator" className="absolute -left-4 w-1.5 h-full rounded-r-full bg-cyber-accent" />}
              </button>
            )
          })}
        </div>
      </nav>

      {/* 2. MAIN APPLICATION WORKSPACE */}
      <div className="flex-1 flex flex-col p-6 overflow-hidden relative bg-cyber-dark/80">

        {/* HEADER & DYNAMIC VENUE SELECTOR */}
        <header className="flex justify-between items-end border-b border-cyber-secondary/20 pb-5 mb-6 shrink-0 z-40 relative">
          <div className="relative">
            {/* Custom Dropdown Trigger */}
            <div
              onClick={() => setShowSelector(!showSelector)}
              className="group cursor-pointer flex flex-col items-start"
            >
              <div className="flex items-center gap-3 relative">
                <h1 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent via-blue-400 to-cyber-secondary group-hover:from-white transition-all duration-500 uppercase">
                  {vState.meta.name}
                </h1>
                <ChevronDown className={`w-6 h-6 text-cyber-accent transition-transform duration-300 ${showSelector ? 'rotate-180' : ''}`} />
              </div>
              <p className="text-sm font-mono text-cyber-secondary uppercase tracking-[0.2em] mt-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyber-secondary rounded-full animate-pulse"></span>
                System Online // {vState.meta.type} / {vState.meta.sectorSize}
              </p>
            </div>

            {/* Selector Dropdown Panel */}
            <AnimatePresence>
              {showSelector && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-4 left-0 w-80 bg-black/90 border border-cyber-accent/30 rounded-xl backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden"
                >
                  <div className="p-2 border-b border-white/5 text-[10px] font-mono text-white/40 tracking-widest pl-4">REGISTERED CMD POSTS</div>
                  <div className="max-h-64 overflow-y-auto style-scrollbars">
                    {venues.map(v => (
                      <button
                        key={v.id}
                        onClick={() => { setActiveVenueId(v.id); setShowSelector(false); }}
                        className={`w-full text-left p-4 hover:bg-white/5 transition-colors flex flex-col ${activeVenueId === v.id ? 'bg-cyber-accent/10 border-l-2 border-cyber-accent' : ''}`}
                      >
                        <span className={`font-black uppercase tracking-wider ${activeVenueId === v.id ? 'text-cyber-accent' : 'text-white'}`}>{v.name}</span>
                        <span className="text-[10px] font-mono text-white/40">{v.sectorSize}</span>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => { setShowSelector(false); setShowAddModal(true); }}
                    className="w-full p-4 bg-white/[0.02] hover:bg-cyber-secondary/10 border-t border-white/5 text-cyber-secondary font-mono text-sm flex items-center gap-2 transition-colors uppercase tracking-widest"
                  >
                    <Plus className="w-4 h-4" /> Initialize New Post
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex gap-6 relative">
            <div className="font-mono text-right border-r border-cyber-secondary/20 pr-6">
              <p className="text-xs text-cyber-light/40 uppercase tracking-[0.1em] mb-1 flex items-center justify-end gap-2">
                <Activity className="w-3 h-3" /> System Status
              </p>
              <p className={`${telemetry.status === 'OPTIMAL' ? 'text-cyber-accent' : 'text-orange-400 animate-pulse'} font-bold tracking-widest flex items-center gap-2 justify-end`}>
                {telemetry.status} <CheckCircle2 className="w-4 h-4" />
              </p>
            </div>
            <div className="font-mono text-right border-r border-cyber-secondary/20 pr-6">
              <p className="text-xs text-cyber-light/40 uppercase tracking-[0.1em] mb-1 flex items-center justify-end gap-2">
                <Users className="w-3 h-3" /> Live Density
              </p>
              <p className="text-white font-bold text-xl">{telemetry.density.toFixed(1)}%</p>
            </div>
            <div className="font-mono text-right">
              <p className="text-xs text-cyber-light/40 uppercase tracking-[0.1em] mb-1 flex items-center justify-end gap-2">
                <Route className="w-3 h-3" /> Active Reroutes
              </p>
              <p className="text-cyber-alert font-bold text-xl drop-shadow-[0_0_8px_rgba(255,0,60,0.5)]">{telemetry.activeReroutes.toLocaleString()}</p>
            </div>
          </div>
        </header>

        {/* 3. DYNAMIC VIEW RENDERER */}
        <AnimatePresence mode="wait">

          {activeTab === 'home' ? (
            <motion.main
              key={`home-${vState.meta.id}`} // Force remount on venue change specifically for animations
              initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3 }}
              className="flex-1 flex gap-6 overflow-hidden h-full z-10"
            >
              {/* LEFT PANE */}
              <AnimatePresence>
              {!isMapExpanded && (
              <motion.aside initial={{ width: 0, opacity: 0 }} animate={{ width: "28%", opacity: 1 }} exit={{ width: 0, opacity: 0 }} className="flex flex-col gap-5 overflow-y-auto style-scrollbars pr-2 pb-10 whitespace-nowrap overflow-x-hidden origin-left">
                <h2 className="text-sm font-mono tracking-[0.2em] text-white/50 border-b border-white/10 pb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" /> VENUE OPERATIONS
                </h2>

                <motion.div onClick={() => setActiveTab('staff')} className="cursor-pointer group rounded-2xl border border-emerald-500/20 bg-black/40 p-4 backdrop-blur-xl shadow-lg shrink-0 hover:border-emerald-500/40 transition-all">
                  <h3 className="text-xs font-mono text-emerald-400 uppercase mb-3 flex items-center justify-between group-hover:text-emerald-300">
                    <span className="flex items-center gap-2"><UserCog className="w-3.5 h-3.5" /> Staff Control</span>
                    <span className="text-[9px] bg-emerald-500/10 px-1.5 py-0.5 rounded text-emerald-400 border border-emerald-500/20">INTERACTIVE</span>
                  </h3>
                  <div className="space-y-3">
                    {staff.map(s => {
                      const boost = staffBoosts[s.id] || 0;
                      const currentDeployed = Math.min(s.total, s.deployed + boost);
                      const isStretched = (currentDeployed / s.total) < 0.8 && s.status === 'STRETCHED';
                      return (
                        <div key={s.id} className="bg-white/[0.03] p-2.5 rounded-lg border border-white/5 text-sm hover:bg-white/5 transition-colors">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-white/90 text-xs">{s.department}</span>
                            <div className="flex gap-1 items-center">
                              <button onClick={(e) => handleStaffBoost(e, s.id, -5)} className="w-5 h-5 rounded flex items-center justify-center bg-white/5 hover:bg-red-500/30 hover:text-red-400 text-white/40 transition-colors cursor-pointer text-[10px]">-</button>
                              <span className={`text-[9px] font-mono px-2 py-0.5 rounded w-16 text-center ${isStretched ? 'bg-orange-500/20 text-orange-400' : 'bg-emerald-500/20 text-emerald-400'}`}>{currentDeployed}/{s.total}</span>
                              <button onClick={(e) => handleStaffBoost(e, s.id, 5)} className="w-5 h-5 rounded flex items-center justify-center bg-white/5 hover:bg-emerald-500/30 hover:text-emerald-400 text-white/40 transition-colors cursor-pointer text-[10px]">+</button>
                            </div>
                          </div>
                          <div className="w-full bg-black h-1.5 rounded-full overflow-hidden">
                            <motion.div animate={{ width: `${(currentDeployed / s.total) * 100}%` }} transition={{ duration: 0.5 }} className={`h-full ${isStretched ? 'bg-orange-500' : 'bg-emerald-500'}`} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>

                <motion.div onClick={() => setActiveTab('sensors')} className="cursor-pointer group rounded-2xl border border-cyan-500/20 bg-black/40 p-4 backdrop-blur-xl shadow-lg shrink-0 hover:border-cyan-500/40 hover:scale-[1.02] transition-all">
                  <h3 className="text-xs font-mono text-cyan-400 uppercase mb-3 flex items-center gap-2 group-hover:text-cyan-300"><Radio className="w-3.5 h-3.5 animate-pulse" /> Sensor Network</h3>
                  <div className="space-y-2">
                    {sensors.map(s => (
                      <div key={s.id} className="flex items-center justify-between bg-white/[0.03] p-2 rounded-lg border border-white/5 text-xs">
                        <span className="flex items-center gap-2 text-white/80"><span className={`w-1.5 h-1.5 rounded-full ${s.status === 'DEGRADED' ? 'bg-orange-500' : 'bg-cyan-500'}`}></span>{s.type}</span>
                        <span className="font-mono text-white/60">{s.uptime.toFixed(1)}%</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div onClick={() => setActiveTab('security')} className="cursor-pointer group rounded-2xl border border-red-500/20 bg-black/40 p-4 backdrop-blur-xl hover:border-red-500/40 transition-all shadow-lg shrink-0">
                  <h3 className="text-xs font-mono text-red-400 uppercase mb-3 flex items-center justify-between group-hover:text-red-300">
                     <span className="flex items-center gap-2"><ShieldAlert className="w-3.5 h-3.5" /> Security Log</span>
                     <span className="text-[9px] bg-red-500/10 px-1.5 py-0.5 rounded text-red-400 border border-red-500/20">TRIAGE</span>
                  </h3>
                  <div className="space-y-3">
                    <AnimatePresence>
                      {security.map((sec) => {
                        const isAck = ackAlerts.has(sec.id);
                        return (
                        <motion.div key={sec.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`flex flex-col p-3 rounded-xl border transition-all ${isAck ? 'bg-white/[0.01] border-white/5 opacity-50' : 'bg-red-950/10 border-red-500/20 hover:bg-red-900/20'}`}>
                          <div className="flex justify-between items-start mb-2">
                            <span className={`text-[13px] font-bold ${isAck ? 'text-white/40 line-through' : 'text-white'} group-hover:text-red-400`}>{sec.type}</span>
                            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${isAck ? 'text-white/40 border-white/10 bg-transparent' : sec.status === 'CRITICAL' ? 'text-red-400 bg-red-400/10 border-red-400/30' : 'text-orange-400 bg-orange-400/10 border-orange-400/30'}`}>{isAck ? 'RESOLVED' : sec.status}</span>
                          </div>
                          <div className="flex justify-between items-end">
                            <p className="text-[10px] text-cyber-light/60 flex items-center gap-1 font-mono"><Map className="w-3 h-3" /> {sec.location}</p>
                            {!isAck && (
                              <button onClick={(e) => handleAckAlert(e, sec.id)} className="text-[9px] font-mono px-2 py-1 rounded bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-black transition-colors border border-red-500/30 leading-none">ACK ALERT</button>
                            )}
                          </div>
                        </motion.div>
                        )
                      })}
                    </AnimatePresence>
                  </div>
                </motion.div>

                <motion.div onClick={() => setActiveTab('transit')} className="cursor-pointer group rounded-2xl border border-blue-500/20 bg-black/40 p-4 backdrop-blur-xl hover:border-blue-500/40 hover:scale-[1.02] transition-all shadow-lg shrink-0">
                  <h3 className="text-xs font-mono text-blue-400 uppercase mb-3 flex items-center gap-2 group-hover:text-blue-300"><TrainFront className="w-3.5 h-3.5" /> External Transit</h3>
                  <div className="space-y-3">
                    {transit.map((trans) => (
                      <div key={trans.id} className="flex flex-col bg-white/[0.03] p-3 rounded-xl border border-white/5">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[13px] font-bold text-cyber-light/90 flex items-center gap-1">
                            {trans.network.includes('Subway') ? <TrainFront className="w-3.5 h-3.5 text-blue-400" /> : <Car className="w-3.5 h-3.5 text-blue-400" />}
                            {trans.network}
                          </span>
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${trans.status === 'DELAYED' ? 'text-orange-400 bg-orange-400/10 border-orange-400/30' : 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'}`}>{trans.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.aside>
              )}
              </AnimatePresence>

              {/* CENTER PANE: MAP */}
              <motion.section layout className={`rounded-2xl border bg-gradient-to-br from-[#0a0a14] to-[#0b0c16] overflow-hidden relative flex flex-col group h-full transition-all duration-700 ${isMapExpanded ? 'flex-1' : 'w-[44%]'} ${globalLockdown ? 'border-cyber-alert shadow-[0_0_50px_rgba(255,0,60,0.3)]' : 'border-cyber-secondary/20 shadow-[0_0_40px_rgba(112,0,255,0.08)]'}`}>
                {globalLockdown && <div className="absolute inset-0 bg-cyber-alert/5 pointer-events-none z-10 animate-pulse mix-blend-screen"></div>}
                <div className="bg-white/[0.02] p-3 border-b border-white/5 backdrop-blur-sm z-30 flex justify-between items-center absolute top-0 w-full">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setIsMapExpanded(!isMapExpanded)} className="text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-1.5 rounded border border-white/10" title="Toggle Map Size">
                      {isMapExpanded ? <Minimize className="w-3.5 h-3.5" /> : <Maximize className="w-3.5 h-3.5" />}
                    </button>
                    <p className={`text-xs font-mono tracking-widest flex items-center gap-2 ${globalLockdown ? 'text-cyber-alert' : 'text-cyber-secondary'}`}>
                      <Map className="w-4 h-4 shrink-0" /> [ {globalLockdown ? 'SYSTEM LOCKDOWN' : `HEATMAP: ${vState.meta.name.toUpperCase()}`} ]
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <button onClick={() => setGlobalLockdown(!globalLockdown)} className={`flex items-center gap-2 px-2 py-0.5 rounded text-[10px] font-mono transition-all tracking-widest border ${globalLockdown ? 'bg-cyber-alert text-black font-black border-cyber-alert shadow-[0_0_15px_rgba(255,0,60,0.5)]' : 'bg-cyber-alert/10 text-cyber-alert border-cyber-alert/30 hover:bg-cyber-alert/20'}`}>
                      <AlertTriangle className="w-3 h-3 shrink-0" /> {globalLockdown ? 'STAND DOWN' : 'INITIATE LOCKDOWN'}
                    </button>
                    <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyber-alert animate-ping opacity-70"></span><span className="text-[10px] text-cyber-light/50 font-mono">CRITICAL SURGE</span></div>
                    <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyber-accent opacity-70"></span><span className="text-[10px] text-cyber-light/50 font-mono">FLOWING</span></div>
                  </div>
                </div>

                <div className="flex-1 relative w-full h-full cursor-crosshair flex items-center justify-center p-8 mt-12">
                  <MapGraphic type={vState.meta.type} />

                  <AnimatePresence>
                    {heatmap.map((node) => {
                      const isSurge = globalLockdown ? true : node.status === 'surge';
                      const isFlowing = node.status === 'flowing';
                      const glowClass = isSurge ? 'bg-cyber-alert text-cyber-alert' : isFlowing ? 'bg-cyber-accent text-cyber-accent' : 'bg-cyber-secondary text-cyber-secondary';
                      const isSelected = selectedActionNode?.id === node.id;

                      return (
                        <motion.div key={node.id} className={`absolute z-20 ${isSelected ? 'z-[100]' : ''}`} style={{ top: `${node.y}%`, left: `${node.x}%` }}>
                          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }} transition={{ repeat: Infinity, duration: isSurge ? 1.5 : 3 }} className={`absolute -inset-10 rounded-full blur-2xl ${glowClass.split(' ')[0]}/30 pointer-events-none`}></motion.div>
                          
                          <div 
                            onClick={(e) => { e.stopPropagation(); setSelectedActionNode(node); setActionState('idle'); }}
                            className={`relative w-4 h-4 rounded-full shadow-[0_0_15px_${glowClass.split(' ')[0]}] hover:scale-[2] transition-all cursor-pointer ${glowClass.split(' ')[0]} border border-black ${isSelected ? 'ring-4 ring-white/50 ring-offset-2 ring-offset-black scale-150' : ''}`}
                            title="Open Tactical Comms"
                          ></div>
                          
                          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                            <span className={`w-[1px] ${isSelected ? 'h-5' : 'h-3'} bg-white/20 mb-1 transition-all`}></span>
                            <p className={`text-[12px] font-mono font-bold whitespace-nowrap shadow-black drop-shadow-[0_2px_2px_rgba(0,0,0,1)] bg-black/60 px-3 py-1 rounded border border-white/10 ${glowClass.split(' ')[1]}`}>
                              {node.label}
                            </p>
                          </div>

                          <AnimatePresence>
                            {isSelected && (
                              <motion.div 
                                initial={{ opacity: 0, x: 20, scale: 0.9 }} animate={{ opacity: 1, x: 40, scale: 1 }} exit={{ opacity: 0, scale: 0.9, x: 20 }}
                                className="absolute top-1/2 -translate-y-1/2 left-4 w-48 bg-black/95 border border-cyber-accent/50 rounded-lg p-3 backdrop-blur-xl shadow-[0_0_30px_rgba(0,240,255,0.15)] z-[100] cursor-default"
                              >
                                <div className="text-[10px] text-cyber-accent font-mono border-b border-white/10 pb-2 mb-2 flex justify-between items-center tracking-widest">
                                  <span>TACTICAL OVERRIDE</span>
                                  <button onClick={(e) => { e.stopPropagation(); setSelectedActionNode(null); }} className="text-white/40 hover:text-white px-2 rounded hover:bg-white/10 transition-colors">✕</button>
                                </div>
                                
                                {actionState === 'idle' && (
                                  <div className="flex flex-col gap-1.5">
                                    <button onClick={(e) => { e.stopPropagation(); handleNodeAction('DISPATCH'); }} className="text-[11px] font-mono font-bold text-left w-full hover:bg-emerald-500/20 px-2.5 py-2 rounded transition-colors text-white border border-transparent hover:border-emerald-500/30 flex justify-between group">
                                      <span>DISPATCH STAFF</span> <ShieldCheck className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-emerald-400 group-hover:scale-110 transition-all" />
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); handleNodeAction('REROUTE'); }} className={`text-[11px] font-mono font-bold text-left w-full hover:bg-orange-400/20 px-2.5 py-2 rounded transition-colors text-white border border-transparent hover:border-orange-400/30 flex justify-between group`}>
                                      <span className={isSurge ? 'text-orange-400 drop-shadow-[0_0_5px_rgba(255,165,0,0.5)]' : ''}>FORCE REROUTE</span> <Route className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-orange-400 group-hover:scale-110 transition-all" />
                                    </button>
                                  </div>
                                )}
                                
                                {actionState === 'executing' && (
                                  <div className="flex flex-col items-center justify-center gap-2 py-4">
                                     <Activity className="w-5 h-5 text-cyber-accent animate-spin" />
                                     <span className="text-[9px] font-mono text-cyber-accent tracking-widest animate-pulse">TRANSMITTING SECURE KEY...</span>
                                  </div>
                                )}

                                {actionState === 'resolved' && (
                                  <div className="flex flex-col items-center justify-center gap-2 py-4">
                                     <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><CheckCircle2 className="w-6 h-6 text-emerald-400" /></motion.div>
                                     <span className="text-[10px] font-mono text-emerald-400 tracking-widest font-bold drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]">ORDER SECURED</span>
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
                </div>
              </motion.section>

              {/* RIGHT PANE: CROWD LOGIC */}
              <AnimatePresence>
              {!isMapExpanded && (
              <motion.aside initial={{ width: 0, opacity: 0 }} animate={{ width: "28%", opacity: 1 }} exit={{ width: 0, opacity: 0 }} className="flex flex-col gap-5 overflow-y-auto style-scrollbars pr-2 pb-10 text-right whitespace-nowrap overflow-x-hidden origin-right">
                <h2 className="text-sm font-mono tracking-[0.2em] text-white/50 border-b border-white/10 pb-2 flex items-center justify-end gap-2 text-right w-full">
                  PREDICTIVE CROWD LOGIC <Users className="w-4 h-4 shrink-0" />
                </h2>

                <motion.div onClick={() => setActiveTab('timeline')} className="cursor-pointer group rounded-2xl border border-[#FFD700]/30 bg-black/40 p-4 backdrop-blur-xl hover:border-[#FFD700]/60 hover:scale-[1.02] transition-all shadow-lg shrink-0 text-right">
                  <h3 className="text-xs font-mono text-[#FFD700] uppercase mb-3 flex items-center justify-end gap-2 group-hover:text-yellow-300"> Predict Timeline <Clock className="w-3.5 h-3.5" /></h3>
                  <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 flex flex-col gap-3">
                    <div className="flex justify-between items-center text-sm text-cyber-light">
                      <span>{timeline.eventName}</span>
                      <span className="font-mono font-bold text-black bg-[#FFD700] px-2 rounded tracking-widest border border-[#FFD700]">{timeline.timeRemaining}</span>
                    </div>
                    <div className="w-full bg-black h-1.5 rounded-full overflow-hidden border border-white/5">
                      <motion.div animate={{ width: `${timeline.progressPercent}%` }} transition={{ duration: 0.5 }} className="bg-gradient-to-r from-[#FFD700]/50 to-[#FFD700] h-full shadow-[0_0_10px_#FFD700]"></motion.div>
                    </div>
                  </div>
                </motion.div>

                <motion.div onClick={() => setActiveTab('routes')} className="cursor-pointer group rounded-2xl border border-cyber-secondary/30 bg-black/40 p-4 backdrop-blur-xl hover:border-cyber-secondary/50 hover:scale-[1.02] transition-all shadow-lg shrink-0 text-right">
                  <h3 className="text-xs font-mono text-cyber-secondary uppercase mb-3 flex items-center justify-end gap-2 group-hover:text-purple-300">Crowd Routing Engine <Route className="w-3.5 h-3.5" /></h3>
                  <div className="space-y-3 relative">
                    <AnimatePresence>
                      {routes.map((route) => (
                        <motion.div key={route.id} className="flex flex-col bg-white/[0.03] hover:bg-white/[0.08] transition-colors p-3 rounded-xl border border-white/5 text-right">
                          <div className="flex justify-between items-center mb-1">
                            <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${route.status === 'REROUTED' ? 'text-cyber-alert bg-cyber-alert/10 border-cyber-alert/30' : route.status === 'DELAYED' ? 'text-orange-400 bg-orange-400/10 border-orange-400/30' : 'text-cyber-accent bg-cyber-accent/10 border-cyber-accent/30'}`}>{route.status}</span>
                            <span className="text-sm font-bold text-white group-hover:text-cyber-secondary">{route.path}</span>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>

                <motion.div onClick={() => setActiveTab('queues')} className="cursor-pointer group rounded-2xl border border-cyber-alert/30 bg-black/40 p-4 backdrop-blur-xl hover:border-cyber-alert/50 transition-all shadow-lg shrink-0 text-right">
                  <h3 className="text-xs font-mono text-cyber-alert uppercase mb-3 flex justify-between items-center group-hover:text-red-400">
                    <span className="text-[9px] bg-cyber-alert/10 px-1.5 py-0.5 rounded text-cyber-alert border border-cyber-alert/20">MANUAL FLUSH</span>
                    <span className="flex items-center gap-2">Queue Predictor <MenuSquare className="w-3.5 h-3.5" /></span>
                  </h3>
                  <div className="space-y-4">
                    <AnimatePresence>
                      {queues.map((q) => {
                        const flushed = flushedQueues.has(q.id);
                        const displayWait = flushed ? 0 : q.waitTime;
                        return (
                        <motion.div key={q.id} layout className="bg-white/[0.02] hover:bg-white/[0.08] transition-colors p-3.5 rounded-xl border border-white/5 relative overflow-hidden group/q">
                          <div className="flex justify-between text-[13px] mb-2 items-center relative z-10">
                            <div className="flex gap-2 items-center">
                              {!flushed && <button onClick={(e) => handleFlushQueue(e, q.id)} className="opacity-0 group-hover/q:opacity-100 bg-cyber-alert hover:bg-white text-black px-1.5 py-0.5 rounded text-[8px] font-mono uppercase transition-all tracking-widest leading-none font-bold shadow-[0_0_10px_rgba(255,0,60,0.5)]">Flush</button>}
                              <span className={`font-mono font-bold px-2 rounded-full text-[10px] ${displayWait > 10 ? 'text-cyber-alert bg-cyber-alert/10' : displayWait > 5 ? 'text-orange-400 bg-orange-400/10' : 'text-cyber-accent bg-cyber-accent/10'}`}>{flushed ? 'CLEARED' : `${displayWait}m Wait`}</span>
                            </div>
                            <span className="font-bold text-cyber-light">{q.name}</span>
                          </div>
                          <div className="w-full bg-black h-1.5 rounded-full overflow-hidden shadow-inner border border-white/5 flex justify-end relative z-10">
                            <motion.div animate={{ width: `${Math.min(100, (displayWait / 20) * 100)}%` }} transition={{ duration: 0.5 }} className={`h-full ${displayWait > 10 ? 'bg-gradient-to-r from-orange-500 to-cyber-alert' : displayWait > 5 ? 'bg-gradient-to-r from-yellow-500 to-orange-400' : 'bg-gradient-to-r from-blue-500 to-cyber-accent'}`}></motion.div>
                          </div>
                        </motion.div>
                        )
                      })}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.aside>
              )}
              </AnimatePresence>
            </motion.main>

          ) : (

            /* ============================================================== */
            /* EXPANDED DETAIL VIEW LAYER                                     */
            /* ============================================================== */
            <motion.section
              key="expanded"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
              className={`flex-1 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a14] to-[#111827] overflow-y-auto style-scrollbars p-10 shadow-2xl relative z-20`}
            >
              <div className={`absolute top-0 left-0 w-full h-64 bg-gradient-to-b ${activeConfig.from} to-transparent opacity-10 pointer-events-none`}></div>

              <header className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
                <div>
                  <h1 className={`text-4xl font-black ${activeConfig.color} capitalize flex items-center gap-4`}>
                    {(() => {
                      const ActiveIcon = navItems.find(n => n.id === activeTab)?.icon;
                      return ActiveIcon ? <ActiveIcon className={`w-10 h-10 ${activeConfig.color}`} /> : null;
                    })()}
                    {navItems.find(n => n.id === activeTab)?.label}
                  </h1>
                  <p className="text-cyber-secondary font-mono tracking-widest mt-2 uppercase text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Deep Dive Analytics [{vState.meta.id}]
                  </p>
                </div>
                <button onClick={() => setActiveTab('home')} className="bg-white/5 hover:bg-white/10 text-white font-mono text-sm px-6 py-3 rounded-full border border-white/10 transition-colors flex items-center gap-2">
                  <Home className="w-4 h-4" /> Return to Home Base
                </button>
              </header>

              <div className="grid grid-cols-12 gap-8 relative z-10">
                <div className="col-span-8 space-y-8">
                  <div className={`bg-black/60 border ${activeConfig.border} rounded-2xl h-80 p-6 flex flex-col justify-between backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                    <span className="text-sm font-mono text-white/50 border-b border-white/10 pb-3 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span>VIEW HISTORICAL {activeTab.toUpperCase()}</span>
                        <div className="flex bg-white/5 rounded-lg p-0.5 border border-white/10">
                           {['1H', '12H', '24H'].map(tf => (
                             <button key={tf} onClick={() => setTimeframe(tf)} className={`px-2 py-0.5 text-[10px] rounded transition-all ${timeframe === tf ? activeConfig.border.replace('border', 'bg').replace('/40','') + ' text-black font-bold' : 'hover:bg-white/10 text-white/50'}`}>{tf}</button>
                           ))}
                        </div>
                      </div>
                      <span className={`${activeConfig.color} flex items-center gap-2`}><span className={`w-2 h-2 rounded-full animate-ping ${activeConfig.color.replace('text-', 'bg-')}`}></span> LIVE</span>
                    </span>
                    <div className="flex-1 flex items-end gap-3 px-2 pt-6" key={timeframe}>
                      {Array.from({ length: 30 }).map((_, i) => {
                        const baseH = timeframe === '24H' ? Math.random() * 60 : timeframe === '12H' ? Math.random() * 80 : Math.random() * 100;
                        const height = Math.max(20, baseH);
                        return (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: i * 0.02, duration: 1 }}
                            className={`flex-1 bg-gradient-to-t ${activeConfig.from} to-transparent rounded-t opacity-80 hover:opacity-100 transition-opacity`}
                          />
                        )
                      })}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8" key={scrambleKey}>
                    <button onClick={() => setScrambleKey(k => k + 1)} className={`text-left bg-black/60 border border-white/10 hover:${activeConfig.border} rounded-2xl p-8 backdrop-blur-xl transition-all hover:scale-[1.02] cursor-pointer relative overflow-hidden group`}>
                      <div className={`absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity ${activeConfig.color} font-mono text-[9px]`}>↻ RECALIBRATE</div>
                      <span className="text-xs font-mono text-white/50 block mb-2">{activeConfig.m1Label}</span>
                      <motion.p initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ type:'spring' }} className={`text-5xl ${activeConfig.color} font-black tracking-tighter`}>{activeConfig.m1Value}</motion.p>
                      <p className="text-sm text-white/40 mt-3 font-mono">System parameters holding nominal.</p>
                    </button>
                    <button onClick={() => setScrambleKey(k => k + 1)} className={`text-left bg-black/60 border border-white/10 hover:${activeConfig.border} rounded-2xl p-8 backdrop-blur-xl transition-all hover:scale-[1.02] cursor-pointer relative overflow-hidden group`}>
                      <div className={`absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity ${activeConfig.color} font-mono text-[9px]`}>↻ SYNCHRONIZE</div>
                      <span className="text-xs font-mono text-white/50 block mb-2">{activeConfig.m2Label}</span>
                      <motion.p initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.1, type: 'spring' }} className="text-5xl text-white font-black tracking-tighter">
                        {activeConfig.m2Value}
                      </motion.p>
                      <p className={`text-sm ${activeConfig.color} mt-3 font-mono`}>Active processing cycle verified.</p>
                    </button>
                  </div>
                </div>
                <div className="col-span-4 space-y-6">
                  {/* HARDWARE CALIBRATION CONTROLS */}
                  <div className={`bg-black/60 border hover:${activeConfig.border} border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg transition-colors`}>
                    <span className="text-[10px] font-mono text-white/50 border-b border-white/10 pb-2 block mb-4 flex justify-between tracking-widest uppercase">
                      <span>SYSTEM CALIBRATION</span>
                      <Radio className={`w-3.5 h-3.5 ${activeConfig.color}`} />
                    </span>
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between text-[10px] font-mono mb-1.5"><span className="text-white/60">SCAN FREQUENCY</span><span className={activeConfig.color}>{sysParams.freq} Hz</span></div>
                        <input type="range" min="60" max="240" value={sysParams.freq} onChange={e => setSysParams(p => ({ ...p, freq: Number(e.target.value) }))} className="w-full accent-cyber-accent h-1 bg-white/10 rounded-lg appearance-none cursor-ew-resize" />
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-mono mb-1.5"><span className="text-white/60">NETWORK BANDWIDTH</span><span className={activeConfig.color}>{sysParams.bandwidth.toFixed(1)} GB/s</span></div>
                        <input type="range" min="1" max="25" step="0.1" value={sysParams.bandwidth} onChange={e => setSysParams(p => ({ ...p, bandwidth: Number(e.target.value) }))} className="w-full accent-cyber-accent h-1 bg-white/10 rounded-lg appearance-none cursor-ew-resize" />
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-mono mb-1.5"><span className="text-white/60">HARDWARE COOLING</span><span className={activeConfig.color}>{sysParams.cooling}%</span></div>
                        <input type="range" min="20" max="100" value={sysParams.cooling} onChange={e => setSysParams(p => ({ ...p, cooling: Number(e.target.value) }))} className="w-full accent-cyber-accent h-1 bg-white/10 rounded-lg appearance-none cursor-ew-resize" />
                      </div>
                    </div>
                  </div>

                  {/* LOGS */}
                  <div className="bg-black/60 border border-white/10 rounded-2xl p-6 flex-1 backdrop-blur-xl shadow-2xl overflow-hidden h-[340px]">
                    <span className="text-[10px] font-mono text-white/50 border-b border-white/10 pb-2 block mb-4 flex justify-between tracking-widest uppercase">
                      <span>RAW NODE LOGS</span>
                      <Zap className={`w-3.5 h-3.5 ${activeConfig.color} animate-pulse`} />
                    </span>
                    <div className="space-y-4 overflow-y-auto style-scrollbars h-full pb-4">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="text-[11px] font-mono border-l-2 border-white/20 pl-3 text-white/60 hover:text-white transition-colors cursor-default hover:bg-white/5 py-1 -ml-1 pl-4 rounded-r">
                          <div className={`${activeConfig.color} mb-0.5 opacity-80 flex gap-2`}><span className="text-white/40">[{new Date().toLocaleTimeString()}]</span> {activeConfig.logPrefix}_{Math.floor(Math.random() * 100)}</div>
                          Subsystem request (HZ:{sysParams.freq}) valid. Sequence lag {Math.floor(Math.random() * 12)}ms.
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
