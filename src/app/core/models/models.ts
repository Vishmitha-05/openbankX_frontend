/* ============================================
   models.ts — All TypeScript Interfaces
   Maps directly to the backend entity models
   ============================================ */

// ========== Session ==========

export interface LoginSession {
  userId: number;
  name: string;
  email: string;
  role: 'CUSTOMER' | 'TPP' | 'OPERATIONS' | 'ADMIN';
  token: string;
}

// ========== Module 1: Identity & Auth ==========

export interface User {
  userId: number;
  name: string;
  role: 'CUSTOMER' | 'TPP' | 'OPERATIONS' | 'ADMIN';
  email: string;
  phone: string;
  password?: string;
  status: 'ACTIVE' | 'LOCKED';
}

export interface AuthClient {
  clientId: number;
  tppApp: TPPApp;
  clientType: 'CONFIDENTIAL' | 'PUBLIC';
  redirectURIs: string;
  scopesAllowed: string;
  status: 'ACTIVE' | 'REVOKED';
}

export interface Token {
  tokenId: number;
  authClient: AuthClient;
  user: User;
  tokenType: 'ACCESS' | 'REFRESH';
  scope: string;
  issuedAt: string;
  expiresAt: string;
  status: 'ACTIVE' | 'REVOKED';
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  tokenId: number;
}

export interface SCAEvent {
  scaEventId: number;
  user: User;
  method: 'OTP' | 'DEVICE' | 'APP';
  result: 'PASS' | 'FAIL';
  eventTime: string;
  referenceId: string;
  verified?: boolean;
}

export interface AuthorizeResponse {
  userId: number;
  userName: string;
  consentId: number;
  scopes: string;
  tppAppName: string;
  expiryDate: string;
  status: string;
  message: string;
}

// ========== Module 2: TPP Onboarding ==========

export interface TPP {
  tppId: number;
  legalName: string;
  registrationNumber: string;
  contactInfo: string;
  certificationRef: string;
  status: 'SANDBOX' | 'PRODUCTION' | 'SUSPENDED';
}

export interface TPPApp {
  tppAppId: number;
  tpp: TPP;
  appName: string;
  redirectURIs: string;
  publicKeysJWKSet: string;
  scopesRequested: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

export interface AppStats {
  tppAppId: number;
  appName: string;
  totalApiCalls: number;
  errorCalls: number;
  errorRate: string;
  avgLatencyMs: number;
}

// ========== Module 3: Consent ==========

export interface Consent {
  consentId: number;
  user: User;
  tppApp: TPPApp;
  scopeJSON: string;
  resourceFilterJSON: string;
  createdDate: string;
  expiryDate: string;
  status: 'ACTIVE' | 'REVOKED' | 'EXPIRED' | 'AWAITING_SCA';
}

export interface ConsentEvent {
  consentEventId: number;
  consent: Consent;
  eventType: 'CREATE' | 'REVOKE' | 'EXPIRE' | 'AMEND';
  eventDate: string;
  performedBy: 'USER' | 'TPP' | 'ADMIN';
  notes: string;
}

// ========== Module 4: API Products ==========

export interface APIProduct {
  productId: number;
  name: string;
  description: string;
  endpointsJSON: string;
  status: 'ACTIVE' | 'DEPRECATED';
}

export interface APIPlan {
  planId: number;
  apiProduct: APIProduct;
  environment: 'SANDBOX' | 'PRODUCTION';
  rateLimitPerMin: number;
  dailyQuota: number;
  sla: number;

  // ✅ ADD THESE TWO FIELDS
  durationValue: number;
  durationUnit: 'DAYS' | 'MONTHS' | 'YEARS';
}

export interface TPPSubscription {
  subscriptionId: number;
  tppApp: TPPApp;
  apiPlan: APIPlan;
  subscribedDate: string;
  expiryDate: string;
  status: 'ACTIVE' | 'SUSPENDED' | 'CANCELLED';
}

// ========== Module 5: API Gateway ==========

export interface APILog {
  apiLogId: number;
  tppApp: TPPApp;
  authClient: AuthClient;
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  statusCode: number;
  latencyMs: number;
  timestamp: string;
}

export interface RateLimitCounter {
  counterId: number;
  tppApp: TPPApp;
  periodStart: string;
  count: number;
  limitWindow: 'MINUTE' | 'DAY';
}

// ========== Module 6: Accounts, Payments, Funds ==========

export interface AccountRef {
  accountId: number;
  user: User;
  accountNumberMasked: string;
  type: 'SAVINGS' | 'CURRENT' | 'CARD';
  currency: string;
  status: 'ACTIVE' | 'CLOSED';
  balance: number; // ✅ Added to match backend
}


export interface TransactionRef {
  txnRefId: number;
  accountRef: AccountRef;
  txnDate: string;
  amount: number;
  txnType: 'DEBIT' | 'CREDIT';
  narrative: string;
}

export interface PaymentInitiation {
  paymentId: number;
  tppApp: TPPApp;
  debtorAccountRef: string;
  creditorAccountRef: string;
  amount: number;
  currency: string;
  status: 'CREATED' | 'AUTHORIZED' | 'REJECTED' | 'EXECUTED';
  createdDate: string;
}

export interface PaymentInitiationRequest {
  tppAppId: number;
  debtorAccountRef: string;
  creditorAccountRef: string;
  amount: number;
  currency: string;
}

export interface FundsCheck {
  fundsCheckId: number;
  tppApp: TPPApp;
  accountRef: AccountRef;
  amount: number;
  currency: string;
  result: 'SUFFICIENT' | 'INSUFFICIENT';
  checkedDate: string;
}

// ========== Module 7: Monitoring ==========

export interface APIUsageReport {
  reportId: number;
  scope: string;
  metrics: string; // JSON string
  generatedDate: string;
}

export interface Incident {
  incidentId: number;
  category: 'OUTAGE' | 'LATENCY' | 'SECURITY';
  description: string;
  detectedDate: string;
  status: 'OPEN' | 'MITIGATED' | 'CLOSED';
}

// ========== Module 8: Audit & Compliance ==========

export interface AuditTrail {
  trailId: number;
  actorType: 'USER' | 'TPP' | 'SYSTEM';
  actorId: string;
  action: string;
  resource: string;
  timestamp: string;
  metadata: string;
}

export interface ComplianceReport {
  compReportId: number;
  scope: string;
  metrics: string; // JSON string
  generatedDate: string;
}

// ========== Module 9: Notifications ==========

export interface Notification {
  notificationId: number;
  recipientType: 'USER' | 'TPP' | 'ADMIN';
  recipientId: string;
  message: string;
  category: 'CONSENT' | 'SECURITY' | 'USAGE' | 'INCIDENT';
  status: 'UNREAD' | 'READ' | 'DISMISSED';
  createdDate: string;
}

// ========== Login / Session ==========

export interface LoginSession {
  userId: number;
  name: string;
  email: string;
  role: 'CUSTOMER' | 'TPP' | 'OPERATIONS' | 'ADMIN';
  token: string;
}
