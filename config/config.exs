# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

# Configures the endpoint
config :hw05, Hw05Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "j0oKdP7W4CZtn4NJ8prRog6437RaJSYM7MICBGr0CvE5qf+qPOx6cYdS56aMwFQr",
  render_errors: [view: Hw05Web.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Hw05.PubSub,
  live_view: [signing_salt: "YJ2fkcCu"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
