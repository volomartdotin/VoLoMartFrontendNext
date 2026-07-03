export const AnalyticsEvents = {
  headerNavClick: 'header_nav_click',
  footerLinkClick: 'footer_link_click',
  homepageCta: 'homepage_cta',
  pricingPlanCta: 'pricing_plan_cta',
  registerSubmit: 'register_submit',
  contactSubmit: 'contact_submit',
  earlyAccessOpen: 'early_access_open',
  earlyAccessSubmit: 'early_access_submit',
  subscribeSubmit: 'subscribe_submit',
  blogPostClick: 'blog_post_click',
} as const;

export function pageViewEventName(pathname: string) {
  return `page_view:${pathname}`;
}
