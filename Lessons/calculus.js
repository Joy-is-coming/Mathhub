// ===============================
// MATHHUB CALCULUS LESSONS
// Enhanced 100-lesson curriculum
// ===============================

const calculusTopics = [
  "Introduction to Calculus",
  "Functions and Calculus",
  "Domain and Range",
  "Limits",
  "Evaluating Limits",
  "Limit Laws",
  "One-Sided Limits",
  "Limits at Infinity",
  "Infinite Limits",
  "Continuity",
  "Continuous Functions",
  "Discontinuities",
  "Average Rate of Change",
  "Instantaneous Rate of Change",
  "The Derivative",
  "Derivative Notation",
  "Basic Differentiation Rules",
  "Power Rule",
  "Constant Rule",
  "Sum and Difference Rules",
  "Product Rule",
  "Quotient Rule",
  "Chain Rule",
  "Derivatives of Polynomials",
  "Derivatives of Rational Functions",
  "Derivatives of Exponential Functions",
  "Derivatives of Logarithmic Functions",
  "Derivatives of Sine",
  "Derivatives of Cosine",
  "Derivatives of Tangent",
  "Derivatives of Trigonometric Functions",
  "Implicit Differentiation",
  "Higher-Order Derivatives",
  "Second Derivative",
  "Related Rates",
  "Linear Approximation",
  "Differentials",
  "Critical Points",
  "Increasing and Decreasing Functions",
  "First Derivative Test",
  "Local Maximum and Minimum",
  "Absolute Maximum and Minimum",
  "Concavity",
  "Inflection Points",
  "Second Derivative Test",
  "Curve Sketching",
  "Optimization",
  "Applications of Derivatives",
  "Motion Along a Line",
  "Velocity and Acceleration",
  "Introduction to Integration",
  "Antiderivatives",
  "Indefinite Integrals",
  "Constant of Integration",
  "Basic Integration Rules",
  "Power Rule for Integration",
  "Sum and Difference Integration",
  "Definite Integrals",
  "Riemann Sums",
  "The Fundamental Theorem of Calculus",
  "Area Under a Curve",
  "Area Between Curves",
  "Average Value of a Function",
  "Substitution Method",
  "Integration by Substitution",
  "Integration of Exponential Functions",
  "Integration of Logarithmic Functions",
  "Integration of Trigonometric Functions",
  "Integration by Parts",
  "Partial Fractions",
  "Improper Integrals",
  "Numerical Integration",
  "Trapezoidal Rule",
  "Midpoint Rule",
  "Simpson's Rule",
  "Volumes by Slicing",
  "Volumes by Disks",
  "Volumes by Washers",
  "Volumes by Cylindrical Shells",
  "Arc Length",
  "Parametric Equations",
  "Parametric Derivatives",
  "Polar Coordinates",
  "Polar Area",
  "Sequences",
  "Series",
  "Arithmetic Sequences",
  "Geometric Sequences",
  "Infinite Geometric Series",
  "Convergence of Series",
  "Power Series",
  "Taylor Series",
  "Maclaurin Series",
  "Taylor Polynomial",
  "Applications of Taylor Series",
  "Differential Equations Introduction",
  "Slope Fields",
  "Separable Differential Equations",
  "Growth and Decay Models",
  "Calculus Review"
];

const calculusLessons = [
  {
    "id": 1,
    "title": "Introduction to Calculus",
    "description": "Master introduction to calculus with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Introduction to Calculus</strong>.</p><h3>Explanation</h3><p>A limit-based approach helps describe introduction to calculus precisely and connects algebraic behavior to calculus.</p><p>Start by identifying the input value, the expression being studied, and whether direct substitution is valid.</p><h3>Worked Example</h3><p>For f(x)=x²+1 at x=2, direct substitution gives f(2)=5. When a limit is involved, check the behavior as x approaches the target.</p><h3>Common Mistake</h3><p>Do not substitute blindly when the expression produces an indeterminate form or has a restriction.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "Evaluate lim(x→2)(x²+3).",
        "options": [
          "7",
          "5",
          "4",
          "3"
        ],
        "answer": 0,
        "explanation": "Substitute x=2: 2²+3=7."
      },
      {
        "question": "Evaluate lim(x→0)(5x+2).",
        "options": [
          "2",
          "5",
          "0",
          "7"
        ],
        "answer": 0,
        "explanation": "Substitute x=0 to get 2."
      },
      {
        "question": "If f(x)=3x+1, find f(4).",
        "options": [
          "13",
          "12",
          "10",
          "7"
        ],
        "answer": 0,
        "explanation": "3(4)+1=13."
      },
      {
        "question": "What does a limit describe?",
        "options": [
          "A value approached by a function",
          "Only an area",
          "Only a probability",
          "Only a maximum"
        ],
        "answer": 0,
        "explanation": "A limit describes the value a function approaches."
      },
      {
        "question": "For a polynomial, direct substitution at a point is usually...",
        "options": [
          "Valid",
          "Impossible",
          "Undefined",
          "Never allowed"
        ],
        "answer": 0,
        "explanation": "Polynomials are continuous, so direct substitution gives the limit."
      }
    ]
  },
  {
    "id": 2,
    "title": "Functions and Calculus",
    "description": "Master functions and calculus with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Functions and Calculus</strong>.</p><h3>Explanation</h3><p>A limit-based approach helps describe functions and calculus precisely and connects algebraic behavior to calculus.</p><p>Start by identifying the input value, the expression being studied, and whether direct substitution is valid.</p><h3>Worked Example</h3><p>For f(x)=x²+1 at x=2, direct substitution gives f(2)=5. When a limit is involved, check the behavior as x approaches the target.</p><h3>Common Mistake</h3><p>Do not substitute blindly when the expression produces an indeterminate form or has a restriction.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "Evaluate lim(x→2)(x²+3).",
        "options": [
          "7",
          "5",
          "4",
          "3"
        ],
        "answer": 0,
        "explanation": "Substitute x=2: 2²+3=7."
      },
      {
        "question": "Evaluate lim(x→0)(5x+2).",
        "options": [
          "2",
          "5",
          "0",
          "7"
        ],
        "answer": 0,
        "explanation": "Substitute x=0 to get 2."
      },
      {
        "question": "If f(x)=3x+1, find f(4).",
        "options": [
          "13",
          "12",
          "10",
          "7"
        ],
        "answer": 0,
        "explanation": "3(4)+1=13."
      },
      {
        "question": "What does a limit describe?",
        "options": [
          "A value approached by a function",
          "Only an area",
          "Only a probability",
          "Only a maximum"
        ],
        "answer": 0,
        "explanation": "A limit describes the value a function approaches."
      },
      {
        "question": "For a polynomial, direct substitution at a point is usually...",
        "options": [
          "Valid",
          "Impossible",
          "Undefined",
          "Never allowed"
        ],
        "answer": 0,
        "explanation": "Polynomials are continuous, so direct substitution gives the limit."
      }
    ]
  },
  {
    "id": 3,
    "title": "Domain and Range",
    "description": "Master domain and range with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Domain and Range</strong>.</p><h3>Explanation</h3><p>A limit-based approach helps describe domain and range precisely and connects algebraic behavior to calculus.</p><p>Start by identifying the input value, the expression being studied, and whether direct substitution is valid.</p><h3>Worked Example</h3><p>For f(x)=x²+1 at x=2, direct substitution gives f(2)=5. When a limit is involved, check the behavior as x approaches the target.</p><h3>Common Mistake</h3><p>Do not substitute blindly when the expression produces an indeterminate form or has a restriction.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "Evaluate lim(x→2)(x²+3).",
        "options": [
          "7",
          "5",
          "4",
          "3"
        ],
        "answer": 0,
        "explanation": "Substitute x=2: 2²+3=7."
      },
      {
        "question": "Evaluate lim(x→0)(5x+2).",
        "options": [
          "2",
          "5",
          "0",
          "7"
        ],
        "answer": 0,
        "explanation": "Substitute x=0 to get 2."
      },
      {
        "question": "If f(x)=3x+1, find f(4).",
        "options": [
          "13",
          "12",
          "10",
          "7"
        ],
        "answer": 0,
        "explanation": "3(4)+1=13."
      },
      {
        "question": "What does a limit describe?",
        "options": [
          "A value approached by a function",
          "Only an area",
          "Only a probability",
          "Only a maximum"
        ],
        "answer": 0,
        "explanation": "A limit describes the value a function approaches."
      },
      {
        "question": "For a polynomial, direct substitution at a point is usually...",
        "options": [
          "Valid",
          "Impossible",
          "Undefined",
          "Never allowed"
        ],
        "answer": 0,
        "explanation": "Polynomials are continuous, so direct substitution gives the limit."
      }
    ]
  },
  {
    "id": 4,
    "title": "Limits",
    "description": "Master limits with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Limits</strong>.</p><h3>Explanation</h3><p>A limit-based approach helps describe limits precisely and connects algebraic behavior to calculus.</p><p>Start by identifying the input value, the expression being studied, and whether direct substitution is valid.</p><h3>Worked Example</h3><p>For f(x)=x²+1 at x=2, direct substitution gives f(2)=5. When a limit is involved, check the behavior as x approaches the target.</p><h3>Common Mistake</h3><p>Do not substitute blindly when the expression produces an indeterminate form or has a restriction.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "Evaluate lim(x→2)(x²+3).",
        "options": [
          "7",
          "5",
          "4",
          "3"
        ],
        "answer": 0,
        "explanation": "Substitute x=2: 2²+3=7."
      },
      {
        "question": "Evaluate lim(x→0)(5x+2).",
        "options": [
          "2",
          "5",
          "0",
          "7"
        ],
        "answer": 0,
        "explanation": "Substitute x=0 to get 2."
      },
      {
        "question": "If f(x)=3x+1, find f(4).",
        "options": [
          "13",
          "12",
          "10",
          "7"
        ],
        "answer": 0,
        "explanation": "3(4)+1=13."
      },
      {
        "question": "What does a limit describe?",
        "options": [
          "A value approached by a function",
          "Only an area",
          "Only a probability",
          "Only a maximum"
        ],
        "answer": 0,
        "explanation": "A limit describes the value a function approaches."
      },
      {
        "question": "For a polynomial, direct substitution at a point is usually...",
        "options": [
          "Valid",
          "Impossible",
          "Undefined",
          "Never allowed"
        ],
        "answer": 0,
        "explanation": "Polynomials are continuous, so direct substitution gives the limit."
      }
    ]
  },
  {
    "id": 5,
    "title": "Evaluating Limits",
    "description": "Master evaluating limits with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Evaluating Limits</strong>.</p><h3>Explanation</h3><p>A limit-based approach helps describe evaluating limits precisely and connects algebraic behavior to calculus.</p><p>Start by identifying the input value, the expression being studied, and whether direct substitution is valid.</p><h3>Worked Example</h3><p>For f(x)=x²+1 at x=2, direct substitution gives f(2)=5. When a limit is involved, check the behavior as x approaches the target.</p><h3>Common Mistake</h3><p>Do not substitute blindly when the expression produces an indeterminate form or has a restriction.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "Evaluate lim(x→2)(x²+3).",
        "options": [
          "7",
          "5",
          "4",
          "3"
        ],
        "answer": 0,
        "explanation": "Substitute x=2: 2²+3=7."
      },
      {
        "question": "Evaluate lim(x→0)(5x+2).",
        "options": [
          "2",
          "5",
          "0",
          "7"
        ],
        "answer": 0,
        "explanation": "Substitute x=0 to get 2."
      },
      {
        "question": "If f(x)=3x+1, find f(4).",
        "options": [
          "13",
          "12",
          "10",
          "7"
        ],
        "answer": 0,
        "explanation": "3(4)+1=13."
      },
      {
        "question": "What does a limit describe?",
        "options": [
          "A value approached by a function",
          "Only an area",
          "Only a probability",
          "Only a maximum"
        ],
        "answer": 0,
        "explanation": "A limit describes the value a function approaches."
      },
      {
        "question": "For a polynomial, direct substitution at a point is usually...",
        "options": [
          "Valid",
          "Impossible",
          "Undefined",
          "Never allowed"
        ],
        "answer": 0,
        "explanation": "Polynomials are continuous, so direct substitution gives the limit."
      }
    ]
  },
  {
    "id": 6,
    "title": "Limit Laws",
    "description": "Master limit laws with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Limit Laws</strong>.</p><h3>Explanation</h3><p>A limit-based approach helps describe limit laws precisely and connects algebraic behavior to calculus.</p><p>Start by identifying the input value, the expression being studied, and whether direct substitution is valid.</p><h3>Worked Example</h3><p>For f(x)=x²+1 at x=2, direct substitution gives f(2)=5. When a limit is involved, check the behavior as x approaches the target.</p><h3>Common Mistake</h3><p>Do not substitute blindly when the expression produces an indeterminate form or has a restriction.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "Evaluate lim(x→2)(x²+3).",
        "options": [
          "7",
          "5",
          "4",
          "3"
        ],
        "answer": 0,
        "explanation": "Substitute x=2: 2²+3=7."
      },
      {
        "question": "Evaluate lim(x→0)(5x+2).",
        "options": [
          "2",
          "5",
          "0",
          "7"
        ],
        "answer": 0,
        "explanation": "Substitute x=0 to get 2."
      },
      {
        "question": "If f(x)=3x+1, find f(4).",
        "options": [
          "13",
          "12",
          "10",
          "7"
        ],
        "answer": 0,
        "explanation": "3(4)+1=13."
      },
      {
        "question": "What does a limit describe?",
        "options": [
          "A value approached by a function",
          "Only an area",
          "Only a probability",
          "Only a maximum"
        ],
        "answer": 0,
        "explanation": "A limit describes the value a function approaches."
      },
      {
        "question": "For a polynomial, direct substitution at a point is usually...",
        "options": [
          "Valid",
          "Impossible",
          "Undefined",
          "Never allowed"
        ],
        "answer": 0,
        "explanation": "Polynomials are continuous, so direct substitution gives the limit."
      }
    ]
  },
  {
    "id": 7,
    "title": "One-Sided Limits",
    "description": "Master one-sided limits with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>One-Sided Limits</strong>.</p><h3>Explanation</h3><p>A limit-based approach helps describe one-sided limits precisely and connects algebraic behavior to calculus.</p><p>Start by identifying the input value, the expression being studied, and whether direct substitution is valid.</p><h3>Worked Example</h3><p>For f(x)=x²+1 at x=2, direct substitution gives f(2)=5. When a limit is involved, check the behavior as x approaches the target.</p><h3>Common Mistake</h3><p>Do not substitute blindly when the expression produces an indeterminate form or has a restriction.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "Evaluate lim(x→2)(x²+3).",
        "options": [
          "7",
          "5",
          "4",
          "3"
        ],
        "answer": 0,
        "explanation": "Substitute x=2: 2²+3=7."
      },
      {
        "question": "Evaluate lim(x→0)(5x+2).",
        "options": [
          "2",
          "5",
          "0",
          "7"
        ],
        "answer": 0,
        "explanation": "Substitute x=0 to get 2."
      },
      {
        "question": "If f(x)=3x+1, find f(4).",
        "options": [
          "13",
          "12",
          "10",
          "7"
        ],
        "answer": 0,
        "explanation": "3(4)+1=13."
      },
      {
        "question": "What does a limit describe?",
        "options": [
          "A value approached by a function",
          "Only an area",
          "Only a probability",
          "Only a maximum"
        ],
        "answer": 0,
        "explanation": "A limit describes the value a function approaches."
      },
      {
        "question": "For a polynomial, direct substitution at a point is usually...",
        "options": [
          "Valid",
          "Impossible",
          "Undefined",
          "Never allowed"
        ],
        "answer": 0,
        "explanation": "Polynomials are continuous, so direct substitution gives the limit."
      }
    ]
  },
  {
    "id": 8,
    "title": "Limits at Infinity",
    "description": "Master limits at infinity with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Limits at Infinity</strong>.</p><h3>Explanation</h3><p>A limit-based approach helps describe limits at infinity precisely and connects algebraic behavior to calculus.</p><p>Start by identifying the input value, the expression being studied, and whether direct substitution is valid.</p><h3>Worked Example</h3><p>For f(x)=x²+1 at x=2, direct substitution gives f(2)=5. When a limit is involved, check the behavior as x approaches the target.</p><h3>Common Mistake</h3><p>Do not substitute blindly when the expression produces an indeterminate form or has a restriction.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "Evaluate lim(x→2)(x²+3).",
        "options": [
          "7",
          "5",
          "4",
          "3"
        ],
        "answer": 0,
        "explanation": "Substitute x=2: 2²+3=7."
      },
      {
        "question": "Evaluate lim(x→0)(5x+2).",
        "options": [
          "2",
          "5",
          "0",
          "7"
        ],
        "answer": 0,
        "explanation": "Substitute x=0 to get 2."
      },
      {
        "question": "If f(x)=3x+1, find f(4).",
        "options": [
          "13",
          "12",
          "10",
          "7"
        ],
        "answer": 0,
        "explanation": "3(4)+1=13."
      },
      {
        "question": "What does a limit describe?",
        "options": [
          "A value approached by a function",
          "Only an area",
          "Only a probability",
          "Only a maximum"
        ],
        "answer": 0,
        "explanation": "A limit describes the value a function approaches."
      },
      {
        "question": "For a polynomial, direct substitution at a point is usually...",
        "options": [
          "Valid",
          "Impossible",
          "Undefined",
          "Never allowed"
        ],
        "answer": 0,
        "explanation": "Polynomials are continuous, so direct substitution gives the limit."
      }
    ]
  },
  {
    "id": 9,
    "title": "Infinite Limits",
    "description": "Master infinite limits with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Infinite Limits</strong>.</p><h3>Explanation</h3><p>A limit-based approach helps describe infinite limits precisely and connects algebraic behavior to calculus.</p><p>Start by identifying the input value, the expression being studied, and whether direct substitution is valid.</p><h3>Worked Example</h3><p>For f(x)=x²+1 at x=2, direct substitution gives f(2)=5. When a limit is involved, check the behavior as x approaches the target.</p><h3>Common Mistake</h3><p>Do not substitute blindly when the expression produces an indeterminate form or has a restriction.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "Evaluate lim(x→2)(x²+3).",
        "options": [
          "7",
          "5",
          "4",
          "3"
        ],
        "answer": 0,
        "explanation": "Substitute x=2: 2²+3=7."
      },
      {
        "question": "Evaluate lim(x→0)(5x+2).",
        "options": [
          "2",
          "5",
          "0",
          "7"
        ],
        "answer": 0,
        "explanation": "Substitute x=0 to get 2."
      },
      {
        "question": "If f(x)=3x+1, find f(4).",
        "options": [
          "13",
          "12",
          "10",
          "7"
        ],
        "answer": 0,
        "explanation": "3(4)+1=13."
      },
      {
        "question": "What does a limit describe?",
        "options": [
          "A value approached by a function",
          "Only an area",
          "Only a probability",
          "Only a maximum"
        ],
        "answer": 0,
        "explanation": "A limit describes the value a function approaches."
      },
      {
        "question": "For a polynomial, direct substitution at a point is usually...",
        "options": [
          "Valid",
          "Impossible",
          "Undefined",
          "Never allowed"
        ],
        "answer": 0,
        "explanation": "Polynomials are continuous, so direct substitution gives the limit."
      }
    ]
  },
  {
    "id": 10,
    "title": "Continuity",
    "description": "Master continuity with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Continuity</strong>.</p><h3>Explanation</h3><p>A limit-based approach helps describe continuity precisely and connects algebraic behavior to calculus.</p><p>Start by identifying the input value, the expression being studied, and whether direct substitution is valid.</p><h3>Worked Example</h3><p>For f(x)=x²+1 at x=2, direct substitution gives f(2)=5. When a limit is involved, check the behavior as x approaches the target.</p><h3>Common Mistake</h3><p>Do not substitute blindly when the expression produces an indeterminate form or has a restriction.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "Evaluate lim(x→2)(x²+3).",
        "options": [
          "7",
          "5",
          "4",
          "3"
        ],
        "answer": 0,
        "explanation": "Substitute x=2: 2²+3=7."
      },
      {
        "question": "Evaluate lim(x→0)(5x+2).",
        "options": [
          "2",
          "5",
          "0",
          "7"
        ],
        "answer": 0,
        "explanation": "Substitute x=0 to get 2."
      },
      {
        "question": "If f(x)=3x+1, find f(4).",
        "options": [
          "13",
          "12",
          "10",
          "7"
        ],
        "answer": 0,
        "explanation": "3(4)+1=13."
      },
      {
        "question": "What does a limit describe?",
        "options": [
          "A value approached by a function",
          "Only an area",
          "Only a probability",
          "Only a maximum"
        ],
        "answer": 0,
        "explanation": "A limit describes the value a function approaches."
      },
      {
        "question": "For a polynomial, direct substitution at a point is usually...",
        "options": [
          "Valid",
          "Impossible",
          "Undefined",
          "Never allowed"
        ],
        "answer": 0,
        "explanation": "Polynomials are continuous, so direct substitution gives the limit."
      }
    ]
  },
  {
    "id": 11,
    "title": "Continuous Functions",
    "description": "Master continuous functions with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Continuous Functions</strong>.</p><h3>Explanation</h3><p>A limit-based approach helps describe continuous functions precisely and connects algebraic behavior to calculus.</p><p>Start by identifying the input value, the expression being studied, and whether direct substitution is valid.</p><h3>Worked Example</h3><p>For f(x)=x²+1 at x=2, direct substitution gives f(2)=5. When a limit is involved, check the behavior as x approaches the target.</p><h3>Common Mistake</h3><p>Do not substitute blindly when the expression produces an indeterminate form or has a restriction.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "Evaluate lim(x→2)(x²+3).",
        "options": [
          "7",
          "5",
          "4",
          "3"
        ],
        "answer": 0,
        "explanation": "Substitute x=2: 2²+3=7."
      },
      {
        "question": "Evaluate lim(x→0)(5x+2).",
        "options": [
          "2",
          "5",
          "0",
          "7"
        ],
        "answer": 0,
        "explanation": "Substitute x=0 to get 2."
      },
      {
        "question": "If f(x)=3x+1, find f(4).",
        "options": [
          "13",
          "12",
          "10",
          "7"
        ],
        "answer": 0,
        "explanation": "3(4)+1=13."
      },
      {
        "question": "What does a limit describe?",
        "options": [
          "A value approached by a function",
          "Only an area",
          "Only a probability",
          "Only a maximum"
        ],
        "answer": 0,
        "explanation": "A limit describes the value a function approaches."
      },
      {
        "question": "For a polynomial, direct substitution at a point is usually...",
        "options": [
          "Valid",
          "Impossible",
          "Undefined",
          "Never allowed"
        ],
        "answer": 0,
        "explanation": "Polynomials are continuous, so direct substitution gives the limit."
      }
    ]
  },
  {
    "id": 12,
    "title": "Discontinuities",
    "description": "Master discontinuities with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Discontinuities</strong>.</p><h3>Explanation</h3><p>A limit-based approach helps describe discontinuities precisely and connects algebraic behavior to calculus.</p><p>Start by identifying the input value, the expression being studied, and whether direct substitution is valid.</p><h3>Worked Example</h3><p>For f(x)=x²+1 at x=2, direct substitution gives f(2)=5. When a limit is involved, check the behavior as x approaches the target.</p><h3>Common Mistake</h3><p>Do not substitute blindly when the expression produces an indeterminate form or has a restriction.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "Evaluate lim(x→2)(x²+3).",
        "options": [
          "7",
          "5",
          "4",
          "3"
        ],
        "answer": 0,
        "explanation": "Substitute x=2: 2²+3=7."
      },
      {
        "question": "Evaluate lim(x→0)(5x+2).",
        "options": [
          "2",
          "5",
          "0",
          "7"
        ],
        "answer": 0,
        "explanation": "Substitute x=0 to get 2."
      },
      {
        "question": "If f(x)=3x+1, find f(4).",
        "options": [
          "13",
          "12",
          "10",
          "7"
        ],
        "answer": 0,
        "explanation": "3(4)+1=13."
      },
      {
        "question": "What does a limit describe?",
        "options": [
          "A value approached by a function",
          "Only an area",
          "Only a probability",
          "Only a maximum"
        ],
        "answer": 0,
        "explanation": "A limit describes the value a function approaches."
      },
      {
        "question": "For a polynomial, direct substitution at a point is usually...",
        "options": [
          "Valid",
          "Impossible",
          "Undefined",
          "Never allowed"
        ],
        "answer": 0,
        "explanation": "Polynomials are continuous, so direct substitution gives the limit."
      }
    ]
  },
  {
    "id": 13,
    "title": "Average Rate of Change",
    "description": "Master average rate of change with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Average Rate of Change</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study average rate of change by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 14,
    "title": "Instantaneous Rate of Change",
    "description": "Master instantaneous rate of change with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Instantaneous Rate of Change</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study instantaneous rate of change by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 15,
    "title": "The Derivative",
    "description": "Master the derivative with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>The Derivative</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study the derivative by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 16,
    "title": "Derivative Notation",
    "description": "Master derivative notation with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Derivative Notation</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study derivative notation by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 17,
    "title": "Basic Differentiation Rules",
    "description": "Master basic differentiation rules with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Basic Differentiation Rules</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study basic differentiation rules by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 18,
    "title": "Power Rule",
    "description": "Master power rule with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Power Rule</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study power rule by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 19,
    "title": "Constant Rule",
    "description": "Master constant rule with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Constant Rule</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study constant rule by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 20,
    "title": "Sum and Difference Rules",
    "description": "Master sum and difference rules with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Sum and Difference Rules</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study sum and difference rules by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 21,
    "title": "Product Rule",
    "description": "Master product rule with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Product Rule</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study product rule by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 22,
    "title": "Quotient Rule",
    "description": "Master quotient rule with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Quotient Rule</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study quotient rule by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 23,
    "title": "Chain Rule",
    "description": "Master chain rule with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Chain Rule</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study chain rule by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 24,
    "title": "Derivatives of Polynomials",
    "description": "Master derivatives of polynomials with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Derivatives of Polynomials</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study derivatives of polynomials by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 25,
    "title": "Derivatives of Rational Functions",
    "description": "Master derivatives of rational functions with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Derivatives of Rational Functions</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study derivatives of rational functions by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 26,
    "title": "Derivatives of Exponential Functions",
    "description": "Master derivatives of exponential functions with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Derivatives of Exponential Functions</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study derivatives of exponential functions by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 27,
    "title": "Derivatives of Logarithmic Functions",
    "description": "Master derivatives of logarithmic functions with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Derivatives of Logarithmic Functions</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study derivatives of logarithmic functions by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 28,
    "title": "Derivatives of Sine",
    "description": "Master derivatives of sine with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Derivatives of Sine</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study derivatives of sine by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 29,
    "title": "Derivatives of Cosine",
    "description": "Master derivatives of cosine with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Derivatives of Cosine</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study derivatives of cosine by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 30,
    "title": "Derivatives of Tangent",
    "description": "Master derivatives of tangent with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Derivatives of Tangent</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study derivatives of tangent by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 31,
    "title": "Derivatives of Trigonometric Functions",
    "description": "Master derivatives of trigonometric functions with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Derivatives of Trigonometric Functions</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study derivatives of trigonometric functions by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 32,
    "title": "Implicit Differentiation",
    "description": "Master implicit differentiation with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Implicit Differentiation</strong>.</p><h3>Explanation</h3><p>Differentiation is used to study implicit differentiation by measuring how functions change.</p><p>Choose the differentiation rule that matches the structure of the function, then simplify the result.</p><h3>Worked Example</h3><p>For f(x)=x³+2x, differentiate term by term to get f'(x)=3x²+2.</p><h3>Common Mistake</h3><p>Check the structure of the expression before choosing a rule; composite, product, and quotient functions require special care.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is d/dx(x³)?",
        "options": [
          "3x²",
          "x²",
          "3x",
          "x⁴"
        ],
        "answer": 0,
        "explanation": "By the power rule, d/dx(x³)=3x²."
      },
      {
        "question": "What is d/dx(5x²)?",
        "options": [
          "10x",
          "5x",
          "10",
          "x²"
        ],
        "answer": 0,
        "explanation": "The derivative is 10x."
      },
      {
        "question": "What is d/dx(7)?",
        "options": [
          "0",
          "7",
          "1",
          "x"
        ],
        "answer": 0,
        "explanation": "The derivative of a constant is zero."
      },
      {
        "question": "What is d/dx(sin x)?",
        "options": [
          "cos x",
          "-cos x",
          "sin x",
          "tan x"
        ],
        "answer": 0,
        "explanation": "The derivative of sin x is cos x."
      },
      {
        "question": "If f'(x)>0 on an interval, f is generally...",
        "options": [
          "increasing",
          "decreasing",
          "constant",
          "undefined"
        ],
        "answer": 0,
        "explanation": "A positive derivative indicates increasing behavior."
      }
    ]
  },
  {
    "id": 33,
    "title": "Higher-Order Derivatives",
    "description": "Master higher-order derivatives with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Higher-Order Derivatives</strong>.</p><h3>Explanation</h3><p>Higher-Order Derivatives uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 34,
    "title": "Second Derivative",
    "description": "Master second derivative with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Second Derivative</strong>.</p><h3>Explanation</h3><p>Second Derivative uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 35,
    "title": "Related Rates",
    "description": "Master related rates with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Related Rates</strong>.</p><h3>Explanation</h3><p>Related Rates uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 36,
    "title": "Linear Approximation",
    "description": "Master linear approximation with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Linear Approximation</strong>.</p><h3>Explanation</h3><p>Linear Approximation uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 37,
    "title": "Differentials",
    "description": "Master differentials with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Differentials</strong>.</p><h3>Explanation</h3><p>Differentials uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 38,
    "title": "Critical Points",
    "description": "Master critical points with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Critical Points</strong>.</p><h3>Explanation</h3><p>Critical Points uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 39,
    "title": "Increasing and Decreasing Functions",
    "description": "Master increasing and decreasing functions with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Increasing and Decreasing Functions</strong>.</p><h3>Explanation</h3><p>Increasing and Decreasing Functions uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 40,
    "title": "First Derivative Test",
    "description": "Master first derivative test with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>First Derivative Test</strong>.</p><h3>Explanation</h3><p>First Derivative Test uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 41,
    "title": "Local Maximum and Minimum",
    "description": "Master local maximum and minimum with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Local Maximum and Minimum</strong>.</p><h3>Explanation</h3><p>Local Maximum and Minimum uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 42,
    "title": "Absolute Maximum and Minimum",
    "description": "Master absolute maximum and minimum with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Absolute Maximum and Minimum</strong>.</p><h3>Explanation</h3><p>Absolute Maximum and Minimum uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 43,
    "title": "Concavity",
    "description": "Master concavity with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Concavity</strong>.</p><h3>Explanation</h3><p>Concavity uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 44,
    "title": "Inflection Points",
    "description": "Master inflection points with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Inflection Points</strong>.</p><h3>Explanation</h3><p>Inflection Points uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 45,
    "title": "Second Derivative Test",
    "description": "Master second derivative test with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Second Derivative Test</strong>.</p><h3>Explanation</h3><p>Second Derivative Test uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 46,
    "title": "Curve Sketching",
    "description": "Master curve sketching with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Curve Sketching</strong>.</p><h3>Explanation</h3><p>Curve Sketching uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 47,
    "title": "Optimization",
    "description": "Master optimization with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Optimization</strong>.</p><h3>Explanation</h3><p>Optimization uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 48,
    "title": "Applications of Derivatives",
    "description": "Master applications of derivatives with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Applications of Derivatives</strong>.</p><h3>Explanation</h3><p>Applications of Derivatives uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 49,
    "title": "Motion Along a Line",
    "description": "Master motion along a line with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Motion Along a Line</strong>.</p><h3>Explanation</h3><p>Motion Along a Line uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 50,
    "title": "Velocity and Acceleration",
    "description": "Master velocity and acceleration with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Velocity and Acceleration</strong>.</p><h3>Explanation</h3><p>Velocity and Acceleration uses derivative information to interpret and analyze functions.</p><p>Use first- and second-derivative information together with domain restrictions and critical points.</p><h3>Worked Example</h3><p>For f(x)=x², f'(x)=2x. The critical point x=0 is a minimum because the graph changes from decreasing to increasing.</p><h3>Common Mistake</h3><p>A critical point is a candidate, not automatically a maximum or minimum.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "If f'(x)=0 at x=3, x=3 is a possible...",
        "options": [
          "critical point",
          "limit",
          "sample",
          "constant"
        ],
        "answer": 0,
        "explanation": "A point where the derivative is zero is a critical point if it is in the domain."
      },
      {
        "question": "If f' changes from positive to negative at c, c is a local...",
        "options": [
          "maximum",
          "minimum",
          "zero",
          "asymptote"
        ],
        "answer": 0,
        "explanation": "Increasing to decreasing indicates a local maximum."
      },
      {
        "question": "If f''(x)>0, the graph is generally...",
        "options": [
          "concave up",
          "concave down",
          "horizontal",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Positive second derivative indicates concave up."
      },
      {
        "question": "Velocity is the derivative of...",
        "options": [
          "position",
          "acceleration",
          "area",
          "mass"
        ],
        "answer": 0,
        "explanation": "Velocity is the derivative of position with respect to time."
      },
      {
        "question": "Optimization commonly seeks a...",
        "options": [
          "maximum or minimum",
          "median only",
          "limit only",
          "sample"
        ],
        "answer": 0,
        "explanation": "Optimization finds extreme values under constraints."
      }
    ]
  },
  {
    "id": 51,
    "title": "Introduction to Integration",
    "description": "Master introduction to integration with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Introduction to Integration</strong>.</p><h3>Explanation</h3><p>Integration provides tools for introduction to integration and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 52,
    "title": "Antiderivatives",
    "description": "Master antiderivatives with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Antiderivatives</strong>.</p><h3>Explanation</h3><p>Integration provides tools for antiderivatives and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 53,
    "title": "Indefinite Integrals",
    "description": "Master indefinite integrals with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Indefinite Integrals</strong>.</p><h3>Explanation</h3><p>Integration provides tools for indefinite integrals and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 54,
    "title": "Constant of Integration",
    "description": "Master constant of integration with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Constant of Integration</strong>.</p><h3>Explanation</h3><p>Integration provides tools for constant of integration and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 55,
    "title": "Basic Integration Rules",
    "description": "Master basic integration rules with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Basic Integration Rules</strong>.</p><h3>Explanation</h3><p>Integration provides tools for basic integration rules and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 56,
    "title": "Power Rule for Integration",
    "description": "Master power rule for integration with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Power Rule for Integration</strong>.</p><h3>Explanation</h3><p>Integration provides tools for power rule for integration and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 57,
    "title": "Sum and Difference Integration",
    "description": "Master sum and difference integration with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Sum and Difference Integration</strong>.</p><h3>Explanation</h3><p>Integration provides tools for sum and difference integration and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 58,
    "title": "Definite Integrals",
    "description": "Master definite integrals with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Definite Integrals</strong>.</p><h3>Explanation</h3><p>Integration provides tools for definite integrals and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 59,
    "title": "Riemann Sums",
    "description": "Master riemann sums with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Riemann Sums</strong>.</p><h3>Explanation</h3><p>Integration provides tools for riemann sums and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 60,
    "title": "The Fundamental Theorem of Calculus",
    "description": "Master the fundamental theorem of calculus with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>The Fundamental Theorem of Calculus</strong>.</p><h3>Explanation</h3><p>Integration provides tools for the fundamental theorem of calculus and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 61,
    "title": "Area Under a Curve",
    "description": "Master area under a curve with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Area Under a Curve</strong>.</p><h3>Explanation</h3><p>Integration provides tools for area under a curve and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 62,
    "title": "Area Between Curves",
    "description": "Master area between curves with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Area Between Curves</strong>.</p><h3>Explanation</h3><p>Integration provides tools for area between curves and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 63,
    "title": "Average Value of a Function",
    "description": "Master average value of a function with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Average Value of a Function</strong>.</p><h3>Explanation</h3><p>Integration provides tools for average value of a function and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 64,
    "title": "Substitution Method",
    "description": "Master substitution method with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Substitution Method</strong>.</p><h3>Explanation</h3><p>Integration provides tools for substitution method and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 65,
    "title": "Integration by Substitution",
    "description": "Master integration by substitution with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Integration by Substitution</strong>.</p><h3>Explanation</h3><p>Integration provides tools for integration by substitution and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 66,
    "title": "Integration of Exponential Functions",
    "description": "Master integration of exponential functions with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Integration of Exponential Functions</strong>.</p><h3>Explanation</h3><p>Integration provides tools for integration of exponential functions and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 67,
    "title": "Integration of Logarithmic Functions",
    "description": "Master integration of logarithmic functions with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Integration of Logarithmic Functions</strong>.</p><h3>Explanation</h3><p>Integration provides tools for integration of logarithmic functions and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 68,
    "title": "Integration of Trigonometric Functions",
    "description": "Master integration of trigonometric functions with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Integration of Trigonometric Functions</strong>.</p><h3>Explanation</h3><p>Integration provides tools for integration of trigonometric functions and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 69,
    "title": "Integration by Parts",
    "description": "Master integration by parts with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Integration by Parts</strong>.</p><h3>Explanation</h3><p>Integration provides tools for integration by parts and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 70,
    "title": "Partial Fractions",
    "description": "Master partial fractions with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Partial Fractions</strong>.</p><h3>Explanation</h3><p>Integration provides tools for partial fractions and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 71,
    "title": "Improper Integrals",
    "description": "Master improper integrals with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Improper Integrals</strong>.</p><h3>Explanation</h3><p>Integration provides tools for improper integrals and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 72,
    "title": "Numerical Integration",
    "description": "Master numerical integration with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Numerical Integration</strong>.</p><h3>Explanation</h3><p>Integration provides tools for numerical integration and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 73,
    "title": "Trapezoidal Rule",
    "description": "Master trapezoidal rule with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Trapezoidal Rule</strong>.</p><h3>Explanation</h3><p>Integration provides tools for trapezoidal rule and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 74,
    "title": "Midpoint Rule",
    "description": "Master midpoint rule with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Midpoint Rule</strong>.</p><h3>Explanation</h3><p>Integration provides tools for midpoint rule and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 75,
    "title": "Simpson's Rule",
    "description": "Master simpson's rule with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Simpson's Rule</strong>.</p><h3>Explanation</h3><p>Integration provides tools for simpson's rule and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 76,
    "title": "Volumes by Slicing",
    "description": "Master volumes by slicing with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Volumes by Slicing</strong>.</p><h3>Explanation</h3><p>Integration provides tools for volumes by slicing and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 77,
    "title": "Volumes by Disks",
    "description": "Master volumes by disks with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Volumes by Disks</strong>.</p><h3>Explanation</h3><p>Integration provides tools for volumes by disks and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 78,
    "title": "Volumes by Washers",
    "description": "Master volumes by washers with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Volumes by Washers</strong>.</p><h3>Explanation</h3><p>Integration provides tools for volumes by washers and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 79,
    "title": "Volumes by Cylindrical Shells",
    "description": "Master volumes by cylindrical shells with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Volumes by Cylindrical Shells</strong>.</p><h3>Explanation</h3><p>Integration provides tools for volumes by cylindrical shells and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 80,
    "title": "Arc Length",
    "description": "Master arc length with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Arc Length</strong>.</p><h3>Explanation</h3><p>Integration provides tools for arc length and for measuring accumulated change.</p><p>Identify the integrand, the interval, and the appropriate integration method before calculating.</p><h3>Worked Example</h3><p>Since ∫2x dx=x²+C, an antiderivative of 2x is x²+C. For a definite integral, evaluate the antiderivative at the bounds.</p><h3>Common Mistake</h3><p>Remember the difference between an indefinite integral, which includes C, and a definite integral, which does not.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is ∫2x dx?",
        "options": [
          "x²+C",
          "2x²+C",
          "2x+C",
          "x+C"
        ],
        "answer": 0,
        "explanation": "An antiderivative of 2x is x²+C."
      },
      {
        "question": "What is ∫1 dx?",
        "options": [
          "x+C",
          "1+C",
          "0",
          "x²+C"
        ],
        "answer": 0,
        "explanation": "The antiderivative of 1 is x+C."
      },
      {
        "question": "What does a definite integral commonly represent?",
        "options": [
          "Accumulated change",
          "Only a derivative",
          "A median",
          "A slope only"
        ],
        "answer": 0,
        "explanation": "A definite integral can represent signed accumulation or area."
      },
      {
        "question": "Which method is related to the chain rule?",
        "options": [
          "u-substitution",
          "Median rule",
          "Range rule",
          "Sampling"
        ],
        "answer": 0,
        "explanation": "u-substitution is closely related to the chain rule."
      },
      {
        "question": "What symbol is commonly used for the integration constant?",
        "options": [
          "C",
          "x",
          "π",
          "n"
        ],
        "answer": 0,
        "explanation": "Indefinite integrals include an arbitrary constant C."
      }
    ]
  },
  {
    "id": 81,
    "title": "Parametric Equations",
    "description": "Master parametric equations with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Parametric Equations</strong>.</p><h3>Explanation</h3><p>Parametric Equations extends calculus into functions, approximations, coordinates, and infinite processes.</p><p>Pay attention to the definition, notation, convergence conditions, and the interval where the method applies.</p><h3>Worked Example</h3><p>For a geometric sequence with first term 2 and ratio 1/2, the terms are 2,1,1/2,... and the infinite sum is 4.</p><h3>Common Mistake</h3><p>Always check the conditions of convergence or the allowed interval before using a formula.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is an arithmetic sequence?",
        "options": [
          "Constant difference",
          "Constant product",
          "Random list",
          "Function only"
        ],
        "answer": 0,
        "explanation": "Arithmetic sequences have a constant common difference."
      },
      {
        "question": "What is a geometric sequence?",
        "options": [
          "Constant ratio",
          "Constant difference",
          "No pattern",
          "Only zeroes"
        ],
        "answer": 0,
        "explanation": "Geometric sequences have a constant common ratio."
      },
      {
        "question": "A Maclaurin series is centered at...",
        "options": [
          "0",
          "1",
          "π",
          "∞"
        ],
        "answer": 0,
        "explanation": "Maclaurin series are Taylor series centered at zero."
      },
      {
        "question": "A convergent series has partial sums that...",
        "options": [
          "Approach a finite limit",
          "Always increase forever",
          "Are always zero",
          "Have no pattern"
        ],
        "answer": 0,
        "explanation": "Convergence means the partial sums approach a finite value."
      },
      {
        "question": "A Taylor polynomial is...",
        "options": [
          "A finite approximation",
          "An infinite sequence only",
          "A probability",
          "A derivative only"
        ],
        "answer": 0,
        "explanation": "It is a finite truncation of a Taylor series."
      }
    ]
  },
  {
    "id": 82,
    "title": "Parametric Derivatives",
    "description": "Master parametric derivatives with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Parametric Derivatives</strong>.</p><h3>Explanation</h3><p>Parametric Derivatives extends calculus into functions, approximations, coordinates, and infinite processes.</p><p>Pay attention to the definition, notation, convergence conditions, and the interval where the method applies.</p><h3>Worked Example</h3><p>For a geometric sequence with first term 2 and ratio 1/2, the terms are 2,1,1/2,... and the infinite sum is 4.</p><h3>Common Mistake</h3><p>Always check the conditions of convergence or the allowed interval before using a formula.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is an arithmetic sequence?",
        "options": [
          "Constant difference",
          "Constant product",
          "Random list",
          "Function only"
        ],
        "answer": 0,
        "explanation": "Arithmetic sequences have a constant common difference."
      },
      {
        "question": "What is a geometric sequence?",
        "options": [
          "Constant ratio",
          "Constant difference",
          "No pattern",
          "Only zeroes"
        ],
        "answer": 0,
        "explanation": "Geometric sequences have a constant common ratio."
      },
      {
        "question": "A Maclaurin series is centered at...",
        "options": [
          "0",
          "1",
          "π",
          "∞"
        ],
        "answer": 0,
        "explanation": "Maclaurin series are Taylor series centered at zero."
      },
      {
        "question": "A convergent series has partial sums that...",
        "options": [
          "Approach a finite limit",
          "Always increase forever",
          "Are always zero",
          "Have no pattern"
        ],
        "answer": 0,
        "explanation": "Convergence means the partial sums approach a finite value."
      },
      {
        "question": "A Taylor polynomial is...",
        "options": [
          "A finite approximation",
          "An infinite sequence only",
          "A probability",
          "A derivative only"
        ],
        "answer": 0,
        "explanation": "It is a finite truncation of a Taylor series."
      }
    ]
  },
  {
    "id": 83,
    "title": "Polar Coordinates",
    "description": "Master polar coordinates with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Polar Coordinates</strong>.</p><h3>Explanation</h3><p>Polar Coordinates extends calculus into functions, approximations, coordinates, and infinite processes.</p><p>Pay attention to the definition, notation, convergence conditions, and the interval where the method applies.</p><h3>Worked Example</h3><p>For a geometric sequence with first term 2 and ratio 1/2, the terms are 2,1,1/2,... and the infinite sum is 4.</p><h3>Common Mistake</h3><p>Always check the conditions of convergence or the allowed interval before using a formula.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is an arithmetic sequence?",
        "options": [
          "Constant difference",
          "Constant product",
          "Random list",
          "Function only"
        ],
        "answer": 0,
        "explanation": "Arithmetic sequences have a constant common difference."
      },
      {
        "question": "What is a geometric sequence?",
        "options": [
          "Constant ratio",
          "Constant difference",
          "No pattern",
          "Only zeroes"
        ],
        "answer": 0,
        "explanation": "Geometric sequences have a constant common ratio."
      },
      {
        "question": "A Maclaurin series is centered at...",
        "options": [
          "0",
          "1",
          "π",
          "∞"
        ],
        "answer": 0,
        "explanation": "Maclaurin series are Taylor series centered at zero."
      },
      {
        "question": "A convergent series has partial sums that...",
        "options": [
          "Approach a finite limit",
          "Always increase forever",
          "Are always zero",
          "Have no pattern"
        ],
        "answer": 0,
        "explanation": "Convergence means the partial sums approach a finite value."
      },
      {
        "question": "A Taylor polynomial is...",
        "options": [
          "A finite approximation",
          "An infinite sequence only",
          "A probability",
          "A derivative only"
        ],
        "answer": 0,
        "explanation": "It is a finite truncation of a Taylor series."
      }
    ]
  },
  {
    "id": 84,
    "title": "Polar Area",
    "description": "Master polar area with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Polar Area</strong>.</p><h3>Explanation</h3><p>Polar Area extends calculus into functions, approximations, coordinates, and infinite processes.</p><p>Pay attention to the definition, notation, convergence conditions, and the interval where the method applies.</p><h3>Worked Example</h3><p>For a geometric sequence with first term 2 and ratio 1/2, the terms are 2,1,1/2,... and the infinite sum is 4.</p><h3>Common Mistake</h3><p>Always check the conditions of convergence or the allowed interval before using a formula.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is an arithmetic sequence?",
        "options": [
          "Constant difference",
          "Constant product",
          "Random list",
          "Function only"
        ],
        "answer": 0,
        "explanation": "Arithmetic sequences have a constant common difference."
      },
      {
        "question": "What is a geometric sequence?",
        "options": [
          "Constant ratio",
          "Constant difference",
          "No pattern",
          "Only zeroes"
        ],
        "answer": 0,
        "explanation": "Geometric sequences have a constant common ratio."
      },
      {
        "question": "A Maclaurin series is centered at...",
        "options": [
          "0",
          "1",
          "π",
          "∞"
        ],
        "answer": 0,
        "explanation": "Maclaurin series are Taylor series centered at zero."
      },
      {
        "question": "A convergent series has partial sums that...",
        "options": [
          "Approach a finite limit",
          "Always increase forever",
          "Are always zero",
          "Have no pattern"
        ],
        "answer": 0,
        "explanation": "Convergence means the partial sums approach a finite value."
      },
      {
        "question": "A Taylor polynomial is...",
        "options": [
          "A finite approximation",
          "An infinite sequence only",
          "A probability",
          "A derivative only"
        ],
        "answer": 0,
        "explanation": "It is a finite truncation of a Taylor series."
      }
    ]
  },
  {
    "id": 85,
    "title": "Sequences",
    "description": "Master sequences with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Sequences</strong>.</p><h3>Explanation</h3><p>Sequences extends calculus into functions, approximations, coordinates, and infinite processes.</p><p>Pay attention to the definition, notation, convergence conditions, and the interval where the method applies.</p><h3>Worked Example</h3><p>For a geometric sequence with first term 2 and ratio 1/2, the terms are 2,1,1/2,... and the infinite sum is 4.</p><h3>Common Mistake</h3><p>Always check the conditions of convergence or the allowed interval before using a formula.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is an arithmetic sequence?",
        "options": [
          "Constant difference",
          "Constant product",
          "Random list",
          "Function only"
        ],
        "answer": 0,
        "explanation": "Arithmetic sequences have a constant common difference."
      },
      {
        "question": "What is a geometric sequence?",
        "options": [
          "Constant ratio",
          "Constant difference",
          "No pattern",
          "Only zeroes"
        ],
        "answer": 0,
        "explanation": "Geometric sequences have a constant common ratio."
      },
      {
        "question": "A Maclaurin series is centered at...",
        "options": [
          "0",
          "1",
          "π",
          "∞"
        ],
        "answer": 0,
        "explanation": "Maclaurin series are Taylor series centered at zero."
      },
      {
        "question": "A convergent series has partial sums that...",
        "options": [
          "Approach a finite limit",
          "Always increase forever",
          "Are always zero",
          "Have no pattern"
        ],
        "answer": 0,
        "explanation": "Convergence means the partial sums approach a finite value."
      },
      {
        "question": "A Taylor polynomial is...",
        "options": [
          "A finite approximation",
          "An infinite sequence only",
          "A probability",
          "A derivative only"
        ],
        "answer": 0,
        "explanation": "It is a finite truncation of a Taylor series."
      }
    ]
  },
  {
    "id": 86,
    "title": "Series",
    "description": "Master series with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Series</strong>.</p><h3>Explanation</h3><p>Series extends calculus into functions, approximations, coordinates, and infinite processes.</p><p>Pay attention to the definition, notation, convergence conditions, and the interval where the method applies.</p><h3>Worked Example</h3><p>For a geometric sequence with first term 2 and ratio 1/2, the terms are 2,1,1/2,... and the infinite sum is 4.</p><h3>Common Mistake</h3><p>Always check the conditions of convergence or the allowed interval before using a formula.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is an arithmetic sequence?",
        "options": [
          "Constant difference",
          "Constant product",
          "Random list",
          "Function only"
        ],
        "answer": 0,
        "explanation": "Arithmetic sequences have a constant common difference."
      },
      {
        "question": "What is a geometric sequence?",
        "options": [
          "Constant ratio",
          "Constant difference",
          "No pattern",
          "Only zeroes"
        ],
        "answer": 0,
        "explanation": "Geometric sequences have a constant common ratio."
      },
      {
        "question": "A Maclaurin series is centered at...",
        "options": [
          "0",
          "1",
          "π",
          "∞"
        ],
        "answer": 0,
        "explanation": "Maclaurin series are Taylor series centered at zero."
      },
      {
        "question": "A convergent series has partial sums that...",
        "options": [
          "Approach a finite limit",
          "Always increase forever",
          "Are always zero",
          "Have no pattern"
        ],
        "answer": 0,
        "explanation": "Convergence means the partial sums approach a finite value."
      },
      {
        "question": "A Taylor polynomial is...",
        "options": [
          "A finite approximation",
          "An infinite sequence only",
          "A probability",
          "A derivative only"
        ],
        "answer": 0,
        "explanation": "It is a finite truncation of a Taylor series."
      }
    ]
  },
  {
    "id": 87,
    "title": "Arithmetic Sequences",
    "description": "Master arithmetic sequences with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Arithmetic Sequences</strong>.</p><h3>Explanation</h3><p>Arithmetic Sequences extends calculus into functions, approximations, coordinates, and infinite processes.</p><p>Pay attention to the definition, notation, convergence conditions, and the interval where the method applies.</p><h3>Worked Example</h3><p>For a geometric sequence with first term 2 and ratio 1/2, the terms are 2,1,1/2,... and the infinite sum is 4.</p><h3>Common Mistake</h3><p>Always check the conditions of convergence or the allowed interval before using a formula.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is an arithmetic sequence?",
        "options": [
          "Constant difference",
          "Constant product",
          "Random list",
          "Function only"
        ],
        "answer": 0,
        "explanation": "Arithmetic sequences have a constant common difference."
      },
      {
        "question": "What is a geometric sequence?",
        "options": [
          "Constant ratio",
          "Constant difference",
          "No pattern",
          "Only zeroes"
        ],
        "answer": 0,
        "explanation": "Geometric sequences have a constant common ratio."
      },
      {
        "question": "A Maclaurin series is centered at...",
        "options": [
          "0",
          "1",
          "π",
          "∞"
        ],
        "answer": 0,
        "explanation": "Maclaurin series are Taylor series centered at zero."
      },
      {
        "question": "A convergent series has partial sums that...",
        "options": [
          "Approach a finite limit",
          "Always increase forever",
          "Are always zero",
          "Have no pattern"
        ],
        "answer": 0,
        "explanation": "Convergence means the partial sums approach a finite value."
      },
      {
        "question": "A Taylor polynomial is...",
        "options": [
          "A finite approximation",
          "An infinite sequence only",
          "A probability",
          "A derivative only"
        ],
        "answer": 0,
        "explanation": "It is a finite truncation of a Taylor series."
      }
    ]
  },
  {
    "id": 88,
    "title": "Geometric Sequences",
    "description": "Master geometric sequences with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Geometric Sequences</strong>.</p><h3>Explanation</h3><p>Geometric Sequences extends calculus into functions, approximations, coordinates, and infinite processes.</p><p>Pay attention to the definition, notation, convergence conditions, and the interval where the method applies.</p><h3>Worked Example</h3><p>For a geometric sequence with first term 2 and ratio 1/2, the terms are 2,1,1/2,... and the infinite sum is 4.</p><h3>Common Mistake</h3><p>Always check the conditions of convergence or the allowed interval before using a formula.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is an arithmetic sequence?",
        "options": [
          "Constant difference",
          "Constant product",
          "Random list",
          "Function only"
        ],
        "answer": 0,
        "explanation": "Arithmetic sequences have a constant common difference."
      },
      {
        "question": "What is a geometric sequence?",
        "options": [
          "Constant ratio",
          "Constant difference",
          "No pattern",
          "Only zeroes"
        ],
        "answer": 0,
        "explanation": "Geometric sequences have a constant common ratio."
      },
      {
        "question": "A Maclaurin series is centered at...",
        "options": [
          "0",
          "1",
          "π",
          "∞"
        ],
        "answer": 0,
        "explanation": "Maclaurin series are Taylor series centered at zero."
      },
      {
        "question": "A convergent series has partial sums that...",
        "options": [
          "Approach a finite limit",
          "Always increase forever",
          "Are always zero",
          "Have no pattern"
        ],
        "answer": 0,
        "explanation": "Convergence means the partial sums approach a finite value."
      },
      {
        "question": "A Taylor polynomial is...",
        "options": [
          "A finite approximation",
          "An infinite sequence only",
          "A probability",
          "A derivative only"
        ],
        "answer": 0,
        "explanation": "It is a finite truncation of a Taylor series."
      }
    ]
  },
  {
    "id": 89,
    "title": "Infinite Geometric Series",
    "description": "Master infinite geometric series with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Infinite Geometric Series</strong>.</p><h3>Explanation</h3><p>Infinite Geometric Series extends calculus into functions, approximations, coordinates, and infinite processes.</p><p>Pay attention to the definition, notation, convergence conditions, and the interval where the method applies.</p><h3>Worked Example</h3><p>For a geometric sequence with first term 2 and ratio 1/2, the terms are 2,1,1/2,... and the infinite sum is 4.</p><h3>Common Mistake</h3><p>Always check the conditions of convergence or the allowed interval before using a formula.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is an arithmetic sequence?",
        "options": [
          "Constant difference",
          "Constant product",
          "Random list",
          "Function only"
        ],
        "answer": 0,
        "explanation": "Arithmetic sequences have a constant common difference."
      },
      {
        "question": "What is a geometric sequence?",
        "options": [
          "Constant ratio",
          "Constant difference",
          "No pattern",
          "Only zeroes"
        ],
        "answer": 0,
        "explanation": "Geometric sequences have a constant common ratio."
      },
      {
        "question": "A Maclaurin series is centered at...",
        "options": [
          "0",
          "1",
          "π",
          "∞"
        ],
        "answer": 0,
        "explanation": "Maclaurin series are Taylor series centered at zero."
      },
      {
        "question": "A convergent series has partial sums that...",
        "options": [
          "Approach a finite limit",
          "Always increase forever",
          "Are always zero",
          "Have no pattern"
        ],
        "answer": 0,
        "explanation": "Convergence means the partial sums approach a finite value."
      },
      {
        "question": "A Taylor polynomial is...",
        "options": [
          "A finite approximation",
          "An infinite sequence only",
          "A probability",
          "A derivative only"
        ],
        "answer": 0,
        "explanation": "It is a finite truncation of a Taylor series."
      }
    ]
  },
  {
    "id": 90,
    "title": "Convergence of Series",
    "description": "Master convergence of series with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Convergence of Series</strong>.</p><h3>Explanation</h3><p>Convergence of Series extends calculus into functions, approximations, coordinates, and infinite processes.</p><p>Pay attention to the definition, notation, convergence conditions, and the interval where the method applies.</p><h3>Worked Example</h3><p>For a geometric sequence with first term 2 and ratio 1/2, the terms are 2,1,1/2,... and the infinite sum is 4.</p><h3>Common Mistake</h3><p>Always check the conditions of convergence or the allowed interval before using a formula.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is an arithmetic sequence?",
        "options": [
          "Constant difference",
          "Constant product",
          "Random list",
          "Function only"
        ],
        "answer": 0,
        "explanation": "Arithmetic sequences have a constant common difference."
      },
      {
        "question": "What is a geometric sequence?",
        "options": [
          "Constant ratio",
          "Constant difference",
          "No pattern",
          "Only zeroes"
        ],
        "answer": 0,
        "explanation": "Geometric sequences have a constant common ratio."
      },
      {
        "question": "A Maclaurin series is centered at...",
        "options": [
          "0",
          "1",
          "π",
          "∞"
        ],
        "answer": 0,
        "explanation": "Maclaurin series are Taylor series centered at zero."
      },
      {
        "question": "A convergent series has partial sums that...",
        "options": [
          "Approach a finite limit",
          "Always increase forever",
          "Are always zero",
          "Have no pattern"
        ],
        "answer": 0,
        "explanation": "Convergence means the partial sums approach a finite value."
      },
      {
        "question": "A Taylor polynomial is...",
        "options": [
          "A finite approximation",
          "An infinite sequence only",
          "A probability",
          "A derivative only"
        ],
        "answer": 0,
        "explanation": "It is a finite truncation of a Taylor series."
      }
    ]
  },
  {
    "id": 91,
    "title": "Power Series",
    "description": "Master power series with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Power Series</strong>.</p><h3>Explanation</h3><p>Power Series extends calculus into functions, approximations, coordinates, and infinite processes.</p><p>Pay attention to the definition, notation, convergence conditions, and the interval where the method applies.</p><h3>Worked Example</h3><p>For a geometric sequence with first term 2 and ratio 1/2, the terms are 2,1,1/2,... and the infinite sum is 4.</p><h3>Common Mistake</h3><p>Always check the conditions of convergence or the allowed interval before using a formula.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is an arithmetic sequence?",
        "options": [
          "Constant difference",
          "Constant product",
          "Random list",
          "Function only"
        ],
        "answer": 0,
        "explanation": "Arithmetic sequences have a constant common difference."
      },
      {
        "question": "What is a geometric sequence?",
        "options": [
          "Constant ratio",
          "Constant difference",
          "No pattern",
          "Only zeroes"
        ],
        "answer": 0,
        "explanation": "Geometric sequences have a constant common ratio."
      },
      {
        "question": "A Maclaurin series is centered at...",
        "options": [
          "0",
          "1",
          "π",
          "∞"
        ],
        "answer": 0,
        "explanation": "Maclaurin series are Taylor series centered at zero."
      },
      {
        "question": "A convergent series has partial sums that...",
        "options": [
          "Approach a finite limit",
          "Always increase forever",
          "Are always zero",
          "Have no pattern"
        ],
        "answer": 0,
        "explanation": "Convergence means the partial sums approach a finite value."
      },
      {
        "question": "A Taylor polynomial is...",
        "options": [
          "A finite approximation",
          "An infinite sequence only",
          "A probability",
          "A derivative only"
        ],
        "answer": 0,
        "explanation": "It is a finite truncation of a Taylor series."
      }
    ]
  },
  {
    "id": 92,
    "title": "Taylor Series",
    "description": "Master taylor series with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Taylor Series</strong>.</p><h3>Explanation</h3><p>Taylor Series extends calculus into functions, approximations, coordinates, and infinite processes.</p><p>Pay attention to the definition, notation, convergence conditions, and the interval where the method applies.</p><h3>Worked Example</h3><p>For a geometric sequence with first term 2 and ratio 1/2, the terms are 2,1,1/2,... and the infinite sum is 4.</p><h3>Common Mistake</h3><p>Always check the conditions of convergence or the allowed interval before using a formula.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is an arithmetic sequence?",
        "options": [
          "Constant difference",
          "Constant product",
          "Random list",
          "Function only"
        ],
        "answer": 0,
        "explanation": "Arithmetic sequences have a constant common difference."
      },
      {
        "question": "What is a geometric sequence?",
        "options": [
          "Constant ratio",
          "Constant difference",
          "No pattern",
          "Only zeroes"
        ],
        "answer": 0,
        "explanation": "Geometric sequences have a constant common ratio."
      },
      {
        "question": "A Maclaurin series is centered at...",
        "options": [
          "0",
          "1",
          "π",
          "∞"
        ],
        "answer": 0,
        "explanation": "Maclaurin series are Taylor series centered at zero."
      },
      {
        "question": "A convergent series has partial sums that...",
        "options": [
          "Approach a finite limit",
          "Always increase forever",
          "Are always zero",
          "Have no pattern"
        ],
        "answer": 0,
        "explanation": "Convergence means the partial sums approach a finite value."
      },
      {
        "question": "A Taylor polynomial is...",
        "options": [
          "A finite approximation",
          "An infinite sequence only",
          "A probability",
          "A derivative only"
        ],
        "answer": 0,
        "explanation": "It is a finite truncation of a Taylor series."
      }
    ]
  },
  {
    "id": 93,
    "title": "Maclaurin Series",
    "description": "Master maclaurin series with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Maclaurin Series</strong>.</p><h3>Explanation</h3><p>Maclaurin Series applies calculus ideas to models, approximations, and differential equations.</p><p>Translate the problem into mathematical notation, identify the known quantities, and then apply the appropriate calculus method.</p><h3>Worked Example</h3><p>For dP/dt=kP, the basic solution is P=P₀e^(kt), where k controls growth or decay.</p><h3>Common Mistake</h3><p>Keep track of initial conditions, units, and domain restrictions.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is a differential equation?",
        "options": [
          "An equation involving an unknown function and derivatives",
          "A frequency table",
          "A triangle",
          "A probability rule"
        ],
        "answer": 0,
        "explanation": "Differential equations contain an unknown function and one or more derivatives."
      },
      {
        "question": "A slope field shows...",
        "options": [
          "Slopes at many points",
          "Only intercepts",
          "Only areas",
          "Only roots"
        ],
        "answer": 0,
        "explanation": "Slope fields display local slope information."
      },
      {
        "question": "In dP/dt=kP, k>0 usually represents...",
        "options": [
          "Growth",
          "Decay",
          "No change",
          "A limit"
        ],
        "answer": 0,
        "explanation": "Positive k produces exponential growth in the basic model."
      },
      {
        "question": "A separable equation can be rearranged to...",
        "options": [
          "Separate variables",
          "Remove all derivatives",
          "Find a median",
          "Create a histogram"
        ],
        "answer": 0,
        "explanation": "Variables and differentials are separated before integration."
      },
      {
        "question": "Why use an initial condition?",
        "options": [
          "To select a particular solution",
          "To remove calculus",
          "To find a median",
          "To change the derivative"
        ],
        "answer": 0,
        "explanation": "An initial condition determines the constant in a family of solutions."
      }
    ]
  },
  {
    "id": 94,
    "title": "Taylor Polynomial",
    "description": "Master taylor polynomial with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Taylor Polynomial</strong>.</p><h3>Explanation</h3><p>Taylor Polynomial applies calculus ideas to models, approximations, and differential equations.</p><p>Translate the problem into mathematical notation, identify the known quantities, and then apply the appropriate calculus method.</p><h3>Worked Example</h3><p>For dP/dt=kP, the basic solution is P=P₀e^(kt), where k controls growth or decay.</p><h3>Common Mistake</h3><p>Keep track of initial conditions, units, and domain restrictions.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is a differential equation?",
        "options": [
          "An equation involving an unknown function and derivatives",
          "A frequency table",
          "A triangle",
          "A probability rule"
        ],
        "answer": 0,
        "explanation": "Differential equations contain an unknown function and one or more derivatives."
      },
      {
        "question": "A slope field shows...",
        "options": [
          "Slopes at many points",
          "Only intercepts",
          "Only areas",
          "Only roots"
        ],
        "answer": 0,
        "explanation": "Slope fields display local slope information."
      },
      {
        "question": "In dP/dt=kP, k>0 usually represents...",
        "options": [
          "Growth",
          "Decay",
          "No change",
          "A limit"
        ],
        "answer": 0,
        "explanation": "Positive k produces exponential growth in the basic model."
      },
      {
        "question": "A separable equation can be rearranged to...",
        "options": [
          "Separate variables",
          "Remove all derivatives",
          "Find a median",
          "Create a histogram"
        ],
        "answer": 0,
        "explanation": "Variables and differentials are separated before integration."
      },
      {
        "question": "Why use an initial condition?",
        "options": [
          "To select a particular solution",
          "To remove calculus",
          "To find a median",
          "To change the derivative"
        ],
        "answer": 0,
        "explanation": "An initial condition determines the constant in a family of solutions."
      }
    ]
  },
  {
    "id": 95,
    "title": "Applications of Taylor Series",
    "description": "Master applications of taylor series with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Applications of Taylor Series</strong>.</p><h3>Explanation</h3><p>Applications of Taylor Series applies calculus ideas to models, approximations, and differential equations.</p><p>Translate the problem into mathematical notation, identify the known quantities, and then apply the appropriate calculus method.</p><h3>Worked Example</h3><p>For dP/dt=kP, the basic solution is P=P₀e^(kt), where k controls growth or decay.</p><h3>Common Mistake</h3><p>Keep track of initial conditions, units, and domain restrictions.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is a differential equation?",
        "options": [
          "An equation involving an unknown function and derivatives",
          "A frequency table",
          "A triangle",
          "A probability rule"
        ],
        "answer": 0,
        "explanation": "Differential equations contain an unknown function and one or more derivatives."
      },
      {
        "question": "A slope field shows...",
        "options": [
          "Slopes at many points",
          "Only intercepts",
          "Only areas",
          "Only roots"
        ],
        "answer": 0,
        "explanation": "Slope fields display local slope information."
      },
      {
        "question": "In dP/dt=kP, k>0 usually represents...",
        "options": [
          "Growth",
          "Decay",
          "No change",
          "A limit"
        ],
        "answer": 0,
        "explanation": "Positive k produces exponential growth in the basic model."
      },
      {
        "question": "A separable equation can be rearranged to...",
        "options": [
          "Separate variables",
          "Remove all derivatives",
          "Find a median",
          "Create a histogram"
        ],
        "answer": 0,
        "explanation": "Variables and differentials are separated before integration."
      },
      {
        "question": "Why use an initial condition?",
        "options": [
          "To select a particular solution",
          "To remove calculus",
          "To find a median",
          "To change the derivative"
        ],
        "answer": 0,
        "explanation": "An initial condition determines the constant in a family of solutions."
      }
    ]
  },
  {
    "id": 96,
    "title": "Differential Equations Introduction",
    "description": "Master differential equations introduction with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Differential Equations Introduction</strong>.</p><h3>Explanation</h3><p>Differential Equations Introduction applies calculus ideas to models, approximations, and differential equations.</p><p>Translate the problem into mathematical notation, identify the known quantities, and then apply the appropriate calculus method.</p><h3>Worked Example</h3><p>For dP/dt=kP, the basic solution is P=P₀e^(kt), where k controls growth or decay.</p><h3>Common Mistake</h3><p>Keep track of initial conditions, units, and domain restrictions.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is a differential equation?",
        "options": [
          "An equation involving an unknown function and derivatives",
          "A frequency table",
          "A triangle",
          "A probability rule"
        ],
        "answer": 0,
        "explanation": "Differential equations contain an unknown function and one or more derivatives."
      },
      {
        "question": "A slope field shows...",
        "options": [
          "Slopes at many points",
          "Only intercepts",
          "Only areas",
          "Only roots"
        ],
        "answer": 0,
        "explanation": "Slope fields display local slope information."
      },
      {
        "question": "In dP/dt=kP, k>0 usually represents...",
        "options": [
          "Growth",
          "Decay",
          "No change",
          "A limit"
        ],
        "answer": 0,
        "explanation": "Positive k produces exponential growth in the basic model."
      },
      {
        "question": "A separable equation can be rearranged to...",
        "options": [
          "Separate variables",
          "Remove all derivatives",
          "Find a median",
          "Create a histogram"
        ],
        "answer": 0,
        "explanation": "Variables and differentials are separated before integration."
      },
      {
        "question": "Why use an initial condition?",
        "options": [
          "To select a particular solution",
          "To remove calculus",
          "To find a median",
          "To change the derivative"
        ],
        "answer": 0,
        "explanation": "An initial condition determines the constant in a family of solutions."
      }
    ]
  },
  {
    "id": 97,
    "title": "Slope Fields",
    "description": "Master slope fields with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Slope Fields</strong>.</p><h3>Explanation</h3><p>Slope Fields applies calculus ideas to models, approximations, and differential equations.</p><p>Translate the problem into mathematical notation, identify the known quantities, and then apply the appropriate calculus method.</p><h3>Worked Example</h3><p>For dP/dt=kP, the basic solution is P=P₀e^(kt), where k controls growth or decay.</p><h3>Common Mistake</h3><p>Keep track of initial conditions, units, and domain restrictions.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is a differential equation?",
        "options": [
          "An equation involving an unknown function and derivatives",
          "A frequency table",
          "A triangle",
          "A probability rule"
        ],
        "answer": 0,
        "explanation": "Differential equations contain an unknown function and one or more derivatives."
      },
      {
        "question": "A slope field shows...",
        "options": [
          "Slopes at many points",
          "Only intercepts",
          "Only areas",
          "Only roots"
        ],
        "answer": 0,
        "explanation": "Slope fields display local slope information."
      },
      {
        "question": "In dP/dt=kP, k>0 usually represents...",
        "options": [
          "Growth",
          "Decay",
          "No change",
          "A limit"
        ],
        "answer": 0,
        "explanation": "Positive k produces exponential growth in the basic model."
      },
      {
        "question": "A separable equation can be rearranged to...",
        "options": [
          "Separate variables",
          "Remove all derivatives",
          "Find a median",
          "Create a histogram"
        ],
        "answer": 0,
        "explanation": "Variables and differentials are separated before integration."
      },
      {
        "question": "Why use an initial condition?",
        "options": [
          "To select a particular solution",
          "To remove calculus",
          "To find a median",
          "To change the derivative"
        ],
        "answer": 0,
        "explanation": "An initial condition determines the constant in a family of solutions."
      }
    ]
  },
  {
    "id": 98,
    "title": "Separable Differential Equations",
    "description": "Master separable differential equations with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Separable Differential Equations</strong>.</p><h3>Explanation</h3><p>Separable Differential Equations applies calculus ideas to models, approximations, and differential equations.</p><p>Translate the problem into mathematical notation, identify the known quantities, and then apply the appropriate calculus method.</p><h3>Worked Example</h3><p>For dP/dt=kP, the basic solution is P=P₀e^(kt), where k controls growth or decay.</p><h3>Common Mistake</h3><p>Keep track of initial conditions, units, and domain restrictions.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is a differential equation?",
        "options": [
          "An equation involving an unknown function and derivatives",
          "A frequency table",
          "A triangle",
          "A probability rule"
        ],
        "answer": 0,
        "explanation": "Differential equations contain an unknown function and one or more derivatives."
      },
      {
        "question": "A slope field shows...",
        "options": [
          "Slopes at many points",
          "Only intercepts",
          "Only areas",
          "Only roots"
        ],
        "answer": 0,
        "explanation": "Slope fields display local slope information."
      },
      {
        "question": "In dP/dt=kP, k>0 usually represents...",
        "options": [
          "Growth",
          "Decay",
          "No change",
          "A limit"
        ],
        "answer": 0,
        "explanation": "Positive k produces exponential growth in the basic model."
      },
      {
        "question": "A separable equation can be rearranged to...",
        "options": [
          "Separate variables",
          "Remove all derivatives",
          "Find a median",
          "Create a histogram"
        ],
        "answer": 0,
        "explanation": "Variables and differentials are separated before integration."
      },
      {
        "question": "Why use an initial condition?",
        "options": [
          "To select a particular solution",
          "To remove calculus",
          "To find a median",
          "To change the derivative"
        ],
        "answer": 0,
        "explanation": "An initial condition determines the constant in a family of solutions."
      }
    ]
  },
  {
    "id": 99,
    "title": "Growth and Decay Models",
    "description": "Master growth and decay models with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Growth and Decay Models</strong>.</p><h3>Explanation</h3><p>Growth and Decay Models applies calculus ideas to models, approximations, and differential equations.</p><p>Translate the problem into mathematical notation, identify the known quantities, and then apply the appropriate calculus method.</p><h3>Worked Example</h3><p>For dP/dt=kP, the basic solution is P=P₀e^(kt), where k controls growth or decay.</p><h3>Common Mistake</h3><p>Keep track of initial conditions, units, and domain restrictions.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is a differential equation?",
        "options": [
          "An equation involving an unknown function and derivatives",
          "A frequency table",
          "A triangle",
          "A probability rule"
        ],
        "answer": 0,
        "explanation": "Differential equations contain an unknown function and one or more derivatives."
      },
      {
        "question": "A slope field shows...",
        "options": [
          "Slopes at many points",
          "Only intercepts",
          "Only areas",
          "Only roots"
        ],
        "answer": 0,
        "explanation": "Slope fields display local slope information."
      },
      {
        "question": "In dP/dt=kP, k>0 usually represents...",
        "options": [
          "Growth",
          "Decay",
          "No change",
          "A limit"
        ],
        "answer": 0,
        "explanation": "Positive k produces exponential growth in the basic model."
      },
      {
        "question": "A separable equation can be rearranged to...",
        "options": [
          "Separate variables",
          "Remove all derivatives",
          "Find a median",
          "Create a histogram"
        ],
        "answer": 0,
        "explanation": "Variables and differentials are separated before integration."
      },
      {
        "question": "Why use an initial condition?",
        "options": [
          "To select a particular solution",
          "To remove calculus",
          "To find a median",
          "To change the derivative"
        ],
        "answer": 0,
        "explanation": "An initial condition determines the constant in a family of solutions."
      }
    ]
  },
  {
    "id": 100,
    "title": "Calculus Review",
    "description": "Master calculus review with an explanation, worked example, common mistake, and guided practice.",
    "content": "<div class=\"lesson-section\"><h3>Learning Objective</h3><p>By the end of this lesson, you should be able to explain and apply <strong>Calculus Review</strong>.</p><h3>Explanation</h3><p>Calculus Review applies calculus ideas to models, approximations, and differential equations.</p><p>Translate the problem into mathematical notation, identify the known quantities, and then apply the appropriate calculus method.</p><h3>Worked Example</h3><p>For dP/dt=kP, the basic solution is P=P₀e^(kt), where k controls growth or decay.</p><h3>Common Mistake</h3><p>Keep track of initial conditions, units, and domain restrictions.</p><h3>Key Formula / Idea</h3><p>Identify the definition or formula that matches the problem before calculating. Then check the result using the original conditions.</p>",
    "practice": [
      {
        "question": "What is a differential equation?",
        "options": [
          "An equation involving an unknown function and derivatives",
          "A frequency table",
          "A triangle",
          "A probability rule"
        ],
        "answer": 0,
        "explanation": "Differential equations contain an unknown function and one or more derivatives."
      },
      {
        "question": "A slope field shows...",
        "options": [
          "Slopes at many points",
          "Only intercepts",
          "Only areas",
          "Only roots"
        ],
        "answer": 0,
        "explanation": "Slope fields display local slope information."
      },
      {
        "question": "In dP/dt=kP, k>0 usually represents...",
        "options": [
          "Growth",
          "Decay",
          "No change",
          "A limit"
        ],
        "answer": 0,
        "explanation": "Positive k produces exponential growth in the basic model."
      },
      {
        "question": "A separable equation can be rearranged to...",
        "options": [
          "Separate variables",
          "Remove all derivatives",
          "Find a median",
          "Create a histogram"
        ],
        "answer": 0,
        "explanation": "Variables and differentials are separated before integration."
      },
      {
        "question": "Why use an initial condition?",
        "options": [
          "To select a particular solution",
          "To remove calculus",
          "To find a median",
          "To change the derivative"
        ],
        "answer": 0,
        "explanation": "An initial condition determines the constant in a family of solutions."
      }
    ]
  }
];
