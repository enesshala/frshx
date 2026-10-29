import type { Metadata } from "next";
import { ClosingBand } from "@/components/closing-band";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Finance Services",
  description:
    "Accounting, financial planning and analysis, and CFO or Controller oversight, scoped as agreed deliverables.",
};

const accounting = [
  "Bookkeeping and general-ledger maintenance.",
  "Chart-of-accounts setup, mapping and improvement.",
  "Month-end and year-end close support.",
  "Journals, accruals, prepayments and cut-off review.",
  "Bank, credit-card and payment-platform reconciliations.",
  "Supplier bills, accounts payable and supplier-statement reconciliations.",
  "Customer balances, accounts receivable and reconciliation support.",
  "Fixed-asset registers, additions, disposals and depreciation.",
  "Balance-sheet reconciliations and supporting schedules.",
  "Financial-statement preparation and accounting reports under the agreed reporting framework.",
  "Audit preparation and coordination with external advisers.",
];

const fpa = [
  "Annual budgets and rolling forecasts.",
  "Short-term and longer-term cash-flow forecasts.",
  "Cash-flow management and working-capital analysis.",
  "Actual-versus-budget and variance analysis.",
  "Profitability, margin and cost analysis.",
  "Business-specific KPIs and management dashboards.",
  "Scenario planning and sensitivity analysis.",
  "Break-even analysis and investment modelling.",
  "Financial recommendations and management review meetings.",
];

const cfo = [
  "Financial control of the business.",
  "Review of accounting quality and balance-sheet integrity.",
  "Ownership and coordination of the reporting calendar.",
  "Management accounts and complete agreed financial-reporting packs.",
  "P&L, balance sheet and cash-flow reporting with commentary.",
  "Budget and forecast oversight.",
  "Cash priorities and financial-risk monitoring.",
  "Internal-control and finance-process improvements.",
  "Coordination with the client’s finance team, management and external advisers.",
  "Decision support for owners and business leaders.",
];

const aiUses = [
  "Extracting information from documents and suggesting how transactions might be coded.",
  "Matching items in a reconciliation and listing the exceptions.",
  "Preparing data for reports and refreshing management dashboards.",
  "Drafting commentary for a professional to edit before it is issued.",
  "Assisting with forecast versions and scenarios.",
  "Tracking close tasks so the reporting calendar stays visible.",
];

function Deliverables({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 grid md:grid-cols-2 md:gap-x-12">
      {items.map((item) => (
        <li key={item} className="border-t border-line py-3 text-base leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function FinanceServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Finance services"
        title="Agreed deliverables for the finance work you need done."
        lede="Accounting, forward-looking analysis, and financial oversight are separate offerings. Fees reflect the scope we agree, not hours worked. Scope depends on business complexity, entities, transaction volumes, systems, and reporting requirements."
      />

      <article id="accounting" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <p className="font-serif text-3xl text-teal">01</p>
        <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">Accounting</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Comprehensive accounting support that keeps the ledger current, the
          close orderly, and the statements ready for the framework you report
          under.
        </p>
        <Deliverables items={accounting} />
      </article>

      <article id="fpa" className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-3xl text-teal">02</p>
            <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
              CFO Guide — Financial Planning & Analysis
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Forward-looking financial support for budgets, cash, margins, and
              the questions management is about to face.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ol className="divide-y divide-line border-y border-line">
              {fpa.map((item, index) => (
                <li key={item} className="grid grid-cols-12 gap-4 py-4">
                  <span className="col-span-2 font-serif text-lg text-teal sm:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 text-base leading-relaxed sm:col-span-11">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>

      <article id="cfo" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <p className="font-serif text-3xl text-teal">03</p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl text-navy sm:text-4xl">
          CFO / Controller
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Financial oversight and management reporting for owners who need
          someone accountable for the quality of the numbers and the rhythm of
          reporting.
        </p>
        <Deliverables items={cfo} />
      </article>

      <section className="border-y border-line bg-paper" aria-labelledby="scope-title">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <h2 id="scope-title" className="font-serif text-3xl text-navy">
            A proposal, not a bundled package
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Fees reflect agreed scope and deliverables rather than hours
              worked. What is included depends on the complexity of the
              business, the number of entities, transaction volumes, the
              systems in use, and the reporting you need.
            </p>
            <p>
              Clients can combine services through a tailored proposal.
              Choosing Accounting does not automatically include FP&A or CFO
              oversight, and a CFO engagement does not automatically include
              the full accounting scope. Each offering is agreed on its own
              terms.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-12" aria-labelledby="service-ai-title">
        <div className="lg:col-span-5">
          <h2 id="service-ai-title" className="font-serif text-3xl text-navy">
            Where automation is used
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-base leading-relaxed text-muted">
            On an agreed engagement, practical tools can support the work.
            They depend on your systems, the access you approve, and the
            scope in the proposal. A person reviews material outputs and
            reconciles them to source records. Automation does not approve
            payments, submit filings, or decide accounting treatment.
          </p>
          <ul className="mt-6 space-y-3">
            {aiUses.map((item) => (
              <li key={item} className="border-l-2 border-teal pl-4 text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingBand
        title="Request a proposal for the scope you actually need."
        text="Describe the entities, systems, and reporting. We will reply with what can be delivered, and what sits outside the engagement."
        href="/contact?intent=services"
        label="Request a Proposal"
      />
    </>
  );
}
