const SESSION_KEY = 'volomart_analytics_session_id';

export function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') {
    return '';
  }

  let sessionId = localStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = `${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    localStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

export function getOrCreateDeviceId(): string {
  if (typeof window === 'undefined') {
    return '';
  }

  const key = 'volomart_analytics_device_id';
  let deviceId = localStorage.getItem(key);
  if (!deviceId) {
    deviceId = `${navigator.userAgent}_${window.screen.width}x${window.screen.height}`;
    localStorage.setItem(key, deviceId);
  }
  return deviceId;
}
