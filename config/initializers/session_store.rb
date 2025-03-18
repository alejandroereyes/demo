Rails.application.config.session_store :redis_store,
                                       url: ENV.fetch("REDIS_URL", "redis://127.0.0.1:6379/0/session"),
                                       expire_after: 90.minutes,
                                       key: "_#{Rails.application.name.downcase}_session_#{Rails.env}",
                                       domain: ENV.fetch("DOMAIN_NAME", "localhost")
