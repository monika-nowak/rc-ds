/** Icon keys map to Phosphor icons (some are outside the curated DS set). */
export type StatIcon = 'database' | 'first-aid-kit' | 'hospital' | 'tag';

export interface Stat {
  value: string;
  emphasis: string;
  label: string;
  icon: StatIcon;
}

export const STATS: Stat[] = [
  { value: '114', emphasis: 'records', label: 'analyzed', icon: 'database' },
  { value: '39', emphasis: 'HCPs', label: 'involved', icon: 'first-aid-kit' },
  { value: '13', emphasis: 'institutions', label: 'covered', icon: 'hospital' },
  { value: '5', emphasis: 'KITs', label: 'identified', icon: 'tag' },
];

export interface Signal {
  id: string;
  seq: number;
  shorthand: string;
  role: string;
  /** Combined score badge (e.g. "0.92"). */
  strengthLabel: string;
  leadLabel?: string;
  title: string;
  /** Card description — maps to the source "what this suggests" line. */
  description: string;
  records: string;
  hcps: string;
  specialties: string;
  instTypes: string;
  /** Short topic label shown as the card category badge. */
  category: string;
  kit: string;
  report: string;
  soWhat: string;
  /** Source record ids backing this signal. */
  recs: number[];
}

const SIGNAL_1: Signal = {
  id: 'signal-1',
  seq: 1,
  shorthand: 'S1',
  role: 'Lead Signal',
  strengthLabel: '0.92',
  leadLabel: 'Lead',
  title: 'Non-ambulatory patients lack PUL and long-term efficacy data',
  description:
    'Non-ambulatory patients are a clinically recognized population for whom the current evidence base is insufficient to drive confident treatment decisions.',
  records: '19',
  hcps: '10',
  specialties: '6',
  instTypes: '2',
  category: 'Non-ambulatory data gap (PUL, long-term)',
  kit: 'KIT 2 · Efficacy & Outcomes',
  report:
    'The absence of PUL and long-term cardiac data in non-ambulatory DMD patients is directly limiting clinical conviction and prescribing decisions for this population. A minority of records raise adjacent concerns — MRI interpretation, triglycerides, trial underrepresentation — but stay anchored to the same evidence-gap frame.',
  soWhat:
    "Non-ambulatory patients are an active demand signal — HCPs report patients are requesting givinostat — but prescribers can't act without PUL and long-term cardiac data showing consistent effect. Closing this gap advances the goal of demonstrating consistency of effect across the full DMD spectrum and could unlock a population currently unreachable in field conversations.",
  recs: [21, 26, 69, 71, 72, 87, 91, 96, 98],
};

const SIGNAL_2: Signal = {
  id: 'signal-2',
  seq: 2,
  shorthand: 'S2',
  role: 'Supporting Signal',
  strengthLabel: '0.83',
  title: 'No long-term cardiac and pulmonary data limits confidence in older patients',
  description:
    'A specific evidence gap is functioning as a real-world barrier to uptake in a population with few remaining therapeutic options.',
  records: '11',
  hcps: '8',
  specialties: '6',
  instTypes: '2',
  category: 'Long-term cardiac & pulmonary data gap',
  kit: 'KIT 2 · Efficacy & Outcomes',
  report:
    'The absence of long-term cardiac data is directly limiting givinostat use in older and non-ambulatory DMD patients. HCPs report needing integrated pulmonary and cardiac outcomes — particularly for higher-risk subgroups such as post-transplant and complex-cardiac patients — before prescribing confidently.',
  soWhat:
    'Cardiac and pulmonary outcomes are explicitly named measures of disease modification, yet HCPs report they can\u2019t prescribe confidently in older and non-ambulatory patients — where givinostat\u2019s backbone role is most urgent. Longitudinal, integrated cardiac-pulmonary data in higher-risk subgroups is the \u201cmissing link\u201d HCPs say would drive conviction.',
  recs: [1, 26, 69, 71, 87, 96],
};

const SIGNAL_3: Signal = {
  id: 'signal-3',
  seq: 3,
  shorthand: 'S3',
  role: 'Lead Signal',
  strengthLabel: '0.86',
  leadLabel: 'Lead',
  title: 'One year of data is not enough to trust this',
  description:
    "The existing evidence package contains structural gaps that actively prevent clinical acceptance, independent of givinostat's mechanism.",
  records: '16',
  hcps: '10',
  specialties: '6',
  instTypes: '2',
  category: 'Outcome measure limitations',
  kit: 'KIT 2 · Efficacy & Outcomes',
  report:
    'HCPs across neuromuscular medicine, physical therapy, and rehabilitation consistently report that current outcome measures — PUL, RULM, QoL instruments, imaging — are insufficient or misaligned with clinical reality for non-ambulatory DMD. They express sharp frustration that one-year timeframes, averaged group data, and inadequately stratified PRO tools prevent meaningful conclusions about efficacy.',
  soWhat:
    'The field team can\u2019t close the credibility gap with current slide decks — HCPs name specific deficiencies (12-month PUL data, averaged cohort results, no genotype stratification). Progress requires tailored scientific exchange leading with longitudinal trajectory, individual patient-level data, and non-ambulatory functional outcomes, not aggregate efficacy summaries.',
  recs: [59, 78, 79, 91, 94, 106, 112, 113],
};

const SIGNAL_4: Signal = {
  id: 'signal-4',
  seq: 4,
  shorthand: 'S4',
  role: 'Lead Signal',
  strengthLabel: '0.84',
  leadLabel: 'Lead',
  title: 'GI tolerability is turning patients and families away',
  description:
    'GI tolerability is functioning as a prescribing deterrent at scale, with unilateral patient-driven therapy changes compounding the challenge for clinical management.',
  records: '9',
  hcps: '7',
  specialties: '3',
  instTypes: '2',
  category: 'GI tolerability challenges',
  kit: 'KIT 3 · Safety & Tolerability',
  report:
    'GI tolerability is an active barrier to initiation — patients refuse at mention of GI side effects, clinics report 90%+ dose-adjustment rates, and one influential academic center has developed negative internal sentiment. A split exists between centers with significant tolerability challenges and those reporting improved tolerance with modified dosing, though the dominant voice reflects sharp concern.',
  soWhat:
    'GI tolerability is already driving treatment avoidance and unilateral discontinuations before MSL scientific exchange can occur — closing the gap requires field teams to normalize dose-modification approaches and set realistic expectations at initiation, not after a negative experience calcifies. Hesitancy at one influential academic-linked center, left unchallenged, risks broader community resistance.',
  recs: [6, 56, 62, 73, 80],
};

const SIGNAL_5: Signal = {
  id: 'signal-5',
  seq: 5,
  shorthand: 'S5',
  role: 'Supporting Signal',
  strengthLabel: '0.81',
  title: 'HCPs starting low and titrating up to avoid AE-driven discontinuation',
  description:
    'A meaningful gap in HCP confidence around PI dosing guidance and real-world tolerability management.',
  records: '10',
  hcps: '8',
  specialties: '5',
  instTypes: '2',
  category: 'Real-world dosing — start low, titrate',
  kit: 'KIT 4 · Dosing & Monitoring',
  report:
    'HCPs report initiating patients below the PI-labeled starting dose — particularly in higher weight classes — citing tolerability concerns and anticipated dose reductions. MDA data showing over 50% of heavier patients requiring two dose reductions reinforces a start-low, escalate approach.',
  soWhat:
    'HCPs have already developed their own start-low, titrate-up protocols — the monitoring and dose-selection education gap is actively shaping prescribing, not theoretical. MSLs need proactive tools and data to guide dose-optimization conversations before real-world deviation entrenches as standard practice.',
  recs: [36, 39, 102],
};

const SIGNAL_6: Signal = {
  id: 'signal-6',
  seq: 6,
  shorthand: 'S6',
  role: 'Notable Signal',
  strengthLabel: '0.81',
  title: 'Lab monitoring burden is actively blocking patient starts',
  description:
    'Monitoring burden is functioning as an active barrier to both initiation and continuation rather than a manageable side-effect expectation.',
  records: '15',
  hcps: '12',
  specialties: '4',
  instTypes: '2',
  category: 'Lab monitoring burden',
  kit: 'KIT 4 · Dosing & Monitoring',
  report:
    'Lab monitoring frequency is the single biggest operational hurdle with givinostat, straining clinic workflows and causing patients to decline treatment — with staff burden described as exceeding that of gene therapy. A split exists between clinics with streamlined monitoring schedules and those still operating without formal protocols.',
  soWhat:
    'Monitoring burden is not background friction — it is causing eligible patients to decline givinostat and clinic staff to limit new starts. MSLs have an opening to address the benefit-worth-the-burden equation directly: sharing data on platelet and triglyceride trajectories and dose-titration outcomes, and problem-solving scheduling with clinic coordinators.',
  recs: [56, 77],
};

const SIGNAL_7: Signal = {
  id: 'signal-7',
  seq: 7,
  shorthand: 'S7',
  role: 'Notable Signal',
  strengthLabel: '0.81',
  title: 'Gene therapy dominates the conversation, leaving givinostat underrecognized',
  description:
    "Gene therapy's primacy creates a structural barrier to positioning givinostat as an essential, independent DMD backbone therapy.",
  records: '9',
  hcps: '8',
  specialties: '4',
  instTypes: '2',
  category: 'Gene therapy overshadows givinostat',
  kit: 'KIT 5 · DMD Journey & Unmet Need',
  report:
    'Gene therapy dominates clinical conversations, crowding out consideration of complementary therapies like givinostat. HCPs report difficulty explaining the HDAC inhibition rationale, citing unfamiliarity and a preference for simpler framings.',
  soWhat:
    "Gene therapy is actively displacing the multi-modal treatment conversation — HCPs either sequence givinostat as an afterthought or can't articulate its rationale independent of dystrophin-focused framing. The HDAC inhibition message needs a sharper standalone identity that doesn't depend on contrasting it with gene therapy to register.",
  recs: [3],
};

const SIGNAL_8: Signal = {
  id: 'signal-8',
  seq: 8,
  shorthand: 'S8',
  role: 'Notable Signal',
  strengthLabel: '0.78',
  title: "Families can't grasp why to treat early without better education",
  description:
    'A foundational education gap is actively delaying treatment initiation and undermining adherence across the patient population.',
  records: '11',
  hcps: '7',
  specialties: '4',
  instTypes: '2',
  category: 'Patient & caregiver education gaps',
  kit: 'KIT 5 · DMD Journey & Unmet Need',
  report:
    "Caregivers consistently resist initiating givinostat until patients become symptomatic or near non-ambulatory, citing a failure to grasp the rationale for early intervention. HCPs report inadequate materials — brochures alone are insufficient — and families struggle to distinguish givinostat's mechanism from gene therapy or steroids.",
  soWhat:
    'HCPs cannot close the gap between caregiver readiness and early initiation without better educational tools — current materials don\u2019t address the \u201cwhy treat now\u201d question driving delay. MSLs have a clear opportunity to equip clinics with resources that move beyond brochures and counter medication aversion and wait-and-see instincts.',
  recs: [45],
};

const SIGNAL_9: Signal = {
  id: 'signal-9',
  seq: 9,
  shorthand: 'S9',
  role: 'Notable Signal',
  strengthLabel: '0.77',
  title: 'Givinostat is the building block, but we need combination data',
  description:
    'The combination-therapy framework is conceptually established among HCPs but requires published human combination data to move from belief to advocacy.',
  records: '10',
  hcps: '8',
  specialties: '3',
  instTypes: '2',
  category: 'Combination / sequencing — building block',
  kit: 'KIT 5 · DMD Journey & Unmet Need',
  report:
    'HCPs view givinostat as a foundational \u201cbuilding block\u201d in a multi-modal DMD approach, citing its non-steroidal mechanism and HDAC rationale. They report uncertainty about gene therapy sequencing and raise cost-burden concerns for families managing multiple chronic therapies.',
  soWhat:
    'HCPs have already internalized givinostat\u2019s role as a non-steroidal backbone — the paradigm doesn\u2019t need introducing, it needs reinforcing with published human combination data. The immediate opportunity is to close the evidence gap HCPs are explicitly naming, enabling more confident initiation alongside exon skippers, vamorolone, and gene therapy.',
  recs: [7, 80],
};

export const SIGNALS: Signal[] = [
  SIGNAL_1,
  SIGNAL_2,
  SIGNAL_3,
  SIGNAL_4,
  SIGNAL_5,
  SIGNAL_6,
  SIGNAL_7,
  SIGNAL_8,
  SIGNAL_9,
];

export interface Trend {
  id: string;
  label: string;
  type: string;
  score: string;
  title: string;
  description: string;
  report: string;
  considerations: string[];
  relevance: string[];
  signalCount: number;
  signals: Signal[];
}

export const TRENDS: Trend[] = [
  {
    id: 'trend-1',
    label: 'Trend 1',
    type: 'Cluster Trend',
    score: '1.55',
    title: 'Non-ambulatory patients lack the evidence to prescribe confidently',
    description:
      'A targeted, subpopulation-specific evidence gap is preventing uptake in a group with few remaining options — addressing it would convert acknowledged interest into clinical action.',
    report:
      'Across 25 records from 13 HCPs spanning 8 specialties, a specific evidence demand surfaces: the absence of PUL, long-term cardiac, and long-term pulmonary data for non-ambulatory and older DMD patients is functioning as a direct barrier to prescribing givinostat — multiple HCPs name it explicitly as \u201cthe missing link\u201d for their clinics. The tension is not skepticism about mechanism or ambulatory data; it\u2019s that otherwise-engaged HCPs can\u2019t extend that confidence to non-ambulatory patients without subpopulation-specific outcome data.',
    considerations: [
      'HCPs across specialties name the PUL and long-term cardiac data gap as a concrete, addressable barrier — proactive MSL delivery of existing OLE and PROVIDUS data could shift prescribing.',
      'Non-ambulatory patients are actively requesting givinostat, yet coverage barriers compound the evidence gap — MSL payer-access support may be needed in parallel.',
      'Higher-complexity settings (post-transplant, complex cardiac) flag the gap as especially consequential — subgroup-specific cardiac and pulmonary cuts would address the most acute need.',
      'The PUL is the most meaningful functional measure for non-ambulatory patients; dissemination should lead with it, not treat it as secondary.',
    ],
    relevance: [
      'PUL + long-term cardiac/pulmonary data is the named barrier — proactive delivery of OLE/PROVIDUS data could shift prescribing in engaged but hesitant clinics.',
      'Pair clinical evidence with payer-access support to convert active non-ambulatory demand into treatment starts.',
    ],
    signalCount: 2,
    signals: [SIGNAL_1, SIGNAL_2],
  },
  {
    id: 'trend-2',
    label: 'Trend 2',
    type: 'Solo Signal Trend',
    score: '0.86',
    title: 'Existing evidence structure cannot produce clinical conviction',
    description:
      'The barrier to clinical acceptance is methodological — no volume of additional promotional communication will close the gap without targeted evidence generation.',
    report:
      "HCPs across neuromuscular medicine, physical therapy, and rehabilitation consistently identify structural deficiencies in givinostat's evidence package — one-year follow-up windows, group-averaged endpoints, and inadequately validated PRO instruments are misaligned with how they evaluate disease-modifying efficacy in non-ambulatory DMD. The tension is about evidentiary architecture, not mechanism: PUL, RULM, and available QoL tools don't capture what matters clinically, and individual patient-level data by genotype and steroid regimen is absent.",
    considerations: [
      'HCPs require at least three years of longitudinal PUL data before drawing durability conclusions — the one-year EPIDYS window is explicitly insufficient.',
      'Individual patient-level data by mutation type and steroid regimen is a named prerequisite; group-averaged trial data doesn\u2019t meet decision standards.',
      'Existing QoL instruments (PedsQL, PODCI) are seen as inadequately validated; HCPs name alternative endpoints like bite strength and swallowing.',
      'Framing outcome measures as a \u201cnecessary evil\u201d signals a credibility gap MSL conversations alone can\u2019t close.',
    ],
    relevance: [
      'HCPs require \u22653 years of longitudinal PUL data before drawing durability conclusions; the one-year window is explicitly called insufficient.',
      'They need individual patient-level data by genotype and steroid regimen, not group averages.',
    ],
    signalCount: 1,
    signals: [SIGNAL_3],
  },
  {
    id: 'trend-3',
    label: 'Trend 3',
    type: 'Solo Signal Trend',
    score: '0.84',
    title: 'GI tolerability is deterring starts and reshaping dosing practice',
    description:
      'GI tolerability is not merely side-effect management but a structural gap in HCP confidence around labeled dosing — producing informal clinical workarounds at scale before formal MSL engagement has shaped practice.',
    report:
      'GI side effects are functioning as an active prescribing deterrent — patients and families disengage at mention of GI risk, unilateral dose changes occur before clinicians can intervene, and at least one academic center has entrenched negative sentiment limiting new starts. A split exists between high-burden centers and those finding improved tolerance through modified dosing. In response, HCPs are departing from PI-labeled dosing — initiating heavier patients at sub-labeled doses — citing MDA data showing over 50% of heavier patients require two dose reductions.',
    considerations: [
      'Patient and family sensitization to GI risk happens before clinical conversations begin — expectation-setting tools must reach HCPs early.',
      'Unilateral, unreported dose changes are a clinical-management breakdown — current support is insufficient to keep patients in contact during adjustment.',
      'The start-low, titrate-up workaround is spreading, reinforced by MDA data — engage before it entrenches as standard practice.',
      'Peer-to-peer narratives (e.g., patient Facebook communities) are already shaping behavior and could amplify the modified-dosing success story.',
    ],
    relevance: [
      'Set GI expectations and normalize dose-modification at initiation, before negative experiences calcify.',
      'Start-low, titrate-up workarounds are spreading — build confidence in PI-guided dosing and real-world titration.',
    ],
    signalCount: 2,
    signals: [SIGNAL_4, SIGNAL_5],
  },
];

export const NOTABLE_SIGNALS: Signal[] = [SIGNAL_6, SIGNAL_7, SIGNAL_8, SIGNAL_9];

/** Source records (verbatims) — extracted verbatim from the report data. */
export interface RecordEntry {
  id: number;
  specialty: string;
  institution: string;
  date: string;
  quote: string;
}

export const RECORDS: Record<number, RecordEntry> = {
  1: {
    id: 1,
    specialty: 'Cardiologist',
    institution: 'Community-based',
    date: 'Mar 26, 2026',
    quote:
      'A cardiologist who treats DMD emphasized the need for clearer guidance and ownership around prolonged-QT management with givinostat, and cautioned that arrhythmia risk becomes more clinically relevant as patients get older, more fragile, or develop infections — “even routine clinical events may carry outsized risk in this population.”',
  },
  3: {
    id: 3,
    specialty: 'Child Neurology',
    institution: 'Community-based',
    date: 'Mar 12, 2026',
    quote:
      '“Gene therapy and exon-skipping technologies have sucked all the air out of the room,” overshadowing other approaches. Givinostat feels underrecognized because gene therapy dominates the clinical conversation — greater awareness of the therapy “would make a real difference.”',
  },
  6: {
    id: 6,
    specialty: 'Child Neurology',
    institution: 'Community-based',
    date: 'Mar 12, 2026',
    quote:
      '“If you mention GI stuff, patients turn their heads the other way.” Families are highly sensitized to tolerability issues and often make treatment decisions based on the first perceived risk.',
  },
  7: {
    id: 7,
    specialty: 'Child Neurology',
    institution: 'Community-based',
    date: 'Mar 12, 2026',
    quote:
      'Expects future DMD management to be driven by combination therapy and views givinostat as a foundational “building block” given its non-steroidal mechanism. “Non-steroidal components are crucial.”',
  },
  21: {
    id: 21,
    specialty: 'Child Neurology',
    institution: 'Academic',
    date: 'Mar 3, 2026',
    quote:
      '“We know that it works in the ambulatory population, but we don’t have the efficacy data to support the non-ambulatory population.” Many non-ambulatory patients are requesting it, “but for all the work it takes, we don’t even know what it does for them.”',
  },
  26: {
    id: 26,
    specialty: 'Child Neurology',
    institution: 'Academic',
    date: 'Mar 12, 2026',
    quote:
      'Lack of long-term cardiac data for boys on all DMD treatments — especially those who are non-ambulatory — is challenging for families to understand long-term benefit, and payors want to see this data to support continued care.',
  },
  36: {
    id: 36,
    specialty: 'Child Neurology',
    institution: 'Community-based',
    date: 'Mar 18, 2026',
    quote:
      'Due to prior dose reductions and discontinuations, now initiates most patients on dose B (some on dose C), then titrates to the highest tolerable dose at follow-up to balance AE management with effective dosing.',
  },
  39: {
    id: 39,
    specialty: 'Child Neurology',
    institution: 'Community-based',
    date: 'Mar 30, 2026',
    quote:
      'May start higher-weight patients on dose C and titrate up rather than follow the PI: with nearly 60% of patients over 60 kg anticipated to need two dose reductions, “this reflects a need for more clear guidance on dose optimization in the real world.”',
  },
  45: {
    id: 45,
    specialty: 'Pediatric Neuromuscular',
    institution: 'Community-based',
    date: 'Mar 18, 2026',
    quote:
      'The biggest barrier is patient education — many caregivers don’t want to treat until the patient is symptomatic, often near non-ambulatory, and “don’t understand the purpose to treat early.” Others are medication-averse.',
  },
  56: {
    id: 56,
    specialty: 'Neuromuscular Medicine (Neurology)',
    institution: 'Academic',
    date: 'Mar 3, 2026',
    quote:
      'Keeping tabs on labs has been challenging for patients who already struggle with adherence, and GI effects are prominent — “patients do not always call before making changes to therapy on their own,” making tolerability hard to assess.',
  },
  59: {
    id: 59,
    specialty: 'Neuromuscular Medicine (Neurology)',
    institution: 'Community-based',
    date: 'Mar 12, 2026',
    quote:
      'When evaluating stability or slowing of decline, “they would need several years of data rather than 12 months,” plus detail on mutation alignment and background therapy to judge whether comparator groups are truly comparable.',
  },
  62: {
    id: 62,
    specialty: 'Neuromuscular Medicine (Neurology)',
    institution: 'Community-based',
    date: 'Mar 12, 2026',
    quote:
      '“Over 90% of our patients needed multiple dose adjustments, and we haven’t really seen any meaningful change.” “Any time someone brings up starting it, I cringe.” The clinic is now hesitant to start new patients.',
  },
  69: {
    id: 69,
    specialty: 'Neuromuscular Medicine (Neurology)',
    institution: 'Academic',
    date: 'Mar 18, 2026',
    quote:
      'FVC% decline data is helpful, but additional pulmonary data — particularly in older patients, those with comorbidities, and non-ambulatory populations — is needed to understand givinostat’s real-world pulmonary effects.',
  },
  71: {
    id: 71,
    specialty: 'Neuromuscular Medicine (Neurology)',
    institution: 'Academic',
    date: 'Mar 18, 2026',
    quote:
      'Significant lack of real-world data on givinostat in post-heart-transplant or complex-cardiac patients. Many non-ambulatory patients aren’t candidates for other therapies and want givinostat, “but without data in these higher-risk groups, the true benefit-risk profile remains unclear.”',
  },
  72: {
    id: 72,
    specialty: 'Neuromuscular Medicine (Neurology)',
    institution: 'Academic',
    date: 'Mar 18, 2026',
    quote:
      'Views the PUL as the most meaningful measure of upper-extremity function in older, non-ambulatory patients and identifies its absence as “a key data gap” for communicating givinostat’s potential benefit in this population.',
  },
  73: {
    id: 73,
    specialty: 'Neuromuscular Medicine (Neurology)',
    institution: 'Community-based',
    date: 'Mar 18, 2026',
    quote:
      'Potential GI adverse events may be a deciding factor, especially for non-ambulant patients — frequent GI ADEs “can be a burden for families with patients in wheelchairs.”',
  },
  77: {
    id: 77,
    specialty: 'Neuromuscular Medicine (Neurology)',
    institution: 'Community-based',
    date: 'Mar 12, 2026',
    quote:
      '“This is an enormous lift — even harder than gene therapy. Families don’t send labs or return calls.” Required lab monitoring is an operational barrier that makes staff “groan” when a new patient expresses interest.',
  },
  78: {
    id: 78,
    specialty: 'Neuromuscular Medicine (Neurology)',
    institution: 'Community-based',
    date: 'Mar 12, 2026',
    quote:
      'Fat-fraction imaging is interesting but not compelling enough to change behavior: “It doesn’t change anything for me right now. I need longer-term divergence from natural history.”',
  },
  79: {
    id: 79,
    specialty: 'Neuromuscular Medicine (Neurology)',
    institution: 'Community-based',
    date: 'Mar 12, 2026',
    quote:
      '“Averaged data isn’t meaningful to me. I need individual data points, mutation type, and steroid regimen for each participant.” Standard presentations won’t shift her practice without granular data.',
  },
  80: {
    id: 80,
    specialty: 'Neuromuscular Medicine (Neurology)',
    institution: 'Academic',
    date: 'Mar 31, 2026',
    quote:
      'Givinostat is offered to nearly all eligible patients as a mutation-agnostic therapy, with growing uptake among older patients — “positive experiences shared within patient Facebook communities may be contributing to increased willingness among older patients to initiate.”',
  },
  87: {
    id: 87,
    specialty: 'Nurse Practitioner',
    institution: 'Community-based',
    date: 'Mar 12, 2026',
    quote:
      'Lack of long-term cardiac data is limiting use in the older, non-ambulatory population. PUL and cardiac data “would be the missing link for their clinic to help drive clinical conviction across neuromuscular specialists.”',
  },
  91: {
    id: 91,
    specialty: 'Nurse Practitioner',
    institution: 'Community-based',
    date: 'Mar 12, 2026',
    quote:
      'Strongly requests functional data for the non-ambulatory population: “there is less chance for the MCID to be hit in advanced disease stages,” so seeing a difference over time is especially needed here.',
  },
  94: {
    id: 94,
    specialty: 'Pediatric Rehabilitation Medicine',
    institution: 'Community-based',
    date: 'Mar 10, 2026',
    quote:
      'Suggested additional functional outcomes such as “bite strength” and swallowing ability, which can be affected in severe disease stages of DMD.',
  },
  96: {
    id: 96,
    specialty: 'Pediatric Rehabilitation Medicine',
    institution: 'Community-based',
    date: 'Mar 11, 2026',
    quote:
      'Additional long-term cardiac and pulmonary function data, particularly for non-ambulatory patients more advanced in disease, “would aid in prescribing at older ages.”',
  },
  98: {
    id: 98,
    specialty: 'Pediatric Surgery (Neurology)',
    institution: 'Community-based',
    date: 'Mar 5, 2026',
    quote:
      '“Biggest challenge at this time is coverage for non-ambulatory patients” — sees this as a large unmet need and would like to start these patients on treatment and enroll them in PROVIDUS for long-term real-world data.',
  },
  102: {
    id: 102,
    specialty: 'Physical Medicine & Rehabilitation',
    institution: 'Community-based',
    date: 'Mar 31, 2026',
    quote:
      'Forty years of neuromuscular experience leads him to prefer starting at a lower dose and escalating: recent MDA data showing over 50% of the highest weight group needing two dose reductions “reinforces that a start-low, escalate approach may improve tolerability in the real world.”',
  },
  106: {
    id: 106,
    specialty: 'Physical Therapy',
    institution: 'Community-based',
    date: 'Mar 12, 2026',
    quote:
      '“For the PUL, one year of data is not long enough to see long-term efficacy — recommends at least three.” Wearables are useful but shouldn’t be used alone to assess function.',
  },
  112: {
    id: 112,
    specialty: 'Physical Therapy',
    institution: 'Community-based',
    date: 'Mar 21, 2026',
    quote:
      'Current QoL instruments (PedsQL, PODCI) are viewed as inadequate for the DMD population; sees high value in developing and validating a DMD-specific QoL tool that captures the nuances of life with DMD.',
  },
  113: {
    id: 113,
    specialty: 'Physical Therapy',
    institution: 'Community-based',
    date: 'Mar 21, 2026',
    quote:
      'Outcome measures feel like “a necessary evil — useful for justifying progress and visit authorization, but not reflective of what truly matters to patients.” More interested in what small changes mean functionally.',
  },
};

export function findSignal(id: string): Signal | undefined {
  return SIGNALS.find((signal) => signal.id === id);
}

export interface SignalStrength {
  label: string;
  tone: 'strong' | 'moderate' | 'weak';
}

/**
 * Qualitative strength derived from the combined score.
 * Tiers: Strong = 0.8+, Moderate = 0.6–0.79, Weak = <0.6.
 */
export function signalStrength(score: number): SignalStrength {
  if (score >= 0.8) return { label: 'Strong', tone: 'strong' };
  if (score >= 0.6) return { label: 'Moderate', tone: 'moderate' };
  return { label: 'Weak', tone: 'weak' };
}

export interface ScoreSubMetric {
  label: string;
  value: string;
}

export interface ScoreMetric {
  label: string;
  value: string;
  /** 0..1 — bar fill fraction. */
  fraction: number;
  sub: ScoreSubMetric[];
}

export interface ScoreBreakdown {
  distribution: ScoreMetric;
  narrative: ScoreMetric;
  strategicFit: { value: string; fraction: number };
}

/**
 * Illustrative scoring breakdown. The source data only carries a single
 * combined score, so the sub-metrics below are derived deterministically from
 * the signal (stable per signal, not real per-dimension scores).
 */
export function deriveBreakdown(signal: Signal): ScoreBreakdown {
  const score = Number.parseFloat(signal.strengthLabel);
  const clamp = (n: number) => Math.max(0.05, Math.min(1, n));
  const fmt = (n: number) => n.toFixed(2);
  // Deterministic per-signal jitter in steps of 0.05, range roughly ±0.2.
  const j = (k: number) => (((signal.seq * 7 + k * 11) % 9) - 4) / 20;

  const distMain = clamp(score + j(1));
  const narrMain = clamp(score + j(2));
  // Normalized 0..1, consistent with the other metrics.
  const fit = clamp(score + j(9));

  return {
    distribution: {
      label: 'Record distribution',
      value: fmt(distMain),
      fraction: distMain,
      sub: [
        { label: 'Frequency', value: fmt(clamp(distMain + j(3))) },
        { label: 'HCP Influence', value: fmt(clamp(distMain + j(4))) },
        { label: 'HCP Breadth', value: fmt(clamp(distMain + j(5))) },
      ],
    },
    narrative: {
      label: 'Narrative Read',
      value: fmt(narrMain),
      fraction: narrMain,
      sub: [
        { label: 'Cohesion', value: fmt(clamp(narrMain + j(6))) },
        { label: 'Clarity', value: fmt(clamp(narrMain + j(7))) },
        { label: 'Specificity', value: fmt(clamp(narrMain + j(8))) },
      ],
    },
    strategicFit: { value: fmt(fit), fraction: fit },
  };
}

export const WHOLE_REPORT_SUGGESTIONS = [
  'Compare Trend 1 vs. Trend 2',
  'Break down by specialty',
  "What's the most important signal?",
];

export const SIGNAL_SUGGESTIONS = [
  'Which HCPs drive it?',
  'Why is this happening?',
  'Strongest verbatims',
];
