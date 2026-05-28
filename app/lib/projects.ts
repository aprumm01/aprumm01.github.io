export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  annotation?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface GalleryItem {
  title: string;
  year: string;
  category: string;
  description: string;
  src: string;
  alt: string;
}

export interface Section {
  heading: string;
  paragraphs: string[];
  images?: ProjectImage[];
  stats?: Stat[];
  gallery?: GalleryItem[];
}

export interface Project {
  slug: string;
  number: string;
  category: string;
  title: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  images: ProjectImage[];
  accentColor: string;
  overviewStats?: Stat[];
  sections: Section[];
}

const _projects: Project[] = [
  {
    slug: "sap-concur",
    number: "01",
    category: "Enterprise Product Design · SAP Concur",
    title: "Corporate Travel & AI",
    role: "Principal UX Designer, Design Lead, Travel UX",
    period: "2021–Present",
    description:
      "Design lead for SAP Concur's Travel UX team, a platform serving tens of millions of business travelers across 103 countries with 49.6% market share in T&E software. Since 2023 I've led AI interaction design for SAP Joule across all four booking verticals, and I built the team's Synthetic User Tool entirely from scratch. In my earlier role as Sr. UX Design Specialist, I owned the full air booking flow: search, multi-fare display, seat selection, fare merchandising, and review & book.",
    highlights: [
      "Leading conversational UI and AI interaction design for SAP Joule, integrated across all travel booking verticals",
      "Built a Synthetic User Tool solo: raw customer feedback → monthly content analysis → synthetic personas segmentable by market, now used across the design team",
      "Led \"Tell Concur About Your Trip,\" a net-new multi-vertical booking workflow with new design system components",
      "Designed the multi-fare display architecture using progressive disclosure to balance traveler comprehension with information density",
      "Scaled the multi-fare interaction system across hotel, rental car, and rail, creating a unified architecture across the full travel ecosystem",
      "20+ external customer engagement sessions; 10–20 alpha-phase internal usability tests; WCAG 2.1 AA compliance across the air booking flow",
    ],
    tags: ["AI Interaction Design", "Conversational UI", "Enterprise UX", "Design Systems", "Accessibility", "Usability Testing"],
    images: [
      {
        src: "/projects/sap-concur/search-results.jpg",
        alt: "SAP Concur air search results with fare comparison",
        annotation: "The air search results view, showing multiple flight options with fare tiers, pricing, and policy indicators. The core challenge was presenting enough information for a confident decision without overwhelming the traveler.",
      },
      {
        src: "/projects/sap-concur/fare-merchandising.png",
        alt: "SAP Concur multi-fare merchandising display",
        annotation: "The multi-fare merchandising display translates airline fare family structure into comparable tiers with included services shown inline. Ancillaries like bags and upgrades appear in context rather than surfacing only at checkout.",
      },
      {
        src: "/projects/sap-concur/review-book.png",
        alt: "SAP Concur review and book confirmation screen",
        annotation: "The review and book screen consolidates itinerary details, policy status, traveler info, and payment in a single step before submission. WCAG 2.1 AA compliance was a procurement requirement across this entire flow.",
      },
    ],
    accentColor: "#0a1628",
    overviewStats: [
      { value: "103", label: "countries" },
      { value: "~80K", label: "monthly active users" },
      { value: "49.6%", label: "T&E market share" },
      { value: "4", label: "booking verticals in Joule" },
    ],
    sections: [
      {
        heading: "The Challenge",
        paragraphs: [
          "Airlines publish hundreds of fare options within a single route: different cabin classes, branded fares with varying included services, and policies that range from fully refundable to use-it-or-lose-it. Add corporate travel: policy restrictions, preferred carrier agreements, approval workflows, and travelers who just want to get to Chicago by Tuesday morning. The UX challenge isn't just clarity; it's presenting the right information at the right moment without overwhelming the decision.",
          "When I took ownership of the air booking flow in 2021, the fare display was flat. Travelers had to mentally compare fare options without enough context about what they were actually choosing. The seat map interaction had usability problems that surfaced repeatedly in testing. Across the platform, there was no consistent pattern for how ancillary services (bags, upgrades, seat fees) were presented or priced.",
        ],
      },
      {
        heading: "Multi-Fare Display & Information Architecture",
        paragraphs: [
          "The multi-fare display was the first major design challenge. The core tension: airline fares carry a lot of information (price, flexibility, seat, bags, status benefits) but traveler attention in a booking flow is limited. Drawing on rank-order research from a prior team, I designed a progressive disclosure model: the primary view leads with the most decision-relevant information, and details surface on demand.",
          "The design went through multiple iterations. Early versions erred toward information richness, which worked for power travelers but created cognitive overload for infrequent business travelers. I pushed for a simpler primary view. That tension is real in enterprise products; balancing traveler comprehension against stakeholder feature requests is part of the job, and not every argument is yours to win.",
          "Alongside the fare display, I redesigned the seat map interaction model and led WCAG 2.1 AA accessibility compliance across the entire air booking flow, a requirement for enterprise customers with strict procurement standards. Over two years I ran 20+ external customer engagement sessions using moderated interviews, usability studies, focus groups, and hybrid contextual inquiry, plus 10–20 alpha-phase internal usability tests.",
        ],
        images: [
          {
            src: "/projects/sap-concur/search-results.jpg",
            alt: "Air search results, fare comparison layout",
            caption: "Search results with fare comparison",
            annotation: "Each result row balances fare name, price, policy status, and included services. The visual hierarchy prioritizes policy compliance first (a core requirement for corporate booking), then price, then fare features.",
          },
          {
            src: "/projects/sap-concur/fare-merchandising.png",
            alt: "Multi-fare merchandising display",
            caption: "Multi-fare merchandising",
            annotation: "Fare families are presented as comparable columns rather than a flat list. This pattern lets travelers see at a glance what they gain or lose between fare tiers, a critical decision point in managed travel where upgrading often requires an approval workflow.",
          },
        ],
      },
      {
        heading: "Scaling Across Verticals",
        paragraphs: [
          "Once the multi-fare architecture was stable for air, I scaled the interaction system across hotel, rental car, and rail, creating a unified experience architecture across Concur's full corporate travel ecosystem. Defining shared patterns for rate comparison, ancillary selection, and booking confirmation that flex across verticals without fragmenting the design language was a significant systems design challenge.",
          "I also established a travel-specific design patterns file in Figma, a library of approved patterns built alongside the SAP Fiori design system, which doesn't natively address travel-specific UX problems like seat maps, fare tables, or multi-leg itinerary displays.",
        ],
        images: [
          {
            src: "/projects/sap-concur/review-book.png",
            alt: "Review and book confirmation screen",
            caption: "Review & book",
            annotation: "The review and book screen is the highest-stakes step in the flow, where travelers confirm everything before spending potentially thousands of dollars in company money. Information hierarchy, error prevention, and policy status indicators all converge here.",
          },
        ],
      },
      {
        heading: "SAP Joule: Conversational AI for Travel",
        paragraphs: [
          "In May 2023 I was promoted to Principal UX Designer and took on a wider scope: design lead for the Travel UX team across both product lines, and lead for all AI interaction design. SAP Joule is SAP's enterprise AI assistant, a conversational interface layered across enterprise workflows. My job is integrating travel booking into Joule and maintaining consistency across multiple concurrent AI initiatives touching the Travel product.",
          "All four booking verticals are now integrated: air, hotel, rental car, and rail. The interaction design challenges here are distinct from traditional UI. How do you handle policy enforcement in a conversational context? What happens when a traveler's request doesn't map cleanly to available options? How do you build trust in AI recommendations when the stakes are a $2,000 international business-class ticket that has to meet a compliance policy?",
          "The work spans discovery research, usability testing for the Joule experience, aligning conversational UI patterns with traveler mental models, and bridging customer expectations with what the AI can actually do reliably. I run customer validation sessions and work with product and engineering to define what belongs in conversational booking versus what still requires the traditional UI.",
        ],
      },
      {
        heading: "Synthetic User Tool",
        paragraphs: [
          "Beyond the product work, I built a Synthetic User Tool entirely from scratch. I was the only person at SAP Concur doing this work. The problem: roughly 25,000 feedback comments arrive each month from users of my product area alone. The insights get lost or filtered through whoever summarized last month's data.",
          "I designed a full data pipeline: raw customer feedback is downloaded monthly, analyzed, and pushed to GitHub where it combines with previous months' data. That aggregated dataset compiles into synthetic user personas, AI-generated users segmentable by market, device, travel frequency, and other dimensions. An evaluation layer contrasts how a synthetic user assesses a design against real design evaluation criteria, incorporating WCAG accessibility standards, Nielsen Norman heuristics, and SAP Fiori, iOS, and Material Design guidelines.",
          "The design team uses it now. It didn't require organizational buy-in, a roadmap slot, or an engineering sprint.",
        ],
        stats: [
          { value: "~25K", label: "feedback comments/month" },
          { value: "4", label: "booking verticals in Joule" },
          { value: "20+", label: "customer engagement sessions" },
          { value: "WCAG 2.1 AA", label: "accessibility standard" },
        ],
      },
    ],
  },
  {
    slug: "atpco",
    number: "02",
    category: "UX Research & Workshop Facilitation · ATPCO",
    title: "Airline Industry UX Practice",
    role: "Sr. UX Researcher & Design Sprint Facilitator",
    period: "2018–2021",
    description:
      "ATPCO is the airline industry's pricing and data infrastructure backbone, a B2B company whose products are used by pricing analysts at 490+ airlines globally. I built ATPCO's UX practice from scratch: establishing research processes, building core design system components, running certified Design Sprints at the CPO's request, and designing tools that let analysts filter, sort, and code thousands of airfare rules through plain-language interfaces.",
    highlights: [
      "Ran ~12 workshops across 5 product teams over 6 months; the CPO requested a monthly cadence after seeing the first results",
      "Designed pricing analyst tools for teams across American Airlines, Delta, LATAM, and 490+ airlines worldwide",
      "A/B usability study (7 international participants, Morae) on CIF date-logic UI: 6 of 7 preferred the prototype, findings that drove the shipped redesign",
      "Built core components for ATPCO's design system alongside a UX engineer",
      "Led UX design for the Next Gen Storefront proof of concept: guerrilla testing, interaction pattern validation, fare comparison hierarchy",
      "Mentored junior designers in visual design and facilitation; trained a successor to take over the facilitation program",
    ],
    tags: ["UX Research", "Design Sprints", "Workshop Facilitation", "B2B Enterprise", "Design Systems", "Usability Testing"],
    images: [
      {
        src: "/projects/atpco/data-tables.png",
        alt: "ATPCO CIF fare rule data table interface",
        annotation: "The CIF fare rule data table is the dense enterprise interface that pricing analysts work in daily. The study asked: can analysts edit date logic here without misunderstanding the action labels?",
      },
      {
        src: "/projects/atpco/search-criteria.png",
        alt: "ATPCO CIF search criteria with date logic controls",
        annotation: "The search criteria and date control panel, one of the two variants tested. The original 'Advance/Postpone' labeling was consistently misinterpreted by participants in the opposite direction the system intended.",
      },
      {
        src: "/projects/atpco/notetaking.png",
        alt: "ATPCO structured notetaking for usability sessions",
        annotation: "A structured notetaking template used across moderated research sessions at ATPCO, standardizing how observers captured task performance, errors, and participant language across sessions with analysts at different airlines.",
      },
    ],
    accentColor: "#0d1a0d",
    overviewStats: [
      { value: "490+", label: "airlines served" },
      { value: "~24K+", label: "estimated analyst users" },
      { value: "12", label: "workshops in 6 months" },
      { value: "6/7", label: "participants preferred prototype" },
    ],
    sections: [
      {
        heading: "The Challenge",
        paragraphs: [
          "ATPCO is invisible to most travelers but foundational to every flight booking worldwide. Its systems process the fare data (rules, restrictions, pricing logic) that airlines publish and that booking engines consume. The users of ATPCO's B2B products are pricing analysts at major carriers: highly specialized, domain-expert users who work in complex data environments all day.",
          "When I arrived in 2018 there was no UX function. No research practice, no design system, no established process for talking to users. The products had been built by engineers for analysts and, while functional, had significant usability debt. My job was to build the UX practice from scratch, establishing what good looked like in this context, and make enough demonstrably valuable work happen that the organization would keep investing in it.",
        ],
      },
      {
        heading: "Building the Practice",
        paragraphs: [
          "The first priority was establishing credibility. Pricing analysts have deep domain expertise and low tolerance for tools that don't respect how they actually work. The right approach wasn't to immediately redesign everything; the right approach was to spend time in their world first, then make targeted improvements with clear rationale.",
          "I standardized enterprise UX tools for pricing analysts: systems that let them filter, sort, and code thousands of airfare rules through plain-language interfaces rather than raw data grids. I built core components for ATPCO's design system alongside a UX engineer, establishing a shared library used across all designer workflows. I mentored junior designers and trained a successor to take over the facilitation program I'd created.",
        ],
      },
      {
        heading: "Workshop Facilitation",
        paragraphs: [
          "About a year in, I began running structured design workshops for product teams that were stuck. The initial sessions addressed specific product questions: API portal strategy, airline add-on bundling, pricing system architecture. The format combined discovery research, rapid ideation, and prototype testing in a compressed timeline.",
          "The work gained visibility quickly. The CPO recognized the value and directed me to run workshops on a monthly cadence across product teams. Over six months I ran approximately 12 workshops across 5 teams. One outcome was a proof-of-concept bundle offer builder designed and tested with airline partners, combining discovery research, UI design, and usability testing in a single sprint.",
        ],
        images: [
          {
            src: "/projects/atpco/workshop.jpg",
            alt: "ATPCO Lightning Decision Jam, team working at sticky note wall",
            caption: "Lightning Decision Jam at ATPCO, 2020",
            annotation: "A Lightning Decision Jam with one of the ATPCO product teams. Teams worked through structured rounds of silent ideation, voting, and prioritization. The whiteboard on the right shows the 'What's Working / Need to Change' framing used in the session's opening divergence phase.",
          },
        ],
      },
      {
        heading: "CIF Date Logic: Usability Study",
        paragraphs: [
          "The CIF (Change in Fare) usability study is the clearest example of how rigorous research directly changes a product. The CIF tool handles a specific task: pricing analysts editing the date logic for fare rules, specifically when a fare's conditions change or a new pricing tier takes effect. The internal team had built two UI variants with different terminology, and they genuinely didn't know which one users would understand.",
          "I designed a remote, moderated A/B usability study with seven participants recruited from ATPCO's airline customer base: pricing analysts in the US, UK, and Europe. Each participant completed a set of tasks using one of two variants: the original design used 'Advance' and 'Postpone' as the primary action labels; the prototype used 'Change Effective Date' with a different interaction pattern. Sessions were recorded via Morae for structured analysis.",
          "The results were unambiguous: 6 of 7 participants preferred the prototype. The 'Advance/Postpone' framing was consistently misinterpreted: participants expected 'Advance' to mean moving a date earlier, not later, which is the opposite of how the system used the term. 'Change Effective Date,' though more verbose, matched how analysts actually described the action in their own words. Findings went directly to the product team and drove the shipped redesign.",
        ],
        images: [
          {
            src: "/projects/atpco/data-tables.png",
            alt: "CIF fare rule data table interface",
            caption: "CIF fare rule data table, the interface under test",
            annotation: "The fare rule table shows hundreds of rows of airline pricing logic, each with associated conditions, date ranges, and rule codes. Analysts needed to locate specific rules and modify their date parameters, a task that sounds simple but involves significant cognitive load given the volume and complexity of the data.",
          },
          {
            src: "/projects/atpco/search-criteria.png",
            alt: "Search criteria with date logic controls",
            caption: "Date logic controls: the A/B test interaction point",
            annotation: "The date control panel is where the two variants diverged. Variant A used 'Advance' and 'Postpone' as action labels. Variant B used 'Change Effective Date' with a calendar-based picker. The terminology difference alone (not the UI pattern) accounted for most of the comprehension failures in Variant A.",
          },
        ],
        stats: [
          { value: "7", label: "international participants" },
          { value: "6/7", label: "preferred prototype" },
          { value: "A/B", label: "terminology test" },
          { value: "Morae", label: "session recording" },
        ],
      },
      {
        heading: "Next Gen Storefront",
        paragraphs: [
          "Alongside the research and facilitation work, I led UX design for ATPCO's Next Gen Storefront, a proof-of-concept for next-generation fare comparison and merchandising. The product was not shipped during my tenure, but the work established interaction patterns and information hierarchy for how airlines could present fare options in a modern, structured way to booking engines and travelers.",
          "I ran guerrilla testing to validate the core interaction patterns and worked through multiple iterations of the fare comparison layout, balancing the data density requirements of airline merchandising against the comprehension needs of the end user.",
        ],
        images: [
          {
            src: "/projects/atpco/notetaking.png",
            alt: "Structured notetaking system for usability sessions",
            caption: "Research notetaking template",
            annotation: "Standardized observation templates let multiple notetakers capture the same session independently, then compare notes. This approach surfaces disagreements in interpretation early, before synthesis, which is where most of the insight loss in qualitative research actually happens.",
          },
        ],
      },
    ],
  },
  {
    slug: "cowans",
    number: "03",
    category: "UX Design & Development · Tribeswell",
    title: "Cowan's Collections",
    role: "Web Designer & Developer",
    period: "2014–2015",
    description:
      "A bespoke platform design for Cowan's Auctions, a regional fine art and antiques auction house in Cincinnati. The project required designing a collector-focused web platform where users could discover items, track auction events, and document their own collections with rich provenance data. The work spanned discovery, wireframing, prototyping, and in-person usability testing with real collectors on tablets.",
    highlights: [
      "Designed a bespoke platform (not templated) for two distinct audiences: casual browsers and serious collectors with active acquisition habits",
      "Created the full 3-step 'New Collection' flow, allowing collectors to catalog items with keywords, ownership history, appraisal info, and personal stories",
      "Designed the 'Chain of Custodianship' feature, a provenance-tracking view showing an item's full ownership history with dates and locations",
      "Conducted in-person usability testing on tablet with real Cowan's customers to validate navigation, collection creation, and item detail interactions",
      "Built and handed off using WordPress, PHP, and SCSS with custom style guide",
    ],
    tags: ["UX Design", "Interaction Design", "Usability Testing", "Discovery Research", "WordPress", "Front-End Development"],
    images: [
      {
        src: "/projects/cowans/hero.jpg",
        alt: "Cowan's Collections brand hero with classical painting",
        annotation: "The Cowan's Collections brand: a fine art and antiques auction house. Frederic Edwin Church's 'Heart of the Andes' anchors the hero, immediately establishing the platform's curatorial positioning between serious fine art and accessible personal collecting.",
      },
      {
        src: "/projects/cowans/homepage.jpg",
        alt: "Cowan's Collections homepage with events and new collections",
        annotation: "The homepage design, anchored around upcoming auction events and newly added items organized by collector. Navigation follows collector identity rather than item category, reflecting how power users actually think about their interests.",
      },
      {
        src: "/projects/cowans/usability-testing.jpg",
        alt: "In-person usability testing on tablet",
        annotation: "In-person usability testing with a Cowan's customer, using an iPad to mirror real-world use conditions. Most of the target audience accessed the existing site on tablet, so testing on-device was essential for validating touch interactions.",
      },
    ],
    accentColor: "#1a1208",
    overviewStats: [
      { value: "Bespoke", label: "custom design, not templated" },
      { value: "2", label: "distinct user types designed for" },
      { value: "5+", label: "usability sessions" },
      { value: "WP + PHP", label: "built with WordPress & SCSS" },
    ],
    sections: [
      {
        heading: "The Challenge",
        paragraphs: [
          "Cowan's Auctions needed a platform that served two audiences simultaneously: casual browsers who discovered items through auction events, and serious collectors who needed robust tools for cataloguing their own finds, tracking provenance, and managing multiple active collections. The existing site handled the auction-browsing use case adequately but had no capability for collector-side collection management at all.",
          "The design challenge was building a system that felt welcoming and elegant for casual discovery, consistent with the fine art aesthetic of the brand, while also providing the depth of functionality that serious collectors needed without overwhelming them. These two modes needed to coexist in the same interface.",
        ],
      },
      {
        heading: "Discovery & User Research",
        paragraphs: [
          "I began with client discovery sessions to map the existing customer base, understand how collectors used the current site, and identify where friction occurred. The most consistent finding: collectors wanted to document personal stories and provenance alongside auction data; the emotional narrative of an object was as important as its appraised value. This informed the entire information architecture.",
          "Two user types emerged clearly: browsers (motivated by discovery, low friction needed) and collectors (motivated by cataloguing and community, needing structured input tools). The design had to let both types move through the same interface without feeling like they were in the wrong place.",
        ],
        images: [
          {
            src: "/projects/cowans/homepage.jpg",
            alt: "Homepage with upcoming events and collections grid",
            caption: "Homepage design",
            annotation: "The homepage was designed to let browsers enter through events ('Upcoming' and 'Newly Auctioned/Sold' sections) while giving collectors a direct path to their active collections. The collector grid, organized by person rather than item type, reflects the research finding that serious collectors think in terms of whose collection they're following, not what category an item belongs to.",
          },
        ],
      },
      {
        heading: "The Collection Creation Flow",
        paragraphs: [
          "The core new capability was a 3-step collection creation flow: start a collection with a name, keywords, and description; add named series within the collection; then add individual items with specific details: photos, price, appraisal info, ownership history, and personal story. Each step was designed to be completable independently, with partial collections saved and resumable.",
          "A key accessibility consideration: the target audience skewed older and varied widely in technical comfort. To reduce typing friction on the item detail screen, each description field was paired with an auto-dictation icon, allowing collectors to speak descriptions rather than type them. This was validated in testing as a meaningful differentiator for the platform's less tech-savvy users.",
        ],
        images: [
          {
            src: "/projects/cowans/collection-flow.jpg",
            alt: "3-step collection creation flow documentation",
            caption: "Collection creation flow, step-by-step",
            annotation: "The 3-step flow was documented with annotated screens for each stage. The note at bottom addresses the auto-dictation feature directly: 'It is important to consider the technological aptitude of the intended users and this is a reasonable compromise.' This kind of explicit design rationale was part of the client handoff documentation.",
          },
        ],
      },
      {
        heading: "Chain of Custodianship",
        paragraphs: [
          "One of the most distinctive features of the platform was the Chain of Custodianship, a provenance-tracking view on every item's detail screen. Collectors could document the ownership history of an object with dates and locations, creating a traceable lineage from the current owner back through previous custodians. Anonymous entries were supported for gaps in known history.",
          "The feature was validated in usability testing as highly compelling for serious collectors: several participants volunteered that this capability alone would drive them to use the platform. The ability to attach a personal story to an item (like Kerry's account of her grandmother's Singer sewing machine, passed down across generations and continents) gave the provenance data human context that comparable auction platforms lacked entirely.",
        ],
        images: [
          {
            src: "/projects/cowans/item-detail.jpg",
            alt: "Item detail screen with Chain of Custodianship",
            caption: "Item detail: Chain of Custodianship, collapsed and expanded",
            annotation: "Left: the Chain of Custodianship accordion in its collapsed default state, showing ownership history as a scannable table with names, dates, and locations. Right: expanded, revealing a personal story field where the current owner added context about how they came to own the item. Testing showed that the personal story section was the most emotionally resonant element of the entire platform for collector users.",
          },
        ],
      },
      {
        heading: "Usability Testing & Handoff",
        paragraphs: [
          "In-person usability testing was conducted with Cowan's customers using iPads, mirroring the on-device conditions of the target audience. Sessions focused on three tasks: navigating from homepage to a specific item, creating a new collection from scratch, and understanding the Chain of Custodianship view. The collection creation flow and the success state confirmation were iterated based on testing feedback.",
          "The final build used WordPress with custom PHP and SCSS, designed and developed to Cowan's style guide. Design assets and production code were handed off via Git.",
        ],
        images: [
          {
            src: "/projects/cowans/usability-testing.jpg",
            alt: "In-person usability testing on iPad",
            caption: "Usability testing session",
            annotation: "Testing on the actual device was non-negotiable: interactions that felt smooth in desktop prototyping tools often behaved differently on touch. The table surface and coffee shop setting were intentional: Cowan's customers didn't interact with the platform in offices.",
          },
          {
            src: "/projects/cowans/testing-success-state.jpg",
            alt: "Testing the collection creation flow and success state",
            caption: "Testing the 'New Collection' creation and success confirmation",
            annotation: "Left: the main collections browsing view on iPad, testing how easily participants could distinguish between collectors and navigate to items of interest. Right: testing the success state ('Great! You've added a Collection!'), evaluating whether the confirmation felt appropriately celebratory without blocking the user's next action.",
          },
        ],
      },
    ],
  },
  {
    slug: "ebay",
    number: "04",
    category: "Interaction Design · Academic",
    title: "eBay Mobile Redesign",
    role: "UX Design, MFA Coursework",
    period: "2017–2018",
    description:
      "A concept redesign of the eBay mobile purchase experience completed during my MFA at Indiana University. The project focused on a persistent UX problem: the post-purchase moment is flat and anticlimactic despite the emotional energy buyers invest in bidding and winning. The proposed redesign introduced a lightweight achievement system, surfacing badges, purchase milestones, and seller trust signals at the confirmation screen to reinforce the win.",
    highlights: [
      "Identified post-purchase emotional drop-off as the core UX opportunity through comparative analysis",
      "Designed a badge and milestone system anchored in eBay's existing categories and buyer history",
      "Restructured the order confirmation flow to lead with celebration, then logistics",
      "Produced high-fidelity mobile mockups and a research-backed rationale deck",
    ],
    tags: ["Mobile UX", "Interaction Design", "Behavioral Design", "Academic Project"],
    images: [
      {
        src: "/projects/ebay/order-confirmation.png",
        alt: "eBay redesign, order confirmation with achievement badge",
        annotation: "The redesigned confirmation screen leads with the win, surfacing a badge unlock and milestone before transitioning to order details. The badge draws from eBay's existing category structure, so no new data collection is required.",
      },
      {
        src: "/projects/ebay/checkout-flow.png",
        alt: "eBay redesign, restructured checkout confirmation flow",
        annotation: "The restructured flow sequence: celebration first, logistics second. Comparative analysis of post-purchase patterns showed that platforms that validate the decision before presenting logistics have measurably higher return rates.",
      },
      {
        src: "/projects/ebay/badge-system.png",
        alt: "eBay redesign, buyer badge and milestone system",
        annotation: "The badge system design, organized by eBay's existing item categories (Cameras, Vintage, Electronics, etc.) and tracking purchase milestones within each. The system uses purchase history already captured by eBay, requiring no new data infrastructure.",
      },
    ],
    accentColor: "#1a0d00",
    sections: [
      {
        heading: "The Problem",
        paragraphs: [
          "eBay's mobile purchase experience has a structural problem: the post-purchase moment is anticlimactic. Buyers invest real emotional energy in bidding: tracking items, refreshing the app, competing in the final seconds of an auction. The win feels meaningful. Then the confirmation screen appears: a generic order summary. The emotional peak drops to a transactional valley.",
          "This project was completed during my MFA in Graphic Design at Indiana University, before I moved fully into UX. It's a concept, not a shipped product, but it reflects the kind of behavioral design thinking that has informed my approach to UX ever since.",
        ],
      },
      {
        heading: "The Approach",
        paragraphs: [
          "I analyzed post-purchase flows across e-commerce platforms and mobile games, looking for patterns in how confirmation screens handle the transition from active engagement to waiting. The consistent finding: the most effective confirmation screens do three things: validate the decision, build anticipation, and give the user a meaningful next action.",
          "The redesign centered on a lightweight achievement system anchored in eBay's existing category structure. Winning an auction for a vintage camera surfaces a 'Collector' badge milestone alongside the order details. The confirmation screen leads with the win, then transitions to logistics. The badge system draws from existing purchase history; no new data collection required.",
        ],
      },
      {
        heading: "The Design",
        paragraphs: [
          "High-fidelity mobile mockups covered the order confirmation screen, the badge unlock moment, and the buyer profile where milestones accumulate. The visual language stayed within eBay's existing system, with no new brand elements, just a reorganized hierarchy and a badge component built from existing design primitives.",
          "The rationale deck included behavioral research citations (variable reward, identity-based motivation) and a competitive analysis of confirmation patterns across Amazon, Etsy, and mobile game onboarding flows.",
        ],
        images: [
          {
            src: "/projects/ebay/order-confirmation.png",
            alt: "Order confirmation with badge unlock",
            caption: "Order confirmation: leading with the win",
            annotation: "The badge unlock occupies the upper half of the confirmation screen, above the fold on most mobile devices. The order summary, tracking info, and logistics are still present but positioned below the emotional acknowledgment of the purchase.",
          },
          {
            src: "/projects/ebay/checkout-flow.png",
            alt: "Restructured checkout confirmation flow",
            caption: "Confirmation flow restructured",
            annotation: "The flow restructuring was driven by a simple principle: the system should mirror the emotional sequence the buyer is already in. The buyer just won something; lead with that, then transition to the practical.",
          },
          {
            src: "/projects/ebay/badge-system.png",
            alt: "Buyer badge and milestone system",
            caption: "Badge and milestone system",
            annotation: "The full badge taxonomy, organized by eBay's existing item categories. Each category has three milestone tiers, earned through purchase frequency within that category. The system is deliberately simple; complex achievement systems create anxiety about incompleteness rather than positive reinforcement.",
          },
        ],
      },
    ],
  },
  // ─── Synthetic User Tool ─────────────────────────────────────────────────
  {
    slug: "synthetic-user-tool",
    number: "05",
    category: "Research Operations · SAP Concur",
    title: "Synthetic User Tool",
    role: "Principal UX Designer, Solo Build",
    period: "2023–Present",
    description:
      "An internal research operations system built entirely from scratch: a full data pipeline that transforms raw customer feedback into segmentable AI personas and structured design evaluation. Built solo using Claude Code, ChatGPT, and GitHub. The design team actively uses it across product lines. The tool's own interface is proprietary and not shown here.",
    highlights: [
      "Sole builder: no engineering sprint, no roadmap slot, no organizational buy-in required to ship",
      "Full pipeline: raw feedback spreadsheet → monthly content analysis → GitHub → combined dataset → segmentable synthetic personas",
      "Evaluation layer contrasts synthetic user assessments against real design criteria: WCAG, Nielsen Norman heuristics, SAP Fiori, iOS HIG, and Material Design",
      "Processes ~25,000 feedback comments per month from the product area",
      "Adopted across the design team without a formal rollout",
    ],
    tags: ["Research Operations", "AI Tools", "Data Pipeline", "Synthetic Users", "Design Evaluation", "Agent-Based Modeling"],
    images: [
      {
        src: "/projects/synthetic-user-tool/agent-network.svg",
        alt: "Synthetic user agent-based model, network topology of synthetic personas",
        annotation: "The agent-based model topology: each node is a synthetic persona generated from real customer feedback. Personas are interconnected through shared behavioral attributes, and each receives the same design stimulus during an evaluation round. The network structure mirrors how real user segments influence and inform each other.",
      },
      {
        src: "/projects/synthetic-user-tool/pipeline-flow.svg",
        alt: "Synthetic User Tool data pipeline, five-stage monthly cadence",
        annotation: "The five-stage pipeline: raw Qualtrics export → AI-powered content analysis → GitHub corpus aggregation → synthetic persona generation → multi-criteria design evaluation. The only manual step is the Day 1 export, which takes about five minutes. Everything else runs on demand.",
      },
      {
        src: "/projects/synthetic-user-tool/persona-grid.svg",
        alt: "Synthetic persona corpus, six agent segments with attributes",
        annotation: "A sample of the synthetic persona corpus: six agent types segmented by market, device, and booking frequency. Each persona carries a weighted influence score derived from their share of the feedback corpus. SP-06 (Power User Hub) serves as the central evaluation baseline across all design assessments.",
      },
    ],
    accentColor: "#110d1a",
    overviewStats: [
      { value: "~25K", label: "feedback comments/month" },
      { value: "Monthly", label: "pipeline cadence" },
      { value: "Solo", label: "built by one person" },
      { value: "0", label: "engineering sprints required" },
    ],
    sections: [
      {
        heading: "The Problem",
        paragraphs: [
          "SAP Concur receives roughly 25,000 feedback comments per month from users of my product area alone. That volume is unmanageable for any design team trying to read it directly; the insights get filtered, summarized incompletely, or ignored until someone has bandwidth to write a quarterly synthesis document. By then the moment has passed.",
          "The core problem isn't that the data doesn't exist. It's that the gap between 'raw feedback exists' and 'the team can act on it' is too wide, and the bridge (a human analyst reading thousands of comments) doesn't scale. I built a tool to close that gap.",
        ],
      },
      {
        heading: "The Pipeline",
        paragraphs: [
          "The pipeline has four stages. First: raw customer feedback is exported monthly as a spreadsheet (the only manual step, taking about five minutes). Second: the content is analyzed using an AI workflow I built with Claude Code and ChatGPT, which extracts themes, pain points, feature requests, and sentiment patterns at scale. Third: the processed data is pushed to a GitHub repository where it is combined with all previous months' data into a growing corpus.",
          "Fourth: the combined dataset is compiled into synthetic user personas, AI-generated users who represent distinct segments of the actual customer base, segmentable by market, device type, travel frequency, booking pattern, and other dimensions derived from the feedback. Each persona is grounded in real feedback patterns, not assumptions; they emerge from the data rather than being defined in advance.",
        ],
        images: [
          {
            src: "/projects/synthetic-user-tool/pipeline-flow.svg",
            alt: "Synthetic User Tool five-stage data pipeline",
            caption: "The data pipeline: five stages from raw feedback to evaluation",
            annotation: "The pipeline's five stages run at different cadences: data collection and analysis happen monthly, corpus aggregation is continuous, and persona generation and design evaluation run on demand. The only bottleneck is the five-minute manual export step; everything else is automated.",
          },
        ],
      },
      {
        heading: "Agent-Based Simulation",
        paragraphs: [
          "Each synthetic persona is an agent, an entity with defined attributes (market segment, device preference, booking frequency, behavioral patterns) that determine how it responds to a given stimulus. The stimulus in this case is a design: a screen, a flow, or an interaction pattern submitted for evaluation. Every agent receives the same design and generates an independent response based on its attribute set.",
          "This is the core of what makes the tool different from a traditional persona document. Traditional personas are static descriptions, a snapshot of who a user might be. Synthetic agents are behavioral: they respond. Each evaluation round produces a fresh set of responses, and because the agent attributes are derived from real feedback rather than invented, the responses reflect patterns that exist in the actual user base. The simulation isn't a substitute for real user research; it's a complementary layer that extends evaluation coverage between research cycles.",
        ],
        images: [
          {
            src: "/projects/synthetic-user-tool/agent-network.svg",
            alt: "Agent-based model network, synthetic personas as interconnected agents",
            caption: "The agent-based simulation network",
            annotation: "The network topology shows six synthetic persona agents, each connected to clusters of feedback data nodes that shaped their attributes. During an evaluation round, all agents receive the same design stimulus simultaneously. SP-06 (Power User Hub) sits at the center of the network because that segment generates the highest-signal feedback and carries the highest influence weight in multi-agent consensus scoring.",
          },
        ],
      },
      {
        heading: "The Evaluation Layer",
        paragraphs: [
          "Beyond persona generation, the tool includes a design evaluation layer. Given a design to review, the system generates an assessment from the perspective of a synthetic user persona (how would this segment of real customers respond to this design decision?) and then contrasts it against a structured evaluation using established design criteria.",
          "The evaluation criteria are explicit and multi-standard: WCAG 2.1 AA accessibility guidelines, Nielsen Norman usability heuristics, SAP Fiori design system conventions, and iOS Human Interface and Material Design guidelines where applicable. The synthetic user assessment and the criteria-based evaluation are presented together, giving designers two complementary lenses on a single decision.",
          "This layer was the hardest part to build and the most valuable in practice. It surfaces potential issues before a design reaches formal review, and it gives junior designers a structured framework for self-critique. It doesn't replace design judgment; it extends the surface area a designer can evaluate in the time available.",
        ],
        stats: [
          { value: "WCAG 2.1 AA", label: "accessibility standard" },
          { value: "Nielsen Norman", label: "heuristics framework" },
          { value: "SAP Fiori", label: "design system" },
          { value: "iOS + Material", label: "platform guidelines" },
        ],
      },
      {
        heading: "Adoption & Impact",
        paragraphs: [
          "The tool was not announced, launched, or formally rolled out. It was built, shared internally, and adopted because it was useful. Designers started using it to pressure-test their work before reviews, to quickly orient on a new project by reading a relevant persona summary, and to catch accessibility and heuristic issues that manual review might miss under time pressure.",
          "The infrastructure required to build and maintain this tool is entirely outside what SAP Concur's engineering team would have prioritized; it sits in the gap between product tooling and research operations, a gap that only exists because someone was willing to own it. That's the nature of this kind of work: it produces outsized leverage precisely because it doesn't fit neatly into anyone else's roadmap.",
        ],
        images: [
          {
            src: "/projects/synthetic-user-tool/persona-grid.svg",
            alt: "Synthetic persona corpus, agent segmentation matrix",
            caption: "The synthetic persona corpus, segmented by market, device, and frequency",
            annotation: "Six synthetic personas derived from the real feedback corpus, each with weighted influence scores proportional to their share of monthly comments. The personas aren't invented archetypes; they emerge from the data. SP-06 (Power User Hub) carries a 1.00 influence weight because that segment generates the highest volume of high-signal feedback.",
          },
        ],
      },
    ],
  },

  // ─── Multi-Fare Display ──────────────────────────────────────────────────
  {
    slug: "multi-fare-display",
    number: "06",
    category: "Interaction Design · SAP Concur",
    title: "Multi-Fare Display",
    role: "Sr. UX Design Specialist",
    period: "2021–2023",
    description:
      "The multi-fare display is the central decision surface in Concur's air booking flow, where corporate travelers compare fare classes, understand included services, and make a purchase decision that must comply with company travel policy. I designed the full information architecture and progressive disclosure model, ran extensive research, and scaled the pattern across the four travel verticals.",
    highlights: [
      "Translated rank-order research findings into a progressive disclosure model, surfacing the most decision-critical fare attributes upfront",
      "Designed multiple rounds of iteration from information-rich to progressively simpler, balancing stakeholder requirements against traveler comprehension",
      "Redesigned the seat map interaction model alongside the fare display",
      "Scaled the pattern to hotel, rental car, and rail, establishing a unified booking architecture across Concur's travel ecosystem",
      "Established a travel-specific Figma component library extending SAP Fiori for travel-specific UX patterns",
    ],
    tags: ["Information Architecture", "Progressive Disclosure", "Interaction Design", "Enterprise UX", "Design Systems", "Usability Testing"],
    images: [
      {
        src: "/projects/multi-fare-display/prototype-01.png",
        alt: "Air booking multi-fare display, concept prototype iteration 1",
        annotation: "First-generation concept prototype showing the fare comparison architecture. Early iterations erred toward maximum information density, surfacing all fare attributes simultaneously to give travelers complete data. Usability testing with business travelers revealed this created decision paralysis rather than clarity.",
      },
      {
        src: "/projects/multi-fare-display/prototype-02.png",
        alt: "Air booking multi-fare display, concept prototype iteration 2",
        annotation: "Second-generation prototype showing the progressive disclosure model: fare tiers as columns, core attributes visible by default, detail available on demand. This architecture became the foundation for how Concur presents fare options across all four booking verticals.",
      },
      {
        src: "/projects/sap-concur/fare-merchandising.png",
        alt: "Final multi-fare merchandising display in production",
        annotation: "The production multi-fare display: fare families as comparable columns with included services, policy status, and price shown inline. The columns map directly to airline branded fare families; travelers see exactly what changes between tiers without having to navigate away.",
      },
    ],
    accentColor: "#0a1628",
    overviewStats: [
      { value: "4", label: "verticals scaled to" },
      { value: "20+", label: "customer sessions" },
      { value: "10–20", label: "alpha usability tests" },
      { value: "WCAG 2.1 AA", label: "accessibility standard" },
    ],
    sections: [
      {
        heading: "The Design Problem",
        paragraphs: [
          "Airline fare structures are deliberately complex; airlines use fare families, branded bundles, and unbundled ancillaries to segment demand and maximize yield. For a corporate traveler booking on Concur, the challenge is understanding what a $400 fare actually includes compared to a $550 fare on the same flight, and whether either one is within company policy.",
          "The previous fare display at Concur showed fares in a flat list without clear differentiation between fare types. Travelers couldn't easily compare tiers, understand what changed between prices, or see policy status at a glance. The seat map was a separate interaction that disconnected fare choice from seat assignment. The information architecture needed a full redesign.",
        ],
      },
      {
        heading: "Research & Information Architecture",
        paragraphs: [
          "I started by reviewing rank-order research conducted by a previous team, which established which fare attributes travelers considered most important when making booking decisions: price, flexibility (refund/change policy), and included bags ranked highest. Status benefits and seat upgrade eligibility ranked lower but were critical for frequent travelers.",
          "From this, I designed a progressive disclosure hierarchy: the primary fare card surfaces price, flexibility tier, and bag policy. Expanding a card reveals the full attribute breakdown. This kept the primary comparison view scannable while preserving access to complete detail for travelers who needed it.",
        ],
        images: [
          {
            src: "/projects/multi-fare-display/prototype-01.png",
            alt: "Early concept prototype, information-dense fare display",
            caption: "Early concept: high information density",
            annotation: "The first prototype surfaced all fare attributes simultaneously: flexibility, bags, seat, status benefits, change fees, and upgrade eligibility in a single card. Testing with business travelers showed they often couldn't identify the single most important differentiator between fares; they were scanning too much at once.",
          },
        ],
      },
      {
        heading: "Progressive Disclosure Model",
        paragraphs: [
          "The production model uses fare tiers as columns (Basic, Main Cabin, Business Select, First) with a consistent set of core attributes visible in each. The most decision-critical attributes appear in the default collapsed view. Expanding a column reveals the full fare terms. Policy status (in-policy, out-of-policy, approval required) appears as a consistent indicator on every option.",
          "The design went through multiple iterations. There was a period where product pressure pushed toward adding more attributes to the default view: carrier amenities, loyalty points accrual, upgrade path. I pushed back with usability data showing this caused decision fatigue. Not every argument landed, but the progressive disclosure principle held through to production.",
        ],
        images: [
          {
            src: "/projects/multi-fare-display/prototype-02.png",
            alt: "Progressive disclosure model, columns architecture",
            caption: "Columns architecture: progressive disclosure",
            annotation: "The columns architecture solved the comparison problem: travelers can scan down a single attribute row to compare it across all fare tiers, or scan across a row to see everything included in one tier. This two-dimensional reading pattern matches how people naturally compare structured options, the same pattern used in airline seat maps and hotel room comparison grids.",
          },
          {
            src: "/projects/sap-concur/fare-merchandising.png",
            alt: "Production multi-fare display",
            caption: "Production fare merchandising",
            annotation: "The production implementation: columns are branded fare families, rows are attributes. The policy status badge on each option tells travelers immediately whether a choice requires approval. The design scales cleanly from 2-column to 5-column depending on the number of fare families the airline publishes for a route.",
          },
        ],
      },
      {
        heading: "Scaling the Pattern",
        paragraphs: [
          "Once validated for air, I adapted the multi-fare display architecture for hotel rates, rental car tiers, and rail fare classes. Each vertical has different attributes (hotels have cancellation policy and breakfast inclusion; cars have coverage tiers and fuel options; rail has seat class and flex vs. non-flex) but the underlying progressive disclosure model transferred cleanly.",
          "Scaling the pattern required abstracting the component architecture in a way that could flex across different attribute sets without fracturing the visual language. This work became the foundation for a Figma component library of travel-specific patterns, extending SAP Fiori with the domain-specific components that the design system team hadn't built.",
        ],
        images: [
          {
            src: "/projects/sap-concur/search-results.jpg",
            alt: "Air search results, fare comparison in context",
            caption: "Search results with fare comparison in context",
            annotation: "The full search results view showing the multi-fare display in its natural context, within a list of flight options, each showing fare family tiers inline. Travelers can compare fare classes across flights on the same page rather than having to open each flight individually.",
          },
        ],
      },
    ],
  },

  // ─── NGS ─────────────────────────────────────────────────────────────────
  {
    slug: "ngs",
    number: "07",
    category: "Product Design · ATPCO",
    title: "Next Gen Storefront",
    role: "UX Designer",
    period: "2019–2021",
    description:
      "The Next Gen Storefront (NGS) was ATPCO's proof-of-concept for a modernized fare presentation layer, rethinking how airlines display and differentiate their products to booking engines and travelers. I led UX design from initial concept through tested proof of concept, working directly with ATPCO's airline partners to validate the interaction model before any engineering investment.",
    highlights: [
      "Led UX design end-to-end for a proof-of-concept evaluated by airline industry partners",
      "Designed a structured fare comparison and merchandising interface grounded in ATPCO's fare attribute data",
      "Ran guerrilla usability testing to validate the interaction patterns and information hierarchy",
      "Worked through multiple iterations of fare comparison layout balancing data density with traveler comprehension",
      "The product was not shipped during my tenure; the work established the design foundation for further development",
    ],
    tags: ["Product Design", "B2B Enterprise", "Prototyping", "Airline Industry", "Usability Testing", "Information Architecture"],
    images: [
      {
        src: "/projects/ngs/ngs-overview.png",
        alt: "ATPCO Next Gen Storefront, fare comparison interface",
        annotation: "The NGS fare comparison interface, showing airline products with their competitive differentiators surfaced as structured attribute tags. The teal color system was designed to feel distinct from airline-branded booking flows while consistent with ATPCO's product identity.",
      },
      {
        src: "/projects/atpco/data-tables.png",
        alt: "ATPCO CIF fare rule data, the underlying data structure NGS draws from",
        annotation: "NGS was built on top of ATPCO's fare rule infrastructure, the same data tables used by pricing analysts. Understanding this data layer deeply was essential to designing an interface that accurately represented what airlines were publishing and what booking engines would receive.",
      },
      {
        src: "/projects/atpco/search-criteria.png",
        alt: "Search and filter interface for NGS fare display",
        annotation: "The search and filter architecture, designed to let booking engine operators configure how fare attributes are surfaced and ranked for end travelers. The B2B layer of NGS was as important as the consumer-facing display: airlines needed control over which of their competitive differentiators were shown and how.",
      },
    ],
    accentColor: "#0d1a0d",
    sections: [
      {
        heading: "The Opportunity",
        paragraphs: [
          "ATPCO sits at a unique position in the airline industry: it processes the fare data that all airlines publish and all booking engines consume. Most travelers never encounter ATPCO, but every flight search result is shaped by its data. The Next Gen Storefront was a bet that ATPCO could also define how that data is presented, not just processed.",
          "The hypothesis: if ATPCO could demonstrate a next-generation fare display experience (richer, more structured, more differentiated than the flat fare lists in most booking engines) that could influence how the industry surfaced airline products to travelers. The NGS proof of concept was the vehicle for that demonstration.",
        ],
      },
      {
        heading: "Design Approach",
        paragraphs: [
          "I approached the NGS design with two audiences in mind simultaneously: the booking engine operators who would configure and deploy it, and the end travelers who would use it to choose flights. The B2B configuration layer needed to give airlines meaningful control over how their products were displayed; the consumer layer needed to make complex fare differences comprehensible at a glance.",
          "The central design decision was to organize fare attributes as structured, comparable chips, surfacing specific differentiators (Wi-Fi, power outlets, seat width, meal service, loyalty tier benefits) as discrete, scannable elements rather than free-text descriptions. This made comparison across airlines directly possible at the attribute level, not just at the price level.",
          "Multiple iterations addressed the information hierarchy: how many attributes to show in the default view, how to handle attribute gaps (where an airline hasn't published data for a given feature), and how to represent negative attributes (no Wi-Fi, no power) without unfairly penalizing airlines for lower-cost offerings.",
        ],
        images: [
          {
            src: "/projects/ngs/ngs-overview.png",
            alt: "NGS fare comparison interface",
            caption: "NGS fare comparison: structured attribute display",
            annotation: "The interface organizes airlines into comparable cards with attribute chips aligned across a consistent taxonomy. Travelers can scan vertically within one airline's card to understand what that option includes, or scan horizontally across a single attribute row to compare all airlines on that dimension. The structure mirrors how analysts in the industry actually compare airline products, which was ATPCO's primary research source for validating the taxonomy.",
          },
        ],
      },
      {
        heading: "Validation",
        paragraphs: [
          "I ran guerrilla usability testing with participants recruited outside ATPCO, including travelers who used online booking regularly, to evaluate whether the attribute-chip model was understandable without domain expertise. The testing validated the core pattern: structured attribute comparison was significantly more effective than the prose descriptions used in most existing booking experiences.",
          "Specific findings shaped several design changes: the taxonomy of attribute categories needed tighter labeling (travelers confused 'connectivity' with 'device charging' before those were separated); and the negative-state display needed to be visually softer to avoid disproportionately penalizing airlines that simply hadn't published that attribute.",
          "The NGS proof of concept was presented to airline industry partners and evaluated as a valid direction. The product did not ship during my tenure at ATPCO, but the interaction patterns and validation data established the design foundation for further development.",
        ],
      },
    ],
  },

  // ─── Urban Expressions ───────────────────────────────────────────────────
  {
    slug: "urban-expressions",
    number: "08",
    category: "Illustration & Graphic Design · Commission",
    title: "Urban Expressions",
    role: "Illustrator & Graphic Designer",
    period: "2014–2016",
    description:
      "A commissioned series of embroidered patch and badge designs for a law enforcement and public safety organization, with each patch representing a different unit, division, or mission with distinct iconography. The work required balancing institutional tradition and unit-specific symbolism with contemporary illustrative technique, producing a large series of designs that worked individually and as a cohesive visual system.",
    highlights: [
      "Designed a large series of embroidered patch designs, each representing a distinct unit with specific iconographic requirements",
      "Developed a consistent visual language across diverse subject matter: animals, shields, crests, emblems, and abstract symbols",
      "Produced camera-ready artwork for embroidery production, accounting for thread count limitations and minimum stitch size",
      "Work was reproduced in bound publication collections and displayed at institutional events",
    ],
    tags: ["Illustration", "Brand Identity", "Visual Systems", "Print Design", "Commissioned Work"],
    images: [
      {
        src: "/projects/urban-expressions/urban-overview.png",
        alt: "Urban Expressions series of embroidered patch designs and production documentation",
        annotation: "The full patch series alongside production documentation, showing the range of iconographic approaches across different units. Each design had specific requirements from the commissioning organization, requiring close collaboration to translate unit identity into embroiderable form.",
      },
      {
        src: "/projects/urban-expressions/urban-overview.png",
        alt: "Urban Expressions patch designs in bound publication format",
        annotation: "The completed patch series reproduced in bound publication format for institutional distribution. The transition from vector artwork to physical embroidery required design decisions around thread color matching, minimum detail size, and background fill to ensure the designs read clearly at patch scale.",
      },
      {
        src: "/projects/urban-expressions/urban-overview.png",
        alt: "Urban Expressions design process and finished display",
        annotation: "From sketch to finished display: the design process began with brief-driven sketches, moved to vector refinement, then to production-ready embroidery files. The display installation shows how the series reads as a cohesive visual system despite the diversity of individual unit identities it represents.",
      },
    ],
    accentColor: "#0d0d1a",
    sections: [
      {
        heading: "The Commission",
        paragraphs: [
          "The project was a series of patch commissions from a law enforcement and public safety organization, with each patch representing a different unit, division, or special program. Embroidered patches carry a specific institutional weight in this context: they're worn on uniforms, awarded for service, and accumulate as a record of an officer's career. The designs had to earn that weight.",
          "Each patch required a client brief covering the unit's name, mission, and any specific iconographic requirements (mascots, shields, geographic references, motto text). Many clients had strong opinions about what their unit's identity should look like; part of the design process was translating those requirements into something that would actually work at embroidery scale.",
        ],
      },
      {
        heading: "Design Process",
        paragraphs: [
          "The illustration process started with pencil sketches, working out the compositional structure, the relationship between central icon and surrounding text, and the overall silhouette of each patch. For patches with complex subject matter (wildlife, vehicles, architectural elements), I developed detailed reference studies before moving to vector.",
          "Vector production for embroidery has specific constraints: minimum stitch areas, thread color limits per design, and the need for clean paths that translate without ambiguity to embroidery machine files. A design that looks sharp at 300dpi can become muddy at 2-inch diameter if it relies on fine gradient detail or thin strokes that won't hold in thread.",
        ],
        images: [
          {
            src: "/projects/urban-expressions/urban-overview.png",
            alt: "Full patch series, grid of completed designs",
            caption: "The completed patch series",
            annotation: "The full grid of completed designs shows the visual system at work: consistent use of border treatments, text placement, and shielding conventions creates family resemblance across widely different subject matter. The color range is deliberately broad across the series (each unit owned its own color identity) while remaining within the palette constraints of embroidery thread production.",
          },
        ],
      },
    ],
  },

  // ─── Web & Graphic Design ────────────────────────────────────────────────
  {
    slug: "web-and-graphics",
    number: "09",
    category: "Web & Graphic Design",
    title: "Web & Graphic Design",
    role: "Designer & Developer",
    period: "2013–2018",
    description:
      "A collection of web design, branding, and graphic design work from the earlier part of my career: bespoke client websites designed and built at Tribeswell LLC, brand identity projects, academic design work from my MFA and BFA programs, and personal projects spanning interaction design, 3D, and publication design.",
    highlights: [
      "All client websites were bespoke designs, no templates, each built to client-specific creative brief and requirements",
      "WordPress development using custom PHP and SCSS; all handoffs via Git",
      "Academic work spans interaction design, 3D environment design, publication design, and motion graphics",
      "Brand identity work includes logo systems, style guides, and multi-collateral rollouts",
    ],
    tags: ["Web Design", "Branding", "Logo Design", "Print Design", "WordPress", "Front-End Development", "3D Design"],
    images: [
      {
        src: "/projects/web-graphics/nectar.png",
        alt: "Nectar dark-themed mobile social app UI",
        annotation: "Nectar is a mobile social app concept; the UI design explores a dark-mode interaction system for social connections and messaging, with an emphasis on personal photography and profile-driven discovery.",
      },
      {
        src: "/projects/web-graphics/boyd.png",
        alt: "Boyd Security corporate website design",
        annotation: "Boyd Security corporate website, a Tribeswell client project. The design uses dramatic aerial photography with a dark, authoritative color system appropriate for a defense and security services company.",
      },
      {
        src: "/projects/web-graphics/newmoon.png",
        alt: "New Moon Cottage branding and website",
        annotation: "New Moon Cottage branding and website: identity work and web design for a bed and breakfast. The project included logo development through multiple concept rounds, a brand style guide, and a full WordPress site build.",
      },
    ],
    accentColor: "#1a1a0d",
    sections: [
      {
        heading: "Client Web Design",
        paragraphs: [
          "All client work at Tribeswell was built to bespoke briefs, no templates, no theme customizations. Each project started with a discovery session to understand the client's business, audience, and competitive context, then moved to visual concepts before final design and development. Handoff was via Git or FTP with a documented style guide.",
        ],
        gallery: [
          {
            title: "Boyd Security",
            year: "2015",
            category: "Corporate Website",
            description: "Website design and development for a defense and security services company. Dark, authoritative visual system with strong aerial photography.",
            src: "/projects/web-graphics/boyd.png",
            alt: "Boyd Security corporate website",
          },
          {
            title: "Crazy Horse",
            year: "2015",
            category: "Restaurant Website",
            description: "Website design for a restaurant. Moody food photography with an editorial layout emphasizing atmosphere over menus.",
            src: "/projects/web-graphics/crazyhorse.png",
            alt: "Crazy Horse restaurant website",
          },
          {
            title: "New Moon Cottage",
            year: "2014",
            category: "Branding & Website",
            description: "Full brand identity (logo, style guide) and website build for a bed and breakfast. Dark forest photography anchors the brand.",
            src: "/projects/web-graphics/newmoon.png",
            alt: "New Moon Cottage branding and website",
          },
          {
            title: "Investment Bros",
            year: "2015",
            category: "Financial Services",
            description: "Web design for a financial services client. Clean, professional visual system with structured data presentation.",
            src: "/projects/web-graphics/invest.png",
            alt: "Investment Bros financial services website",
          },
        ],
      },
      {
        heading: "Branding & Identity",
        paragraphs: [
          "Brand identity projects ranged from single-mark commissions to full identity systems with style guides, logo variations, and collateral design. Each started from a client brief and moved through multiple concept directions before refinement.",
        ],
        gallery: [
          {
            title: "Lesson Zest",
            year: "2015",
            category: "Logo & Brand Identity",
            description: "Logo design and brand identity for an education technology app. Multiple concept directions explored before arriving at the final lemon-and-text mark.",
            src: "/projects/web-graphics/lessonzest.png",
            alt: "Lesson Zest logo and brand identity",
          },
          {
            title: "Zhang Photography",
            year: "2016",
            category: "Logo Design Study",
            description: "Logo design study for a photography client, exploring different typographic and symbolic directions for a personal brand mark.",
            src: "/projects/web-graphics/zhang.png",
            alt: "Zhang Photography logo design study",
          },
          {
            title: "Nectar App",
            year: "2016",
            category: "Mobile App UI",
            description: "UI design concept for a dark-mode mobile social app: profile-driven discovery, photo-forward messaging, connection management.",
            src: "/projects/web-graphics/nectar.png",
            alt: "Nectar mobile app UI design",
          },
        ],
      },
      {
        heading: "Academic & Personal Work",
        paragraphs: [
          "Academic projects from my MFA at Indiana University and BFA at Purdue Fort Wayne, spanning interaction design, 3D environment design, publication design, and motion. These projects were less constrained by client requirements and more by research questions and formal design exploration.",
        ],
        gallery: [
          {
            title: "2016 MFA Catalog",
            year: "2016",
            category: "Publication Design",
            description: "Art direction and design for the 2016 IU MFA graduation catalog, a print publication showcasing the work of graduating MFA students across fine art and design disciplines.",
            src: "/projects/web-graphics/mfa.png",
            alt: "2016 MFA Catalog publication design",
          },
          {
            title: "Food Enter-Face",
            year: "2017",
            category: "3D / Interaction Design",
            description: "An exploration of food interaction in a virtual environment: 3D modeled food objects with playful physics and an immersive dining interface concept.",
            src: "/projects/web-graphics/food-enter-face.png",
            alt: "Food Enter-Face 3D interaction design",
          },
          {
            title: "Seasonal Affective Disorder",
            year: "2017",
            category: "3D / Immersive Experience",
            description: "A virtual gallery exploring how lighting, space, and ambient audio affect emotional state, designed as an interactive 3D environment.",
            src: "/projects/web-graphics/seasonal.png",
            alt: "Seasonal Affective Disorder virtual gallery",
          },
        ],
      },
    ],
  },
];

const ORDER = [
  "synthetic-user-tool",
  "sap-concur",
  "ngs",
  "atpco",
  "cowans",
  "ebay",
  "urban-expressions",
  "multi-fare-display",
  "web-and-graphics",
];
export const projects: Project[] = ORDER.map(
  (slug) => _projects.find((p) => p.slug === slug)!
);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
