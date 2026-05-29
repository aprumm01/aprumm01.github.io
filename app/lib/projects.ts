export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  annotation?: string;
  magnify?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryItem {
  title: string;
  year: string;
  category: string;
  description: string;
  src: string;
  alt: string;
  images?: GalleryImage[];
}

export interface ProjectVideo {
  src: string;
  caption?: string;
  annotation?: string;
  poster?: string;
}

export interface Section {
  heading: string;
  paragraphs: string[];
  images?: ProjectImage[];
  videos?: ProjectVideo[];
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
    category: "Enterprise Product Design Â· SAP Concur",
    title: "Corporate Travel & AI",
    role: "Principal UX Designer, Design Lead, Travel UX",
    period: "2021â€“Present",
    description:
      "Design lead for SAP Concur's Travel UX team, a platform serving tens of millions of business travelers across 103 countries with 49.6% market share in T&E software. Since 2023 I've led AI interaction design for SAP Joule across all four booking verticals. In my earlier role as Sr. UX Design Specialist, I owned the full air booking flow: search, multi-fare display, seat selection, fare merchandising, and review & book.",
    highlights: [
      "Leading conversational UI and AI interaction design for SAP Joule, integrated across all travel booking verticals",
      "Led \"Tell Concur About Your Trip,\" a net-new multi-vertical booking workflow with new design system components",
      "Designed the multi-fare display architecture using progressive disclosure to balance traveler comprehension with information density",
      "Scaled the multi-fare interaction system across hotel, rental car, and rail, creating a unified architecture across the full travel ecosystem",
      "20+ external customer engagement sessions; 10â€“20 alpha-phase internal usability tests; WCAG 2.1 AA compliance across the air booking flow",
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
          "Alongside the fare display, I redesigned the seat map interaction model and led WCAG 2.1 AA accessibility compliance across the entire air booking flow, a requirement for enterprise customers with strict procurement standards. Over two years I ran 20+ external customer engagement sessions using moderated interviews, usability studies, focus groups, and hybrid contextual inquiry, plus 10â€“20 alpha-phase internal usability tests.",
        ],
        images: [
          {
            src: "/projects/sap-concur/search-results.jpg",
            alt: "Air search results, fare comparison layout",
            caption: "Search results with fare comparison",
            annotation: "Each result row balances fare name, price, policy status, and included services. The visual hierarchy prioritizes policy compliance first (a core requirement for corporate booking), then price, then fare features.",
            magnify: true,
          },
          {
            src: "/projects/sap-concur/fare-merchandising.png",
            alt: "Multi-fare merchandising display",
            caption: "Multi-fare merchandising",
            annotation: "Fare families are presented as comparable columns rather than a flat list. This pattern lets travelers see at a glance what they gain or lose between fare tiers, a critical decision point in managed travel where upgrading often requires an approval workflow.",
            magnify: true,
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
            magnify: true,
          },
        ],
      },
      {
        heading: "SAP Joule: Conversational AI for Travel",
        paragraphs: [
          "In May 2023 I was promoted to Principal UX Designer and took on a wider scope: design lead for the Travel UX team across both product lines, and lead for all AI interaction design. SAP Joule is SAP's enterprise AI assistant, a conversational interface layered across enterprise workflows. My job is integrating travel booking into Joule and maintaining consistency across multiple concurrent AI initiatives touching the Travel product.",
          "All four booking verticals are now integrated: air, hotel, rental car, and rail. The interaction design challenges here are distinct from traditional UI. How do you handle policy enforcement in a conversational context? What happens when a traveler's request doesn't map cleanly to available options? How do you build trust in AI recommendations when the stakes are a $2,000 international business-class ticket that has to meet a compliance policy?",
          "The work spans discovery research, usability testing for the Joule experience, aligning conversational UI patterns with traveler mental models, and bridging customer expectations with what the AI can actually do reliably. I run customer validation sessions and work with product and engineering to define what belongs in conversational booking versus what still requires the traditional UI.",
          "One key interaction pattern is a listening event on incoming email: when a traveler receives an event confirmation, they can forward it to Joule, which detects the trip, gathers policy-compliant flight, hotel, and car options, and presents a full itinerary for review and one-tap booking, without the traveler ever opening the Concur app.",
        ],
        images: [
          {
            src: "/projects/sap-concur/joule/email-trigger.png",
            alt: "Event confirmation email in traveler inbox",
            caption: "Step 1: event confirmation email",
            annotation: "The interaction begins with a standard event confirmation in the traveler's inbox. No Concur app required at this stage. The trigger is a simple email forward.",
            magnify: true,
          },
          {
            src: "/projects/sap-concur/joule/email-forward.png",
            alt: "Forwarding event confirmation to Joule Booking Agent",
            caption: "Step 2: forward to Joule",
            annotation: "The traveler forwards the email to Bookit@sap.com. Joule intercepts the message, parses the event details, and begins assembling a policy-compliant itinerary in the background.",
          },
          {
            src: "/projects/sap-concur/joule/joule-options.png",
            alt: "Joule presenting flight, hotel, and car options in conversational UI",
            caption: "Step 3: Joule presents options",
            annotation: "Joule returns a structured itinerary with policy-compliant flights, hotel, and rental car. Each option surfaces the attributes that matter in managed travel: carrier preference, loyalty program, policy tier. The traveler reviews and selects without leaving the conversation.",
            magnify: true,
          },
          {
            src: "/projects/sap-concur/joule/joule-confirmed.png",
            alt: "Trip confirmed state in Joule after booking completion",
            caption: "Step 4: trip confirmed",
            annotation: "Once the traveler confirms payment, Joule finalizes the booking across all three verticals simultaneously and surfaces a trip overview. The entire flow, from email forward to confirmed booking, requires no navigation through the traditional Concur UI.",
            magnify: true,
          },
          {
            src: "/projects/sap-concur/joule/joule-homepage.png",
            alt: "SAP Concur homepage with Joule panel open showing completed booking",
            caption: "Joule integrated into the Concur homepage",
            annotation: "The Joule panel sits alongside the existing Concur homepage, giving travelers a persistent conversational entry point without replacing the traditional booking UI. The homepage reflects the completed booking in both the Joule conversation and the standard trip cards simultaneously.",
            magnify: true,
          },
        ],
      },
    ],
  },

  // â”€â”€â”€ Multi-Fare Display â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "multi-fare-display",
    number: "02",
    category: "Interaction Design Â· SAP Concur",
    title: "Multi-Fare Display",
    role: "Sr. UX Design Specialist",
    period: "2021â€“2023",
    description:
      "The multi-fare display is the central decision surface in SAP Concur's air booking flow, where corporate travelers compare fare classes, understand included services, and make a purchase decision that must comply with company travel policy. I originated the information architecture and progressive disclosure model and led research through the project's foundational phases; as the pattern matured, additional designers joined and the work scaled across all four travel verticals.",
    highlights: [
      "Mapped rank-order research priority tiers directly to interaction depth: top-priority attributes in the default view, mid-priority on first click, lower-priority in fare details",
      "Designed multiple rounds of iteration from information-rich to progressively simpler, balancing stakeholder requirements against traveler comprehension",
      "Redesigned the seat map interaction model alongside the fare display",
      "Scaled the pattern to hotel, rental car, and rail, establishing a unified booking architecture across SAP Concur's travel ecosystem",
      "Established a travel-specific Figma component library extending SAP Fiori for travel-specific UX patterns",
    ],
    tags: ["Information Architecture", "Progressive Disclosure", "Interaction Design", "Enterprise UX", "Design Systems", "Usability Testing"],
    images: [
      {
        src: "/projects/multi-fare-display/t2mockup.png",
        alt: "Multi-fare display showing fare comparison layout in a browser mockup",
      },
      {
        src: "/projects/multi-fare-display/prototype-01.png",
        alt: "Air booking multi-fare display, concept prototype iteration 1",
        annotation: "First-generation concept prototype showing the fare comparison architecture. Early iterations erred toward maximum information density, surfacing all fare attributes simultaneously to give travelers complete data. Usability testing with business travelers revealed this created decision paralysis rather than clarity.",
      },
      {
        src: "/projects/multi-fare-display/prototype-02.png",
        alt: "Air booking multi-fare display, concept prototype iteration 2",
        annotation: "Second-generation prototype showing the progressive disclosure model: fare tiers as columns, core attributes visible by default, detail available on demand. This architecture became the foundation for how SAP Concur presents fare options across all four booking verticals.",
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
      { value: "10â€“20", label: "alpha usability tests" },
      { value: "WCAG 2.1 AA", label: "accessibility standard" },
    ],
    sections: [
      {
        heading: "The Design Problem",
        paragraphs: [
          "Airline fare structures are deliberately complex; airlines use fare families, branded bundles, and unbundled ancillaries to segment demand and maximize yield. For a corporate traveler booking on SAP Concur, the challenge is understanding what a $400 fare actually includes compared to a $550 fare on the same flight, and whether either one is within company policy.",
          "The previous fare display at SAP Concur showed fares in a flat list without clear differentiation between fare types. Travelers couldn't easily compare tiers, understand what changed between prices, or see policy status at a glance. The seat map was a separate interaction that disconnected fare choice from seat assignment. The information architecture needed a full redesign.",
        ],
      },
      {
        heading: "Research & Information Architecture",
        paragraphs: [
          "The design started with rank-order research from an internal SAP Concur study and an external source, which established a clear priority hierarchy for the factors business travelers consider when booking. The top-ranked factors (price, number of stops, policy status, and departure/arrival times) were consistently prioritized across traveler types. A middle tier covered seat selection, loyalty program data, and onboard amenities. The lowest-priority factors (class of service detail, eco attributes, aircraft type) were relevant to some travelers but rarely decisive.",
          "That hierarchy drove the information architecture directly. The top third of priorities appear in the default fare card view, immediately visible without any interaction. The middle third surfaces after the first click, once a traveler has indicated interest in a specific option. The lowest-priority third is distributed throughout the page and available in the detailed fare breakdown: accessible, but not competing for attention at the comparison stage. The progressive disclosure model is a direct translation of the research priority ranking into interaction depth.",
        ],
        images: [
          {
            src: "/projects/multi-fare-display/rank-order-research.png",
            alt: "Rank-order study results: factors travelers consider when booking business travel",
            caption: "Rank-order research: booking factor priorities",
            annotation: "Results from rank-order research across business travelers, showing relative priority weighting for both flight and hotel booking factors. The top cluster (price, stops, policy status, departure/arrival times) established the first-view attribute set for the fare display. Mid-tier factors (seat selection, loyalty, amenities) mapped to the expanded card view. Lower-priority attributes were surfaced in fare details.",
            magnify: true,
          },
          {
            src: "/projects/multi-fare-display/card-sort-research.png",
            alt: "Card sort study: business travel booking factor categorization",
            caption: "Card sort: not important / important / very important",
            annotation: "A card sort study asking business travelers to categorize booking factors by importance. The three-tier categorization from this study (not important, important, very important) maps directly to the three disclosure levels in the fare display: default view, first-click expansion, and full detail.",
            magnify: true,
          },
          {
            src: "/projects/multi-fare-display/prototype-01.png",
            alt: "Early concept prototype, information-dense fare display",
            caption: "Early concept: high information density",
            annotation: "The first prototype surfaced all fare attributes simultaneously before the research-driven hierarchy was applied. Testing with business travelers showed they couldn't identify the most important differentiator between fares; too many attributes competed for attention at once.",
            magnify: true,
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
            magnify: true,
          },
          {
            src: "/projects/sap-concur/fare-merchandising.png",
            alt: "Production multi-fare display",
            caption: "Production fare merchandising",
            annotation: "The production implementation: columns are branded fare families, rows are attributes. The policy status badge on each option tells travelers immediately whether a choice requires approval. The design scales cleanly from 2-column to 5-column depending on the number of fare families the airline publishes for a route.",
            magnify: true,
          },
        ],
      },
      {
        heading: "Scaling the Pattern",
        paragraphs: [
          "Once validated for air, the multi-fare architecture was extended to hotel rates, rental car tiers, and rail fare classes, with additional designers contributing as the work expanded. Each vertical has different attributes (hotels have cancellation policy and breakfast inclusion; cars have coverage tiers and fuel options; rail has seat class and flex vs. non-flex) but the underlying progressive disclosure model transferred cleanly.",
          "Scaling the pattern required abstracting the component architecture in a way that could flex across different attribute sets without fracturing the visual language. This work became the foundation for a Figma component library of travel-specific patterns, extending SAP Fiori with the domain-specific components that the design system team hadn't built.",
        ],
        images: [
          {
            src: "/projects/sap-concur/search-results.jpg",
            alt: "Air search results, fare comparison in context",
            caption: "Search results with fare comparison in context",
            annotation: "The full search results view showing the multi-fare display in its natural context, within a list of flight options, each showing fare family tiers inline. Travelers can compare fare classes across flights on the same page rather than having to open each flight individually.",
            magnify: true,
          },
        ],
      },
    ],
  },

  // â”€â”€â”€ TCAYT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "tcayt",
    number: "03",
    category: "Enterprise Product Design Â· SAP Concur",
    title: "Tell Concur About Your Trip",
    role: "Principal UX Designer, Design Lead",
    period: "2023â€“Present",
    description:
      "Tell Concur About Your Trip (TCAYT) is a net-new multi-vertical booking workflow in SAP Concur that lets corporate travelers plan and search all segments of a trip together, rather than visiting each booking vertical separately. I led end-to-end UX design from discovery through production: the segment-declaration entry point, the two-panel trip builder, coordinated search defaults, and the trip-level finalize view with policy and budget visibility.",
    highlights: [
      "Designed the full trip planning workflow: segment-declaration dialog, two-panel segment builder, coordinated search defaults, and trip-level finalize view",
      "Introduced 'Match Flight Booking' for hotel and car segments, auto-propagating dates, location, and times from the flight selection to eliminate repeated data entry",
      "Designed the trip inventory panel, a persistent left-rail view of all selected segments that lets travelers manage the full trip without losing their place in the form",
      "Built new design system components extending SAP Fiori for the trip builder pattern",
      "Ran usability validation across the full multi-vertical workflow",
    ],
    tags: ["Interaction Design", "Enterprise UX", "Design Systems", "Information Architecture", "Multi-vertical", "Usability Testing"],
    images: [
      {
        src: "/projects/tcayt/tcayt-hero.png",
        alt: "TCAYT Trip Planning interface with flight search form overlaid on a globe reflecting a city",
      },
      {
        src: "/projects/tcayt/finalize-full.png",
        alt: "TCAYT Finalize page showing flight, hotel, and rental car with budget and policy status",
        annotation: "The Finalize screen aggregates all booked segments with policy indicators, cost breakdown, and the approved trip budget in a single view. A 'Would you like to book anything else?' prompt allows adding additional segments after searching.",
      },
      {
        src: "/projects/tcayt/hotel-match.png",
        alt: "TCAYT Hotel Search with Match Flight Booking checked, dates and location derived from flight",
        annotation: "With 'Match Flight Booking' enabled, hotel location and dates are derived from the selected flight. Travelers confirm the match rather than re-entering data. The same pattern applies to rental car.",
      },
    ],
    accentColor: "#0a1628",
    sections: [
      {
        heading: "The Design Problem",
        paragraphs: [
          "When a corporate traveler needs a flight, hotel, and rental car for the same trip, SAP Concur's existing flow required visiting each booking vertical in sequence: search air, book, then return and search hotel, book, then return and search car. There was no concept of a 'trip' until after all the individual bookings were made.",
          "This fragmented experience created coordination errors: travelers entered dates independently in each vertical and occasionally mismatched hotel check-in with flight arrival. Policy and budget visibility only appeared at each individual booking rather than across the total trip. And for travelers who knew exactly what they needed, there was no way to declare all segments upfront and get them all searched at once.",
        ],
      },
      {
        heading: "Trip Planning Workflow",
        paragraphs: [
          "The entry point is a segment-declaration dialog: travelers choose which verticals they need before entering any search criteria. This single step establishes the shape of the trip and surfaces all relevant segments in the planning view simultaneously.",
          "The trip builder uses a two-panel layout: a persistent left rail shows all selected segments as a scannable inventory, and the right panel surfaces the active segment's search form. Travelers move through each segment in sequence, and the left rail updates to reflect configured segments, giving a running view of the trip's completeness before any search is run.",
        ],
        images: [
          {
            src: "/projects/tcayt/dialog.png",
            alt: "Trip Planning entry dialog with segment checkboxes for Flight, Hotel, Rental Car, and Train",
            caption: "Step 1: declare your segments",
            annotation: "The dialog establishes the trip's shape before any search input is required. Selecting segments activates validation: the UI prevents combinations that the system can't coordinate (flight and train cannot share a trip).",
            magnify: true,
          },
          {
            src: "/projects/tcayt/page-default.png",
            alt: "Trip Planning page in default state with empty flight search form",
            caption: "The two-panel trip builder",
            annotation: "The left rail holds all selected segments as a persistent inventory. The right panel shows the active segment's form. Travelers see the full scope of what they're building throughout the flow rather than only discovering completeness at checkout.",
            magnify: true,
          },
          {
            src: "/projects/tcayt/page-filled.png",
            alt: "Trip Planning page with flight details filled in for a trip to Las Vegas",
            caption: "Segment configured: flight",
            annotation: "Once the flight is configured, the segment entry in the left rail updates with origin, destination, and dates. The traveler can navigate to hotel or car from the rail, or continue through the sequence using the Previous/Next controls.",
            magnify: true,
          },
          {
            src: "/projects/tcayt/wip-multicity.png",
            alt: "TCAYT Trip Planning in multicity mode with two independent flight legs and Custom Itinerary tooltip",
            caption: "Multi-city flight configuration",
            annotation: "The multicity configuration is the most complex case in the trip builder: multiple independent flight legs, each with its own origin, destination, date, and cabin class. The Custom Itinerary toggle lets travelers choose between system-curated pre-coordinated itineraries — typically more competitive on price — or fully independent leg selection when scheduling flexibility takes priority. The tooltip surfaces this trade-off at the point of decision.",
            magnify: true,
          },
        ],
      },
      {
        heading: "Coordinated Search Defaults",
        paragraphs: [
          "The most friction-reducing feature in TCAYT is 'Match Flight Booking,' available on both hotel and rental car segments. When enabled, the system derives location, dates, and (for cars) pickup and drop-off times directly from the configured flight, pre-populating the hotel and car forms without any additional traveler input.",
          "The match defaults are displayed as dashed-border fields labeled 'Based on flight selection,' a deliberate visual treatment that distinguishes inferred values from traveler-entered values. Travelers can override any matched value if they need a different hotel location or car pickup time, but the default correct case requires no interaction at all.",
        ],
        images: [
          {
            src: "/projects/tcayt/hotel-match.png",
            alt: "Hotel Search with Match Flight Booking checked, showing location and dates derived from flight",
            caption: "Hotel: match flight booking",
            annotation: "The hotel location resolves to the flight destination city; dates match the flight itinerary. The dashed field style signals that these are system-derived values, distinguishing them from traveler-entered fields. The system informs: 'Your Rental Car search will match your flight booking.'",
            magnify: true,
          },
          {
            src: "/projects/tcayt/car-match.png",
            alt: "Rental Car Search with Match Flight Booking checked, pickup and drop-off derived from flight",
            caption: "Rental car: match flight booking",
            annotation: "Rental car extends the match further: pickup and drop-off location, dates, and times all derive from the flight. The traveler can expand 'Location Options' to override if needed. In the common case, configuring a rental car takes one interaction: confirming the match.",
            magnify: true,
          },
        ],
      },
      {
        heading: "Trip-Level Visibility",
        paragraphs: [
          "The Finalize screen introduces trip-level policy and budget visibility that didn't exist in the previous per-segment booking flow. An approved trip budget displayed at the top of the page gives travelers a running total against their budget allocation before confirming any booking.",
          "Policy compliance indicators appear on individual segments alongside cost breakdowns by vertical. An 'Additional Information' section captures trip-purpose metadata (form number, cost allocation, number of travelers) that previously required separate data entry after each booking. The 'Would you like to book anything else?' prompt provides a low-friction path to add segments that weren't declared upfront.",
        ],
        images: [
          {
            src: "/projects/tcayt/finalize-full.png",
            alt: "Finalize page showing full trip summary with flight, hotel, rental car, budget, and additional information",
            caption: "Finalize: trip-level review",
            annotation: "The Finalize screen consolidates policy status, cost by segment, total estimated cost, and budget allocation in a single view. The 'Rental Car has not been selected' warning at bottom surfaces missing segments before the traveler commits, preventing the coordination gaps that occurred in the prior per-vertical flow.",
            magnify: true,
          },
        ],
      },
      {
        heading: "Usability Validation",
        paragraphs: [
          "I ran usability testing across the full workflow to validate the segment-builder pattern and the match flight defaults. Key findings shaped several design changes: the left-rail segment inventory needed clearer in-progress vs. complete state differentiation; the dashed field treatment for matched values needed an explicit label explaining the source of the pre-filled data; and the entry dialog needed validation feedback for incompatible segment combinations before the traveler hit the Continue button.",
          "The overall task completion rate and time-on-task comparisons against the prior per-vertical flow demonstrated a meaningful reduction in booking time for multi-segment trips, which represented the core business case for the feature.",
        ],
        videos: [
          {
            src: "/projects/tcayt/usability-1.mp4",
            caption: "Usability session excerpt",
            annotation: "An excerpt from a moderated usability session evaluating the trip builder. The session focused on the segment configuration flow and the Match Flight Booking interaction.",
            poster: "/projects/tcayt/page-filled.png",
          },
        ],
      },
      {
        heading: "Accessibility Documentation",
        paragraphs: [
          "TCAYT required comprehensive accessibility annotations for engineering implementation. These annotations document screen reader labels, keyboard navigation order, focus management, ARIA attributes, and semantic HTML requirements. The two-panel layout presented specific accessibility challenges: maintaining logical tab order across the left segment inventory and right form panel, ensuring screen reader users understood the relationship between panels, and providing appropriate invisible labels for complex interactive elements.",
          "The annotation system uses numbered callouts to map visible UI elements to their accessibility requirements. Each annotation specifies invisible labels for screen readers, keyboard interaction patterns, focus behavior, and ARIA roles where semantic HTML alone is insufficient. This documentation ensures that mobility device users, keyboard-only users, and screen reader users can navigate and complete the trip planning workflow with the same efficiency as sighted mouse users.",
        ],
        images: [
          {
            src: "/projects/tcayt/a11y-annotations01.png",
            alt: "TCAYT accessibility annotations showing left/right panel structure with numbered callouts for screen reader labels and keyboard navigation",
            caption: "Accessibility annotations: two-panel layout",
            annotation: "The annotation map for the two-panel trip builder shows invisible labels, keyboard navigation flow, and focus management requirements. Key annotations include invisible 'Edit Trip Details' label for screen readers, read-as-displayed instructions for dynamic content, navigation landmarks, and form field relationships. Engineers use these annotations to implement proper ARIA attributes, focus trapping, and logical tab order across the split-panel interface.",
            magnify: true,
          },
          {
            src: "/projects/tcayt/a11y-annotations02.png",
            alt: "TCAYT accessibility annotations for left column segment inventory showing interaction states and invisible labels",
            caption: "Accessibility annotations: segment inventory detail",
            annotation: "Detailed accessibility requirements for the left-column segment inventory. Annotations specify trip title and description fields, navigation instructions for adding segments, segment status indicators (numbered circles with hover states), action button labels, and invisible navigation hints like 'Previous/Next trip segment' for keyboard-only users. The 'Previous/next disabled when on first/last segment' note ensures keyboard users receive appropriate feedback at navigation boundaries.",
            magnify: true,
          },
        ],
      },
    ],
  },

  // â”€â”€â”€ ATPCO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "atpco",
    number: "04",
    category: "UX Research & Workshop Facilitation Â· ATPCO",
    title: "Airline Industry UX Practice",
    role: "Sr. UX Researcher & Design Sprint Facilitator",
    period: "2018â€“2021",
    description:
      "ATPCO is the airline industry's pricing and data infrastructure backbone, a B2B company whose products are used by pricing analysts at 490+ airlines globally. I led UX research and design across ATPCO's product portfolio, establishing the user research practice, contributing core design system components alongside a UX engineer, running Design Sprints across product teams, and designing analyst tools that replaced raw data grids with plain-language interfaces.",
    highlights: [
      "Ran ~12 workshops across 5 product teams over 6 months, establishing a monthly Design Sprint cadence",
      "Designed pricing analyst tools for teams across American Airlines, Delta, LATAM, and 490+ airlines worldwide",
      "A/B usability study (7 international participants, Morae) on CIF date-logic UI: 6 of 7 preferred the prototype, findings that drove the shipped redesign",
      "Built core components for ATPCO's design system alongside a UX engineer",
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
          "When I joined in 2018, there was no established research practice and no formal process for engaging users. The products had been built primarily by engineers for a highly technical analyst audience and, while functional, carried significant usability debt. I took on building those foundations: establishing processes for user engagement, earning stakeholder trust in the value of that work, and producing results demonstrably worth sustaining.",
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
          "The work gained visibility quickly, and the cadence expanded to a monthly schedule across product teams. Over six months I ran approximately 12 workshops across 5 teams. One outcome was a proof-of-concept bundle offer builder designed and tested with airline partners, combining discovery research, UI design, and usability testing in a single sprint.",
        ],
        images: [
          {
            src: "/projects/atpco/workshop.jpg",
            alt: "ATPCO Lightning Decision Jam, team working at sticky note wall",
            caption: "Lightning Decision Jam at ATPCO, 2020",
            annotation: "A Lightning Decision Jam with one of the ATPCO product teams. Teams worked through structured rounds of silent ideation, voting, and prioritization. The whiteboard on the right shows the 'What's Working / Need to Change' framing used in the session's opening divergence phase.",
            magnify: true,
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
            magnify: true,
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
    ],
  },
  {
    slug: "cowans",
    number: "05",
    category: "UX Design & Development Â· Tribeswell",
    title: "Cowan's Collections",
    role: "Web Designer & Developer",
    period: "2014â€“2015",
    description:
      "A bespoke platform design for Cowan's Auctions, a regional fine art and antiques auction house in Cincinnati. The core problem: collectors — typically older adults — accumulate objects with deep personal meaning, but as collections grow, their families lose track of what exists, what it's worth, and why it matters. When the collector can no longer manage the collection or passes away, the family is left without the context to make decisions. The platform needed to serve not just the collector, but the family who inherits the collection, the traders and growing collectors looking to acquire, researchers needing expert access, auction houses, and casual browsers.",
    highlights: [
      "Designed a bespoke platform (not templated) serving a range of stakeholders: collectors, their families, traders, growing collectors, researchers, auction houses, and casual browsers",
      "Created the full 3-step 'New Collection' flow, allowing collectors to catalog items with keywords, ownership history, appraisal info, and personal stories",
      "Designed the 'Chain of Custodianship' feature — a provenance-tracking view that translates a collector's knowledge into a record legible to heirs, appraisers, and future owners",
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
      { value: "6+", label: "distinct stakeholder types" },
      { value: "5+", label: "usability sessions" },
      { value: "WP + PHP", label: "built with WordPress & SCSS" },
    ],
    sections: [
      {
        heading: "The Challenge",
        paragraphs: [
          "The underlying problem Cowan's needed to solve wasn't just auction browsing — it was a succession problem. Collectors, typically older adults, accumulate objects with deep personal meaning: things that are nostalgic, sentimental, historically significant, or financially valuable. As collections grow, families lose track of what exists, where it came from, and why it matters. When the collector can no longer manage the collection, or passes away, the family is left without the context to make good decisions. What's worth selling? What should be kept? What does this piece mean? Without documentation, those answers are gone.",
          "The platform needed to serve a range of stakeholders beyond the collector themselves. Families inheriting a collection need to understand both monetary and symbolic value. Avid collectors and traders want to find and exchange pieces with others who share their interests. Researchers need access to experts and provenance records for specific types of artifacts. Auction houses need visibility into available inventory and motivated sellers. And casual browsers just want to discover something interesting. The design challenge was building a single interface that served all of these without collapsing into something that served none of them well.",
        ],
      },
      {
        heading: "Discovery & User Research",
        paragraphs: [
          "I began with client discovery sessions to map the existing customer base, understand how collectors used the current site, and identify where friction occurred. The most consistent finding: collectors wanted to document personal stories and provenance alongside auction data; the emotional narrative of an object was as important as its appraised value — and crucially, it was the part most at risk of being lost when the collector was gone. This informed the entire information architecture.",
          "The stakeholder map was broader than a simple browser-vs-collector split. The primary user doing the work is the collector; the primary beneficiary of that work is often the family who eventually inherits it. Secondary audiences include traders and growing collectors looking to acquire, researchers needing expert context, auction houses assessing potential inventory, and casual browsers. The design had to let each of these move through the same interface without feeling like they were in the wrong place.",
        ],
        images: [
          {
            src: "/projects/cowans/homepage.jpg",
            alt: "Homepage with upcoming events and collections grid",
            caption: "Homepage design",
            annotation: "The homepage was designed to let browsers enter through events ('Upcoming' and 'Newly Auctioned/Sold' sections) while giving collectors a direct path to their active collections. The collector grid, organized by person rather than item type, reflects the research finding that serious collectors think in terms of whose collection they're following, not what category an item belongs to.",
            magnify: true,
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
          "The Chain of Custodianship is the feature that directly addresses the succession problem. On every item's detail screen, collectors can document the full ownership history of an object — names, dates, locations — creating a traceable lineage from the current owner back through all previous custodians. Anonymous entries are supported for gaps in known history. Alongside the ownership record, a personal story field lets the collector attach the human context: where they found it, what it means, who it came from.",
          "This matters most when the collector is gone. A family inheriting a collection filled with undocumented objects has no way to distinguish what's financially valuable from what's sentimentally irreplaceable from what's simply clutter. The Chain of Custodianship turns the collector's private knowledge into a record the family can actually use — to make decisions about what to keep, what to sell, and what to donate, without having to guess at the meaning behind every object.",
          "The feature was validated in usability testing as the most compelling element of the entire platform. Several participants said it would drive them to use the platform on its own. The example that landed hardest in testing was Kerry's account of her grandmother's Singer sewing machine, passed down across generations and continents — the kind of story that exists nowhere in an auction catalog but is exactly what a family needs to understand why an object matters.",
        ],
        images: [
          {
            src: "/projects/cowans/item-detail.jpg",
            alt: "Item detail screen with Chain of Custodianship",
            caption: "Item detail: Chain of Custodianship, collapsed and expanded",
            annotation: "Left: the Chain of Custodianship accordion in its collapsed default state, showing ownership history as a scannable table with names, dates, and locations. Right: expanded, revealing a personal story field where the current owner added context about how they came to own the item. Testing showed that the personal story section was the most emotionally resonant element of the entire platform for collector users.",
            magnify: true,
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
            magnify: true,
          },
          {
            src: "/projects/cowans/testing-success-state.jpg",
            alt: "Testing the collection creation flow and success state",
            caption: "Testing the 'New Collection' creation and success confirmation",
            annotation: "Left: the main collections browsing view on iPad, testing how easily participants could distinguish between collectors and navigate to items of interest. Right: testing the success state ('Great! You've added a Collection!'), evaluating whether the confirmation felt appropriately celebratory without blocking the user's next action.",
            magnify: true,
          },
        ],
      },
    ],
  },
  {
    slug: "ebay",
    number: "06",
    category: "Interaction Design Â· Academic",
    title: "eBay Mobile Redesign",
    role: "UX Design, MFA Coursework",
    period: "2017â€“2018",
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
  // â”€â”€â”€ Synthetic User Tool â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "synthetic-user-tool",
    number: "07",
    category: "Research Operations Â· SAP Concur",
    title: "Synthetic User Tool",
    role: "Principal UX Designer, Solo Build",
    period: "2023â€“Present",
    description:
      "An internal research operations system built entirely from scratch: a full data pipeline that transforms raw customer feedback into segmentable AI personas and structured design evaluation. Built solo using Claude Code, ChatGPT, and GitHub. The design team actively uses it across product lines. The tool's own interface is proprietary and not shown here.",
    highlights: [
      "Sole builder: no engineering sprint, no roadmap slot, no organizational buy-in required to ship",
      "Full pipeline: raw feedback spreadsheet â†’ monthly content analysis â†’ GitHub â†’ combined dataset â†’ segmentable synthetic personas",
      "Evaluation layer contrasts synthetic user assessments against real design criteria: WCAG, Nielsen Norman heuristics, SAP Fiori, iOS HIG, and Material Design",
      "Processes ~25,000 feedback comments per month from the product area",
      "Adopted across the design team without a formal rollout",
    ],
    tags: ["Research Operations", "AI Tools", "Data Pipeline", "Synthetic Users", "Design Evaluation", "Agent-Based Modeling"],
    images: [
      {
        src: "/projects/synthetic-user-tool/agent-network.png",
        alt: "Synthetic user agent-based model, network topology of synthetic personas",
        annotation: "The agent-based model topology: each node is a synthetic persona generated from real customer feedback. Personas are interconnected through shared behavioral attributes, and each receives the same design stimulus during an evaluation round. The network structure mirrors how real user segments influence and inform each other.",
      },
      {
        src: "/projects/synthetic-user-tool/pipline.png",
        alt: "Synthetic User Tool data pipeline, five-stage monthly cadence",
        annotation: "The five-stage pipeline: raw Qualtrics export â†’ AI-powered content analysis â†’ GitHub corpus aggregation â†’ synthetic persona generation â†’ multi-criteria design evaluation. The only manual step is the Day 1 export, which takes about five minutes. Everything else runs on demand.",
      },
      {
        src: "/projects/synthetic-user-tool/synth user persona.png",
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
          "SAP Concur receives roughly 25,000 feedback comments per month from users of my product area alone. That volume is unmanageable for any design team trying to read it directly; insights get filtered, summarized incompletely, or deferred until someone has bandwidth for a quarterly synthesis. By then the moment has passed.",
          "The core problem is not that the data doesn't exist. It's that the gap between 'raw feedback exists' and 'the team can act on it' is too wide. A human analyst reading thousands of comments doesn't scale. And while real user testing is the right tool for nuanced questions, scheduling and recruiting cycles mean it's rarely available in the middle of an iteration sprint, exactly when a designer most needs to know whether a pattern will hold.",
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
            src: "/projects/synthetic-user-tool/pipline.png",
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
            src: "/projects/synthetic-user-tool/agent-network.png",
            alt: "Agent-based model network, synthetic personas as interconnected agents",
            caption: "The agent-based simulation network",
            annotation: "The network topology shows six synthetic persona agents, each connected to clusters of feedback data nodes that shaped their attributes. During an evaluation round, all agents receive the same design stimulus simultaneously. SP-06 (Power User Hub) sits at the center of the network because that segment generates the highest-signal feedback and carries the highest influence weight in multi-agent consensus scoring.",
          },
        ],
      },
      {
        heading: "The Evaluation Layer",
        paragraphs: [
          "Beyond persona generation, the tool includes a design evaluation layer. Given a design to review, the system generates an assessment from the perspective of a synthetic user persona, asking how this segment of real customers would respond to the design decision, and then contrasts that against a structured evaluation using established design criteria.",
          "The evaluation criteria are explicit and multi-standard: WCAG 2.1 AA accessibility guidelines, Nielsen Norman usability heuristics, SAP Fiori design system conventions, and iOS Human Interface and Material Design guidelines where applicable. Output is specific and actionable. Rather than 'this might confuse users,' a typical evaluation flags something like 'no format guidance violates Heuristic #6 (recognition vs. recall), severity 7/10,' or identifies which user segment will struggle at a given step and with what estimated frequency. Issues are prioritized by severity and user pain-point weight, not returned as a flat undifferentiated list.",
          "The tool works best during the iteration phase, when patterns are still being defined. Most usability problems at that stage follow known patterns (missing labels, unclear flows, ambiguous terminology) that a model trained on thousands of real feedback statements is well-suited to detect. It is not a substitute for real user testing, which remains necessary for subtle interaction problems, edge cases, and emotional responses. The value is arriving at real testing with fewer obvious issues and more focused questions.",
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
          "The tool was not announced, launched, or formally rolled out. It was built, shared with the Travel UX team, and adopted because it was useful. Designers use it to pressure-test their work before reviews, to orient quickly on a new project by reading a relevant persona summary, and to catch accessibility and heuristic issues that manual review might miss under time pressure.",
          "It occupies the space between product tooling and research operations: infrastructure with no natural home on a standard roadmap, but with clear value for the people doing the work.",
        ],
        images: [
          {
            src: "/projects/synthetic-user-tool/synth user persona.png",
            alt: "Synthetic persona corpus, agent segmentation matrix",
            caption: "The synthetic persona corpus, segmented by market, device, and frequency",
            annotation: "Six synthetic personas derived from the real feedback corpus, each with weighted influence scores proportional to their share of monthly comments. The personas aren't invented archetypes; they emerge from the data. SP-06 (Power User Hub) carries a 1.00 influence weight because that segment generates the highest volume of high-signal feedback.",
          },
        ],
      },
    ],
  },

  // â”€â”€â”€ NGS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "ngs",
    number: "08",
    category: "Product Design Â· ATPCO",
    title: "Next Gen Storefront",
    role: "UX Designer",
    period: "2019â€“2021",
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
        src: "/projects/ngs/ngs-results-mockup.png",
        alt: "NGS flight search results interface shown on a laptop",
      },
      {
        src: "/projects/ngs/results-collapsed.png",
        alt: "NGS results page: default collapsed view with UPA attribute chips",
        annotation: "The default results view shows airlines as scannable rows with highlighted UPA attributes surfaced as chips on the right: Seat Selection, Checked Bags, Upgrade Rights, and others. At a glance, travelers can compare airlines on specific differentiators without expanding any row.",
      },
      {
        src: "/projects/ngs/results-expanded.png",
        alt: "NGS results: fare matrix expanded, showing UPA and UTA attributes across fare classes",
        annotation: "Expanding a result row reveals the full attribute matrix. UPA (Universal Product Attributes) are the fare-level, ticket-specific attributes: Seat Selection, Checked Bags, Cancellation, Upgrade Eligibility, Boarding Priority, Lounge Access. UTA (Universal Travel Attributes) are the fixed aircraft-level attributes: Seat, Aircraft Type, Layout, Wi-Fi, Entertainment, Meal Service. Together they give travelers a complete, structured picture of what each fare class actually includes.",
      },
      {
        src: "/projects/ngs/compare.png",
        alt: "NGS compare mode: three flights side by side with aligned UPA and UTA attribute grid",
        annotation: "Compare mode is where the NGS value proposition is most visible. A traveler can compare fares within a single airline across its fare tiers, compare equivalent fares from different airlines, or compare across both dimensions simultaneously. Most OBTs never surface this comparison at all. Travelers see one offer, then another, without a shared frame of reference. The aligned attribute grid makes the differences immediately readable without requiring the traveler to hold multiple options in memory.",
      },
    ],
    accentColor: "#0d1a0d",
    sections: [
      {
        heading: "The Opportunity",
        paragraphs: [
          "ATPCO sits at a unique position in the airline industry: it processes the fare data that all airlines publish and all booking engines consume. Most travelers never encounter ATPCO, but every flight search result is shaped by its data. The Next Gen Storefront was a bet that ATPCO could also define how that data is presented, not just processed.",
          "The core problem NGS was designed to solve: most online booking tools (OBTs) present travelers with a single airline and a single fare offer at a time. The traveler sees one option, then another, then another, never all of them simultaneously. This makes it nearly impossible to compare fares within an airline across fare classes, or to compare equivalent fare classes across airlines. Travelers end up making decisions based on price alone because that's the only dimension that's consistently visible.",
          "NGS's central value proposition was full simultaneous disclosure: all airlines, all offered fares, all at once, organized so travelers could compare within an airline across its fare tiers and between airlines at the same fare level. This was particularly meaningful for business travelers, who are bound by company travel policy and need to find options that satisfy both schedule requirements and price restrictions. Business travelers prioritize schedule first, then price within policy; leisure travelers are primarily price-driven. Both audiences benefit from seeing the full offer set, but for different reasons.",
        ],
      },
      {
        heading: "Design Approach",
        paragraphs: [
          "I approached the NGS design with two audiences in mind simultaneously: the booking engine operators who would configure and deploy it, and the end travelers who would use it to choose flights. The B2B configuration layer needed to give airlines meaningful control over how their products were displayed; the consumer layer needed to make a genuinely novel interaction model feel intuitive.",
          "The fundamental design challenge was that the NGS model doesn't match most travelers' mental model of air shopping. Travelers expect to see one option at a time and compare sequentially. NGS presents all options simultaneously in a structured grid, which is more efficient but requires a different scanning strategy. Business travelers adapted more readily, as they're already accustomed to evaluating multiple fare options to find something that fits both their schedule and their company's policy. Leisure travelers needed more scaffolding to understand that they were looking at a complete, comparable picture rather than being overwhelmed by it.",
          "The data architecture added another layer of complexity: two fundamentally different types of fare attributes needed to coexist in a single matrix. UPA (Universal Product Attributes) are fare-level, ticket-specific attributes that vary by price class: Seat Selection fees, Checked Bags, Cancellation policy, Upgrade Eligibility, Boarding Priority, Lounge Access. UTA (Universal Travel Attributes) are fixed to the aircraft and don't change by fare class: Seat type, Aircraft, Layout, Wi-Fi, Entertainment, Meal Service. Organizing these into distinct 'Ticket Specific' and 'In Seat' sections gave travelers a clear mental model: UPA rows tell you what you're paying more for; UTA rows tell you what you're getting regardless.",
        ],
        images: [
          {
            src: "/projects/ngs/results-row-expanded.png",
            alt: "Fully expanded result row showing UPA Ticket Specific and UTA In Seat attribute matrix",
            caption: "Expanded row: UPA and UTA attributes organized across fare classes",
            annotation: "The expanded row shows the full matrix. 'Ticket Specific' rows are UPA: fare-level attributes that vary by price point and represent the commercial differentiators airlines publish via ATPCO. 'In Seat' rows are UTA: fixed aircraft attributes that remain constant across all fares on that flight. Checkmarks indicate included; cost values indicate fees; blank cells indicate unpublished data.",
            magnify: true,
          },
          {
            src: "/projects/ngs/upa-detail.png",
            alt: "UPA detail expansion panel: Priority Boarding with seat and cabin imagery",
            caption: "UPA detail: attribute description with cabin photography",
            annotation: "Selecting a UPA attribute expands a detail panel with a plain-language description and supporting imagery. This addressed a testing finding: travelers understood the attribute names but wanted confirmation of what the service actually looked like before committing to an upcharge.",
            magnify: true,
          },
        ],
        videos: [
          {
            src: "/projects/ngs/ngs-demo.mp4",
            caption: "Full NGS prototype demo",
            annotation: "A walkthrough of the complete NGS prototype, showing the fare results page, UPA/UTA attribute matrix, amenities detail expansion, comparison mode, and the review screen. The flow was designed to be operated by a booking engine operator during airline partner demonstrations.",
          },
        ],
      },
      {
        heading: "Interaction Walkthrough",
        paragraphs: [
          "The prototype was built to demonstrate the full booking interaction to airline industry partners. Each stage of the flow was designed to be self-explanatory to a traveler with no prior exposure to the NGS model, while still giving booking engine operators the configuration control they needed on the back end.",
        ],
        videos: [
          {
            src: "/projects/ngs/01-landing-results.mp4",
            caption: "Results page: default collapsed view",
            annotation: "The default results view surfaces a curated set of highlighted UPA attributes for each airline as scannable chips, giving travelers a quick read on competitive differentiators without expanding anything. The layout was designed to reward both the scan (horizontal comparison across airlines) and the drill (vertical read of a single airline's key attributes).",
          },
          {
            src: "/projects/ngs/02-first-row.mp4",
            caption: "Expanding the first result row",
            annotation: "Expanding a row reveals the full UPA and UTA matrix. UPA attributes appear in the 'Ticket Specific' section: these vary by fare class and include policy-level differentiators like Seat Selection, Checked Bags, Cancellation, Boarding Priority, and Lounge Access. UTA attributes appear in the 'In Seat' section: these are fixed to the aircraft and don't change by fare class.",
          },
          {
            src: "/projects/ngs/03-upa-amenities.mp4",
            caption: "UPA attributes: Ticket Specific section",
            annotation: "UPA (Universal Product Attributes) are the fare-level, non-aircraft attributes representing the commercial layer of what airlines sell: upgrade eligibility, boarding priority, lounge access, same-day change, cancellation flexibility. These are the attributes that vary most dramatically across fare classes and form the core of airline product differentiation.",
          },
          {
            src: "/projects/ngs/04-amenities-details.mp4",
            caption: "UPA detail expansion",
            annotation: "Selecting a UPA attribute expands a detail panel with a plain-language description and cabin imagery. Progressive disclosure keeps the default matrix view scannable while preserving access to full attribute detail for travelers who need it before committing to an upcharge.",
          },
          {
            src: "/projects/ngs/05-compare.mp4",
            caption: "Compare mode: up to three fares side by side",
            annotation: "Compare mode lets travelers pin up to three options and evaluate them across the same UPA and UTA attribute grid. The alignment is exact: every row maps directly across all columns, making it straightforward to spot differences. Validated in guerrilla testing as the most effective format for final booking decisions.",
          },
          {
            src: "/projects/ngs/06-review.mp4",
            caption: "Review screen",
            annotation: "The review screen consolidates the selected fare's UPA policy status and UTA service attributes before confirmation. Carrying the attribute language forward from the results view ensures travelers arrive at review with consistent framing of what they selected and why.",
          },
        ],
      },
      {
        heading: "Validation",
        paragraphs: [
          "I ran guerrilla usability testing with participants recruited outside ATPCO, including travelers who used online booking regularly, to evaluate whether the UPA/UTA attribute model was understandable without domain expertise. The testing validated the core pattern: structured attribute comparison was significantly more effective than the prose descriptions used in most existing booking experiences.",
          "Specific findings shaped several design changes: the taxonomy of attribute categories needed tighter labeling (travelers confused 'connectivity' with 'device charging' before those were separated into discrete UTA rows); the negative-state display needed to be visually softer to avoid disproportionately penalizing airlines that simply hadn't published data for a given attribute; and the UPA/UTA section distinction needed clearer headers before travelers reliably understood the difference between ticket-level and aircraft-level attributes.",
          "The NGS proof of concept was presented to airline industry partners and evaluated as a valid direction. The product did not ship during my tenure at ATPCO, but the interaction patterns and validation data established the design foundation for further development.",
        ],
        images: [
          {
            src: "/projects/ngs/compare.png",
            alt: "NGS compare mode: three flights with full UPA and UTA attribute grid side by side",
            caption: "Compare mode: cross-airline and cross-fare comparison in a single view",
            annotation: "The compare view surfaces something most booking tools never show: a direct, structured comparison across airlines and across fare classes simultaneously. A business traveler working within company policy can quickly identify which options satisfy their schedule need and which of those has the best UPA package for the price. The challenge was compressing the full UPA/UTA matrix into three columns while keeping it readable. Testing confirmed the grid held up, and travelers zeroed in on UPA differences (Checked Bags, Cancellation) first.",
            magnify: true,
          },
        ],
      },
    ],
  },

  // â”€â”€â”€ Urban Expressions â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "urban-expressions",
    number: "09",
    category: "Illustration & Graphic Design Â· MFA Thesis",
    title: "Urban Expressions",
    role: "Illustrator & Graphic Designer, MFA Thesis",
    period: "2017",
    description:
      "An MFA thesis project at Indiana University exploring how urban and contemporary legends function as a vehicle for identity expression and community formation. The output is a series of emblem designs organized into four thematic chapters — Alien Conspiracy, Local & Regional, Cryptozoology, and Occult — produced as vinyl decals intended to be placed on personal items as a way of expressing shared cultural identity and finding community.",
    highlights: [
      "Designed a complete series of contemporary legend emblems organized into four thematic chapters",
      "Grounded in a research essay tracing emblems and identity from Charlemagne's coats of arms through NASA mission patches to urban legend as modern communal symbol",
      "Proposed a specific output format — vinyl decals — chosen for portability, personal expression, and visibility in public spaces",
      "Artwork digitized for embroidery production, with stitch paths, stitch direction, and stitch count defined for each design",
      "Work produced as a bound thesis publication combining essay, research imagery, and the full emblem series",
    ],
    tags: ["Illustration", "Emblem Design", "Graphic Design", "Academic Thesis", "Visual Identity", "Publication Design"],
    images: [
      {
        src: "/projects/urban-expressions/urban-overview.png",
        alt: "Urban Expressions emblem series — contemporary legend decal designs",
        annotation: "The full emblem series from the MFA thesis, organized into four thematic chapters: Alien Conspiracy, Local & Regional, Cryptozoology, and Occult. Each emblem was designed for production as a vinyl decal — a format chosen deliberately for its portability and ability to be placed on personal items in public spaces.",
      },
      {
        src: "/projects/urban-expressions/urban-overview.png",
        alt: "Urban Expressions thesis publication design",
        annotation: "The work was produced as a bound thesis publication, pairing the research essay on emblems, identity, and contemporary legend with the full emblem series. The publication design and the emblem series were treated as integrated components of a single thesis argument.",
      },
      {
        src: "/projects/urban-expressions/urban-overview.png",
        alt: "Urban Expressions emblem designs displayed",
        annotation: "The completed emblem series. The design challenge across all four chapters was creating emblems that felt visually cohesive as a system while remaining individually legible as references to specific legends — from Bigfoot and the Chupacabra to Indiana-specific legends like Diana of the Dunes and The Girl in White.",
      },
    ],
    accentColor: "#0d0d1a",
    sections: [
      {
        heading: "The Thesis Argument",
        paragraphs: [
          "The thesis premise: urban and contemporary legends function as a form of communal identity, and designing emblems around those legends can create a visual language for expressing belonging and finding community. The research essay traced the history of emblems from medieval coats of arms through military and NASA mission patches to the modern day, arguing that emblems connect the wearer to a community of shared values, history, or belief — and that contemporary legends carry exactly that kind of communal meaning.",
          "The proposed output was deliberate: vinyl decals rather than patches, buttons, or printed goods. Decals are small, cheap, non-permanent, and designed to be placed on items used in public — cars, bikes, phones, laptops — making identity expression visible to others who might share the reference. The question the thesis asked was whether revealing shared cultural identity through a legend emblem could spontaneously create connection between strangers.",
        ],
      },
      {
        heading: "The Emblem Series",
        paragraphs: [
          "The emblem series is organized into four chapters. Alien Conspiracy covers UFO and government conspiracy legends (Red Light, Delta, Blue Planet, Majestic 12, Blue Bolt). Local & Regional covers Indiana-specific legends including Woman in Black, Hatchet Man, Diana of the Dunes (Michigan City), and The Girl in White (Franklin). Cryptozoology covers creature legends: Chupacabra, Tasmanian wolf/tiger, Bigfoot/Sasquatch, Mothman, and Loch Ness. Occult covers ritual and supernatural legends: Ouija, Light as a Feather, Bloody Mary, Tarot, and Hotel California.",
          "Each emblem had to be legible at small scale, work in a limited color palette appropriate for decal production, and carry enough visual specificity to be recognizable to someone familiar with the legend without requiring an explanation. The design system needed to feel cohesive across four wildly different subject matter categories.",
        ],
        images: [
          {
            src: "/projects/urban-expressions/urban-overview.png",
            alt: "Full Urban Expressions emblem series, all four chapters",
            caption: "The complete emblem series",
            annotation: "All four chapters of the emblem series side by side. The visual system uses consistent structural conventions — circular containment, emblem proportions, text treatment — that create family resemblance across Alien Conspiracy, Local & Regional, Cryptozoology, and Occult without flattening the distinct character of each legend category.",
            magnify: true,
          },
        ],
      },
    ],
  },

  // â”€â”€â”€ Web & Graphic Design â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "web-and-graphics",
    number: "10",
    category: "Web & Graphic Design",
    title: "Web & Graphic Design",
    role: "Designer & Developer",
    period: "2013â€“2018",
    description:
      "A collection of web design, branding, and graphic design work from the earlier part of my career: bespoke client websites designed and built at Tribeswell LLC, brand identity projects, academic design work from my MFA program, and personal projects spanning interaction design, 3D, and publication design.",
    highlights: [
      "All client websites were bespoke designs, no templates, each built to client-specific creative brief and requirements",
      "WordPress development using custom PHP and SCSS; all handoffs via Git",
      "Academic work spans interaction design, 3D environment design, publication design, and motion graphics",
      "Brand identity work includes logo systems, style guides, and multi-collateral rollouts",
    ],
    tags: ["Web Design", "Branding", "Logo Design", "Print Design", "WordPress", "Front-End Development", "3D Design"],
    images: [
      {
        src: "/projects/web-graphics/boyd.png",
        alt: "Boyd & Company Construction corporate website: Honesty, Integrity, and Outstanding Performance",
        annotation: "Boyd & Company Construction corporate website, a Tribeswell client project. Built to a bespoke brief for a construction and energy services company, the design uses dramatic industrial photography with a bold, authoritative typographic system.",
      },
      {
        src: "/projects/web-graphics/newmoon.png",
        alt: "New Moon Cottage website: dark forest photography anchoring the brand",
        annotation: "New Moon Cottage branding and website: full identity work and WordPress build for a bed and breakfast. The project included logo development through multiple concept rounds, a brand style guide, and a full WordPress site build.",
      },
      {
        src: "/projects/web-graphics/lessonzest.png",
        alt: "Lesson Zest education app website and brand identity",
        annotation: "Lesson Zest brand identity and website: logo system and brand applied to a live education technology product. The lemon mark communicates freshness and fun while remaining legible at small sizes.",
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
            title: "Boyd & Company Construction",
            year: "2015",
            category: "Corporate Website",
            description: "Website design and development for a construction and energy services company. Bespoke WordPress build with a dark, authoritative visual system, custom equipment icons, interactive US locations map, and strong aerial photography throughout.",
            src: "/projects/web-graphics/boyd.png",
            alt: "Boyd & Company Construction corporate website",
            images: [
              { src: "/projects/web-graphics/boyd.png", alt: "Homepage — bold headline over industrial photography", caption: "Homepage" },
              { src: "/projects/web-graphics/boyd-divisions.png", alt: "Divisions overview page", caption: "Divisions" },
              { src: "/projects/web-graphics/boyd-heavyhauling.png", alt: "Heavy Hauling service page with custom equipment icons", caption: "Heavy Hauling" },
              { src: "/projects/web-graphics/boyd-map.png", alt: "Interactive US locations map", caption: "Locations" },
            ],
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
            description: "Full brand identity and WordPress/WooCommerce build for a metaphysical shop. Dark forest photography anchors the brand across homepage, editorial content sections, and a full e-commerce product catalog.",
            src: "/projects/web-graphics/newmoon.png",
            alt: "New Moon Cottage website",
            images: [
              { src: "/projects/web-graphics/newmoon.png", alt: "Homepage with dark forest photography", caption: "Homepage" },
              { src: "/projects/web-graphics/newmoon-path.png", alt: "The Spiritual Path content section", caption: "The Spiritual Path" },
              { src: "/projects/web-graphics/newmoon-products.png", alt: "Shop — featured and new product carousels", caption: "Shop" },
            ],
          },
          {
            title: "The Reformed Broker / Investment Bros",
            year: "2015",
            category: "Branding & Web Design",
            description: "Full brand system and digital work for Ritholtz Wealth Management and affiliated properties: logo development for The Reformed Broker using vintage postcard letterform illustration, applied site header, The Big Picture editorial illustration, Liftoff robo-advisor web app design, Liftoff logo exploration, and A Wealth of Common Sense identity.",
            src: "/projects/web-graphics/invest.png",
            alt: "The Big Picture editorial illustration for The Reformed Broker",
            images: [
              { src: "/projects/web-graphics/broker-logo-dev.jpg", alt: "The Reformed Broker logo development — vintage postcard letterform illustration", caption: "Reformed Broker — Logo Development" },
              { src: "/projects/web-graphics/broker-header.png", alt: "The Reformed Broker website header with city skyline", caption: "Reformed Broker — Site Header" },
              { src: "/projects/web-graphics/invest.png", alt: "The Big Picture editorial illustration", caption: "The Big Picture — Editorial Illustration" },
              { src: "/projects/web-graphics/broker-liftoff-logo.jpg", alt: "Liftoff logo exploration — three rocket and type variations", caption: "Liftoff — Logo Exploration" },
              { src: "/projects/web-graphics/broker-liftoff-app.png", alt: "Liftoff by Ritholtz Wealth Management web app", caption: "Liftoff — Web App" },
              { src: "/projects/web-graphics/broker-commonsense.png", alt: "A Wealth of Common Sense brand logo with maze icon", caption: "A Wealth of Common Sense — Identity" },
            ],
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
            title: "New Moon Cottage",
            year: "2014",
            category: "Logo Concepts",
            description: "Logo development process for a bed and breakfast brand: multiple concept directions ranging from typographic marks to illustrated cottage-and-moon icons before arriving at the final identity.",
            src: "/projects/web-graphics/newmoon-logo.png",
            alt: "New Moon Cottage logo concept variations",
          },
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
            description: "Logo design exploration for a photographer's personal brand. Sketchbook ideation covered typographic, symbolic, and camera-mark directions before moving to digital refinement.",
            src: "/projects/web-graphics/zhang.jpg",
            alt: "Zhang Photography logo exploration sketchbook",
          },
          {
            title: "Nectar App",
            year: "2016",
            category: "Mobile App UI",
            description: "UI design concept for a dark-mode mobile social app: profile-driven discovery, photo-forward messaging, connection management.",
            src: "/projects/web-graphics/nectar-home.png",
            alt: "Nectar mobile app UI design",
          },
        ],
      },
      {
        heading: "Academic & Personal Work",
        paragraphs: [
          "Academic projects from my MFA at Indiana University, spanning interaction design, 3D environment design, publication design, and motion. These projects were less constrained by client requirements and more by research questions and formal design exploration.",
        ],
        gallery: [
          {
            title: "2016 MFA Catalog",
            year: "2016",
            category: "Publication Design",
            description: "Art direction and design for the 2016 IU MFA graduation catalog, a print publication showcasing the work of graduating MFA students across fine art and design disciplines.",
            src: "/projects/web-graphics/mfa-catalog.jpg",
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
            description: "A virtual gallery exploring how lighting, space, and ambient audio affect emotional state, designed as an interactive 3D environment. Concept sketch showing the gallery spatial layout and interactive kiosk placement.",
            src: "/projects/web-graphics/seasonal.jpg",
            alt: "Seasonal Affective Disorder virtual gallery concept sketch",
          },
        ],
      },
    ],
  },
];

const ORDER = [
  "synthetic-user-tool",
  "multi-fare-display",
  "tcayt",
  "ngs",
  "ebay",
  "cowans",
  "urban-expressions",
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
