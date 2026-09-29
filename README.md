# CyberShield SME

**Cybersecurity Risk Assessment Framework for Small Businesses**

Developed by **Sanskruti Kawade**

CyberShield SME is a front-end prototype for evaluating cybersecurity risk in small and medium enterprises (SMEs). It is designed as an academic/course project and is ready to deploy on GitHub Pages.

## Features

- Black cybersecurity-themed responsive interface
- NIST Cybersecurity Framework-inspired five-function model
- Interactive risk assessment for six common SME risk areas
- Normalized risk score from 0–100
- Risk level classification: Low, Moderate, High, Critical
- Prioritized recommendations
- Threat library
- Mitigation strategy library
- Three illustrative SME case studies
- Security best-practice checklist with progress tracking
- No backend or database required

## Risk model

Each risk factor is rated from 1 to 5.

**Normalized score:**

`((sum of ratings - number of factors) / (number of factors × 4)) × 100`

Risk bands used in this prototype:

- 0–29: Low
- 30–49: Moderate
- 50–69: High
- 70–100: Critical

This is an educational prototype, not a certified security assessment.

## Run locally

Open `index.html` in a browser, or use a local static server.

## Deploy on GitHub Pages

1. Create a GitHub repository, for example `cybershield-sme`.
2. Upload all files and folders from this repository.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save and wait for GitHub Pages to publish.
7. Your project will be available at:
   `https://YOUR-USERNAME.github.io/cybershield-sme/`

## Project structure

```text
CyberShield-SME/
├── index.html
├── README.md
└── assets/
    ├── style.css
    └── app.js
```

## Suggested academic documentation

The prototype covers:
1. Research of common SME cybersecurity risks
2. NIST-inspired risk assessment model
3. Severity/impact-oriented risk scoring
4. Mitigation strategies
5. Illustrative validation case studies
6. Findings and SME best practices

## Disclaimer

The case studies and scores are illustrative. Real organizations should conduct a fuller assessment using their asset inventory, threat environment, business impact, regulatory requirements, and qualified security professionals where appropriate.
