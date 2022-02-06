# pcpartfinder

Scrapes information on PC components and peripherals in India and displays them to the user.

- **Framework**- [Next.js](https://nextjs.org/)
- **Styling** - [Emotion](https://emotion.sh/)


## Working on the code yourself

### Setup
```bash
$ git clone https://github.com/1Gokul/pcpartfinder.git
$ cd pcpartfinder
$ yarn install
$ yarn run dev
 ```

### Set up environment variables

- Clone, setup and start the server from [pcpartfinder-backend](https://github.com/1Gokul/pcpartfinder-backend)
- `Set NEXT_PUBLIC_BASE_URL` to the url the server is running at (will most probably be `http://localhost:8000/api/search`)
- NEXT_PUBLIC_SITE_URL to the url of your site in case you choose to deploy it.(For the [SEO component](https://github.com/1Gokul/pcpartfinder/blob/main/src/components/Layout.tsx#L64))