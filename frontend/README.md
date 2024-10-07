# Frontend

## Build

```sh
npm install
npm run lint
npm run build
```

## Configure environment variables

Copy `.env.sample` to `.env`, and add your environment variables:

- `NEXT_PUBLIC_MAPBOX_TOKEN`: Copy from https://account.mapbox.com/
- `API_KEY_GIGA`: Copy from https://maps.giga.global/docs/api-keys

## Run

```sh
npm run dev
```

Then open `/schools/<schoolId>`, e.g. http://localhost:3000/schools/97e17352-9c33-3b36-afcb-c85ca0970688
