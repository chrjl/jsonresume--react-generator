# Run the dev server

Run the dev server and access at `http://localhost:5173`.

```console
$ npm run dev [--host]
```

## As a Docker Compose service

The Compose file sets up a service that runs on an externally managed network, to facilitate connection to an externally managed Traefik reverse proxy. If it is desired to run on a default bridge, remove the connection to the `external` network in the service container's `networks` (as well as the definition of the network).

### Option to run behind an existing Traefik reverse proxy

> **Note:**
> Requires externally managed Traefik instance and Docker network. Traefik should be running a Docker provider listening over a specified application backend network.

In order for the Vite dev server to be recognized and registered as a Traefik service:

- The service container should attach to Traefik's backend network (via `DOCKER_NETWORK` environment variable).
- The service container should enable the Traefik service and specify that (default) port 5173 be exposed to Traefik, both via label.
- Traefik should have a web entrypoint listening on `localhost`.
- The `config.host` option needs added to the entrypoint command (`npm run dev -- --host`) to allow access to the Vite server over the proxy.

### Define env variables for compose file

- `DOCKER_PROJECT_NAME`
- `DOCKER_NETWORK`
  : Name of application/proxy backend network (for example: `traefik_internal`).
- `DOCKER_WORKDIR`
  : (for example: `/home/node/app`)

### Start the dev server service

```console
$ docker compose --env-file .env.docker up -d
```

### Access the app

If running on a bridge network, port 5173 is published.

- Find the published port:

  ```console
  $ docker port $(docker ps -lq)
  ```
  
- Access the app at `http://localhost:<port>`

If running behind Traefik (running on port 8000, for example): access the app at `http://${DOCKER_PROJECT_NAME}.localhost:8000`
