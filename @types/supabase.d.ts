/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/pgmigrations": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.pgmigrations.id"];
          name?: parameters["rowFilter.pgmigrations.name"];
          run_on?: parameters["rowFilter.pgmigrations.run_on"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["pgmigrations"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** pgmigrations */
          pgmigrations?: definitions["pgmigrations"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.pgmigrations.id"];
          name?: parameters["rowFilter.pgmigrations.name"];
          run_on?: parameters["rowFilter.pgmigrations.run_on"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.pgmigrations.id"];
          name?: parameters["rowFilter.pgmigrations.name"];
          run_on?: parameters["rowFilter.pgmigrations.run_on"];
        };
        body: {
          /** pgmigrations */
          pgmigrations?: definitions["pgmigrations"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/squeak_config": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.squeak_config.id"];
          preflightComplete?: parameters["rowFilter.squeak_config.preflightComplete"];
          slackApiKey?: parameters["rowFilter.squeak_config.slackApiKey"];
          slackQuestionChannel?: parameters["rowFilter.squeak_config.slackQuestionChannel"];
          slackSigningSecret?: parameters["rowFilter.squeak_config.slackSigningSecret"];
          mailgunApiKey?: parameters["rowFilter.squeak_config.mailgunApiKey"];
          mailgunDomain?: parameters["rowFilter.squeak_config.mailgunDomain"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["squeak_config"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** squeak_config */
          squeak_config?: definitions["squeak_config"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.squeak_config.id"];
          preflightComplete?: parameters["rowFilter.squeak_config.preflightComplete"];
          slackApiKey?: parameters["rowFilter.squeak_config.slackApiKey"];
          slackQuestionChannel?: parameters["rowFilter.squeak_config.slackQuestionChannel"];
          slackSigningSecret?: parameters["rowFilter.squeak_config.slackSigningSecret"];
          mailgunApiKey?: parameters["rowFilter.squeak_config.mailgunApiKey"];
          mailgunDomain?: parameters["rowFilter.squeak_config.mailgunDomain"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.squeak_config.id"];
          preflightComplete?: parameters["rowFilter.squeak_config.preflightComplete"];
          slackApiKey?: parameters["rowFilter.squeak_config.slackApiKey"];
          slackQuestionChannel?: parameters["rowFilter.squeak_config.slackQuestionChannel"];
          slackSigningSecret?: parameters["rowFilter.squeak_config.slackSigningSecret"];
          mailgunApiKey?: parameters["rowFilter.squeak_config.mailgunApiKey"];
          mailgunDomain?: parameters["rowFilter.squeak_config.mailgunDomain"];
        };
        body: {
          /** squeak_config */
          squeak_config?: definitions["squeak_config"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/squeak_messages": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.squeak_messages.id"];
          created_at?: parameters["rowFilter.squeak_messages.created_at"];
          subject?: parameters["rowFilter.squeak_messages.subject"];
          slug?: parameters["rowFilter.squeak_messages.slug"];
          published?: parameters["rowFilter.squeak_messages.published"];
          slack_timestamp?: parameters["rowFilter.squeak_messages.slack_timestamp"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["squeak_messages"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** squeak_messages */
          squeak_messages?: definitions["squeak_messages"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.squeak_messages.id"];
          created_at?: parameters["rowFilter.squeak_messages.created_at"];
          subject?: parameters["rowFilter.squeak_messages.subject"];
          slug?: parameters["rowFilter.squeak_messages.slug"];
          published?: parameters["rowFilter.squeak_messages.published"];
          slack_timestamp?: parameters["rowFilter.squeak_messages.slack_timestamp"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.squeak_messages.id"];
          created_at?: parameters["rowFilter.squeak_messages.created_at"];
          subject?: parameters["rowFilter.squeak_messages.subject"];
          slug?: parameters["rowFilter.squeak_messages.slug"];
          published?: parameters["rowFilter.squeak_messages.published"];
          slack_timestamp?: parameters["rowFilter.squeak_messages.slack_timestamp"];
        };
        body: {
          /** squeak_messages */
          squeak_messages?: definitions["squeak_messages"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/squeak_profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.squeak_profiles.id"];
          first_name?: parameters["rowFilter.squeak_profiles.first_name"];
          last_name?: parameters["rowFilter.squeak_profiles.last_name"];
          avatar?: parameters["rowFilter.squeak_profiles.avatar"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["squeak_profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** squeak_profiles */
          squeak_profiles?: definitions["squeak_profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.squeak_profiles.id"];
          first_name?: parameters["rowFilter.squeak_profiles.first_name"];
          last_name?: parameters["rowFilter.squeak_profiles.last_name"];
          avatar?: parameters["rowFilter.squeak_profiles.avatar"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.squeak_profiles.id"];
          first_name?: parameters["rowFilter.squeak_profiles.first_name"];
          last_name?: parameters["rowFilter.squeak_profiles.last_name"];
          avatar?: parameters["rowFilter.squeak_profiles.avatar"];
        };
        body: {
          /** squeak_profiles */
          squeak_profiles?: definitions["squeak_profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/squeak_replies": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.squeak_replies.id"];
          created_at?: parameters["rowFilter.squeak_replies.created_at"];
          body?: parameters["rowFilter.squeak_replies.body"];
          message_id?: parameters["rowFilter.squeak_replies.message_id"];
          profile_id?: parameters["rowFilter.squeak_replies.profile_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["squeak_replies"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** squeak_replies */
          squeak_replies?: definitions["squeak_replies"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.squeak_replies.id"];
          created_at?: parameters["rowFilter.squeak_replies.created_at"];
          body?: parameters["rowFilter.squeak_replies.body"];
          message_id?: parameters["rowFilter.squeak_replies.message_id"];
          profile_id?: parameters["rowFilter.squeak_replies.profile_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.squeak_replies.id"];
          created_at?: parameters["rowFilter.squeak_replies.created_at"];
          body?: parameters["rowFilter.squeak_replies.body"];
          message_id?: parameters["rowFilter.squeak_replies.message_id"];
          profile_id?: parameters["rowFilter.squeak_replies.profile_id"];
        };
        body: {
          /** squeak_replies */
          squeak_replies?: definitions["squeak_replies"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  pgmigrations: {
    /**
     * Format: integer
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: character varying */
    name: string;
    /** Format: timestamp without time zone */
    run_on: string;
  };
  squeak_config: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: boolean */
    preflightComplete: boolean;
    /** Format: text */
    slackApiKey?: string;
    /** Format: text */
    slackQuestionChannel?: string;
    /** Format: text */
    slackSigningSecret?: string;
    /** Format: text */
    mailgunApiKey?: string;
    /** Format: text */
    mailgunDomain?: string;
  };
  squeak_messages: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    subject?: string;
    /** Format: ARRAY */
    slug?: unknown[];
    /** Format: boolean */
    published: boolean;
    /** Format: text */
    slack_timestamp?: string;
  };
  squeak_profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: text */
    first_name?: string;
    /** Format: text */
    last_name?: string;
    /** Format: text */
    avatar?: string;
  };
  squeak_replies: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    body?: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `squeak_messages.id`.<fk table='squeak_messages' column='id'/>
     */
    message_id?: number;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `squeak_profiles.id`.<fk table='squeak_profiles' column='id'/>
     */
    profile_id?: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description pgmigrations */
  "body.pgmigrations": definitions["pgmigrations"];
  /** Format: integer */
  "rowFilter.pgmigrations.id": string;
  /** Format: character varying */
  "rowFilter.pgmigrations.name": string;
  /** Format: timestamp without time zone */
  "rowFilter.pgmigrations.run_on": string;
  /** @description squeak_config */
  "body.squeak_config": definitions["squeak_config"];
  /** Format: bigint */
  "rowFilter.squeak_config.id": string;
  /** Format: boolean */
  "rowFilter.squeak_config.preflightComplete": string;
  /** Format: text */
  "rowFilter.squeak_config.slackApiKey": string;
  /** Format: text */
  "rowFilter.squeak_config.slackQuestionChannel": string;
  /** Format: text */
  "rowFilter.squeak_config.slackSigningSecret": string;
  /** Format: text */
  "rowFilter.squeak_config.mailgunApiKey": string;
  /** Format: text */
  "rowFilter.squeak_config.mailgunDomain": string;
  /** @description squeak_messages */
  "body.squeak_messages": definitions["squeak_messages"];
  /** Format: bigint */
  "rowFilter.squeak_messages.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.squeak_messages.created_at": string;
  /** Format: text */
  "rowFilter.squeak_messages.subject": string;
  /** Format: ARRAY */
  "rowFilter.squeak_messages.slug": string;
  /** Format: boolean */
  "rowFilter.squeak_messages.published": string;
  /** Format: text */
  "rowFilter.squeak_messages.slack_timestamp": string;
  /** @description squeak_profiles */
  "body.squeak_profiles": definitions["squeak_profiles"];
  /** Format: uuid */
  "rowFilter.squeak_profiles.id": string;
  /** Format: text */
  "rowFilter.squeak_profiles.first_name": string;
  /** Format: text */
  "rowFilter.squeak_profiles.last_name": string;
  /** Format: text */
  "rowFilter.squeak_profiles.avatar": string;
  /** @description squeak_replies */
  "body.squeak_replies": definitions["squeak_replies"];
  /** Format: bigint */
  "rowFilter.squeak_replies.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.squeak_replies.created_at": string;
  /** Format: text */
  "rowFilter.squeak_replies.body": string;
  /** Format: bigint */
  "rowFilter.squeak_replies.message_id": string;
  /** Format: uuid */
  "rowFilter.squeak_replies.profile_id": string;
}

export interface operations {}

export interface external {}
