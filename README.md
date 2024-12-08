# @42dotmk/aoc-visualizer

This project is an Advent of Code (AoC) 2024 leaderboard visualizer deployed using [Cloudflare Workers](https://workers.cloudflare.com). It fetches the leaderboard data, processes it, and displays rankings and star progress for participants in real time. The leaderboard is updated every 15 minutes and is accessible via `aoc.42.mk`.

You can find the 2024 edition at https://aoc.42.mk.

Developed by [42.mk](https://42.mk), a hackerspace in Skopje, Macedonia.

## Context
For the 2024 AdventOfCode, 42.mk is organizing a charity event where participants can buy a ticket and participate in a prize pool/fund raiser type of event. The leaderboard is used to track the progress of the participants and display the rankings in real time.

You can deploy your own instance of the leaderboard visualizer by following the instructions below and customizing the appropriate variables.

If you need help setting up your own instance, feel free to reach out to us at the [42.mk](https://42.mk) Discord Server.

## Prerequisites

- **Node.js** (>= 20.x)
- **Wrangler CLI** (for deploying to Cloudflare Workers)
- **Cloudflare Workers account** (for deployment)
- **Advent of Code (AoC) leaderboard API access**:
  - `AOC_COOKIE`: Your AoC session cookie.
  - `LEADERBOARD_ID`: The ID for your specific leaderboard.

## Setup and Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/42dotmk/aoc-visualizer.git
cd aoc-visualizer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

You will need to create a `.env` file at the root of the project directory to configure the necessary environment variables:

```env
LEADERBOARD_ID=<your-leaderboard-id>
AOC_COOKIE=<your-aoc-cookie>
```

### 4. Run the development server

Use the following command to start a local development environment using the Wrangler CLI:

```bash
npm run dev
```

This will start the application, and you can view it at `http://localhost:8787`.

### 5. Build the project

To build the TailwindCSS styles for the project:

```bash
npm run build
```

### 6. Deploy the project to Cloudflare Workers

To deploy your application to Cloudflare Workers, run the following command:

```bash
npm run deploy
```

This will deploy your application with minification enabled.

---

## Configuring Cloudflare Workers with Wrangler CLI

Before deploying, you'll need to set up your Cloudflare Workers environment. Below are instructions to create the necessary KV store, variables, and secrets using the `wrangler` CLI.

### 1. Install Wrangler CLI

Ensure that you have the Wrangler CLI installed. If you don't have it installed, you can install it globally using npm:

```bash
npm install -g wrangler
```

### 2. Login to Cloudflare

Run the following command to log in to your Cloudflare account:

```bash
wrangler login
```

This will open your browser for authentication, allowing Wrangler to access your Cloudflare account.

### 3. Create a Cloudflare KV Namespace

You need to create a KV store to store the leaderboard data. Run the following command to create the namespace and bind it to your project:

```bash
npx wrangler kv namespace create AoC2024Leaderboard 
```

This will output a binding ID that you will need for the `wrangler.toml` configuration file. It should look something like:

```bash
Successfully created KV Namespace "AoC2024Leaderboard" with ID <namespace_id>
```

You should now add the generated namespace ID into the `wrangler.toml` file:

```toml
[[kv_namespaces]]
binding = "AoC2024Leaderboard"
id = "<namespace_id>"
preview_id = "<preview_id>"
```

### 4. Set Cloudflare Workers Environment Variables

Next, you need to set the  secret `AOC_COOKIE` using the Wrangler CLI.

```bash
wrangler secret put AOC_COOKIE
```

This will prompt you to enter the value for `AOC_COOKIE`. You need to extract the value from the headers given to you when you view your private API.

Once you've set up the secrets, they will be automatically injected into your Workers environment when you deploy.

### 5. Configure Your `wrangler.toml`

The `wrangler.toml` file should be configured with the correct project name, main entry point, and routes, like so:

```toml
name = "aoc-2024"
main = "src/index.tsx"
compatibility_date = "2024-12-05"
assets = { directory = "public" }

routes = [
  { pattern = "<your-custom-domain>.tld, custom_domain = true },
]

[vars]
LEADERBOARD_ID = "126659" # Replace this with your own private leaderboard ID from the AoC site

[[kv_namespaces]]
binding = "AoC2024Leaderboard"
id = "<your-namespace-id>"
preview_id = "<your-preview-namespace-id>"

[build]
command = "npm run build"
cwd = "public"
watch_dir = "./src"

[observability]
enabled = true
head_sampling_rate = 1
```

This config will use the KV namespace for the leaderboard and inject the necessary secrets at runtime.

---

## Deployment

Once your Cloudflare Workers environment is set up and you've configured the necessary environment variables, deploy the project using the following command:

```bash
npm run deploy
```

Your application will be deployed to Cloudflare Workers and should be accessible via the specified custom domain (ex: `aoc.42.mk`).

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Fun Fact

There are as many snowflakes as members on the leaderboard. You really are your own special snowflake. ❄️
