🧠 AarogyAI – Agentic AI for Predictive Hospital Management
    Anticipate. Act. Avert.

AarogyAI is an Agentic AI system built to help hospitals across India proactively manage patient surges during festivals, pollution spikes, and epidemics. It combines real-time data analysis, predictive modeling, and autonomous agent collaboration to deliver actionable insights for healthcare preparedness.

🚀 Overview

During major events like Diwali, Holi, or pollution-heavy winters, hospitals experience unpredictable surges in patients. AarogyAI’s multi-agent architecture anticipates these situations, optimizes staffing and supplies, and issues public and staff advisories — reducing chaos before it starts.

Built for MumbaiHacks 2025 – Healthtech Track, AarogyAI exemplifies the next generation of agentic AI in healthcare.

🏗️ Tech Stack

Backend: FastAPI · Python 3.11 · SQLAlchemy (async) · PostgreSQL · Redis
AI/Agents: LangChain / AutoGen · OpenAI API / Ollama / DeepSeek · Prophet · XGBoost · OR-Tools
Frontend: React · TailwindCSS · Vite
Other: Docker · JWT Auth · Pytest · Jest · REST APIs

🤖 Core Agents

SentinelAgent – Gathers real-time event, pollution, and patient data; predicts surges using ML models.

CoordinatorAgent – Uses optimization algorithms (OR-Tools) to recommend staffing and supply distribution.

CareCompanionAgent – Engages with patients/staff via chat and SMS (Twilio or Telegram).

SupervisorAgent – Oversees coordination, memory, reasoning, and inter-agent communication.


🧩 Features

Predicts patient load during high-risk events

Optimizes resource allocation and shift scheduling

Generates public advisories and alerts

Interactive hospital dashboard for admins and staff

Secure JWT-based authentication and RBAC

Modular async architecture optimized for scalability


🧠 How It Works

SentinelAgent pulls data from AQI APIs, festival/event calendars, and hospital DBs.

Predictive models forecast surge probabilities.

CoordinatorAgent runs optimization algorithms for staffing and resources.

CareCompanionAgent issues alerts and advice via chat or SMS.

SupervisorAgent coordinates the flow, ensuring the system stays autonomous yet accountable.


💡 Future Enhancements

Multi-hospital collaboration graph using agent swarms

Integration with government health APIs (ICMR, NDHM)

Self-healing agent reasoning loops for anomaly correction

LLM fine-tuning for healthcare advisory dialogues


🏆 About

Developed by Team Crackers_ for MumbaiHacks 2025 – HealthTech Track.
AarogyAI embodies the future of autonomous healthcare systems — where hospitals think, plan, and act before crises unfold.