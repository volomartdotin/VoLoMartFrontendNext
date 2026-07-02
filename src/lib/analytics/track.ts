import { getApiUrl } from '@/lib/api-config';
import { isMobilePlatform } from '@/lib/mobile-platform';
import { pageViewEventName } from '@/lib/analytics/events';
import { getOrCreateDeviceId, getOrCreateSessionId } from '@/lib/analytics/session';

type TrackDetails = Record<string, string | number | boolean>;

type TrackPayload = {
  eventType: 'page_view' | 'button_click';
  eventName: string;
  source: 'marketing_site';
  deviceType: string;
  page: string;
  sessionId: string;
  deviceId: string;
  details?: TrackDetails;
};

function getDeviceType(): string {
  if (typeof window === 'undefined') {
    return 'web';
  }
  if (isMobilePlatform()) {
    return 'mobile_web';
  }
  if (window.innerWidth >= 1024) {
    return 'desktop';
  }
  return 'web';
}

function sendPayload(payload: TrackPayload) {
  if (typeof window === 'undefined') {
    return;
  }

  const url = getApiUrl('/api/v1/analytics/track');
  const body = JSON.stringify(payload);

  // sendBeacon cannot perform CORS preflight, so JSON POSTs to a different
  // origin (e.g. localhost:3000 -> :5000, or www -> back.volomart.in) fail
  // silently. fetch + keepalive survives page unloads and supports preflight.
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch(() => {});
}

function track(
  eventType: TrackPayload['eventType'],
  eventName: string,
  page: string,
  details?: TrackDetails,
) {
  sendPayload({
    eventType,
    eventName,
    source: 'marketing_site',
    deviceType: getDeviceType(),
    page,
    sessionId: getOrCreateSessionId(),
    deviceId: getOrCreateDeviceId(),
    details,
  });
}

export function trackPageView(pathname: string, details?: TrackDetails) {
  track('page_view', pageViewEventName(pathname), pathname, details);
}

export function trackClick(
  eventName: string,
  page: string,
  details?: TrackDetails,
) {
  track('button_click', eventName, page, details);
}
