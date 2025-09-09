// For Rhizome Syria Recovery Dashboard

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/recovery-dashboard-sw.js')
      .then((registration) => {
        console.log('Recovery Dashboard SW registered: ', registration.scope);
      })
      .catch((error) => {
        console.log('Recovery Dashboard SW registration failed: ', error);
      });
  });
}

// Data Adapter Class
class DataAdapter {
  constructor(apiEndpoint) {
    this.apiEndpoint = apiEndpoint;
    this.cache = new Map();
    this.offlineData = null;
    this.isOnline = navigator.onLine;

    // Setup online/offline detection
    window.addEventListener('online', () => this.setOnlineStatus(true));
    window.addEventListener('offline', () => this.setOnlineStatus(false));

    // Initialize offline data from localStorage if available
    this.loadOfflineData();
  }

  setOnlineStatus(status) {
    this.isOnline = status;

    // If we're coming back online, try to sync data
    if (status) {
      this.syncData();
    }

    // Dispatch event so components can update
    const event = new CustomEvent('connectivity-change', {
      detail: { online: status },
    });
    window.dispatchEvent(event);
  }

  async fetchData(endpoint, params = {}, forceRefresh = false) {
    const cacheKey = `${endpoint}:${JSON.stringify(params)}`;

    // Return cached data if available and not forcing refresh
    if (!forceRefresh && this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // If offline, return offline data or error
    if (!this.isOnline) {
      if (this.offlineData && this.offlineData[cacheKey]) {
        return this.offlineData[cacheKey];
      }
      throw new Error('You are offline and no cached data is available');
    }

    // Construct URL with parameters
    const url = new URL(`${this.apiEndpoint}/${endpoint}`);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      // Cache the data
      this.cache.set(cacheKey, data);

      // Update offline data
      this.updateOfflineData(cacheKey, data);

      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  loadOfflineData() {
    try {
      const savedData = localStorage.getItem('recovery_dashboard_offline_data');
      if (savedData) {
        this.offlineData = JSON.parse(savedData);
      } else {
        this.offlineData = {};
      }
    } catch (error) {
      console.error('Error loading offline data:', error);
      this.offlineData = {};
    }
  }

  updateOfflineData(key, data) {
    if (!this.offlineData) {
      this.offlineData = {};
    }

    this.offlineData[key] = data;

    // Save to localStorage
    try {
      localStorage.setItem(
        'recovery_dashboard_offline_data',
        JSON.stringify(this.offlineData)
      );
    } catch (error) {
      console.error('Error saving offline data:', error);
    }
  }

  async syncData() {
    // Refresh all cached data when we come back online
    const syncPromises = [];

    for (const [cacheKey] of this.cache.entries()) {
      const [endpoint, paramsJson] = cacheKey.split(':');
      const params = paramsJson ? JSON.parse(paramsJson) : {};

      syncPromises.push(this.fetchData(endpoint, params, true));
    }

    return Promise.allSettled(syncPromises);
  }

  clearCache() {
    this.cache.clear();
  }
}

// Base Task Class
class BaseTask {
  constructor(id, title, description, priority = 'medium', status = 'pending') {
    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority; // 'high', 'medium', 'low'
    this.status = status; // 'pending', 'in-progress', 'completed'
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.completedAt = null;
    this.assignedTo = null;
  }

  update(data) {
    Object.assign(this, data);
    this.updatedAt = new Date();

    if (this.status === 'completed' && !this.completedAt) {
      this.completedAt = new Date();
    }

    return this;
  }

  assign(userId) {
    this.assignedTo = userId;
    this.updatedAt = new Date();
    return this;
  }

  complete() {
    this.status = 'completed';
    this.completedAt = new Date();
    this.updatedAt = new Date();
    return this;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      priority: this.priority,
      status: this.status,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
      completedAt: this.completedAt ? this.completedAt.toISOString() : null,
      assignedTo: this.assignedTo,
    };
  }
}

// Export for use in the React components
window.RecoveryDashboardUtils = {
  DataAdapter,
  BaseTask,
};
