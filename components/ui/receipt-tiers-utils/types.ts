export interface Plan {
  id: string;
  name: string;
  tagline: string;
  /** Rupees per month. `annual` is the per-month price when billed yearly. */
  price: { monthly: number; annual: number } | null;
  cta: string;
  href?: string;
  badge?: string;
  features: string[];
}
