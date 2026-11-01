/* ==========================================================================
   LT. ADISORN JIAMDEE, RTN — INTERACTIVE PORTFOLIO & CASE STUDY ENGINE
   ========================================================================== */

const PROJECTS_DATA = {
  /* ---------------- ROYAL THAI NAVAL DOCKYARD PROJECTS ---------------- */
  w1: {
    category: 'Royal Thai Naval Dockyard • Ship Construction',
    badge: 'Current Strategic Program',
    isNavy: true,
    title: 'Shiplift & Transfer Construction Planning',
    period: 'Oct 2026 – Present | Naval Engineering Planning, RTN Dockyard',
    figure: './assets/figures/shiplift_transfer_planning.jpg',
    figureCaption: 'Shiplift & Ship Transfer System Infrastructure & Load Distribution Planning',
    problem:
      'Sovereign naval vessel maintenance and overhaul require specialized heavy-lift docking infrastructure capable of safely raising, transferring, and supporting high-displacement platforms with strict deflection tolerances.',
    methodology:
      'Leading the Naval Engineering Planning phase for the heavy-capacity Shiplift and Ship Transfer System construction program at the Royal Thai Naval Dockyard—focusing on engineering integration, load-path distribution, and operational workflow.',
    outcomes: [
      'Establishing technical specifications and structural/mechanical interface requirements for the shiplift platform and rail-transfer cradle system.',
      'Integrating docking block load distribution profiles with shipyard civil and marine structural works.',
      'Note: Specific capacities, layout coordinates, and contractor deliverables remain classified under Royal Thai Navy operational security (OPSEC).'
    ],
    tools: ['Naval Shipyard Planning', 'Shiplift & Transfer Engineering', 'Docking Interface', 'Systems Engineering'],
    reportUrl: null
  },

  w2: {
    category: 'Royal Thai Naval Dockyard • Structural FEA',
    badge: 'Dockyard FEA Report',
    isNavy: true,
    title: 'Submarine Docking Block Global, Local & Hyperelastic FEA',
    period: 'July 2026 | Ship Design Department, RTN Dockyard',
    figure: './assets/figures/submarine_docking_block_fea.png',
    figureCaption: 'Submarine Keel & Side Docking Block Mooney-Rivlin Hyperelastic FEA',
    problem:
      'During dry-docking of a submarine platform, composite docking blocks (comprising reinforced concrete, hardwood timber, wedges, and elastomeric rubber cap pads) must sustain extreme concentrated keel and side-block loads without crushing, buckling, or inducing hull overstress.',
    methodology:
      'Executed a 3-stage Finite Element structural assessment in ANSYS: (1) Global Strength Analysis, (2) Local Strength Analysis, and (3) Side-Block Load Analysis (Port/Starboard). Modeled concrete (E = 14 GPa), hardwood wedges/blocks, and nonlinear elastomeric rubber pads using a 2-Parameter Mooney-Rivlin Hyperelastic constitutive model (ν = 0.499, compressive ultimate strength 16 MPa).',
    outcomes: [
      'Quantified stress states and deformation across individual keel and side docking blocks under submarine docking loads.',
      'Captured nonlinear hyperelastic compression behavior of the rubber cap layer coupled with isotropic structural sub-layers.',
      'Verified safety margins against compressive yield and ultimate strength criteria for safe submarine dry-docking.'
    ],
    tools: ['ANSYS Mechanical', 'Nonlinear Hyperelastic FEA', 'Mooney-Rivlin 2P', 'Submarine Dry-Docking'],
    reportUrl: null
  },

  w3: {
    category: 'Royal Thai Naval Dockyard • Shock & Dynamics',
    badge: 'UK MoD MAP 01-470',
    isNavy: true,
    title: 'Naval Foundation Shock Qualification Audit & Analytical Verification (HTMS Chang)',
    period: 'September 2026 | Naval Planning & Design Directorate',
    figure: './assets/figures/shock_comparison_profiles.png',
    figureCaption: 'Analytical vs. Contractor Reproduced Shock Velocity & Displacement Profiles (MAP 01-470)',
    problem:
      'Under the HTMS Chang Capability Enhancement program, contractor FEM shock calculations (CHG-NVT-2026-117) for the 290 kg Dorna Fire Control Director foundation on Deck 05 omitted intermediate analytical integration steps and contained parameter ambiguities under UK MoD MAP 01-470 (Procedure TDD — Time Domain Dry).',
    methodology:
      'Performed an independent first-principles mathematical derivation of the piecewise shock acceleration, velocity v(t), and displacement s(t) time-histories in both Athwartships (Y) and Vertical (Z) directions. Developed automated MATLAB and Python verification suites to audit the prescribed base-excitation curves used in the FEM transient analysis.',
    outcomes: [
      'Derived exact closed-form analytical integrals for bilinear/trapezoidal shock velocity and displacement profiles per UK MoD MAP 01-470 Chapter 12.',
      'Identified and resolved discrepancies in contractor documentation while validating the physical accuracy of the plotted FEM input curves.',
      'Authored a permanent Royal Thai Navy engineering reference guide and MATLAB codebase for future naval equipment shock qualifications.'
    ],
    tools: ['UK MoD MAP 01-470', 'Transient Shock FEA', 'MATLAB', 'Python', 'Analytical Dynamics'],
    reportUrl: null
  },

  w4: {
    category: 'Royal Thai Naval Dockyard • Naval Standards',
    badge: 'Official Standard มอร.',
    isNavy: true,
    title: 'RTN Dockyard Engineering Standard: Ship Vibration Analysis (มอร. 200-0003-0869)',
    period: 'August 2026 | Royal Thai Naval Dockyard',
    figure: './assets/figures/rtn_vibration_standard.png',
    figureCaption: 'Royal Thai Naval Dockyard Engineering Standard มอร. 200-0003-0869 (Ship Vibration Analysis)',
    problem:
      'Legacy naval dockyard vibration guidelines (2022 edition) required modernization to align with contemporary Finite Element modal/harmonic prediction workflows, ISO shipboard vibration standards, and modern naval propulsion/machinery acceptance testing.',
    methodology:
      'Drafted the comprehensive 58-page official Royal Thai Naval Dockyard Engineering Standard มอร. 200-0003-0869 (Ship Vibration Analysis), superseding standard มอร. 200-0002-0365.',
    outcomes: [
      'Established standardized procedures for global hull girder vibration, local deck/superstructure resonance, and propulsion shafting vibration analysis.',
      'Defined clear frequency-domain acceptance thresholds for crew habitability, structural fatigue, and sensitive combat/sensor equipment.',
      'Adopted officially across the Royal Thai Naval Dockyard engineering directorates in August 2026.'
    ],
    tools: ['Ship Vibration Standard', 'Modal & Harmonic Analysis', 'ISO / Naval Standards', 'Technical Authorship'],
    reportUrl: null
  },

  w5: {
    category: 'Royal Thai Naval Dockyard • Structural Retrofit',
    badge: 'ANSYS 2026 R1',
    isNavy: true,
    title: 'Ship-Lifting Beam Structural FEA & Retrofit for New SOC-R Riverine Patrol Craft',
    period: 'June 2026 | Ship Design Department, RTN Dockyard',
    figure: './assets/figures/lifting_beam_p3_1.jpeg',
    figureCaption: 'ANSYS 2026 R1 Lifting Beam Structural Model & Stress Safety Assessment',
    problem:
      'The Mekong River Operating Unit (Nakhon Phanom Naval Station) received two new Special Operations Craft - Riverine (SOC-R, Hulls L.154 & L.158) to replace legacy PBR boats. The higher displacement and shifted LCG of the new craft risked overloading the existing ship-lifting beam system.',
    methodology:
      'Built a structural Finite Element model in ANSYS 2026 R1 using beam and membrane elements to evaluate combined bending, shear, and axial stresses across the lifting cradle under the new SOC-R weight and LCG envelope.',
    outcomes: [
      'Demonstrated that the legacy lifting configuration concentrated excessive load onto a single transverse beam.',
      'Engineered an 800 mm aftward relocation of the stern lifting point and designed a reinforced transverse beam at Frame 3 (Drawing 05101-997-1001).',
      'Verified that the modified lifting structure achieves full structural safety factor compliance.'
    ],
    tools: ['ANSYS 2026 R1', 'Beam & Membrane FEA', 'Structural Retrofit', 'Safety Factor Verification'],
    reportUrl: null
  },

  w6: {
    category: 'Royal Thai Naval Dockyard • Marine Hydrodynamics',
    badge: 'Propeller Design',
    isNavy: true,
    title: 'Propeller Preliminary Design & Hydrodynamic Optimisation',
    period: 'April 2026 | Ship Design Department, RTN Dockyard',
    figure: './assets/figures/propeller_optimisation.png',
    figureCaption: 'Open-Water Propeller Efficiency, Cavitation Limit & Pitch-to-Diameter Optimisation',
    problem:
      'Small displacement wooden ferries require tailored propeller geometry (diameter, pitch-to-diameter ratio, expanded area ratio, and blade count) to achieve optimal open-water propulsive efficiency while eliminating cavitation risks under shallow-water resistance profiles.',
    methodology:
      'Conducted a systematic 38-page preliminary propeller design evaluation and multi-variable hydrodynamic optimisation matching vessel resistance, wake fraction, and thrust deduction against engine torque-RPM operating envelopes under Burrill cavitation criteria.',
    outcomes: [
      'Sized optimal 3-blade propeller diameter and pitch satisfying vessel thrust requirements and cavitation inception boundaries.',
      'Evaluated open-water propulsive efficiency (η₀) curves and delivered complete shafting/propeller manufacturing recommendations.',
      'Note: Internal RTN Dockyard engineering report protected under OPSEC guidelines.'
    ],
    tools: ['Propeller Hydrodynamics', 'Cavitation Analysis', 'Resistance & Propulsion', 'Open-Water Sizing'],
    reportUrl: null
  },

  w7: {
    category: 'Royal Thai Naval Dockyard • Structural FEA',
    badge: 'ANSYS Mechanical FEA',
    isNavy: true,
    title: 'Deck Machinery Coaming Structural FEA & Mesh Convergence',
    period: 'April 2026 | Ship Design Department, RTN Dockyard',
    figure: './assets/figures/deck_coaming_fea.png',
    figureCaption: '3D ANSYS Finite Element Equivalent Stress Contours & Mesh Convergence (80,206 Elements)',
    problem:
      'Deck machinery coaming structures supporting heavy diesel engine trays and auxiliary machinery must sustain static self-weight and extreme 3-axis vessel dynamic acceleration loads without exceeding allowable deck plating yield stresses or weld fatigue limits.',
    methodology:
      'Constructed detailed 3D shell and solid Finite Element models in ANSYS Workbench across three distinct operational load cases: (1) Static Diesel Engine & Tray Self-Weight, (2) Combined Weight plus Dynamic Motion Acceleration, and (3) Dynamic Pitch/Roll Wave Impact. Executed a 5-tier mesh convergence study progressing from 32,862 to 80,206 elements.',
    outcomes: [
      'Characterized Von Mises stress distribution across deck plates, longitudinal girders (LF8), and transverse webs (GW2).',
      'Confirmed stress convergence (128.75 MPa on primary girder LF8) well within structural yield criteria under 80,206 elements.',
      'Pinpointed local geometric stress singularities at deck cutouts and recommended local reinforcement gussets.'
    ],
    tools: ['ANSYS Workbench', 'Structural FEA', 'Mesh Convergence', 'Dynamic Load Cases'],
    reportUrl: null
  },

  /* ---------------- UNIVERSITY OF ADELAIDE POSTGRADUATE PROJECTS ---------------- */
  a1: {
    category: 'The University of Adelaide • Submarine Design',
    badge: 'Mark: 89 & 87 (High Distinction)',
    isNavy: false,
    title: 'HTMS Hanuman Class Submarine: Concept Design & Concept of Operations (CONOPS)',
    period: '2024 – 2025 | MECH ENG 7042 & 7046 • The University of Adelaide',
    figure: './assets/figures/hanuman_submarine_conops.jpg',
    figureCaption: 'HTMS Hanuman Class Submarine Concept Architecture & General Arrangement',
    problem:
      'Develop a complete, requirements-driven conventional/AIP submarine concept design ("HTMS Hanuman Class") tailored to Thailand’s strategic maritime theater (Gulf of Thailand and Andaman Sea) and benchmarked against 6 regional navies.',
    methodology:
      'Executed a 2-semester systems engineering and naval architecture design sequence: (1) Authored a 46-page Concept of Operations (CONOPS) defining Anti-Submarine Warfare (ASW), Anti-Surface Warfare (ASuW), Mine Laying, ISR, and Special Operations lock-out requirements; (2) Executed full parametric submarine sizing using the Submarine Concept Toolkit (V6.2).',
    outcomes: [
      'Integrated multi-mission combat payloads (torpedoes, tube-launched ASuW missiles, mines, and diver lock-out chamber).',
      'Sized the hybrid Diesel-Generator, Main Storage Battery, Main Propulsion Motor, and Air-Independent Propulsion (AIP) plant.',
      'Calculated pressure hull scantlings, Main Ballast Tank (MBT) volume, hydrostatic stability, Trim Polygon envelope, and full General Arrangement.'
    ],
    tools: ['Submarine Concept Design', 'Pressure Hull Sizing', 'AIP Propulsion', 'Trim Polygon & Stability', 'CONOPS'],
    reportUrl: null
  },

  a2: {
    category: 'The University of Adelaide • Master’s Capstone Thesis',
    badge: 'Mark: 85 (High Distinction)',
    isNavy: false,
    title: 'Techno-Economic Modelling of Nuclear-Renewable Hybrid Systems for Industrial Hydrogen',
    period: 'Oct 2025 | MECH ENG 7049A/B (Sponsored by HILT CRC)',
    figure: './assets/figures/nuclear_hydrogen_model.jpg',
    figureCaption: 'MATLAB Hourly Dispatch & Techno-Economic Hydrogen Production Optimisation (HILT CRC)',
    problem:
      'Heavy industry decarbonisation requires continuous 24/7 hydrogen supply. Relying solely on variable solar and wind generation necessitates massive, cost-prohibitive hydrogen and battery storage buffers.',
    methodology:
      'Developed a comprehensive 101-page techno-economic analysis (TEA) and an hour-by-hour MATLAB simulation & optimisation framework comparing stand-alone nuclear plants (PWR and HTGR) against hybrid Nuclear-Renewable energy systems for industrial-scale hydrogen electrolysis.',
    outcomes: [
      'Quantified Levelised Cost of Hydrogen (LCOH), capacity factors, and storage curtailment across standalone and hybrid configurations.',
      'Demonstrated how baseload nuclear heat and power paired with renewable generation minimizes hydrogen storage volume and stabilizes 24/7 industrial supply.',
      'Awarded High Distinction (85%) under sponsorship of the Heavy Industry Low-carbon Transition Cooperative Research Centre (HILT CRC).'
    ],
    tools: ['MATLAB Modelling', 'Techno-Economic Optimisation', 'Energy Systems Simulation', 'HILT CRC Research'],
    reportUrl: null
  },

  a3: {
    category: 'The University of Adelaide • Structural Dynamics FEA',
    badge: 'Mark: 90 (High Distinction)',
    isNavy: false,
    title: 'Crankshaft Modal, Harmonic & Transient Vibration Analysis using FEA',
    period: 'Nov 2025 | MECH ENG 7030 – Advanced Vibrations',
    figure: './assets/figures/crankshaft_vibration_fea.png',
    figureCaption: '3D Finite Element Crankshaft Modal Frequencies, Dynamic Mode Shapes & Stress',
    problem:
      'Marine and heavy-duty internal combustion engine crankshafts experience severe cyclic gas-pressure and inertial firing loads; torsional or bending resonance at operating RPM leads to catastrophic fatigue failure.',
    methodology:
      'Constructed a high-fidelity 3D Finite Element model of an engine crankshaft and conducted a three-stage dynamic investigation: (1) Free/Constrained Modal Analysis, (2) Frequency-Domain Harmonic Response Analysis, and (3) Time-Domain Transient Dynamic Analysis under realistic cylinder firing forces.',
    outcomes: [
      'Extracted critical natural frequencies and 3D deformation mode shapes across operating speed ranges.',
      'Pinpointed peak dynamic Von Mises stress concentrations at crankpin-web fillets during transient firing impulses.',
      'Achieved a 90% High Distinction grade for rigorous mesh validation and dynamic stress interpretation.'
    ],
    tools: ['ANSYS FEA', 'Modal Analysis', 'Harmonic Response', 'Transient Dynamics'],
    reportUrl: null
  },

  a4: {
    category: 'The University of Adelaide • Advanced FEA',
    badge: 'Mark: 86 (High Distinction)',
    isNavy: false,
    title: 'Multi-Element Stress & Contact Analysis of Pipeline Flange Connections (ASME B31.3)',
    period: 'June 2025 | MECH ENG 7059 – Finite Element Analysis of Structures',
    figure: './assets/figures/pipeline_flange_fea.png',
    figureCaption: 'Coupled Solid-Shell-Beam FEA Model & Flange Contact Stress Contours',
    problem:
      'Standard piping codes (ASME B31.3 / B16.5) often focus on internal pressure in vertical runs while under-characterizing combined bending, torsional, and flange-face contact stresses induced by self-weight in horizontal flanged spans.',
    methodology:
      'Engineered a multi-element Finite Element model combining 3D Solid elements (flange & contact zone), Shell elements, and Beam elements to maximize computational efficiency without sacrificing local stress accuracy. Validated results via three independent methods: mesh-independence convergence, Euler-Bernoulli/torsional hand calculations, and simplified benchmark cases.',
    outcomes: [
      'Characterized nonlinear contact pressure and combined Von Mises stress trends across varying pipe wall thicknesses.',
      'Confirmed structural compliance below material yield limits while demonstrating how hybrid Solid-Shell-Beam coupling reduces DOF count.'
    ],
    tools: ['ANSYS FEA', 'Solid-Shell-Beam Coupling', 'Nonlinear Contact', 'ASME B31.3 / B16.5'],
    reportUrl: null
  },

  a5: {
    category: 'The University of Adelaide • Structural Steel Design',
    badge: 'Mark: 94 (High Distinction)',
    isNavy: false,
    title: 'Structural Steel Portal Frame Design (AS 4100)',
    period: '2024 – 2025 | CIVIL ENG 7303 • The University of Adelaide',
    figure: './assets/figures/structural_steel_frame.jpg',
    figureCaption: 'Industrial Portal Frame Structural Modelling, Rafter/Column Capacity & Connection Detailing',
    problem:
      'Design an industrial structural steel portal frame building to Australian Standard AS 4100:2020, achieving minimum structural self-weight while meeting strict ultimate limit state (ULS) and serviceability limit state (SLS) wind deflection criteria.',
    methodology:
      'Performed comprehensive first-principles and structural software capacity analysis: sizing universal beams (UB) rafters, universal columns (UC), knee and apex haunch connections, purlins/girts, and roof/wall cross-bracing under critical AS/NZS 1170 wind, gravity, and lateral load combinations.',
    outcomes: [
      'Engineered fully compliant structural portal frame scoring 94/100 (High Distinction).',
      'Optimized section sizes and bolted moment-resisting knee/apex connection details.',
      'Verified lateral sway deflection compliance under 1-in-500 year design wind events.'
    ],
    tools: ['AS 4100:2020', 'Structural Steel Design', 'Moment Connections', 'AS/NZS 1170 Load Combinations'],
    reportUrl: null
  },

  a6: {
    category: 'The University of Adelaide • Thermal & Energy Systems',
    badge: 'Mark: 96 (High Distinction)',
    isNavy: false,
    title: 'Psychrometric HVAC Thermal Simulation (CAMEL+)',
    period: '2024 | MECH ENG 7029 • The University of Adelaide',
    figure: './assets/figures/hvac_camel_simulation.jpg',
    figureCaption: 'Multi-Zone Psychrometric Process Simulation & Cooling Load Distribution in CAMEL+',
    problem:
      'Perform complete heating and cooling load calculation and psychrometric process design for a multi-zone commercial building in Australian climatic zones, sizing air handling units, chilled water coils, and variable air volume systems for minimum thermal energy consumption.',
    methodology:
      'Constructed a comprehensive multi-zone thermal model using CAMEL+ software, calculating peak solar heat gains, internal envelope loads, ventilation air requirements, and full psychrometric states (dry bulb, wet bulb, enthalpy, humidity ratio) across each conditioning stage.',
    outcomes: [
      'Achieved 96/100 (High Distinction) — highest mark on official Master of Maritime Engineering academic transcript.',
      'Sized cooling coils, reheat coils, and supply air volume distribution to satisfy comfort criteria per AIRAH standards.',
      'Optimized outdoor air economizer cycles to reduce chiller power demand.'
    ],
    tools: ['CAMEL+ Software', 'AIRAH Standards', 'Psychrometric Analysis', 'HVAC Thermal Modelling'],
    reportUrl: null
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('case-study-dialog');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  /* 1. Category Filter Logic */
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      projectCards.forEach((card) => {
        const cats = card.dataset.category || '';
        if (filter === 'all' || cats.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* 2. Open Executive Case Study Modal via native dialog.showModal() */
  document.querySelectorAll('[data-open-project]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const id = trigger.getAttribute('data-open-project');
      const data = PROJECTS_DATA[id];
      if (!data || !dialog) return;

      document.getElementById('dialog-category').textContent = data.category;
      document.getElementById('dialog-badge').textContent = data.badge;
      document.getElementById('dialog-title').textContent = data.title;
      document.getElementById('dialog-period').textContent = data.period;
      document.getElementById('dialog-problem').textContent = data.problem;
      document.getElementById('dialog-methodology').textContent = data.methodology;

      const figImg = document.getElementById('dialog-figure-img');
      const figCap = document.getElementById('dialog-figure-caption');
      figImg.src = data.figure;
      figImg.alt = data.figureCaption;
      figCap.textContent = data.figureCaption;

      const outcomesList = document.getElementById('dialog-outcomes');
      outcomesList.innerHTML = '';
      data.outcomes.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        outcomesList.appendChild(li);
      });

      const toolsWrap = document.getElementById('dialog-tools');
      toolsWrap.innerHTML = '';
      data.tools.forEach((tool) => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tool;
        toolsWrap.appendChild(span);
      });

      const downloadContainer = document.getElementById('dialog-download-area');
      if (data.isNavy) {
        downloadContainer.innerHTML = `
          <span class="qual-pill">
            <strong>OPSEC Protected</strong> • Royal Thai Navy Internal Technical Document (Executive Summary Only)
          </span>
        `;
      } else {
        downloadContainer.innerHTML = `
          <span class="qual-pill">
            <strong>Academic Research Dossier</strong> • The University of Adelaide (Executive Summary Only)
          </span>
        `;
      }

      dialog.showModal();
    });
  });

  /* 4. Reset returnValue on dialog close per modern-web-guidance `dialog` guide */
  if (dialog) {
    dialog.addEventListener('close', () => {
      dialog.returnValue = '';
    });

    /* 5. Mandatory Fallback for browsers without <dialog closedby="any"> support */
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (isDialogContent) return;
        dialog.close();
      });
    }
  }
});
