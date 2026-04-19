export interface TelemetryData {
  status: 'OPTIMAL' | 'WARNING' | 'CRITICAL';
  density: number;
  activeReroutes: number;
}

export interface HeatmapNode {
  id: string;
  label: string;
  status: 'flowing' | 'surge' | 'clear';
  x: number;
  y: number;
}

export interface RouteLog {
  id: string;
  path: string;
  status: 'REROUTED' | 'OPTIMAL' | 'DELAYED';
  detail: string;
}

export interface QueueData {
  id: string;
  name: string;
  waitTime: number;
  incentive?: string;
}

export interface GameEvent {
  eventName: string;
  timeRemaining: string;
  alertsDispatched: number;
  progressPercent: number;
}

export interface SecurityIncident {
  id: string;
  type: string;
  location: string;
  status: 'RESOLVING' | 'CRITICAL' | 'CLEARED';
  eta: string;
}

export interface TransitData {
  id: string;
  network: string;
  status: 'DELAYED' | 'ON TIME' | 'HEAVY TRAFFIC';
  impact: string;
}

export interface StaffData {
  id: string;
  department: string;
  deployed: number;
  total: number;
  status: 'OPTIMAL' | 'STRETCHED' | 'CRITICAL';
}

export interface SensorData {
  id: string;
  type: string;
  uptime: number;
  status: 'ONLINE' | 'DEGRADED' | 'OFFLINE';
}

export interface VenueMetadata {
  id: string;
  name: string;
  sectorSize: string;
  type: string;
}

export interface VenueState {
  meta: VenueMetadata;
  telemetry: TelemetryData;
  heatmap: HeatmapNode[];
  routes: RouteLog[];
  queues: QueueData[];
  timeline: GameEvent;
  security: SecurityIncident[];
  transit: TransitData[];
  staff: StaffData[];
  sensors: SensorData[];
}

class VenueAPISimulator {
  private registries: Record<string, VenueState> = {};

  constructor() {
    this.registries['velocity-stadium'] = this.createVenueState('velocity-stadium', 'Velocity Venue Primary', '50K SECTOR', 'Stadium', 'Metro L-Line Subway');
    
    // Internal server polling to mutate state for all venues simultaneously
    setInterval(() => {
      Object.values(this.registries).forEach(v => {
         v.telemetry.density = Math.max(20, Math.min(100, v.telemetry.density + (Math.random() - 0.5) * 2.5));
         v.telemetry.activeReroutes = Math.max(0, v.telemetry.activeReroutes + Math.floor((Math.random() - 0.5) * 15));
         
         v.queues.forEach(q => q.waitTime = Math.max(1, q.waitTime + Math.floor((Math.random() - 0.5) * 4)));
         v.staff.forEach(s => s.deployed = Math.max(0, Math.min(s.total, s.deployed + Math.floor((Math.random() - 0.5) * 5))));
         v.sensors.forEach(s => s.uptime = Math.min(100, Math.max(80, s.uptime + (Math.random() - 0.5) * 0.8)));
         
         v.timeline.progressPercent = Math.min(100, v.timeline.progressPercent + 0.3);
         v.timeline.alertsDispatched += Math.floor(Math.random() * 60);
      });
    }, 2000);
  }

  private simulateDelay<T>(data: T, delayMs: number = 300): Promise<T> {
    return new Promise((resolve) => setTimeout(() => resolve(data), delayMs));
  }

  private generateRandomHeatmapNodes(): HeatmapNode[] {
    const locations = ['Upper Concourse', 'Lower Bowl Entry', 'VIP Paddock', 'Merch Stand A', 'North Gate', 'South Gate', 'Transit Bridge'];
    const nodes: HeatmapNode[] = [];
    for(let i=0; i<4; i++) {
      nodes.push({
         id: `hn${i}`,
         label: locations.splice(Math.floor(Math.random()*locations.length), 1)[0],
         status: Math.random() > 0.5 ? 'surge' : (Math.random() > 0.5 ? 'flowing' : 'clear'),
         x: 15 + Math.random() * 70,
         y: 15 + Math.random() * 70
      });
    }
    return nodes;
  }

  private generateRandomQueues(type: string): QueueData[] {
     const food = type === 'Arena' ? ['Pizza Kiosk', 'Hot Dog Stand'] : ['Gourmet Burger', 'Craft Beer Tent', 'Vegan Hub'];
     const queues: QueueData[] = [];
     for(let i=0; i<3; i++) {
        queues.push({
           id: `q${i}`,
           name: food[Math.floor(Math.random() * food.length)] + ` (Sec ${Math.floor(100 + Math.random()*200)})`,
           waitTime: Math.floor(Math.random() * 25) + 2
        });
     }
     return queues;
  }

  private generateRandomSecurity(): SecurityIncident[] {
     const types = ['Spill Hazard', 'Lost Child', 'Medical Emergency', 'Turnstile Fault', 'Unruly Crowd', 'Bag Check Delay'];
     const statuses: ('RESOLVING' | 'CRITICAL' | 'CLEARED')[] = ['RESOLVING', 'CRITICAL', 'CLEARED'];
     const inc: SecurityIncident[] = [];
     for(let i=0; i<2; i++) {
        inc.push({
           id: `sec${i}`,
           type: types[Math.floor(Math.random()*types.length)],
           location: `Sector ${Math.floor(Math.random()*10)} Zone ${['A','B','C'][Math.floor(Math.random()*3)]}`,
           status: statuses[Math.floor(Math.random()*statuses.length)],
           eta: `${Math.floor(Math.random()*8)+1}m`
        });
     }
     return inc;
  }

  private createVenueState(id: string, name: string, size: string, type: string, transitHub: string): VenueState {
    const events = type === 'Concert' ? ['Encore Setup', 'Soundcheck', 'Main Act Finish'] 
                 : type === 'Arena' ? ['Halftime Show', 'Q3 Intermission', 'Timeout'] 
                 : ['Post-Match Surge', 'Pre-Game Entry', 'Weather Delay'];

    const baseReroutes = Math.random() > 0.5 ? Math.floor(Math.random() * 500) : 0;
    
    const transitStatus: ('DELAYED' | 'ON TIME' | 'HEAVY TRAFFIC')[] = ['DELAYED', 'ON TIME', 'HEAVY TRAFFIC'];
    const ts = transitStatus[Math.floor(Math.random() * transitStatus.length)];

    return {
       meta: { id, name, sectorSize: size, type },
       telemetry: {
         status: Math.random() > 0.7 ? 'WARNING' : 'OPTIMAL',
         density: 40 + Math.random() * 50,
         activeReroutes: baseReroutes,
       },
       heatmap: this.generateRandomHeatmapNodes(),
       routes: [
         { id: 'r1', path: `Gate A → Sec ${Math.floor(Math.random() * 100) + 100}`, status: Math.random() > 0.5 ? 'REROUTED' : 'OPTIMAL', detail: 'Dynamic pathway.' },
         { id: 'r2', path: 'Main Concourse → VIP', status: 'OPTIMAL', detail: 'Standard path clear.' },
         { id: 'r3', path: 'Level 2 → Restroom', status: Math.random() > 0.8 ? 'DELAYED' : 'REROUTED', detail: 'Surge expected based on timeline.' },
       ],
       queues: this.generateRandomQueues(type),
       timeline: {
         eventName: events[Math.floor(Math.random() * events.length)],
         timeRemaining: `${Math.floor(Math.random()*10)}m ${Math.floor(Math.random()*60)}s`,
         progressPercent: Math.random() * 95,
         alertsDispatched: Math.floor(Math.random() * 2000),
       },
       security: this.generateRandomSecurity(),
       transit: [
         { id: 't1', network: transitHub, status: ts, impact: ts === 'ON TIME' ? 'Flowing smoothly.' : 'Trains arriving with erratic spacing.' },
         { id: 't2', network: 'Main Parking Structure ' + ['North', 'South', 'West'][Math.floor(Math.random()*3)], status: 'HEAVY TRAFFIC', impact: `${Math.floor(80 + Math.random()*20)}% capacity. Redirecting.` },
       ],
       staff: [
         { id: 'st1', department: 'Security Details', deployed: Math.floor(100 + Math.random()*100), total: 200, status: Math.random() > 0.5 ? 'STRETCHED' : 'OPTIMAL' },
         { id: 'st2', department: 'Medics & EMS', deployed: Math.floor(10 + Math.random()*20), total: 30, status: 'OPTIMAL' },
         { id: 'st3', department: 'Sanitation Crew', deployed: Math.floor(30 + Math.random()*40), total: 80, status: 'OPTIMAL' },
       ],
       sensors: [
         { id: 'sn1', type: 'Bluetooth Density Beacons', uptime: 95 + Math.random()*5, status: 'ONLINE' },
         { id: 'sn2', type: 'FLIR Thermal Gates', uptime: 80 + Math.random()*20, status: Math.random() > 0.8 ? 'DEGRADED' : 'ONLINE' },
         { id: 'sn3', type: 'Turnstile Count Network', uptime: 100, status: 'ONLINE' },
       ]
    };
  }

  async getAllVenues(): Promise<VenueMetadata[]> {
    return this.simulateDelay(Object.values(this.registries).map(v => v.meta), 100);
  }

  async getVenueState(id: string): Promise<VenueState> {
    return this.simulateDelay(this.registries[id] || this.registries['velocity-stadium'], 50);
  }

  async generateNewVenue(name: string, capacity: string, type: string, transitHub: string): Promise<VenueMetadata> {
    const id = 'v_' + Math.random().toString(36).substring(7);
    this.registries[id] = this.createVenueState(id, name, capacity.toUpperCase(), type, transitHub);
    return this.registries[id].meta;
  }
}

export const VenueAPI = new VenueAPISimulator();
