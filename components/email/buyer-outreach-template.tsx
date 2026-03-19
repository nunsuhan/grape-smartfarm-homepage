'use client';

import { Mail, Globe, Shield, TrendingUp, CheckCircle } from 'lucide-react';

interface BuyerOutreachTemplateProps {
  buyerName?: string;
  buyerCountry?: string;
  productInterest?: string;
}

export function BuyerOutreachTemplate({
  buyerName = '[Buyer Name]',
  buyerCountry = '[Country]',
  productInterest = 'premium grapes'
}: BuyerOutreachTemplateProps) {
  const emailContent = `Subject: Premium ${productInterest} Supply from Verified Korean Farms via FarmSense Platform

Dear ${buyerName},

I'm reaching out from FarmSense, Korea's leading agricultural intelligence platform that connects premium produce growers with international buyers like yourself in ${buyerCountry}.

**Why This Matters for Your Business:**
• **Supply Stability**: Real-time production data from 500+ verified farms
• **Quality Assurance**: Blockchain-tracked quality metrics from harvest to shipment
• **Risk Reduction**: PLS compliance verification for ${buyerCountry} market requirements
• **Transparency**: Complete traceability with temperature-controlled logistics

**FarmSense Platform Benefits for Buyers:**

✓ **Verified Supply Chain**
  - Real-time farm production monitoring
  - Quality metrics tracking (Brix, acidity, firmness)
  - Export compliance documentation automated

✓ **Risk Management**
  - Pesticide residue monitoring with safety-day calculations
  - Temperature-controlled logistics tracking
  - Blockchain-based authenticity verification

✓ **Market Intelligence**
  - Seasonal availability forecasting
  - Quality consistency across shipments
  - Direct farmer communication channels

**Current Available Supply:**
• Premium Grapes (Shine Muscat, Campbell Early)
• Melons (Korean premium varieties)  
• Apples (Fuji, Hongro)
• Custom crop programs available

**Next Steps:**
1. Visit our Export Intelligence Portal: https://farmsense.kr/export-intelligence
2. Schedule a platform demo to see real farm data
3. Connect with verified farmers through our matching system

FarmSense transforms how international buyers source premium Korean produce — moving from transactional relationships to data-driven partnerships.

Best regards,

The FarmSense Team
Export Intelligence Division
contact@farmsense.kr
+82-XXX-XXXX-XXXX

---
FarmSense Platform: Data-Driven Agricultural Intelligence
https://farmsense.kr`;

  const keyFeatures = [
    {
      icon: Shield,
      title: 'Verified Quality',
      description: 'Blockchain-tracked quality metrics from harvest to shipment'
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'PLS and import regulation compliance for target markets'
    },
    {
      icon: TrendingUp,
      title: 'Supply Stability',
      description: 'Real-time production monitoring across 500+ farms'
    },
    {
      icon: CheckCircle,
      title: 'Risk Management',
      description: 'Pesticide monitoring and temperature-controlled logistics'
    }
  ];

  return (
    <div className="bg-neutral-black text-neutral-cream p-6 rounded-2xl border border-white/10">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-secondary-gold/10 p-2 rounded-lg">
          <Mail className="w-6 h-6 text-secondary-gold" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Buyer Outreach Email Template</h3>
          <p className="text-neutral-cream/60 text-sm">Customizable template for export business development</p>
        </div>
      </div>

      {/* Email Preview */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-white mb-2">Email Content Preview</h4>
          <p className="text-sm text-neutral-cream/60 mb-4">Personalize with buyer details and product interests</p>
        </div>
        
        <div className="bg-black/40 border border-white/5 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap overflow-x-auto max-h-96 overflow-y-auto">
          {emailContent}
        </div>
      </div>

      {/* Key Features for Outreach */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">Key Value Propositions</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-secondary-gold/10 p-2 rounded-lg">
                    <Icon className="w-4 h-4 text-secondary-gold" />
                  </div>
                  <span className="font-medium text-white">{feature.title}</span>
                </div>
                <p className="text-sm text-neutral-cream/70">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Outreach Strategy */}
      <div className="bg-secondary-gold/5 border border-secondary-gold/20 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-white mb-4">Outreach Strategy</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-secondary-gold/10 text-secondary-gold text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">1</div>
            <div>
              <p className="font-medium text-white">Target Buyer Segmentation</p>
              <p className="text-sm text-neutral-cream/70">Focus on premium retailers, importers in Singapore, Taiwan, Japan, UAE</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-secondary-gold/10 text-secondary-gold text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">2</div>
            <div>
              <p className="font-medium text-white">Personalization Points</p>
              <p className="text-sm text-neutral-cream/70">Reference specific import regulations, seasonal availability, quality metrics</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-secondary-gold/10 text-secondary-gold text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">3</div>
            <div>
              <p className="font-medium text-white">Call-to-Action</p>
              <p className="text-sm text-neutral-cream/70">Direct to export-intelligence page for interactive platform demo</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-secondary-gold/10 text-secondary-gold text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">4</div>
            <div>
              <p className="font-medium text-white">Follow-up Sequence</p>
              <p className="text-sm text-neutral-cream/70">Platform demo → Farm data access → Sample shipment coordination</p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Tracking */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <h4 className="text-lg font-semibold text-white mb-4">Outreach Metrics to Track</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary-gold mb-1">40%</div>
            <div className="text-xs text-neutral-cream/60">Open Rate Target</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary-gold mb-1">15%</div>
            <div className="text-xs text-neutral-cream/60">Reply Rate Target</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary-gold mb-1">5%</div>
            <div className="text-xs text-neutral-cream/60">Demo Conversion</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary-gold mb-1">90 days</div>
            <div className="text-xs text-neutral-cream/60">Sales Cycle Target</div>
          </div>
        </div>
      </div>
    </div>
  );
}