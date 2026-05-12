const deepNested = {
  level1: {
    name: "root",
    tags: ["alpha", "beta", "gamma"],
    level2: {
      id: 101,
      scores: [88, 92, 75],
      metadata: {
        active: true,
        roles: ["admin", "editor"],
        level3: {
          region: "APAC",
          coordinates: [{ lat: -37.8136, lng: 144.9631 }],
          config: {
            retries: 3,
            flags: ["verbose", "debug"],
            level4: {
              pipeline: "prod",
              steps: [
                { order: 1, name: "ingest" },
                { order: 2, name: "transform" },
                { order: 3, name: "load" },
              ],
              settings: {
                timeout: 5000,
                allowedOrigins: [
                  "https://example.com",
                  "https://api.example.com",
                ],
                level5: {
                  checksum: "a3f1c9b2",
                  features: ["compression", "encryption", "caching"],
                  limits: {
                    maxRetries: 5,
                    maxPayloadKb: 512,
                  },
                  auditLog: [
                    { event: "init", timestamp: "2026-04-29T00:00:00Z" },
                    { event: "sync", timestamp: "2026-04-29T01:00:00Z" },
                    { event: "flush", timestamp: "2026-04-29T02:00:00Z" },
                  ],
                },
              },
            },
          },
        },
      },
    },
  },
};

export default deepNested;
