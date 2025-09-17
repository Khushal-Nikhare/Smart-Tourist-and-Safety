# Smart Tourist and Safety - Monorepo Skeleton

This repository is a skeleton implementing the structure described in `solu.txt` for a Smart Tourist Safety system. It includes placeholders for:

- Backend API (FastAPI)
- Database (PostgreSQL via Docker Compose)
- AI Model service stub (prediction endpoint)
- Geo-fencing utilities
- Alerting service stub (Firebase/FCM placeholder)
- Blockchain contract skeleton (Tourist Digital ID)
- Mobile app scaffold notes (React Native/Expo)

## Getting Started

1) Requirements
- Docker Desktop (for PostgreSQL)
- Python 3.11+
- Node.js 18+ (later for mobile app)

2) Environment
- Copy `.env.example` to `.env` and adjust values as needed.

3) Start database
```bash
docker-compose up -d
```

4) Backend (FastAPI)
```bash
cd backend
python -m venv .venv
. .venv/Scripts/activate  # Windows PowerShell: . .venv/Scripts/Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend will run on `http://127.0.0.1:8000`.

5) Mobile (placeholder)
- See `mobile/README.md` for Expo scaffold instructions.

## Repository Structure

```
.
├─ backend/                # FastAPI app, AI/Geo/Alerts stubs
├─ blockchain/             # Solidity contract skeletons
├─ mobile/                 # React Native (Expo) scaffold notes
├─ docker-compose.yml      # Postgres for local dev
├─ .env.example            # Sample environment variables
└─ solu.txt                # Problem statement and technology plan
```

## Notes
- This is a starter skeleton. Fill in real implementations incrementally (AI model training, FCM credentials, real geofencing rules, etc.).

# Smart-Tourist-and-Safety