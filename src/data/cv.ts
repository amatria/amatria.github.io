export const cv = {
  name: 'Iñaki Amatria Barral',
  title:
      'Software engineer with a focus on compilers, LLVM, and HPC. I enjoy hard problems.',
  website: 'amatria.dev',
  linkedin: {
    label: 'inaki-amatria-barral',
    url: 'https://linkedin.com/in/inaki-amatria-barral'
  },
  github: [
    {label: 'inaki-amatria', url: 'https://github.com/inaki-amatria'},
    {label: 'amatria', url: 'https://github.com/amatria'},
  ],

  about:
      'Software engineer with a focus on compilers, LLVM, and HPC. I work mostly in modern C++ — extending frontends, writing analysis passes, and optimizing code at a low level. I have contributed to projects like Clang, Flang, and tree-sitter, and I enjoy the kind of problems where performance actually matters — from HPC tooling used at national research labs to genome-scale bioinformatics.',

  experience: [
    {
      date: '2023 — now',
      role: 'Compiler Engineer',
      org: 'Codee',
      bullets: [
        'Developed LLVM IR analysis and transformation passes for performance diagnostics and auto-remediation, enabling adoption by national research labs including Argonne, Oak Ridge, and NERSC.',
        'Extended Clang and Flang frontends for AST analysis and semantic diagnostics on real-world HPC codebases (Fortran, C, and C++).',
        'Upstreamed fixes and improvements to LLVM, Bear, and tree-sitter-fortran as part of the core product workflow.',
      ],
    },
    {
      date: '2021 — 2023',
      role: 'Research Assistant',
      org: 'Universidade da Coruña',
      bullets: [
        'Achieved 200x speedup on lncRNA-DNA interaction prediction, enabling transcriptome-scale analysis of the human genome in under one hour (Bioinformatics, D1).',
        'Reduced a 3-month computation to under 20 hours on a modest cluster via a key memory optimization in the parallelization of RIblast (Future Generation Computer Systems, D1; Methods in Molecular Biology, D1).',
        'All work released as open source; tools actively maintained and used by researchers worldwide.',
      ],
    },
    {
      date: '2019 — 2021',
      role: 'Research Support Assistant',
      org: 'Universidade da Coruña',
      bullets: [
        'Conducted research in bioinformatics and HPC.',
        'Implemented and evaluated algorithms for scientific workloads.',
      ],
    },
    {
      date: '2019 — 2020',
      role: 'Undergraduate Software Engineer',
      org: 'Nomasystems SL',
      bullets: [
        'Developed and deployed a QA pipeline for an iOS application used at scale.',
        'Automated testing and validation processes.',
      ],
    },
  ],

  openSource: [
    {
      date: '2026',
      name: 'mua',
      role: 'Maintainer',
      url: 'https://github.com/inaki-amatria/mua',
      urlLabel: 'mua',
      bullets: [
        'Designed and implemented a compiler from scratch for a Lua-like language.',
        'Implemented LLVM IR backend for native code generation.',
        'Focused on modular design, clarity, and performance (C++17).',
      ],
    },
    {
      date: '2025',
      name: 'tree-sitter-fortran',
      role: 'Contributor',
      url: 'https://github.com/stadelmanma/tree-sitter-fortran',
      urlLabel: 'tree-sitter-fortran',
      bullets: [
        'Increased grammar robustness for real-world codebases.',
      ],
    },
    {
      date: '2024',
      name: 'LLVM',
      role: 'Contributor',
      url: 'https://github.com/llvm/llvm-project',
      urlLabel: 'llvm-project',
      bullets: [
        'Implemented and reviewed patches in the Flang frontend — semantic analysis, module handling, and diagnostics.',
        'Fixed non-deterministic behavior in Fortran module generation and aligned driver behavior with gfortran via the -x flag.',
        '5+ merged patches and 10+ resolved issues in Clang and Flang.',
      ],
    },
    {
      date: '2022',
      name: 'PATO',
      role: 'Maintainer',
      url: 'https://github.com/UDC-GAC/PATO',
      urlLabel: 'PATO',
      bullets: [
        'Genome-wide tool for lncRNA-DNA triplex helix detection — published in Bioinformatics (D1) with a demonstrated 200x speedup.',
      ],
    },
  ],

  publications: [
    {
      date: '2025',
      title:
          'Hybrid MPI/OpenMP implementation of RIblast for transcriptome-scale lncRNA–RNA interaction prediction',
      authors: 'Iñaki Amatria-Barral et al.',
      venue: 'Methods in Molecular Biology',
      doi: 'https://doi.org/10.1007/978-1-0716-4670-0_10',
    },
    {
      date: '2023',
      title:
          'Parallel construction of RNA databases for extensive lncRNA-RNA interaction prediction',
      authors: 'Iñaki Amatria-Barral et al.',
      venue: '38th ACM/SIGAPP Symposium on Applied Computing',
      doi: 'https://doi.org/10.1145/3555776.3577772',
    },
    {
      date: '2023',
      title: 'PATO: Genome-wide prediction of lncRNA-DNA triple helices',
      authors: 'Iñaki Amatria-Barral et al.',
      venue: 'Bioinformatics',
      doi: 'https://doi.org/10.1093/bioinformatics/btad134',
    },
    {
      date: '2023',
      title:
          'pRIblast: A highly efficient parallel application for comprehensive lncRNA-RNA interaction prediction',
      authors: 'Iñaki Amatria-Barral et al.',
      venue: 'Future Generation Computer Systems',
      doi: 'https://doi.org/10.1016/j.future.2022.08.014',
    },
  ],

  education: [
    {
      date: '2023',
      degree: 'International HPC Summer School',
      school: 'Georgia Institute of Technology',
      note:
          'Advanced program · Scalable computing, parallel programming, performance optimization.',
    },
    {
      date: '2021 — 2022',
      degree: 'M.S. in High-Performance Computing',
      school: 'Universidade da Coruña',
      note:
          'Graduated with honors · Academic excellence award · Vectorization, memory optimization, parallel programming, GPU computing.',
    },
    {
      date: '2017 — 2021',
      degree: 'B.S. in Computer Science',
      school: 'Universidade da Coruña',
      note: 'Graduated with honors · Academic excellence award.',
    },
  ],
};
