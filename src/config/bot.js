import { logger } from '../utils/logger.js';

export const botConfig = {

  // =========================
  // BOT PRESENCE
  // =========================
  presence: {
    status: "online",
    activities: [
      {
        name: "🎬 The Edit Lab | Create Ticket for Orders",
        type: 0,
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    owners: process.env.OWNER_IDS?.split(",") || [],
    defaultCooldown: 3,
    deleteCommands: false,
    testGuildId: process.env.TEST_GUILD_ID,
  },

  // =========================
  // APPLICATIONS (CLIENT FORM)
  // =========================
  applications: {
    defaultQuestions: [
      { question: "👤 Client Name?", required: true },
      { question: "🎬 Type of Edit?", required: true },
      { question: "📁 Send Files / Details", required: true },
      { question: "⏰ Deadline?", required: true },
      { question: "📱 WhatsApp Number?", required: true },
    ],
    statusColors: {
      pending: "#ffaa00",
      approved: "#00ff99",
      denied: "#ff3c3c",
    },
    applicationCooldown: 24,
    deleteDeniedAfter: 7,
    deleteApprovedAfter: 30,
    managerRoles: [],
  },

  // =========================
  // EMBEDS (EDITING THEME)
  // =========================
  embeds: {
    colors: {
      primary: "#ff3c3c",
      secondary: "#1e1e1e",

      success: "#00ff99",
      error: "#ff0000",
      warning: "#ffcc00",
      info: "#00bfff",

      light: "#ffffff",
      dark: "#0f0f0f",
      gray: "#888888",

      ticket: {
        open: "#00ff99",
        claimed: "#ffaa00",
        closed: "#ff3c3c",
        pending: "#888888",
      },

      priority: {
        none: "#95A5A6",
        low: "#00ff99",
        medium: "#ffaa00",
        high: "#ff3c3c",
        urgent: "#ff0000",
      },
    },
    footer: {
      text: "🎬 The Edit Lab",
      icon: null,
    },
    thumbnail: null,
    author: {
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY (DISABLED STYLE)
  // =========================
  economy: {
    startingBalance: 0,
  },

  // =========================
  // TICKETS (ORDER SYSTEM)
  // =========================
  tickets: {
    defaultCategory: null,
    supportRoles: [],

    priorities: {
      low: {
        emoji: "🟢",
        color: "#00ff99",
        label: "Normal Edit",
      },
      medium: {
        emoji: "🟡",
        color: "#ffaa00",
        label: "Fast Delivery",
      },
      high: {
        emoji: "🔴",
        color: "#ff3c3c",
        label: "Urgent Order",
      },
    },

    defaultPriority: "low",
    archiveCategory: null,
    logChannel: null,
  },

  // =========================
  // GIVEAWAYS (DISABLED)
  // =========================
  giveaways: {
    defaultDuration: 86400000,
    minimumWinners: 1,
    maximumWinners: 10,
    minimumDuration: 300000,
    maximumDuration: 2592000000,
    allowedRoles: [],
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAY (DISABLED)
  // =========================
  birthday: {
    defaultRole: null,
    announcementChannel: null,
    timezone: "UTC",
  },

  // =========================
  // VERIFICATION
  // =========================
  verification: {
    defaultMessage: "Click below to verify and access The Edit Lab!",
    defaultButtonText: "Verify",
    autoVerify: {
      defaultCriteria: "none",
      defaultAccountAgeDays: 7,
      serverSizeThreshold: 1000,
      minAccountAge: 1,
      maxAccountAge: 365,
      sendDMNotification: true,
      criteria: {
        account_age: "Account must be older",
        server_size: "Small server auto verify",
        none: "All users immediately"
      }
    },
    verificationCooldown: 5000,
    maxVerificationAttempts: 3,
    attemptWindow: 60000,
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    cooldownCleanupInterval: 300000,
    maxAuditMetadataBytes: 4096,
    maxInMemoryAuditEntries: 1000,
    logAllVerifications: true,
    keepAuditTrail: true,
  },

  // =========================
  // WELCOME / GOODBYE
  // =========================
  welcome: {
    defaultWelcomeMessage:
      "🎬 Welcome {user} to **The Edit Lab**!\n\n✨ Services:\n• Video Editing\n• Thumbnails\n• Posters\n\n📌 Check:\n#rules-and-tos\n#video-editing-info\n#how-to-order\n\n📩 Go to #order-here to place your order!",
    
    defaultGoodbyeMessage:
      "👋 {user} left The Edit Lab. Members: {memberCount}",

    defaultWelcomeChannel: null,
    defaultGoodbyeChannel: null,
  },

  // =========================
  // COUNTERS
  // =========================
  counters: {
    defaults: {
      name: "{name} Counter",
      description: "Server {name} counter",
      type: "voice",
      channelName: "{name}-{count}",
    },
    permissions: {
      deny: ["VIEW_CHANNEL"],
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      created: "✅ Counter created: **{name}**",
      deleted: "🗑️ Counter deleted: **{name}**",
      updated: "🔄 Counter updated: **{name}**",
    },
    types: {
      members: {
        name: "👥 Members",
        description: "Total members",
        getCount: (guild) => guild.memberCount.toString(),
      },
    },
  },

  // =========================
  // BOT MESSAGES
  // =========================
  messages: {
    noPermission: "❌ You don’t have permission.",
    cooldownActive: "⏳ Wait {time} seconds.",
    errorOccurred: "⚠️ Something went wrong.",
    missingPermissions: "❌ Bot missing permissions.",
    commandDisabled: "🚫 Command disabled.",
    maintenanceMode: "🛠️ The Edit Lab bot under maintenance.",
  },

  // =========================
  // FEATURES (OPTIMIZED)
  // =========================
  features: {
    economy: false,
    leveling: false,
    moderation: true,
    logging: true,
    welcome: true,

    tickets: true,
    giveaways: false,
    birthday: false,
    counter: false,

    verification: false,
    reactionRoles: false,
    joinToCreate: false,

    voice: false,
    search: false,
    tools: true,
    utility: true,
    community: true,
    fun: false,
  },
};


export function validateConfig(config) {
  const errors = [];

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Bot token missing");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("Client ID missing");
  }

  return errors;
}

const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Bot config errors:", configErrors.join("\n"));
}

export const BotConfig = botConfig;

export function getColor(path, fallback = "#99AAB5") {
  if (typeof path === "string" && path.startsWith("#")) {
    return parseInt(path.replace("#", ""), 16);
  }
  return fallback;
}

export default botConfig;
