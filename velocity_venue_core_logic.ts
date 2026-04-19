/**
 * Logic Modules & Core Reasoning Brain
 * "Velocity Venue" - Spatial Optimization Layer
 */

interface ConcourseNode {
  id: string;
  label: string;
  type: 'gate' | 'concession' | 'restroom' | 'seating';
}

interface PathEdge {
  from: string;
  to: string;
  distance: number; // Base walking distance in meters
  density: number; // 0.0 (empty) to 1.0 (gridlock)
}

export class VenueOrchestrator {
  private nodes: Map<string, ConcourseNode> = new Map();
  private edges: PathEdge[] = [];

  addNode(id: string, label: string, type: ConcourseNode['type']) {
    this.nodes.set(id, { id, label, type });
  }

  addPath(from: string, to: string, distance: number, density: number = 0) {
    this.edges.push({ from, to, distance, density });
    this.edges.push({ from: to, to: from, distance, density }); // Bi-directional
  }

  // Calculate dynamic weight using distance and congestion penalty
  private getDynamicWeight(edge: PathEdge): number {
    // If density > 0.8, penalty represents exponential friction (Google Maps Indoor Traffic analog)
    const congestionPenalty = edge.density > 0.8 ? Math.pow(edge.density * 5, 2) : edge.density * 2;
    return edge.distance * (1 + congestionPenalty);
  }

  /**
   * Logic Module A: Crowd-Flow Engine
   * Dijkstra's Algorithm augmented with Dynamic Indoor Density Weights
   */
  calculateOptimalPath(startId: string, endId: string): { path: string[], cost: number, isRerouted: boolean, routingMessage: string } {
    const distances = new Map<string, number>();
    const previous = new Map<string, string>();
    const unvisited = new Set<string>();

    this.nodes.forEach((_, id) => {
      distances.set(id, Infinity);
      unvisited.add(id);
    });
    distances.set(startId, 0);

    while (unvisited.size > 0) {
      let current = Array.from(unvisited).reduce((minNode, node) => 
        (distances.get(node)! < distances.get(minNode)!) ? node : minNode
      );
      
      if (current === endId) break;
      unvisited.delete(current);

      const neighbors = this.edges.filter(e => e.from === current);
      for (const edge of neighbors) {
        if (!unvisited.has(edge.to)) continue;

        const altCost = distances.get(current)! + this.getDynamicWeight(edge);
        if (altCost < distances.get(edge.to)!) {
          distances.set(edge.to, altCost);
          previous.set(edge.to, current);
        }
      }
    }

    const path: string[] = [];
    let curr: string | undefined = endId;
    while (curr) {
      path.unshift(curr);
      curr = previous.get(curr);
    }

    const isRerouted = this.detectHighDensityReroute(path);
    let message = "[Live Status] Route clear.\n[The Fast-Track] Proceed to destination.";
    if (isRerouted) {
      message = "[Live Status] Heavy congestion detected on main concourse.\n[The Fast-Track] Rerouting via scenic path for shorter transit time.";
    }

    return { path, cost: distances.get(endId)!, isRerouted, routingMessage: message };
  }

  private detectHighDensityReroute(path: string[]): boolean {
     // Mock proxy for determining if the path avoided the shortest-but-crowded main route
     // In production, compare shortest distance route vs shortest weighted route
     return false; // Mock default
  }

  /**
   * Logic Module B: Predictive Halftime Surge
   * Event Timeline Monitor
   */
  checkEventTimeline(currentTimeMinutes: number, halftimeMinutes: number = 90): string {
    const timeToBreak = halftimeMinutes - currentTimeMinutes;
    if (timeToBreak > 0 && timeToBreak <= 5) {
      return "[Pro-Tip] Halftime surge predicted in 5 minutes! Pre-order concessions now to skip the rush.";
    }
    return "[Live Status] Venue flow is standard.";
  }

  /**
   * Logic Module C: The "Smart Queue"
   */
  evaluateVendorQueue(vendorId: string, waitTimeMinutes: number): string {
    if (waitTimeMinutes > 10) {
      return `[The Fast-Track] Wait time at ${vendorId} is ${waitTimeMinutes}m. Walk 2 mins to Concourse B for a <3m wait, or claim a 10% discount to wait 15m later via Google Pay.`;
    }
    return `[The Fast-Track] Queue is moving fast. Expected wait: ${waitTimeMinutes}m.`;
  }
}
